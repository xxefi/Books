import json
import random
import uuid

genres = ["Fantasy", "Adventure", "Sci-Fi", "Horror", "Action", "Romance", "Mystery", "Thriller"]
authors = ["Nina Williams", "Ethan Black", "Chloe Carter", "Liam O'Connor", "Ella Johnson", "Olivia Green", "James Walker", "Charlotte King", "David Harris", "Isabella White", "Sarah Turner", "Benjamin Scott", "Lucas Mitchell", "Harper Evans", "Amelia Moore", "Ethan Taylor", "Zoe Davis", "Charlotte Lee", "Mia Brown", "Leo Carter", "Ryan Miller", "Sophia Clark", "Jackson King", "Nathan Harris"]
years = list(range(1900, 2024))

books = [];
for i in range(10000):
    book = {
        "id": str(uuid.uuid4()),
        "title": f"Book Title {i + 1}",
        "author": random.choice(authors),
        "year": random.choice(years),
        "genre": random.choice(genres)
    }
    books.append(book)

file_path = "./test.json"
with open(file_path, "w") as file:
    json.dump(books, file, indent=2)

file_path