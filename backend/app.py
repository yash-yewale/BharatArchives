from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# 🔹 Configure Multiple Databases
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Default DB
app.config['SQLALCHEMY_BINDS'] = {  
    'nfts_db': 'sqlite:///nfts.db'  # Bind for NFTs
}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = "supersecretkey"  # ❗ Use a .env file in production

# Initialize Extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# 🔹 User Model (Uses Default DB)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# 🔹 NFT Model (Uses nfts_db)
class NFT(db.Model):
    __bind_key__ = 'nfts_db'  # Bind to the nfts database
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(500), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

# 🛠️ CREATE DATABASE TABLES (Run only once)
with app.app_context():
    db.create_all()  # This will create both users.db & nfts.db

# 🟢 REGISTER API
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"success": False, "message": "Email already registered!"}), 409

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"success": True, "message": "User registered successfully!"}), 201

# 🔵 LOGIN API
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={"id": user.id, "email": user.email})
        return jsonify({"success": True, "token": access_token, "user": {"id": user.id, "email": user.email}})

    return jsonify({"success": False, "message": "Invalid email or password"}), 401

# 🔹 FETCH ALL NFTS API (WITH CATEGORY FILTERING)
@app.route('/api/nfts', methods=['GET'])
def get_nfts():
    category = request.args.get('category')  # Get category from URL query params
    if category:
        nfts = NFT.query.filter_by(category=category).all()  # Filter NFTs by category
    else:
        nfts = NFT.query.all()  # Return all NFTs if no category is specified

    nft_list = [
        {
            "id": nft.id,
            "name": nft.name,
            "description": nft.description,
            "image_url": nft.image_url,
            "category": nft.category,
            "price": nft.price
        }
        for nft in nfts
    ]
    return jsonify(nft_list)

# 🔹 FETCH SINGLE NFT DETAILS API (BY ID) ✅ ADDED
@app.route('/api/nfts/<int:nft_id>', methods=['GET'])
def get_nft_details(nft_id):
    nft = NFT.query.get(nft_id)
    if not nft:
        return jsonify({"error": "NFT not found"}), 404

    return jsonify({
        "id": nft.id,
        "name": nft.name,
        "description": nft.description,
        "image_url": nft.image_url,
        "category": nft.category,
        "price": nft.price
    })

# 🏁 START FLASK SERVER
if __name__ == '__main__':
    app.run(debug=True)
