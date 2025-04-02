import json
from models import db, NFT, app

with open("nfts.json", "r") as file:
    nft_data = json.load(file)  # Load NFT data from JSON

with app.app_context():
    for nft in nft_data:
        new_nft = NFT(
            name=nft["name"],
            description=nft["description"],
            image_url=nft["image_url"],
            category=nft["category"],
            price=nft["price"]
        )
        db.session.add(new_nft)

    db.session.commit()
    print("✅ New NFTs added successfully!")
