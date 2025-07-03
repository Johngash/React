const products = [

  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "price": 999,
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    "category": "Electronics",
    "inStock": true,
    "rating": 4.8,
    "seller": "Apple Store"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24",
    "price": 899,
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    "category": "Electronics",
    "inStock": true,
    "rating": 4.6,
    "seller": "Samsung Official"
  },
  {
    "id": 3,
    "name": "Google Pixel 8",
    "price": 699,
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    "category": "Electronics",
    "inStock": false,
    "rating": 4.4,
    "seller": "Google Store"
  },
  {
    "id": 4,
    "name": "MacBook Air M3",
    "price": 1199,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    "category": "Computers",
    "inStock": true,
    "rating": 4.9,
    "seller": "Apple Store"
  },
  {
    "id": 5,
    "name": "Dell XPS 13",
    "price": 999,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    "category": "Computers",
    "inStock": true,
    "rating": 4.3,
    "seller": "Dell Direct"
  },
  {
    "id": 6,
    "name": "Sony WH-1000XM5",
    "price": 399,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    "category": "Audio",
    "inStock": true,
    "rating": 4.7,
    "seller": "Sony Electronics"
  },
  {
    "id": 7,
    "name": "AirPods Pro",
    "price": 249,
    "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    "category": "Audio",
    "inStock": true,
    "rating": 4.5,
    "seller": "Apple Store"
  },
  {
    "id": 8,
    "name": "iPad Pro 12.9",
    "price": 1099,
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    "category": "Tablets",
    "inStock": false,
    "rating": 4.8,
    "seller": "Apple Store"
  },
  {
    "id": 9,
    "name": "Nintendo Switch OLED",
    "price": 349,
    "image": "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400",
    "category": "Gaming",
    "inStock": true,
    "rating": 4.6,
    "seller": "Nintendo Store"
  },
  {
    "id": 10,
    "name": "PlayStation 5",
    "price": 499,
    "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    "category": "Gaming",
    "inStock": false,
    "rating": 4.9,
    "seller": "Sony PlayStation"
  },
  {
    "id": 11,
    "name": "Apple Watch Series 9",
    "price": 429,
    "image": "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400",
    "category": "Wearables",
    "inStock": true,
    "rating": 4.4,
    "seller": "Apple Store"
  },
  {
    "id": 12,
    "name": "Canon EOS R6",
    "price": 2499,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    "category": "Cameras",
    "inStock": true,
    "rating": 4.7,
    "seller": "Canon Official"
  },
  {
    "id": 13,
    "name": "Kindle Paperwhite",
    "price": 149,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    "category": "Books",
    "inStock": true,
    "rating": 4.5,
    "seller": "Amazon"
  },
  {
    "id": 14,
    "name": "Tesla Model Y Charger",
    "price": 550,
    "image": "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400",
    "category": "Automotive",
    "inStock": true,
    "rating": 4.8,
    "seller": "Tesla"
  },
  {
    "id": 15,
    "name": "Dyson V15 Vacuum",
    "price": 749,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Home",
    "inStock": false,
    "rating": 4.6,
    "seller": "Dyson Official"
  },
  {
    "id": 16,
    "name": "Fitbit Charge 5",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    "category": "Fitness",
    "inStock": true,
    "rating": 4.2,
    "seller": "Fitbit Store"
  },
  {
    "id": 17,
    "name": "Bose QuietComfort 45",
    "price": 329,
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    "category": "Audio",
    "inStock": true,
    "rating": 4.6,
    "seller": "Bose Official"
  },
  {
    "id": 18,
    "name": "Microsoft Surface Pro 9",
    "price": 1299,
    "image": "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400",
    "category": "Tablets",
    "inStock": false,
    "rating": 4.4,
    "seller": "Microsoft Store"
  },
  {
    "id": 19,
    "name": "LG OLED TV 55 inch",
    "price": 1899,
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    "category": "TV & Home Theater",
    "inStock": true,
    "rating": 4.8,
    "seller": "LG Electronics"
  },
  {
    "id": 20,
    "name": "Razer Gaming Mouse",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    "category": "Gaming",
    "inStock": true,
    "rating": 4.3,
    "seller": "Razer Store"
  },
  {
    "id": 21,
    "name": "Instant Pot Duo 7-in-1",
    "price": 149,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    "category": "Kitchen",
    "inStock": true,
    "rating": 4.7,
    "seller": "Instant Pot"
  },
  {
    "id": 22,
    "name": "Logitech Webcam HD",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
    "category": "Computer Accessories",
    "inStock": true,
    "rating": 4.1,
    "seller": "Logitech"
  },
  {
    "id": 23,
    "name": "Samsung Galaxy Tab S9",
    "price": 899,
    "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
    "category": "Tablets",
    "inStock": false,
    "rating": 4.5,
    "seller": "Samsung Official"
  },
  {
    "id": 24,
    "name": "Roomba i7+ Robot Vacuum",
    "price": 649,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Home",
    "inStock": true,
    "rating": 4.4,
    "seller": "iRobot"
  },
  {
    "id": 25,
    "name": "GoPro Hero 12",
    "price": 399,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    "category": "Cameras",
    "inStock": true,
    "rating": 4.6,
    "seller": "GoPro Store"
  },
  {
    "id": 26,
    "name": "Nikon D850 DSLR",
    "price": 2999,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    "category": "Cameras",
    "inStock": false,
    "rating": 4.9,
    "seller": "Nikon Official"
  },
  {
    "id": 27,
    "name": "JBL Flip 6 Speaker",
    "price": 129,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    "category": "Audio",
    "inStock": true,
    "rating": 4.3,
    "seller": "JBL Store"
  },
  {
    "id": 28,
    "name": "Ring Video Doorbell",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
    "category": "Smart Home",
    "inStock": true,
    "rating": 4.2,
    "seller": "Ring Security"
  },
  {
    "id": 29,
    "name": "Asus ROG Gaming Laptop",
    "price": 1599,
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400",
    "category": "Computers",
    "inStock": true,
    "rating": 4.5,
    "seller": "Asus Store"
  },
  {
    "id": 30,
    "name": "Peloton Bike+",
    "price": 2495,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    "category": "Fitness",
    "inStock": false,
    "rating": 4.8,
    "seller": "Peloton"
  },
  {
    "id": 31,
    "name": "Nike Air Max 270",
    "price": 159,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    "category": "Footwear",
    "inStock": true,
    "rating": 4.4,
    "seller": "Nike Store"
  },
  {
    "id": 32,
    "name": "Adidas Ultraboost 22",
    "price": 189,
    "image": "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    "category": "Footwear",
    "inStock": true,
    "rating": 4.6,
    "seller": "Adidas Official"
  },
  {
    "id": 33,
    "name": "The North Face Jacket",
    "price": 249,
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    "category": "Clothing",
    "inStock": false,
    "rating": 4.7,
    "seller": "The North Face"
  },
  {
    "id": 34,
    "name": "Levi's 501 Original Jeans",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    "category": "Clothing",
    "inStock": true,
    "rating": 4.3,
    "seller": "Levi's Store"
  },
  {
    "id": 35,
    "name": "Ray-Ban Aviator Sunglasses",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    "category": "Accessories",
    "inStock": true,
    "rating": 4.5,
    "seller": "Ray-Ban Official"
  },
  {
    "id": 36,
    "name": "Stanley Tumbler 40oz",
    "price": 45,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Drinkware",
    "inStock": true,
    "rating": 4.8,
    "seller": "Stanley"
  },
  {
    "id": 37,
    "name": "YETI Cooler 45qt",
    "price": 329,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Outdoor",
    "inStock": false,
    "rating": 4.9,
    "seller": "YETI"
  },
  {
    "id": 38,
    "name": "Coleman Camping Tent 4-Person",
    "price": 149,
    "image": "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400",
    "category": "Outdoor",
    "inStock": true,
    "rating": 4.2,
    "seller": "Coleman"
  },
  {
    "id": 39,
    "name": "Vitamix Blender 5200",
    "price": 449,
    "image": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400",
    "category": "Kitchen",
    "inStock": true,
    "rating": 4.7,
    "seller": "Vitamix"
  },
  {
    "id": 40,
    "name": "KitchenAid Stand Mixer",
    "price": 379,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    "category": "Kitchen",
    "inStock": true,
    "rating": 4.8,
    "seller": "KitchenAid"
  },
  {
    "id": 41,
    "name": "Ninja Air Fryer XL",
    "price": 119,
    "image": "https://images.unsplash.com/photo-1556909143-f955d2d6a0e1?w=400",
    "category": "Kitchen",
    "inStock": false,
    "rating": 4.4,
    "seller": "Ninja Kitchen"
  },
  {
    "id": 42,
    "name": "Patagonia Backpack 30L",
    "price": 159,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Bags",
    "inStock": true,
    "rating": 4.6,
    "seller": "Patagonia"
  },
  {
    "id": 43,
    "name": "Samsonite Luggage Set",
    "price": 299,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Travel",
    "inStock": true,
    "rating": 4.3,
    "seller": "Samsonite"
  },
  {
    "id": 44,
    "name": "Oral-B Electric Toothbrush",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    "category": "Health & Beauty",
    "inStock": true,
    "rating": 4.5,
    "seller": "Oral-B"
  },
  {
    "id": 45,
    "name": "Philips Norelco Shaver",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    "category": "Health & Beauty",
    "inStock": false,
    "rating": 4.4,
    "seller": "Philips"
  },
  {
    "id": 46,
    "name": "Casio G-Shock Watch",
    "price": 139,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
    "category": "Watches",
    "inStock": true,
    "rating": 4.7,
    "seller": "Casio"
  },
  {
    "id": 47,
    "name": "Fossil Leather Watch",
    "price": 179,
    "image": "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400",
    "category": "Watches",
    "inStock": true,
    "rating": 4.2,
    "seller": "Fossil"
  },
  {
    "id": 48,
    "name": "Herman Miller Office Chair",
    "price": 1299,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    "category": "Furniture",
    "inStock": true,
    "rating": 4.9,
    "seller": "Herman Miller"
  },
  {
    "id": 49,
    "name": "IKEA Standing Desk",
    "price": 249,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    "category": "Furniture",
    "inStock": false,
    "rating": 4.1,
    "seller": "IKEA"
  },
  {
    "id": 50,
    "name": "Steelcase Monitor Arm",
    "price": 189,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    "category": "Office Supplies",
    "inStock": true,
    "rating": 4.6,
    "seller": "Steelcase"
  },
  {
    "id": 51,
    "name": "Moleskine Notebook Set",
    "price": 29,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    "category": "Stationery",
    "inStock": true,
    "rating": 4.3,
    "seller": "Moleskine"
  },
  {
    "id": 52,
    "name": "Parker Premium Pen",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    "category": "Stationery",
    "inStock": true,
    "rating": 4.4,
    "seller": "Parker Pens"
  },
  {
    "id": 53,
    "name": "Weber Gas Grill Q1200",
    "price": 269,
    "image": "https://images.unsplash.com/photo-1544906846-6813c2391de4?w=400",
    "category": "Outdoor",
    "inStock": true,
    "rating": 4.5,
    "seller": "Weber"
  },
  {
    "id": 54,
    "name": "Black+Decker Drill Set",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400",
    "category": "Tools",
    "inStock": false,
    "rating": 4.2,
    "seller": "Black+Decker"
  },
  {
    "id": 55,
    "name": "DeWalt Circular Saw",
    "price": 159,
    "image": "https://images.unsplash.com/photo-1572981944032-6e5eeaec4303?w=400",
    "category": "Tools",
    "inStock": true,
    "rating": 4.7,
    "seller": "DeWalt"
  },
  {
    "id": 56,
    "name": "Ryobi Tool Storage Box",
    "price": 119,
    "image": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400",
    "category": "Tools",
    "inStock": true,
    "rating": 4.3,
    "seller": "Ryobi"
  },
  {
    "id": 57,
    "name": "Scotts Lawn Mower 21 inch",
    "price": 349,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Lawn & Garden",
    "inStock": true,
    "rating": 4.4,
    "seller": "Scotts"
  },
  {
    "id": 58,
    "name": "Miracle-Gro Plant Food",
    "price": 24,
    "image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    "category": "Lawn & Garden",
    "inStock": true,
    "rating": 4.6,
    "seller": "Miracle-Gro"
  },
  {
    "id": 59,
    "name": "Keter Storage Shed 8x6",
    "price": 899,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Lawn & Garden",
    "inStock": false,
    "rating": 4.2,
    "seller": "Keter"
  },
  {
    "id": 60,
    "name": "Graco Baby Car Seat",
    "price": 179,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    "category": "Baby & Kids",
    "inStock": true,
    "rating": 4.5,
    "seller": "Graco"
  },
  {
    "id": 61,
    "name": "Fisher-Price Baby Monitor",
    "price": 129,
    "image": "https://images.unsplash.com/photo-1607457862991-ab15fa0095cb?w=400",
    "category": "Baby & Kids",
    "inStock": true,
    "rating": 4.3,
    "seller": "Fisher-Price"
  },
  {
    "id": 62,
    "name": "LEGO Creator Expert Set",
    "price": 249,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Toys",
    "inStock": true,
    "rating": 4.8,
    "seller": "LEGO Store"
  },
  {
    "id": 63,
    "name": "Hot Wheels Track Set",
    "price": 59,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Toys",
    "inStock": false,
    "rating": 4.4,
    "seller": "Mattel"
  },
  {
    "id": 64,
    "name": "Barbie Dreamhouse",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Toys",
    "inStock": true,
    "rating": 4.6,
    "seller": "Mattel"
  },
  {
    "id": 65,
    "name": "Purina Dog Food 30lb",
    "price": 49,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Pet Supplies",
    "inStock": true,
    "rating": 4.2,
    "seller": "Purina"
  },
  {
    "id": 66,
    "name": "KONG Dog Toy Classic",
    "price": 19,
    "image": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
    "category": "Pet Supplies",
    "inStock": true,
    "rating": 4.7,
    "seller": "KONG"
  },
  {
    "id": 67,
    "name": "Petmate Cat Carrier",
    "price": 39,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    "category": "Pet Supplies",
    "inStock": false,
    "rating": 4.3,
    "seller": "Petmate"
  },
  {
    "id": 68,
    "name": "Wilson Tennis Racket Pro",
    "price": 299,
    "image": "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
    "category": "Sports",
    "inStock": true,
    "rating": 4.6,
    "seller": "Wilson"
  },
  {
    "id": 69,
    "name": "Spalding Basketball Official",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
    "category": "Sports",
    "inStock": true,
    "rating": 4.5,
    "seller": "Spalding"
  },
  {
    "id": 70,
    "name": "Under Armour Athletic Shorts",
    "price": 49,
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    "category": "Sportswear",
    "inStock": true,
    "rating": 4.4,
    "seller": "Under Armour"
  },
  {
    "id": 71,
    "name": "Champion Hoodie Pullover",
    "price": 59,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    "category": "Clothing",
    "inStock": false,
    "rating": 4.3,
    "seller": "Champion"
  },
  {
    "id": 72,
    "name": "Converse Chuck Taylor Sneakers",
    "price": 69,
    "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400",
    "category": "Footwear",
    "inStock": true,
    "rating": 4.5,
    "seller": "Converse"
  },
  {
    "id": 73,
    "name": "Vans Old Skool Shoes",
    "price": 79,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    "category": "Footwear",
    "inStock": true,
    "rating": 4.4,
    "seller": "Vans"
  },
  {
    "id": 74,
    "name": "Michael Kors Handbag",
    "price": 299,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Fashion",
    "inStock": true,
    "rating": 4.6,
    "seller": "Michael Kors"
  },
  {
    "id": 75,
    "name": "Kate Spade Wallet",
    "price": 149,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Fashion",
    "inStock": false,
    "rating": 4.5,
    "seller": "Kate Spade"
  },
  {
    "id": 76,
    "name": "Coach Leather Belt",
    "price": 179,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Accessories",
    "inStock": true,
    "rating": 4.7,
    "seller": "Coach"
  },
  {
    "id": 77,
    "name": "Oakley Sport Sunglasses",
    "price": 229,
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    "category": "Accessories",
    "inStock": true,
    "rating": 4.6,
    "seller": "Oakley"
  },
  {
    "id": 78,
    "name": "Timberland Work Boots",
    "price": 189,
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    "category": "Footwear",
    "inStock": true,
    "rating": 4.8,
    "seller": "Timberland"
  },
  {
    "id": 79,
    "name": "Columbia Winter Jacket",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    "category": "Clothing",
    "inStock": false,
    "rating": 4.5,
    "seller": "Columbia"
  },
  {
    "id": 80,
    "name": "Herschel Laptop Backpack",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "category": "Bags",
    "inStock": true,
    "rating": 4.4,
    "seller": "Herschel"
  }
]

export default products