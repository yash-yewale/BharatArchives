from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nfts.db'  # Single DB for all NFTs
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ✅ NFT Table
class NFT(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(500), nullable=False)
    category = db.Column(db.String(100), nullable=False)  # Kings, Wars, etc.
    price = db.Column(db.Float, nullable=False)

# ✅ Create the Database Tables
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        print("✅ NFT Table Created Successfully!")
