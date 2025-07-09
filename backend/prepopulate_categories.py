# prepopulate_categories.py
from app import app, db
from models import Category

with app.app_context():
    categories = [
        "Groceries",
        "Self Care",
        "Health and Medicine",
        "Education",
        "Rent",
        "Clothing and Accesories",
        "Entertainment",
        "Miscellaneous",
        
    ]

    for category_name in categories:
        existing = Category.query.filter_by(name=category_name).first()
        if not existing:
            db.session.add(Category(name=category_name))

    db.session.commit()
    print("Categories prepopulated successfully.")
