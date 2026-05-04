export const INITIAL_CATEGORIES = [





    { id: "cat_1", name: "Electronics", image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png", description: "Elite tech and high-performance computing gadgets." },
    { id: "cat_2", name: "Fashion", image: "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png", description: "Premium apparel and trendsetting styles for every occasion." },
    { id: "cat_3", name: "Beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png", description: "Luxury skincare, makeup, and self-care essentials." },
    { id: "cat_4", name: "Home Living", image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png", description: "Designer furniture and innovative home decor." },
    { id: "cat_5", name: "Gadgets", image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png", description: "Smart devices and futuristic tools for your lifestyle." },
    { id: "cat_6", name: "Grocery", image: "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png", description: "Premium daily staples, grains, and pantry essentials." },
    { id: "cat_8", name: "Sports", image: "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/thumbnail.png", description: "High-performance gear for athletes and adventurers." },
    { id: "cat_10", name: "Automotive", image: "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png", description: "Premium parts and accessories for your vehicle." }
];

export const INITIAL_VENDORS = [
    { id: "v_1", name: "Bluvanta Private Label", contact: "brand@bluvanta.com", phone: "+91 80 4567 8901", address: "Bluvanta Headquarters, Prestige Tech Park, Bengaluru, KA 560103", rating: 4.9 },
    { id: "v_2", name: "Global Luxe Logistics", contact: "ops@globalluxe.io", phone: "+1 415 555 0123", address: "101 Luxury Way, Suite 500, San Francisco, CA 94105", rating: 4.7 },
    { id: "v_3", name: "TechNova Electronics", contact: "sales@technova.com", phone: "+886 2 2700 1234", address: "No. 88, Section 3, Xinyi Road, Taipei, Taiwan", rating: 4.5 },
    { id: "v_4", name: "EthnoWear Designs", contact: "info@ethnowear.in", phone: "+91 11 2345 6789", address: "Unit 42, DLF Tower B, Jasola District Centre, New Delhi, DL 110025", rating: 4.8 }
];

export const INITIAL_PRODUCTS = [

    {
        "id": "p_1_0",
        "name": "Essence Mascara Lash Princess",
        "category": "Beauty",
        "subCategory": "beauty",
        "vendor": "v_1",
        "price": 511,
        "cost": 400,
        "stock": 99,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "tags": [
            "beauty",
            "mascara"
        ]
    },
    {
        "id": "p_2_1",
        "name": "Eyeshadow Palette with Mirror",
        "category": "Beauty",
        "subCategory": "beauty",
        "vendor": "v_1",
        "price": 1023,
        "cost": 800,
        "stock": 34,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "tags": [
            "beauty",
            "eyeshadow"
        ]
    },
    {
        "id": "p_3_2",
        "name": "Powder Canister",
        "category": "Beauty",
        "subCategory": "beauty",
        "vendor": "v_1",
        "price": 767,
        "cost": 600,
        "stock": 89,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "tags": [
            "beauty",
            "face powder"
        ]
    },
    {
        "id": "p_4_3",
        "name": "Red Lipstick",
        "category": "Beauty",
        "subCategory": "beauty",
        "vendor": "v_1",
        "price": 664,
        "cost": 520,
        "stock": 91,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "tags": [
            "beauty",
            "lipstick"
        ]
    },
    {
        "id": "p_5_4",
        "name": "Red Nail Polish",
        "category": "Beauty",
        "subCategory": "beauty",
        "vendor": "v_1",
        "price": 575,
        "cost": 360,
        "stock": 79,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "tags": [
            "beauty",
            "nail polish"
        ]
    },
    {
        "id": "p_6_5",
        "name": "Calvin Klein CK One",
        "category": "Beauty",
        "subCategory": "fragrances",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 29,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "tags": [
            "fragrances",
            "perfumes"
        ]
    },
    {
        "id": "p_7_6",
        "name": "Chanel Coco Noir Eau De",
        "category": "Beauty",
        "subCategory": "fragrances",
        "vendor": "v_1",
        "price": 8319,
        "cost": 5200,
        "stock": 58,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "tags": [
            "fragrances",
            "perfumes"
        ]
    },
    {
        "id": "p_8_7",
        "name": "Dior J'adore",
        "category": "Beauty",
        "subCategory": "fragrances",
        "vendor": "v_1",
        "price": 5759,
        "cost": 3600,
        "stock": 98,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "tags": [
            "fragrances",
            "perfumes"
        ]
    },
    {
        "id": "p_9_8",
        "name": "Dolce Shine Eau de",
        "category": "Beauty",
        "subCategory": "fragrances",
        "vendor": "v_1",
        "price": 4479,
        "cost": 2800,
        "stock": 4,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "tags": [
            "fragrances",
            "perfumes"
        ]
    },
    {
        "id": "p_10_9",
        "name": "Gucci Bloom Eau de",
        "category": "Beauty",
        "subCategory": "fragrances",
        "vendor": "v_1",
        "price": 5119,
        "cost": 3200,
        "stock": 91,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "tags": [
            "fragrances",
            "perfumes"
        ]
    },
    {
        "id": "p_11_10",
        "name": "Annibale Colombo Bed",
        "category": "Home Living",
        "subCategory": "furniture",
        "vendor": "v_1",
        "price": 121599,
        "cost": 76000,
        "stock": 88,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        "tags": [
            "furniture",
            "beds"
        ]
    },
    {
        "id": "p_12_11",
        "name": "Annibale Colombo Sofa",
        "category": "Home Living",
        "subCategory": "furniture",
        "vendor": "v_1",
        "price": 159999,
        "cost": 100000,
        "stock": 60,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
        "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        "tags": [
            "furniture",
            "sofas"
        ]
    },
    {
        "id": "p_13_12",
        "name": "Bedside Table African Cherry",
        "category": "Home Living",
        "subCategory": "furniture",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 64,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
        "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        "tags": [
            "furniture",
            "bedside tables"
        ]
    },
    {
        "id": "p_14_13",
        "name": "Knoll Saarinen Executive Conference Chair",
        "category": "Home Living",
        "subCategory": "furniture",
        "vendor": "v_1",
        "price": 31999,
        "cost": 20000,
        "stock": 26,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
        "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        "tags": [
            "furniture",
            "office chairs"
        ]
    },
    {
        "id": "p_15_14",
        "name": "Wooden Bathroom Sink With Mirror",
        "category": "Home Living",
        "subCategory": "furniture",
        "vendor": "v_1",
        "price": 51199,
        "cost": 32000,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
        "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        "tags": [
            "furniture",
            "bathroom"
        ]
    },
    // --- GROCERIES: GRAINS & PULSES ---
    {
        "id": "p_gr_v6_01",
        "name": "Basmati Rice (aged)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 439,
        "cost": 380,
        "stock": 200,
        "reorderLevel": 50,
        "image": "/products/basmati_rice.png",
        "description": "Premium aged long-grain Basmati rice, perfect for biryanis and festive meals.",
        "tags": ["grains", "rice", "staples"]
    },
    {
        "id": "p_gr_v6_02",
        "name": "Sona Masoori Rice",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 263,
        "cost": 220,
        "stock": 300,
        "reorderLevel": 60,
        "image": "/products/sona_masoori_rice.png",
        "description": "Lightweight and aromatic Sona Masoori rice, an everyday southern favorite.",
        "tags": ["grains", "rice", "staples"]
    },
    {
        "id": "p_gr_v6_03",
        "name": "Premium Wheat Flour (Atta)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 199,
        "cost": 170,
        "stock": 500,
        "reorderLevel": 100,
        "image": "/products/wheat_atta.png",
        "description": "Stone-ground 100% whole wheat flour for soft and nutritious rotis.",
        "tags": ["grains", "flour", "staples"]
    },
    {
        "id": "p_gr_v6_04",
        "name": "Toor Dal (Arhar)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 127,
        "cost": 110,
        "stock": 400,
        "reorderLevel": 40,
        "image": "/products/toor_dal.png",
        "description": "Unpolished yellow split pigeon peas (Toor Dal), high in protein and flavor.",
        "tags": ["pulses", "lentils", "staples"]
    },
    {
        "id": "p_gr_v6_05",
        "name": "Urad Dal (Split)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 119,
        "cost": 105,
        "stock": 250,
        "reorderLevel": 35,
        "image": "/products/urad_dal.png",
        "description": "Split skinless Urad Dal, essential for authentic idli and dosa batters.",
        "tags": ["pulses", "lentils", "staples"]
    },
    {
        "id": "p_gr_v6_06",
        "name": "Moong Dal (Yellow)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 111,
        "cost": 95,
        "stock": 350,
        "reorderLevel": 40,
        "image": "/products/moong_dal.png",
        "description": "Easy-to-digest yellow Moong lentils, perfect for daily nutritional soups.",
        "tags": ["pulses", "lentils", "staples"]
    },
    {
        "id": "p_gr_v6_07",
        "name": "Premium Poha (Thick)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 55,
        "cost": 45,
        "stock": 180,
        "reorderLevel": 25,
        "image": "/products/poha.png",
        "description": "Flattened rice (Poha) thick grade, ideal for traditional spicy breakfast dishes.",
        "tags": ["grains", "breakfast", "staples"]
    },
    {
        "id": "p_gr_v6_08",
        "name": "Rolled Oats (Steel Cut)",
        "category": "Grocery",
        "subCategory": "Grains & Pulses",
        "vendor": "v_1",
        "price": 159,
        "cost": 140,
        "stock": 120,
        "reorderLevel": 20,
        "image": "/products/rolled_oats.png",
        "description": "100% whole grain rolled oats, a heart-healthy choice for sustained energy.",
        "tags": ["grains", "breakfast", "staples"]
    },

    // --- GROCERIES: COOKING ESSENTIALS ---
    {
        "id": "p_gr_v6_09",
        "name": "Sunflower Oil (Refined)",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 143,
        "cost": 130,
        "stock": 400,
        "reorderLevel": 100,
        "image": "/products/sunflower_oil.png",
        "description": "Multi-purpose refined sunflower oil for high-heat professional cooking.",
        "tags": ["essentials", "oils", "staples"]
    },
    {
        "id": "p_gr_v6_10",
        "name": "Pure Cow Ghee",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 479,
        "cost": 450,
        "stock": 150,
        "reorderLevel": 20,
        "image": "/products/cow_ghee.png",
        "description": "Traditional clarified butter (Ghee) for unmatched aroma and nourishment.",
        "tags": ["essentials", "dairy", "staples"]
    },
    {
        "id": "p_gr_v6_11",
        "name": "Mustard Oil (Kachi Ghani)",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 159,
        "cost": 145,
        "stock": 250,
        "reorderLevel": 40,
        "image": "/products/mustard_oil.png",
        "description": "Pungent and authentic cold-pressed mustard oil for traditional North Indian cuisine.",
        "tags": ["essentials", "oils", "staples"]
    },
    {
        "id": "p_gr_v6_12",
        "name": "Iodized Table Salt",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 20,
        "cost": 12,
        "stock": 1000,
        "reorderLevel": 200,
        "image": "/products/table_salt.png",
        "description": "Essential iodized fine-grain table salt for every professional kitchen.",
        "tags": ["essentials", "salt", "staples"]
    },
    {
        "id": "p_gr_v6_13",
        "name": "Whey Protein Powder",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 36,
        "cost": 30,
        "stock": 300,
        "reorderLevel": 40,
        "image": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp",
        "description": "High quality whey protein powder for daily nutrition.",
        "tags": ["essentials", "supplements", "staples"]
    },
    {
        "id": "p_gr_v6_14",
        "name": "Pure Natural Honey",
        "category": "Grocery",
        "subCategory": "Cooking Essentials",
        "vendor": "v_1",
        "price": 71,
        "cost": 60,
        "stock": 180,
        "reorderLevel": 25,
        "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp",
        "description": "Raw and natural honey jar, perfect sweetener.",
        "tags": ["essentials", "sweeteners", "staples"]
    },

    // --- GROCERIES: SPICES & MASALAS ---
    {
        "id": "p_gr_v6_15",
        "name": "Pure Turmeric Powder",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 63,
        "cost": 50,
        "stock": 400,
        "reorderLevel": 50,
        "image": "/products/turmeric_powder.png",
        "description": "Sourced from the best farms, pure turmeric with high curcumin content.",
        "tags": ["spices", "masalas", "staples"]
    },
    {
        "id": "p_gr_v6_16",
        "name": "Red Chilli Powder",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 71,
        "cost": 60,
        "stock": 350,
        "reorderLevel": 40,
        "image": "/products/red_chilli_powder.png",
        "description": "Finely ground hot red chillies for the perfect spice kick.",
        "tags": ["spices", "masalas", "staples"]
    },
    {
        "id": "p_gr_v6_17",
        "name": "Coriander Powder (Dhania)",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 55,
        "cost": 40,
        "stock": 300,
        "reorderLevel": 35,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCAaGBgYGR0gIBoeHiEgHR4dGx8gHiggIB0mISEgIjEiJSkrLi8uHR8zODMtNygtLisBCgoKDg0OGxAQGy0mHyYtLS0vLS0tLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAD0QAAIBAgQEBAMHAwMEAgMAAAECEQMhAAQSMQUiQVEGE2FxMoGRFCNCobHB8FLR4Qdy8SQzYoIVohaSwv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgICAQQBAwQDAQAAAAAAAQIRAyESMUEEEyJRYTJxsSOBkfBioeEU/9oADAMBAAIRAxEAPwBgyvGkgyYgxf8AXCx4Jph8/ma+r7tWmmvQM27R6XI98NQyKKNIFh8yff1PXCLxPiaZKvVGkhKkMQtpMel5kfnj53DOUriu/B6M0uzoPi3MK+XqFzAOkAz1kRB/l5wl8CyTV65p1av/AE6jm0nSxn8JiY7yPyxaybfbUUVNS01MhQ0GfWMCOLcCr5Op5mXc1KVQgMrMAVPS5IBH540ju9rl+SXr9hr8V8Uy1KkKKUhFgum5QDruL/PALhXBKlLL1MwlZJbm0aJiO5mx+RwPzdHOPTZaVKneOYsI/S598UqnGmy9A0aqslXQVE9QYmCLHacEIylGtN+RukzpnA8sEoprE1XUNUPqR8PsNvlgZxd1y9ZACbrt0kdvfFXgvGi+hBOvSp07kSoN42wG43k82c55lcaaJgIQZEdiRcNuY+k4yeO209UFjK3GAYSZJ6YCeNeFCrTBlEalpIOxYEwUBm9r/L1xX47wo0KRzVCS0jUrMTvAkTt02wa8P0/OWasPFrgXOxt2vA98XjXCpJg1eiLgXENCgNIA2tv0tjz/AFIzqjKhigd1ZSo3g9/YA/OMDc1wx6edcIQKCw4AmFkXgenTDTw7OUqiiRGoWDAc37fLE2sc0+/I6tFTI+K08tUpxTQKJ2v3Ix7n8zSqU2rNzLRZWBmJIIMfPaMKVdcl9pqUEapTh9LQAyE2JA6r2tbDB/8AjFJkqUjVZaDFWjWQJ9/e/XphyglNW3/4F60NVPiNOomoEQBONMrnlqJqWNO2OWeJxmMqhp0iz0Jg1AOk7Eiw98MfhnjyrShiumBFtrXJ/lsLJCSipLyCK/E+LVqNSpXSgIWUDRLATvHQTifJcXqZs5dQ8KHJqTPw9LdybYvZiutei6pbWp5iOwxW8L+HNNPzDWl2HQW9gcKMlxtraG1TGzPABIDFvUj9MUK2RpZmlobfoRYg49y+YIBVlI02J3xFkawU/PDxvYUL1bg9WhVDUokAgSDabT74b/BmQq1KRNRtOixJHxH0xdaiHGI6tapSouu43kdsaTVblsl76KfGaWliQ2oeoxHk86F3wB/+ZqtV0wSp3tb5nBek6PIxEG6tlUGk435YJK+zTIHvgeOM6ySX/O/5YtZXKLpjoRcb4HZ3gBR9aMdO4XoDhZOcvIlFB/g9Z3pK1T4v1EwCex9MEFMRNsKnC/E6UnYV2U6VJEXM+oGKuY8ZUnJaG3szQAfQXnp2jHQpOlSshrY6VmxTLdMJFT/UFqgbyqSKEiGdydZmIQQJjqemAme8YZh7CoRvJSFA+e+NZRbY4nTqjgXJA98Cc7x3L0xzVAf9t/8AGOZnONV+MuzgarsSAoETBNzN98QrSi9QSGBC6ywg/wBW/T6YngUPtbxqgBFOmT/uMfkMCM54mzFSEQgE2CoLn95wAqUWphZBSVDLJuwP4rbL64rZ7PKuk0VZRpEux+Juuj+kfnh8LC0i7nKmpmPNHTU0kGb6vXpGIcygQjU3SQNVr7+w9Plj3LDTQ80uqEvp0XBj+qdv3xIyB2IhZcLpZmAiDEtMwWE7R9MNB2UVol4Y7AwL/t39cSwO5/P+2Nbm3Sb+sdZ6x6YjNYC2r8sWIf6vHqQX4xJ2739MIHjDI16lemVGrVqt0GkxP54u+GmD5quK1NqbEDQGWLDtOGHPVkbMKoI5F0t6Fjqv9B9cccY+xktbdfyP9caNPB9J1qqlXSVAJMHcjYHbDy1KnVjUiHSZHKLHuLYTeP5RkCVqPxGI7HpjOAcfqVSypSqFkMMQOUH1bY/r6Yy3JOVDcaDlfNJTrFGuemwEYXfG3CKuaVTQphoPQj53Jv8ALArxjkc/JrqqkAXAN/eDvhk4NxhWVACIgR68o/zgjD21HJFolu7QJ8P50JVqI0oQ5DCOb0mbi0YveMePrpo5eimt6jj5AX32Bn174Cf6k0kNTL1gI1Nodh1G4n13+WGzh60nypsvIJ9iBuO3/ONnxVT7sX4FTj/FMzTRqNZGpqy8pK/GQQY1CRPtfFjgnGxSCguCijVq2HWZmDYzv1wymvSzWWanU2ZbHt2YdiO+EzgOWoGm9Op940lTN7ybgbb3tioyg4VQbTIcr4lfM1KpUcrEx30iwj1j9cHuOcVFOlTT4WYAUyBcR1n0wr+FKS03qKRBWRDCCJNjhs45w1c7Uy1KdKoZYruRER6f4wsqx+7x6QouVWS+GOAZZQH0feNLF2Ylmk772m5sOuC+drJTOhr02HUbH6beuB3iKlVyp8ymGNLSByrJTSAIMdOs++KmQ4wK3PUMW9PfrjHLzfyey1Qxp5RoFjpK6b7R7euE7jHhyi1LzaP3TrsBZX9I2BPcYhrVvtJFMVXSnMnTAkzABN/pjdeF12q/ZjVgCW1dY6HaD2MYuKlFpp19oG19BHwnxGk6gMYPWcG+O5lMuEqU92YAqomZ6wMJ/BuBUqRfzq5DhiCwK6Z+kYtUMo9KrNSqKqtem4sAO0bA+uJlCKba6DtDNwrjDZjUplQPwkEH3IN4xJToCT74lqUlamXEBlFm2t2PphczXHadIkliW7KCfz2v/fEwi3K0ilVDdk30mBODUrplh9cKXg/iDZrVW0haaNABPMxAB2sAIPeThmzPmMQEEL3kTv0BHvY40lJw15J02DqnBaEs6ggTJC/zridOFIqnSgJIu7flHb5DBFiFERNvr2Hr88RZktAK6ex9O3yn2xk2B4cuFAWmSpIPMAGNuxaQCe8HbATjXh1qoA892Ygn7w8vwmByaesHpscWwWpqC5FzMKTA9AeoxKp8yG1MjaQYEXnvIJ/nvhrI/AUIieCc26adFJALAl7nuSRuW/KcEE/0+phT51VzaIpdBbuDHWY9MOKsv/b1gjsbk/z9cUMxUZGkAaALsp2GxLAyQAAOuLfqJPoFETH8N1cuA9FqbMCCpmAACOVQ3TYkm2+F9MgdNZyS7K8aqa6luYYyo0wCQRtPLbfHVqDo0WkuYIiwHYg2uOvXFhKawdM01sRpA2FyQI67XxUfUOtg4nNshwalXdR9oOhLIHRvMKhdYKjbcmI3g4gzfD3ZSapVfKkKKgKFgsQ21xsBJ6gY6bTpK7K7UgNIOhgvwxvuJkz0mcV83XemjvV8upTAn4YKgGZIuLRt7YP/AKNhRzTNUKhVagEU2IXVK84HdNymr5b4j4lwqpQrkEGVIZQFMdCItH5T0x1LKxaoKVMKU3Kw3sAB8N+uAnHeNPRprWWohF1OokSxuNp5lE2G99ovS9Q26SG4iXxHN1xmHZtLFrnlUjbsJW3c4h4fTp6gzrNNLlJALEyAJJkydyNhO2GTNcDTMVUqpVVWqUwzXJubyE0zpIm1umKOd4jRoVlorT5p01HqIWYljDaVB02B1AwNhG+NYzvS7JYGz+b1EkrTpqLwoIAH1vgSaw6PS/8AYkHFrjdALXqUVYMisBqPWOpPT5W33xXVdNop27z/AHx0xiqIb+jonHqlGpQaWCuBKMDdW9P5fCDwipXoFnzCsS51agRqB9RF8D+C8QdqqmrrbS3SSF+giffDpmTRqLqZp9/8Y4mn6de21af+6LjU/kmeDjy1Muauol1DAEgx79rA/nix4K8UU/IWmOVlnUDAJkzq9Z74E+HBR8xxVkqpmmpHLfdvXp3jDS+Ry1YXAt1j9InGeThG4090yknKmFanGqWkyTHWThB4LlKlXMVNLeXTD2QrJAN7XED++K/jPgXljXSqsUjmXUxt7T+WBvhbxAtIkMxn+q9x79IxpDBWJyg7/sQ5fKmOXi/w+7ZbSpBIcNLCJNxHYC+/fAnwfkzUpvRrMy65QpMfCdj69sHMv4hTNq9MFtEQzbzO4Fum+BnG8m+WT7VSqGoh0yTErpsrWF9gLj3xEZS4+1070Ot8inxTIZvKuKdIGrTN1MwR6N0j1Hviz4J8OZlCzugXU0jUdx6D3xX4x4gqsisAzAD/ALmm2wt2tgp4W8Uh0VWaGWxH6fLFzeT2n8V+RJLl2FvF/Ckq5Zqkaa1JSwItbqJ3g/tha8A543Z2lpgk/TB/xJn2eiVpMut+W+0Hebb+uA/CPBVeghqJWV+pXTA+Un9hiMclLC4t78A1Uh6zXGEVkUyZ7fS+EDxLws0K5q0aR8pza06WO4joJ2xBm1fLVErVH1CoN52MSB6CMNGQPn01LklW2EnYdT3PbE8nj+XaZSjYmtnWFLb8Ulipt3PcYKZLPeeo1PUELGoRP89MNGa4hRoKPM0hIsTuPQWvjnebzivWfydSUmMqCALdfYdfQY0gvcWlRLdFrh6tl3lW8wOZlhfvzjbBEZzzNXl0tPQ6TYvIiFA+KO17414D4cqZpSaTLpDBdTyJ7lRBJgbTA23x03JZU0tFOmEVFtE3nTYz1bDyzjF72xroCZDwuHH/AFYBABCILgyLkz+ISYA2N/ZkfKB5VkUoRzK4mfzPqIjv3xOX2nSFAnUenQ4rVjop7gkgxquJNt79Ow645pTbdjo3MXNm0TzHoTYgdu2IK0ipqqOAunbpYySewtF+5xDk1CqtIsHIIkDb5A/hsTiY5xC50qAFHM7coA3AJiQu22I8jKfEmMhgZOsFw1yASICgxeOv/GCjpq1rqb1jpP6zgBRZ3zFRiyurAaAFYfA15JEAdBe/pgjxzOmnTIUTYyZ6mwt29sLaGUcrRpFdHmEsdRgQbKYsQOXeDiOnXOoU1kMADboovE2vFvlinwzKGlpqAySxXSLQGNwQO8Agz0xjtprFiSDpUAkdJIJ372+YwV4LoteZLqSZb4d5kDqL9CJxJ9pLNVoupIABFzFzfb+/TFU0iqOQukQSvS4m/tF5m+B/DOKU8zpBYhtQWVYg2vttBsdu4w1F9iYz8PrI9goA3BiPeSDM7b9serWIZWpttIan0Mmx9CI9N8Uadn5OS09rfi9j/fHuXcKW1CJMTq36i+3Q/WMKxUW1zyozOxLckCREdTtvJjAvMVjpUSCjWYRPrHt0vjOIORO7AkDSN5tI7TBmR2x66aTA1abtqa8Ec14AgdcGxo9r5xqoUpMJaQRI6EEbREEDEVevTClNPl6rDWOVzE3sCD/nAvJVQM0VZxBEFR+JgbSIiCsXF8F+K1fMCU9BYE2UiYPcEmZ9AcVVMQAoZehkmJqrUtAaqgsASZpMBJC2Aibx0nCVxzONWzNWuAWp6gFIBiIhfbtftjpfifgdJwq1FZUZjLowsehJG945TOEvj/h3MUqZNMo9MKAQgKsyrzBnWOm8knaZx3+nnFvfbMZpi4rXdmGpgBaGvJiZG0by1jj189SJkggnoAIHthrzOWqZ7LPUoVqumlTWmabGNbKBy2AU2BN+pAwhVsrVQ6WRlPZlIIkSJBE7Xx3Y6kYSdHQeA5TL+cqjWpW5UOwUn1Cne2DmfWic3RTSsGSQQCCQJG4kGcJjUny2aGutqqvCrTprOq8AsTAXvacPR8FGo1Os+YZaq3AUKVB7GRJHTp8sebOO03LTRupfgJZxqdQFHAI2M/rhLfhGYplzS+8Rfh0vDR6g8pPrjTxRxCpQreS06z8JWSGHpF/kdvzO3CuI16bL9y8u2kCJmbASLfXGWLFOEbfk0lJPoELma2aBLsaaiw1EST6xGLvAfBWYpFtdNWU7HUL+18HqHgtlUmo4LaiwRbASZjVub9bYNcK46tVRMBhZ1nYixxrLNpxh0Qo3t9nL67tlavksCoJkQNjsbfIYYMxxksaeWDORUgsjJAgXlbA7xbDLxhaP2qnUYAsUI+UwDHzjAX/UOqlOnTrJHmK4CDuOv13+mDkpziq2/wCQ2ojVUyVMUSDEMsR6bbe2OY+Hsrl7krJBMMZJsfrOJuE+Lq1TTRgKqLzatyB0nce+HnLVMu9Eg0wFjYgAfIT+eJmpYU4vyCalsEeFsplsxVqNpYNTgfEdJmYOkkxtG+G4KyKdLTA645R4fzhy+fq0qKvVR9wAWNrjbtMYcsz4gKHSQZPRrMPkdxgzY2ppLprQRlaNPEHAVzVMI1Yoy7aQDf1G/wBMDzxoUaaUUBqV1BUU0uTp3JjpF8UuIZnNVlqV8usUhY3BLHY6QN43OD3g7g+aVVFZUhSWVyyl11TIgCTubFrYfBRh/UdpeAtt6EqlXrZishra7wQFWYRuqKbXEwdzh98O+A6TUw1QsahveQFA/BpmD2JN57YdEydOCQq++mbbxf8AYY1fMkp92hCFWMiB1FttjczBxM/VN6jofA1zuaWl93TpEhSLKth6fK2NMnmS/mGUbTAlJJBIg+3y7Ygo0ar1XaoSFVpVbFQDcEwZLf8AjbcYt184oSo86AeoBm20/wDlPTHM35Zf4B/F38umFJZ4Bm3xGw0iBYSfzxdrZcimoBCWgMb6QBA36wevpgTTzIrVFRUqlFZdbhRFjNyp7x7D2xI2YWrV0VHD/F92Cym9wI6zpPewbuIlp1sZF4cyhpipUdlKFmA6NymJJPwggC298V+P556lL7tIRn0vaDcEK8kwR6/2wUzmZNPLjlCu9RiFJBhpmSR0se/bCpneKs1WojVNQpsp/wDHtG0sQfnbFpcnoCqvGamUzBD0/MawporbnqQLAWnfscNHFS9ei6lVpkwSdQJAIjV25bn674ReM02Ip1VddaMZYmNZmQt5EwYG09O+HTj2ZjKJp1a28sQeik3kW6A2gfvjacVUWuyU9g/J8RQaKfl6SFtYSdIMsb3NvzxY4tnJ01o1BhoMEAiTqUn1nt3wH42ilxVogvSBmebUp7BbyOlv6trTgrms0pKosaneVAmF0zBN5Kg9R0PUjEOG015LsvpUJpkgGAL6t5BiLW9IwP8A/jlqaWQaavQtbTAsDYG53H6xe9l08olNWoEayJm5MG9rTO+0Y2FFaKb7sRMGx3Gokmb7H12xnddASVT5hlhOlgSPkJ6d5Fv3x7VGrUFuRttfTcT0nFf7UzKVcjWUuojqAW1EL2uCIxDw6lUjUlQvLagrRyjr87/yMKtAWsvV1NBkpsdQIKkW29iO2B/BlzFOswdg9ESAZnVIt3PcfLBXN5gkSG1EyFMX3tI6xtiuGHlqx2B5tuUCZnt1EYLpaGbfZKT30oHkqWUHmkQDHcd/TAlcnVRwq1zLfiI2YHeAeo69AOk4J0gsKwnle5E2Nun7C18RZmojVV1yhVoVidJOoG3Yix98OMmBDnayZih8AqEGwO5YfiE7N6dsZw+jUZhzmmnlq78uolpMQxPwgWIvjzhtRBmXilUUSwBdSA7jqpIAIMb/AEGCIeBzEEu1lIEAN+D2MG/zxduOiWrFHNcKXL1Mw9Q5mvQUf9tHK8zfEWVCsKAem95wkZrIPXdqwdAGPKGqQwAsAbG4AHXHSfFlKsaNZMvCLHOqsDKmCQBd9RveBYG8Y5vl+LsqhfJpNHUoCfr+WPV9PNyjbOWapjL4i4Rmkza5soGQMoGgkso2uCB36d8N58RqE5uQgXDzqHyO2N8/xdPs7hmjlIuZG24P8+eF3g2ZpcVy7Uq4Hn0vheLlRYN/cfPHDvJFOXS1r6NOnX2RPxenmcxrEEINIPcm5PtsPlg5w3PotYMdlUnCVwLw1VL1Rq0aGKxbcdYmY9ceUlrpmGWseVUZgQImIjGksMXJqL6Q1OltHVsrxCeY7ATjnuYy1Q5wijVA8wl2BE6ZNvYm/wBMM3A6b1FHnAAG+kdjtPqcR5rgIp5nzMug0sOa9gwtb3HbHNCXC7Kavoi4xk1pqrPUBZQdLMBKki+0ShN9PpbCl4dzvnu7VnB0GAtoPr/nDF4vqHyGBChgCRqO8DZfXrGOccPylen96EOn2uR6D88dWDH7mJtvfgznJqSOg8V4QtZCuzgfdVIuTvpY9e307YX+Gfanpsuvy4JG7WjeR0M4rUPENVmCpUIn0Bv0idve2CnhXhlSo7+dWaNU6VO5MEmT1w+MsUHza/AWpS0XvAGXbL1K/m/E0Q39QvN/pibxvxRKlIo2kkMARYspNwVEj5np88ecd4fRor5iNUpsLXJM+kEmflGBvBeBOxNZ8ytMNplgutm130hTFxEHftgg1OXutg1XxQLyXCK+gLDKHZYkPpM7bWNrz22x1ulS5BSkBQAHiATK2VY+Ek9Z64F8JzLABSIp0xz1SBT1veyi7AgWIAtAgjBXg9Ca3maSAFADMRMm6kRuYJufTHL6nL7jr6NIR4oKtSIpDQoNlgbRHT2G3tiLN6yaQVb+YGafwJaf02x7WqvVZlAU0wIM7nrE9iYB/TEVfiVJir64BVqYAAIU2J6/EYA7Wxzqu0WQ8ZcsqKoZmLRMQB+LqQCdN9+2JMlQrXq1CZgaaQJKgxF23YxvEfOMWMjSWkDLKYJloM3NluTebT/bEdXODyeQlC0gGRIGogkfPvGHdCKfEsz5QrJTpoqlpLcsBjuziZm2APAuKNWzoYhlLU9G24ALaltMW/vjfN5BalY0xXYghlYFZVIkhpm53Pa++M8O8OosxrsTUdLrzXABMEyYk2EbQcaxqm2D0G2q+aaS6FIuQDO8A6rXiOvfAviVLLo0rTQDdhp+KCJLA/qe5+ZriGZTL00VIZlIloWYNyR2sTAHthIzVCm7Fkb7xqwI0ltJRurrufbobnqcTjjb7GSUEFSo71aYSmzggzB1DmWALsQCCPcYMcXcOURgFBprp8wRYFoM79/a3fArJVFNIhlQharC53C2A0mwaZAkQItiWnmmrNDkOtPSaZIEkDmjUGlZCkm3640krd/Qke8OzNJaQmdQJdixg2J5STAEGO9/fHuWppUqjMA6nFlIG4I1bd4GwwJzsfa6qPTLoJWQsAaiSFPdJ7dcbZGuF0yWp6WYQBJ9G2gbXIMEhTtfFSx6bX+2CfgZapPmFTzcwiT+GB8JnpER1M2xKtGKVWSSCQRquIEG46bbYo5xab+XmpJCWKSFC6tyZgW3v3xpSz61qjUtTgqBDaojqGg2YdSI+uMafZRlTLljUcXpn8IMQsabSfSQNr+uCnD2gNR1R8I5olQE7dR1kYq13YVEhVNNgoLT8TExP8326YsJ5Y8xgxlgEUneYNwDtYi4wm2wIuKUwaYK2AYMJBPzIjYzHa+J1oNq1AiCBqgkQQCAes7+lxiHNu5pFqZVjBFjMmYkWO8G3r0jE2UPKUKsqC08vTeQCdyY/wDXvhdIdG+aUaCwN15iRsel5F9sUs0QwDFNS6TpMdTt7H+3ti5QMzEsxSAXiTuJgTY+om2KNMFFkmOWAN9MRIBjmF72tHrhL7EVeA8YNRQDzEC4MWqLYz6fmMENBM8pOptXQ/KRaw267XxWyyEliFRYuTHK4t6e1z89sW20UqbwzQTN4gajeCIt9d8VKr0CKYpHUWkv2OmAsd5vtcyY3xzDO8LZajjYaiQDoEA3FtXbHWWYeUHuDJELfa3S/wDzOKprUlkatUmZK6rNzC8XgGMdfpMnFtGWWNgmrwTKhSjuW9CxMn0E7404DwA5YGvl018wDSdkB5lSdz3PyGLZ4OuWybO4HnmmxLD8E9F9u++CXhDiqPkqABuiBW9CLGfnf54z5SjF1K1dP6G6b6ETiHHjRztTTJUxJi0i0n5Yi8Q+JUqBAIBblcxMKSCY9bYZPEORjOMyUyy6FLQJ0m/7YBcT4YlWtQ8oKrmooJgRG8kbGBjphLG5pteDNqVHQeG8PqPRV2coSBA0gmItPQe2B/iLP1csiliCll1gbHpI6Tj3O8XZBoLiQOwgjuLf2wu8RzBzf3BYilZqjegMgL6n9jjhxw5y+XRq9IqZvidSu1OGZgZYMQAsC1oHy+uCXGqoNPyyIAQs5Fot/wA4DZzjVIZhaaQtKjT0j0jce9vrjzMZn7RTYK2mkTDOdzPv0x2PG046pEJrf2AvDNAsG0KWcwAAJ/4G2C+urkTqdlbXcoNx6+uH7KDK5SiEogADcgSWPcnqcKnijK1qyF1Tl7tCz7SROLeZZMlP9LIUXGIP4lxHzqNOrJA1HlvHYHbeZ+mGzgHHqTrop0VGkLCkcysSCSzN8U3Mg7YRs9l28ynlqY1EaUgTzEC9pnefphy4T4bSkwdnEG5i4PTSOYOVidz0weojjjDi/wCxUG27CFfij1KlCigUeYQoW7RMySQLER09cN+XWqCqbhVOsqIlpt1kCOpONaNRWTVSQOQw09B6lY2jvvY4hq5unSFSqLRIC69UmO09+m/1x5smmlSNiQ0lp03LDSGkuSxkdo/p+V9sC+HrR0KyPoAtTbVLadUHSNxMbnt2xRznEmqa6ZLDSpGmw8wuYk2kBbn6XxV8PZNGzNNgKkLT5WMQ02C3F5336djhqNLYDFxupTRCiyGtBA1HqJjYHf2wD4HldVI01pmQCSTZSS8SYMNA2Hvg14mIGidKAC5JEgm0AA3vv0wsUOO/d1MvRFUikAysFmZa9tydPe1rWwRi2nQWj3L5SpQ8wtqaneSZGphyuRaQpFvlYiMWeGcVp02JphYanTkobTJUnoP4cTV6jNT0u7Dy6QFSCPkJnsI/O2FLMZjQDQEqphVaQCKYvcg9zveY6HGsF7liehrXOB3redDEVdCKQNLCJiYkwe3bAjL0OeqHbXpqwpEqEDRGnSZ0iQdracTVcoFqy1R2GiIKLDObk7SIEnvIHrj18ouXU0nmq7iTcysBiJiBYQSDvBwKlpeRlDL0PKpV9TJVdnDDTPMCLKCfxbG3piv4e+zNVNSoGU6QVpmdjMwN56kDe3eMe+dySbagAFBB0k3aR/V2nppvgS+Y8usmlLzraDs2w0/MTHSTjqjFyUl5M26oYuMpUZKap935jFqjSNt+Ybap6C0D0xHwnMEuhcNqplvwkaRM6iO21jMTjP8A5XRQIamSpBBUjrtPN2IN/U4I0Cw88qC2pVg7alYc2mD+YgyDjG2lVFVuzdG85fLFHRzDzFD/APlpnpNxP7HE/CcmoZqJnXDgPp/CxbuL32HYHpivlciNXI8VARqtZg20LOoct+sHqb4s5jNlagruGhSFAPb4dTCfxcwAA/F3OMn9Loomy1Ypf4lpoGIEmVNpVvQiYxK9QaqiiQWgkcoJEbn0m31x4QCigOysbK3LsRcRa0AWN7k4q/ZqxfMVFYEmByr8PKI0k9IM3NvrMJWNljIZhF+5J0uJOnSDIkRq02mOuJKOVCGoEYteSWMlAwEAd49e3zwE4xTY1WqBiNkITuvMTF+WCYE972wfy+YmmSpBbQWEQNYA3O8QbTbbBNUteQI+GUIXXpICEqCTeCRBNzYm1ugxlehzazpvqBkdNxHYqCTMXn0tpwzPg0mHKdINgbHTJgHv69+uKa8RLZg0iXGpJF9pABKmNrdT06ScJJtugLaUzDLqHmaSlrxMnoJJAIvjbLqfLFN+ZlAuL2Mdx27dsScJyzKfvGOtRcgQCYgg+39Xe2PKEQGAuTDEbiBF5FgDa/cYTdMClSqjSVdtNSzKdhdtIIt+XvtOKVXhh1E+YtySdxfrYGMXswuqlJIIdoCwYWJBBiDeOhFiPfA+plahJIelE2liD9A0Y3xd6IkW/E2YFSKJt5jhT/tm/wCQOLXEOAJTon7MBTcXUgWJ7MOowoeJuKxXouvwByzH3sPpc4cKvG0NGQwJiQAd5FsKMJRhEG9szgWZ+7V3bUzLzHuYwicQcrxWmqbFlb0EzJ/fDV4N4PV8gNmW0C+lAbkdyenyxezvh7KGWVGDsI1B3n5XxWOaxzknvtEyVpUG3ztOmgVRaNz/AC+E3xjQfMeWKFJ3KvLlAYCxs3uYtgBn6XEkDBgSFmHJkkDqFBN/lh8yviClQy9NVKzpEdSxi5Pz3P54qMXjqVp/sTdnMeOZpQWosgBA2IuG/bAujxGU0TygW/nfF/xTm/PzOoA7QzfO36xipxPg2mklXQVViLnreJHWPXHo41Hik/JjJu20E/DOequxkFqNLmcjcDt6+2DPiXjwrhSsljC+i9ITsDO4v64sf6cummrRQMT8W3QgC/pI/PFHxbwUUmDCoF5pKwAN5xytxeaqo0V8AVxMMmZdyxXmeGvygNAsI2H1w88H4wtKmqsuYbSgdSwZQbARP9IkmOsjthC4zmyudYlQYcsAT66hPvY94w9cN4nUr+W9enTDOF0yxaBJFpIAMc0GRbFeqXxTaHjavQz+HM0aqU6lkDueUWgQSB8zed9sDOJZPVUqrTQnmuzjnk/0AiNMjeeuCfBOHGkqByAEbabmFNhKiLyf+MaZ+tLXqGml9ioLsrQO/KIIvGPMuno3BdHIvTUEstIkBG1ONSLv/wDsZWf5Nzhaim2XC0Zp35oMyJ5gbekT0IxUzhWtVViUanTawiRBuNU/iO8X2G2CvFqQ0Kj1ytQGQ1wDMyT6EGLflinJBRU4nka2apeYYU6iApXUCCRM9R1I98RZngFIkzmPKaOaAA9SwIk2EA7L2wS4tU/6ZAu3IzN8MaiJ1COs7dsL/ijMITqRkWxFi2piCZBBJAkWAibnacGNvpMTL3G8mHikGJRlCsoiSFu0nb4bz62wP4n4dSnSo1AHLk30mdQGwJI2E72nEUrSfUDrBppCOxN55wSZ9BMbTghxbjRr0TUA0Bh90WEQNJkgGbg6bxGKuUap6H2AuK16qqtaomkatXxaSxYWDAXIj23G++JM7lKrHzVNPUQTpBJJ5ea49Jt6b8wixxEPVp06o0O6OGJIkHT+EkmxJkxFz2xHxXijF6NUKsVIYtNlkgGbwenLG+k9DjWPil9kv8lGvlXpVg4UEVVudI3m6yRe2x9um9/gnlPScFAKSEtUMG4AA0z31z33OMz/ABilR5SpKuvxBmIba4sb6hsBaDfEHDuJqMvVUpEyqERdrQd5MEhiffth/KUbr6BJJ0VOK5VqbeSoLIzFpBMAgkQ5MACJEA4IUw0grp1q/KJEwNpiZUdYPUDFzM1SpXVJBRYJUMDBlnAI+Ik3+WIOK5anTqCsyDQAwJVTP4YNjaLtqABkR1xPPlSY6ogfijrV1sAqowpbCSW623WATJ22vi/k6XJoZiSyhmYiQxYwoAmygR6bjpgRx/htTM6fJAkgMxPKYi5N/i639sE/DNYGnSDrJVXQkMehkSNxeZJ7dcE0vb5IF3Rc4rliV00yGqm+mQDOkDUOloG/Y4F0s0ZplkcwQGqf0teSxnsD0gwNoxefKBaw1ttp1FptE2BgG/xGMaVqzvUpMBKCQwRwV1LfU0wSTzQbG99sRF6oZcpUnFOdYZ2uptI/23O469JOI2zH36wHYi2oG/QH/cJ+sgYipUPLDeTLQpbfcNMSpjmEn6Tih4e4k2n/AKhtLlQVIHMwDHr62ibb4XC02gsPNUVcwJCjzFAHbVsT7+sRgbRyflVyObTUPMhGrY6ZU7AXgjBWgTWoxVAluYaGuDeIO8gRt64o8XJZKsMNdFVMHoJ1AK4/GSOtrjCj3X+RssZem4qNre1M33lpvOK6Z/7+pSKgTdGE843M+oO/rjenQJVqmttRCllnlBHUbQIkkTe+J0RaiqQwBDsyQTYmDe0gET0+WF+4FZKZpKEjUpOoTve8/KSLxHTAP/8AIcusqyoxBMlkBPzMYNZ2vKaAZY8pEEhYa9wJE/EY6YQOMtlDWcvQqs1pam4CkwPhDKTHS5x1elgpN2ZzdD/wHh9KqPOqqDN0RlmB0JEb4G+IjTWWMKP6gLoPQD5Wwa4Z4a8nLhDXqM8TqkET2EiY/P1woZ/gebzOa+yyEpqNTOJjT7TJY7Qf0xOKpTavS/gHKlZdpeKQyX/DaP3PphoyObVMstVzzVBq+R2A9MKnE/AlCnTgVapb+pmWPmNEfX64LeBcmK9KoKxZ1pnygG2MAHYe4xOTHj48oPyJOXks5LiVKsSSA46WsI79D/g4HcX4HlnYMR5YBljTtK9Ra3zF8ScZo/ZQxoIqjeALEjcencYr8BpVM9TLyaVM7MBzHvoG3zP0OJgnH5xdIHvR5SyWWr16dOny0ANbJsGC3E9TzRv0nAjxpntbAg2BlR2E2H0wS8RVaWTDOjVKlXR5YapVLQpI1WiJtFo64Ss1nhWKrN3Mewx04YOTUvBnJpKg8vik5dXCX1CNYGmImR+eFfiXFvMkkkk97nBvi2T5ERASTygDeTt9cE04f5dGnTqZUrVMCNIaT6wLT6nrjaLxxXKiXyehZzoaqRVmZRfi3YgaSBboI+ox07w3xSnl8rRS1Sowny6S88EnSY6tf4u03thH4twt6KeWYDAawoMiDAKibz/YY08I+JfsjVYph2ZQBIuAN7ne3S22KzR92HxCD4vZ1XNcRBdKA5qoAZmdSypIkHt88ecRydE01aoVbQ2rVyANpkkEG2mdx64q5LiQBHksDH3lU6SCwIBBMWBNgADteMEEzVOpQV6wCozwqgCDeFnl26/vjyacWdIKp8GSo3mLVddcufL6AQouQIJht7bwMe+JMyooo4QuTUO/v8MydwNt8E85VSnVLO+lGpaEQhhZSJ/I9L7bXxFmwn2fzPKBCwVGplCgjTqaD8U9yTHbD7asd0WuMvVqZSVAErqINrC5ECZ9vTCpTyIqeXUjzAVZwo5SD3i27EAE+vfDNxDMVQ9OjTa/lwzgggFhaT6wT3jbC9m/u6gpl2JaNRBBSaUtAkWMAR636YcOxAzMZT7S0la1Iq2ltPdbAKReOb6gYvZmlrp1A1F3ZFICmYBkgMLS2mAOWdzOPch4m11RTemYqEANBK6ZjqI+Lb5YhfiDIaivEBdLErzS7fhIMwOoEdPTGvytJ+Og0bcCpGpl1KMBCkAtIhmsSCLxYQSI5t8Us1kicuziAKC6TTKiAVie2uSNQ9IOMfij1nFNaWlBBEMQxC9hMAfLBOrwdlpHTWIJYFZUH4m5lvAaSR2tBM3Bd8XvVsT60Ds3lzXQHQKZKsE0JA1FQQLiJAIBP574myuSK6Kdd/vPLJp1GgBWJ0wCL7fK8xYnG+R4oaIUZhfuwYi1zcdezDYG8DpbE3Gc7U8rXl4GkkuSo2E8og/De+9j0wrlfHx9hXkhzwJpxSNTUhEFZMAnm0i+q8D0tgiazwo/CiiGETJgKCDuCJuoiJ7DCdluNA0/MWq1OrTkQDZh03JB9hfeTthvoZ6hXdAH1eYsyJUqVUxBkyLmAME4OHY00yl4frFvvWpspljqtp1E2BEXEECALY1yetUUGmFlgzOpBsjc3tAER88EeJcKApfDpNOna+leW9yovJE3+uNuHUSKJlw0KTqB+AxcsLTMkE/wQ5xe0NJlXK8QPKlUMhJIp1DBJj4VY9zB9JkHEfD6oLPqKroIZUWQeewJ35bi3riKvmhRCh6gKsYQtBkgdGIOkTsZ74i4SlQgOampFnUYPMtgLgEEAiLXjvimlxsXkLDMqarsI1MZAFzAAEm8gfS+AFRaNKoTUlnKkqW1QiizKeimSbjt63Ku1KvUBXUvR2WCI3EgEE/rbFagiVatQsrEjSBqEgX06lkRO0hrdx2Iab76CRc8MZsvRAhlbRAD9bAqZOwgj3nGeInWlqUiTWptAEy7KNr2MCIxF4czQ0HVp0sSFYkdgJJEW7Rtjbxdl9aCwDKVg3G22mOYG8fM9sSkvd30N9EnhnNA01XSRrEsm8SDLA9RNsScKYEASLEhLggASvNHoCJO2AHC0+zRSYsrFi4adQC3hd7C+3f1wwsoFLUSuuBdWuwJ6e8Dv3th5YpSddCi9FHiGZFKkzuWdWBbUTpuNheGBPoDjl2ZzdSoxdnqEsZNzg54vzTsyUObkF56+pI3PtYYGU8vYREfPHpemx+3G32znyS5MeuFeKgUU6jIG/8ADiA+JnGZDqG8spBbSSBedwP+Jxv4U4XlqOYVqiBt4kSJ6GMdFznEFH4o9zjz5vHjk6VmqtnOM34iL8oAbULaG39hJ+lsXfAObemlelUpvTJfWupSsggbEgTEYscRbK0c3TzJ0q8w0DeRGogWt33jDHxDM06ie4/kHBJx4VFdjd3YF4vmAVMwcLHh7xGaeV0KQAOvWP2GKXEs3mTVbLCGLtpVjb4tp6Te5wW4h4Ap0qYU1amvfUIie0Rt8+2NFDHCPHI+yLbeheWi+fqlEnSOZz2H+cV+NcPp5dgU3p9e56j26fXBnwpxRcilak3/AHHflMfh07/rbvirwrLLnMzoYzTTnqevYY6eTi/+K/7M2k1+S34U4gK2by8i2om+1gSMMHj6tKBhZlsT6bGfnH1OBPFM6KDqKS6qhZdCgbdIH6e5OGzimRorSJzCio5EuCTCyNhfc9/8TySl84zS0bJUmn2ctqZhtYRpLaFN73iT+RxUbIw4K/ATvPwkXI/t6Yv8PyBzWe5nVEDFmY2gdAB36Rj3NRSqvT3WZB66ZlSJ+X1x6Skk6X0c1XtjR4RzaIj5epU0eYS0afj5QI1EwDssRa/YYdcijrTpwigTYaiymYA6SBAj0+cDkiUCC7tU1BmGltgw3+RB/D0g+mHjwz4h+0BMq6kaRpVl3eFMXmS1tXQSBG5xxeq9O/1I3xz8BnP8QUVKlRqSOI8tWjVBIBZfW+/XAjNcWqV1qqz8t9QK/Atzc2kGIjeRGD9HJOeZ2VtKGAjMLR+IWOk953+uI8uy+UK/2dVLXbVFlkgSNza89AR3xyJpLZr+xU4lmDXSkSiu1NQQBJm0C6G4M+gAGAVOihqUqtSmKTPKaLkatkaJJeSYkf8AMGaoVKma0kDSyDYRpB5xEWA2X5YM0qyrVSJhdNKnvyltzFlJuoAib2N8X+lfdggXmeGplg2iuzupGlWEIDuQDJ3g+mIa/E/NMgMDTcsSB8UiAQQLAm3rAxZ4pSFeu0UtSo6+YrbAbEMDvtE9CMEavEKlM0glMLRVwptET8KoQNpH1IxSl1e2FfXQBo5x/tra6T3XQogiwkcw7evtghnM15vlIpYVyT5em6BZMEk7gqCPQn0x5Q4nUWqXaJZguhm6x+G3w9d7z3weyXDlNGowYMYIWVIWGgxuTvAnoJFpwsjSabXgEAcnUFar5Qe6kagVEFh0frvMeuCdaiwaXLEyVphRMtAPPfaQywAJvO+F2nkatDNJysqn4UUkq3Qm5kwD737YJ5gKKlPzGYKtVtwAAUEjY3WZJB7x0wTirVdUCZLxXgOsmo1BZCs2m9w1ukBXBAPpPrarlci4ZWplQVQatQJ6W0tOlhYDvt3wfy3GRUqGkJvcWFiB1AsR+e2KucClCKZcDVEUyRedOqAekE/LELJJrix8UtkWXzLeayzClNJYkQG+K0naD8wMa/Y2ooWS6wzMhtqBEBZmCZm30xUes+XpjzD59N2CswXT8JkX+IERp+W+CfF0qMFZWCAj4LglmAAhpsVJ+owcaaroLK7qMyutkayWVgYNoJPQCevpvjXgpFNAsaeWwEbg6YIvEmT6gDF0I4QrrQNEVAQdit5jcCSbbzgZmQzmg6CW6kCNQgkKZ+ESD73wLarwD0WadLRUWoQRMlgIuy2Di0yZn39DghmKatJYCam5ptPwkMfWQAbdh1xXKgEFNMFBIILbmGAMncCAPTGmdosEFSiFVgQYBJUSwkwNiRMmOp98TfJgWK2VhFCqj9oOkEehGx3+uAtKucwjM7Fb6ZnYTygyIPUT74LjOSGLgliboI2gAlTEEEH4pxHTKK7hCrLpjSLaAJmx2n9vWzWr+wYIqpXUkGzDmJCnmE9Y67zItJxV494jpoQECvUAYELZVMaYPqCAQfQ2xBxzxQVmnl2IJnU8gi6w0dm79r9cK9DKzG8xv6d747sWG/lNGMpeESUKTOV1MWMfiJJA7emDVOiAAALe2IctlwBAsOvrhpynhwsiktpJG0G2NZ5KYRjobfCXBvs+t2CtJhahN4G4G5F8eeIqQqKQYI/qG6+s9cU62f8AIQLqbywYBa+mTsT1HSd+/fFarxlNJ1dt5/n748pvlsuhe8GcJ+0vVrZmHFIlKaXgsBJJHW0WPfEvi4MhU5caTYaVsCPUC0i18XPDeaCmo4kLUbVpa0ECNS2/Fb0tiZ+EtXc1PMCUU3c3M9ljc/4xu8n9T8Lx4Elo569WqMwlUyWDBjM3jpjpvDxUzyEwVQW1EXnsB198ByUAqIBrOiFLKAxIIjaYm+G7J0tOXGlxyj8JMCPYjBlmp06BLic78Y+ElSagqEnrIj6EYWOGZDM0nIoqxL8sKYJi/wCXrhq4px92qmiquamyqBMyOguf50xb8I5gZcvSrJFYi67R7m5O4sLY3jkyQx73+PwQ4xb0BeC8Or0c3TrZhQFWWILqWmDEiZ3wS8Q8bD6E1CDLv7ev/wBv/r2GKfibO6ydh7W//kYF8N8P1mBq1KBZCJWXKlvbuLjeJ6YIpTrJPQN8dICZfOBa4c+pI97nGZziQqVdXVjeOk7D2GJaFLzvulV1ZVJiAbC57HEVLJhCRqWeoMqb+4jHfUbvyYbLeXzRVWRuZCfhP7dj/fDBwbN06JmlT812B0sXdTTW+qYtJt12PTCxoePhMdDY/mMZlsyymVJXoegg7ziWk9DTo6Dw3jVRiDmI0VtS09LDmgQEKrz2Hw9zHfFzKcWOYaqqk1EYaQot5bDuCRa0ASNj3wn5bOq7E3puFiQYs3xQR3BtF8Q1crUpMPJdl0nUpHpFhHcm89scsvTxf4NlNoelSoppKx0qrAEMF+8tHKAQSIJ72xaPPRANJ9etnpyANI3GmTaf6t4A6HCflPFuY5JSiBIUsaZMDqeu1za98M9fi2XqVEb7QdIiIKguQYZbgi4K9vyxxzwzj4/waqSZmYzFMklm8oRLDSxdn1QGK7/UYj45nS+WcamckhIdY2N2AMGZi4xJRzRp6ajCWqDy0GoagJJBBjrsTPTEnDc0rZddZVnUll1NJ3ZvYQP6p7n1mqp10VdilmaFtdSitNwysLiy/EZue8fXa+GDJcYKqlPS0S7KVJl99QFgLdusriPieSqVER0QuatQwuxgzck9LdPX53+HUGFJKdUKmhOQLJa5g2Np2OnuB7HSclKNslLYOrZ1a6adb07seXcFuii59ZIxDxF0oKqqql3ZDIWRCmDvMSN26g9cT5w0RWFRQNgiqLmpeSxueth/a2JOFqK9ODRVPKqFVYqbgghlNvwgEFdtvfBGlvwNi/QSrTzOtDpSnLlSBaN4gGNvUbDrg9kspU11awcm2rypGmHGuJiZBO/TEOV4iBmUpaSaYpmmWdYJm5Ukm8QOxuAd8S53MplxUKAqgFjJEDYrfrMEXkQdxvU23qvBK0bDidLM0alGnLEzCwZBmW02gwSTvP0x7TyNQxROl0Dy8NzaZme4YmI0ztGIGyvleXWTS2sqrQBzMxEmLHULyPXfEuVSpSruxMI73Em5tpJN4EwZJ2GJpK+PX5+yv3J62ZCNPxQpDMVkKRa+na3cd9sRZfLB3UIWVFNwJnWOr32hiBAiR7YuV6IDlwFhpFRGWCRNjB3uWvO2wxZogxrLKAFIPJcXMyw3/D1i2M+VLQA1s4rMQ+imo3YHZtW3a5xvlNS+bT8tiN6bagVIU3iLwD6H4YwJr8by9Ck1Go61W1E6RzCJJCkj1g364WuK+I2q1C1BDSkR0JNgP9oWBtjoh6Zz8ESyJDtxHidLLgLUdYam3Kg5iTBAWB16nCPm+KvXcqg0KQNd+ZvRiNh6C3vgatJ51En3P7nFykqpYHUT6QPnjsx4I499sxc3Ilo5ZNECe/ofbv7YnpRAHffufU/tiDzOguf5t6YN+HuEGqbyFG5/bBklStlxWwp4a4VrPmMOUbT1P9sN0E4jyagIABAAiMa1cyFJBxxOVuzXoG59/NoMpampdSCGa9x/4g4tf6e8Gp5eia1aolWpMLcMqR1Anc9yJGMxmMIzcYtIiSsPZ/MrWVg0FYv/ADocKicaprQFJWAFIsJkG8mWPc9BjMZhxj7i2OOmFOE8EQZc1ao566cq/wBCG4/9jYk+vpgdw7iKUEbLs0BNiT06XxmMxaVtoX5KnhzMURmK9SRqCqobsDLH9vyws8fylevVNTLo7EsZI2APQk226Y9xmLcvbm2t6F2gdU4VmVemKqcpdQ0EbSJ69sdU8QVFRUIHKCPoCD+wxmMxEsryKLaKUaFzwLwtFo16+7kBF+Q1H6kj6YV/GFQNUDQpBnp/OkH54zGY1wtvM7JkviX+H+GDBINNelgSTN4HN+eAfEsgC+lOYgWK/iI3Kjcjbb398xmNMOSUpyvwTJKga1UnfcbfycWcrxJ0YQSY6E9O3oP8YzGY7UjLot081TcAMShBM9FN+/yxOFsSulgZKxc2kAepN7HqR2xmMxDVFJ6IjWqawFJGi8dAOgjY7x9cE0NV0R6dajqYEMhKoKYQqJMsBLlgZETGxjGYzGbKRc4d4j8qtSpp5lTQwU6L6jA1N1m+qy2tbDBxXP8AltUp16tMBoqU2JAK6pEiTIIPp+Qx7jMYTwQc0vs0hJiwaFGPtX2ksabkmRzSRCBdpiAY33IwY4VxqkZXzF0PqLgPdbLJBNiDc/XGYzFywKaqQuVPRmRzVMqrvUpACbqwGvmCqwkmG3n3G+JMr5J1oautUOt2ZgIHSTMsQJJie9iMZjMZvAreyubNzx7Limn3iBhcgc0A7RAmYAkbxOKnGuO06aI1Gr5hYhmQNbaGm0gQbXmYtbGYzDh6aCdic2L/ABfxVVqaUpgIq2Bkse8knr+WANTMV6o53Zqa2AJ0g+nTHuMx2Y8UI9IwnJ2Vgii/X539B0jEtCrBhRY/1X/x+WMxmNX0QbebJvJ/b19sSrOqVgnpq/kfwYzGYzei0HvDnA2quCxgdSf0A74eqdAUwFUQBt+t/X+2MxmODLJs6Yqi4guR/NseVMvJnGYzGSGz/9k=",
        "description": "Aromatic ground coriander seeds, an essential base for all Indian gravies.",
        "tags": ["spices", "masalas", "staples"]
    },
    {
        "id": "p_gr_v6_18",
        "name": "Whole Cumin Seeds (Jeera)",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 119,
        "cost": 105,
        "stock": 280,
        "reorderLevel": 35,
        "image": "data:image/jpeg;base64,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",
        "description": "Authentic earthy whole cumin seeds for tempering and robust flavor.",
        "tags": ["spices", "masalas", "staples"]
    },
    {
        "id": "p_gr_v6_19",
        "name": "Fresh Packaged Juice",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 55,
        "cost": 45,
        "stock": 220,
        "reorderLevel": 30,
        "image": "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp",
        "description": "Refreshing packaged fruit juice.",
        "tags": ["spices", "masalas", "staples"]
    },
    {
        "id": "p_gr_v6_20",
        "name": "Kitchen King Garam Masala",
        "category": "Grocery",
        "subCategory": "Spices & Masalas",
        "vendor": "v_1",
        "price": 79,
        "cost": 70,
        "stock": 450,
        "reorderLevel": 60,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwzde8-Eum5D4L_5H4Nv5_Ft1Rd96mrXR7Q&s",
        "description": "Elite blend of 21 spices for a majestic flavor profile in every dish.",
        "tags": ["spices", "masalas", "staples"]
    },

    // --- GROCERIES: DAIRY & FROZEN ---
    {
        "id": "p_gr_v6_21",
        "name": "Fresh Whole Milk (1L)",
        "category": "Grocery",
        "subCategory": "Dairy & Frozen",
        "vendor": "v_1",
        "price": 52,
        "cost": 50,
        "stock": 100,
        "reorderLevel": 50,
        "image": "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png",
        "description": "Pure cream fresh milk, pasteurized and ready to consume.",
        "tags": ["dairy", "essentials", "perishables"]
    },
    {
        "id": "p_gr_v6_22",
        "name": "Traditional Thick Curd",
        "category": "Grocery",
        "subCategory": "Dairy & Frozen",
        "vendor": "v_1",
        "price": 39,
        "cost": 35,
        "stock": 80,
        "reorderLevel": 20,
        "image": "data:image/jpeg;base64,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",
        "description": "Creamy and delicious probiotic curd, naturally set for richness.",
        "tags": ["dairy", "essentials", "perishables"]
    },
    {
        "id": "p_gr_v6_23",
        "name": "Vanilla Ice Cream",
        "category": "Grocery",
        "subCategory": "Dairy & Frozen",
        "vendor": "v_1",
        "price": 223,
        "cost": 210,
        "stock": 150,
        "reorderLevel": 30,
        "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
        "description": "Creamy vanilla ice cream tub.",
        "tags": ["dairy", "essentials", "staples"]
    },
    {
        "id": "p_gr_v6_24",
        "name": "Farm Fresh Eggs",
        "category": "Grocery",
        "subCategory": "Dairy & Frozen",
        "vendor": "v_1",
        "price": 159,
        "cost": 150,
        "stock": 120,
        "reorderLevel": 25,
        "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp",
        "description": "Dozen farm fresh organic eggs.",
        "tags": ["dairy", "snacks", "staples"]
    },
    {
        "id": "p_gr_v6_25",
        "name": "Fresh Paneer (Malai)",
        "category": "Grocery",
        "subCategory": "Dairy & Frozen",
        "vendor": "v_1",
        "price": 183,
        "cost": 170,
        "stock": 90,
        "reorderLevel": 20,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPglvO5NgJOCEIXtZUzunl7v3X3pqKXrWrsg&s",
        "description": "Ultra-soft Malai Paneer, perfect for grilling or authentic cottage cheese curries.",
        "tags": ["dairy", "essentials", "perishables"]
    },

    
    // --- GROCERIES: BREAKFAST & SNACKS ---
    {
        "id": "p_gr_v6_32",
        "name": "Whole Wheat Bread (Large)",
        "category": "Grocery",
        "subCategory": "Breakfast & Snacks",
        "vendor": "v_1",
        "price": 44,
        "cost": 35,
        "stock": 100,
        "reorderLevel": 40,
        "image": "data:image/jpeg;base64,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",
        "description": "Soft and healthy high-fiber whole wheat bread, baked daily.",
        "tags": ["breakfast", "bread", "staples"]
    },
    {
        "id": "p_gr_v6_33",
        "name": "Digestive Wheat Biscuits",
        "category": "Grocery",
        "subCategory": "Breakfast & Snacks",
        "vendor": "v_1",
        "price": 47,
        "cost": 40,
        "stock": 250,
        "reorderLevel": 50,
        "image": "data:image/jpeg;base64,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",
        "description": "Tasty and wholesome digestive biscuits, a perfect tea-time accompaniment.",
        "tags": ["snacks", "biscuits", "staples"]
    },
    {
        "id": "p_gr_v6_35",
        "name": "Instant Masala Noodles",
        "category": "Grocery",
        "subCategory": "Breakfast & Snacks",
        "vendor": "v_1",
        "price": 9,
        "cost": 8,
        "stock": 600,
        "reorderLevel": 100,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-ZFjQjeMAzIGZcfalRaPzdkKIXjoJ2PMTw&s",
        "description": "Iconic instant noodles with a signature spice sachet for a quick professional snack.",
        "tags": ["snacks", "noodles", "staples"]
    },
    {
        "id": "p_gr_v6_37",
        "name": "Pure Natural Honey",
        "category": "Grocery",
        "subCategory": "Breakfast & Snacks",
        "vendor": "v_1",
        "price": 447,
        "cost": 400,
        "stock": 120,
        "reorderLevel": 20,
        "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp",
        "description": "100% pure natural honey, a healthy and premium alternative to sugar.",
        "tags": ["breakfast", "spreads", "staples"]
    },

    // --- GROCERIES: HOUSEHOLD & PERSONAL CARE ---
    {
        "id": "p_gr_v6_38",
        "name": "Boxed Blender",
        "category": "Grocery",
        "subCategory": "Household & Personal Care",
        "vendor": "v_1",
        "price": 36,
        "cost": 30,
        "stock": 400,
        "reorderLevel": 80,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
        "description": "High powered boxed blender for smoothies and shakes.",
        "tags": ["household", "kitchen", "essentials"]
    },
    {
        "id": "p_gr_v6_39",
        "name": "Tissue Paper Box",
        "category": "Grocery",
        "subCategory": "Household & Personal Care",
        "vendor": "v_1",
        "price": 231,
        "cost": 190,
        "stock": 250,
        "reorderLevel": 50,
        "image": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
        "description": "Soft and absorbent tissue paper box.",
        "tags": ["household", "cleaning", "essentials"]
    },
    {
        "id": "p_gr_v6_40",
        "name": "Packaged Drinking Water",
        "category": "Grocery",
        "subCategory": "Household & Personal Care",
        "vendor": "v_1",
        "price": 28,
        "cost": 22,
        "stock": 350,
        "reorderLevel": 60,
        "image": "https://cdn.dummyjson.com/product-images/groceries/water/1.webp",
        "description": "Mineral drinking water bottle.",
        "tags": ["household", "cleaning", "essentials"]
    },
    {
        "id": "p_gr_v6_42",
        "name": "Nescafe Coffee Extra",
        "category": "Grocery",
        "subCategory": "Household & Personal Care",
        "vendor": "v_1",
        "price": 119,
        "cost": 100,
        "stock": 180,
        "reorderLevel": 40,
        "image": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp",
        "description": "Rich and aromatic Nescafe coffee powder.",
        "tags": ["household", "cleaning", "essentials"]
    },
    {
        "id": "p_43_42",
        "name": "Decoration Swing",
        "category": "Home Living",
        "subCategory": "home-decoration",
        "vendor": "v_1",
        "price": 3839,
        "cost": 2400,
        "stock": 47,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
        "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
        "tags": [
            "home decor",
            "swing"
        ]
    },
    {
        "id": "p_44_43",
        "name": "Family Tree Photo Frame",
        "category": "Home Living",
        "subCategory": "home-decoration",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 77,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
        "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
        "tags": [
            "home decor",
            "photo frame"
        ]
    },
    {
        "id": "p_45_44",
        "name": "House Showpiece Plant",
        "category": "Home Living",
        "subCategory": "home-decoration",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 28,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
        "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
        "tags": [
            "home decor",
            "artificial plants"
        ]
    },
    {
        "id": "p_46_45",
        "name": "Plant Pot",
        "category": "Home Living",
        "subCategory": "home-decoration",
        "vendor": "v_1",
        "price": 959,
        "cost": 600,
        "stock": 59,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
        "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
        "tags": [
            "home decor",
            "plant accessories"
        ]
    },
    {
        "id": "p_47_46",
        "name": "Table Lamp",
        "category": "Home Living",
        "subCategory": "home-decoration",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 9,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
        "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
        "tags": [
            "home decor",
            "lighting"
        ]
    },
    {
        "id": "p_48_47",
        "name": "Bamboo Spatula",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 511,
        "cost": 320,
        "stock": 37,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
        "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
        "tags": [
            "kitchen tools",
            "utensils"
        ]
    },
    {
        "id": "p_49_48",
        "name": "Black Aluminium Cup",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 383,
        "cost": 240,
        "stock": 75,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
        "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
        "tags": [
            "drinkware",
            "cups"
        ]
    },
    {
        "id": "p_50_49",
        "name": "Black Whisk",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 639,
        "cost": 400,
        "stock": 73,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
        "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
        "tags": [
            "kitchen tools",
            "utensils"
        ]
    },
    {
        "id": "p_51_50",
        "name": "Boxed Blender",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 9,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
        "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
        "tags": [
            "kitchen appliances",
            "blenders"
        ]
    },
    {
        "id": "p_52_51",
        "name": "Carbon Steel Wok",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 40,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
        "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
        "tags": [
            "cookware",
            "woks"
        ]
    },
    {
        "id": "p_53_52",
        "name": "Chopping Board",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 831,
        "cost": 520,
        "stock": 14,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
        "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
        "tags": [
            "kitchen tools",
            "cutting boards"
        ]
    },
    {
        "id": "p_54_53",
        "name": "Citrus Squeezer Yellow",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 575,
        "cost": 360,
        "stock": 22,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
        "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
        "tags": [
            "kitchen tools",
            "juicers"
        ]
    },
    {
        "id": "p_55_54",
        "name": "Egg Slicer",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 447,
        "cost": 280,
        "stock": 40,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
        "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
        "tags": [
            "kitchen tools",
            "slicers"
        ]
    },
    {
        "id": "p_56_55",
        "name": "Electric Stove",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 21,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
        "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
        "tags": [
            "kitchen appliances",
            "cooktops"
        ]
    },
    {
        "id": "p_57_56",
        "name": "Fine Mesh Strainer",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 639,
        "cost": 400,
        "stock": 85,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
        "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
        "tags": [
            "kitchen tools",
            "strainers"
        ]
    },
    {
        "id": "p_58_57",
        "name": "Fork",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 255,
        "cost": 160,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
        "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
        "tags": [
            "kitchen tools",
            "utensils"
        ]
    },
    {
        "id": "p_59_58",
        "name": "Glass",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 319,
        "cost": 200,
        "stock": 46,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp",
        "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
        "tags": [
            "drinkware",
            "glasses"
        ]
    },
    {
        "id": "p_60_59",
        "name": "Grater Black",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 703,
        "cost": 440,
        "stock": 84,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
        "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
        "tags": [
            "kitchen tools",
            "graters"
        ]
    },
    {
        "id": "p_61_60",
        "name": "Hand Blender",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 2239,
        "cost": 1400,
        "stock": 84,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
        "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
        "tags": [
            "kitchen appliances",
            "blenders"
        ]
    },
    {
        "id": "p_62_61",
        "name": "Ice Cube Tray",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 383,
        "cost": 240,
        "stock": 13,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
        "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
        "tags": [
            "kitchen tools",
            "ice cube trays"
        ]
    },
    {
        "id": "p_63_62",
        "name": "Kitchen Sieve",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 511,
        "cost": 320,
        "stock": 68,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
        "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
        "tags": [
            "kitchen tools",
            "strainers"
        ]
    },
    {
        "id": "p_64_63",
        "name": "Knife",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 959,
        "cost": 600,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
        "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
        "tags": [
            "kitchen tools",
            "cutlery"
        ]
    },
    {
        "id": "p_65_64",
        "name": "Lunch Box",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 831,
        "cost": 520,
        "stock": 94,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
        "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
        "tags": [
            "kitchen tools",
            "storage"
        ]
    },
    {
        "id": "p_66_65",
        "name": "Microwave Oven",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 5759,
        "cost": 3600,
        "stock": 59,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
        "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
        "tags": [
            "kitchen appliances",
            "microwaves"
        ]
    },
    {
        "id": "p_67_66",
        "name": "Mug Tree Stand",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 1023,
        "cost": 640,
        "stock": 88,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
        "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
        "tags": [
            "kitchen tools",
            "organization"
        ]
    },
    {
        "id": "p_68_67",
        "name": "Pan",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 90,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
        "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
        "tags": [
            "cookware",
            "pans"
        ]
    },
    {
        "id": "p_69_68",
        "name": "Plate",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 255,
        "cost": 160,
        "stock": 66,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
        "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
        "tags": [
            "dinnerware",
            "plates"
        ]
    },
    {
        "id": "p_70_69",
        "name": "Red Tongs",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 447,
        "cost": 280,
        "stock": 82,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
        "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
        "tags": [
            "kitchen tools",
            "tongs"
        ]
    },
    {
        "id": "p_71_70",
        "name": "Silver Pot With Glass Cap",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 40,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
        "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
        "tags": [
            "cookware",
            "pots"
        ]
    },
    {
        "id": "p_72_71",
        "name": "Slotted Turner",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 575,
        "cost": 360,
        "stock": 88,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
        "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
        "tags": [
            "kitchen tools",
            "turners"
        ]
    },
    {
        "id": "p_73_72",
        "name": "Spice Rack",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 79,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
        "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
        "tags": [
            "kitchen tools",
            "organization"
        ]
    },
    {
        "id": "p_74_73",
        "name": "Spoon",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 319,
        "cost": 200,
        "stock": 59,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
        "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
        "tags": [
            "kitchen tools",
            "utensils"
        ]
    },
    {
        "id": "p_75_74",
        "name": "Tray",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 1087,
        "cost": 680,
        "stock": 71,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
        "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
        "tags": [
            "serveware",
            "trays"
        ]
    },
    {
        "id": "p_76_75",
        "name": "Wooden Rolling Pin",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 767,
        "cost": 480,
        "stock": 80,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
        "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
        "tags": [
            "kitchen tools",
            "baking"
        ]
    },
    {
        "id": "p_77_76",
        "name": "Yellow Peeler",
        "category": "Home Living",
        "subCategory": "kitchen-accessories",
        "vendor": "v_1",
        "price": 383,
        "cost": 240,
        "stock": 35,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
        "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
        "tags": [
            "kitchen tools",
            "peelers"
        ]
    },
    {
        "id": "p_78_77",
        "name": "Apple MacBook Pro 14 Inch Space Grey",
        "category": "Electronics",
        "subCategory": "laptops",
        "vendor": "v_1",
        "price": 127999,
        "cost": 80000,
        "stock": 24,
        "reorderLevel": 10,
        "image": "data:image/jpeg;base64,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",
        "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
        "tags": [
            "laptops",
            "apple"
        ]
    },
    {
        "id": "p_79_78",
        "name": "Asus Zenbook Pro Dual Screen Laptop",
        "category": "Electronics",
        "subCategory": "laptops",
        "vendor": "v_1",
        "price": 115199,
        "cost": 72000,
        "stock": 45,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
        "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
        "tags": [
            "laptops"
        ]
    },
    {
        "id": "p_80_79",
        "name": "Huawei Matebook X Pro",
        "category": "Electronics",
        "subCategory": "laptops",
        "vendor": "v_1",
        "price": 89599,
        "cost": 56000,
        "stock": 75,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
        "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
        "tags": [
            "laptops"
        ]
    },
    {
        "id": "p_81_80",
        "name": "Lenovo Yoga 920",
        "category": "Electronics",
        "subCategory": "laptops",
        "vendor": "v_1",
        "price": 70399,
        "cost": 44000,
        "stock": 40,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
        "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
        "tags": [
            "laptops"
        ]
    },
    {
        "id": "p_82_81",
        "name": "New DELL XPS 13 9300 Laptop",
        "category": "Electronics",
        "subCategory": "laptops",
        "vendor": "v_1",
        "price": 95999,
        "cost": 60000,
        "stock": 74,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
        "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
        "tags": [
            "laptops"
        ]
    },
    {
        "id": "p_83_82",
        "name": "Blue & Black Check Shirt",
        "category": "Fashion",
        "subCategory": "mens-shirts",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 38,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
        "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
        "tags": [
            "clothing",
            "men's shirts"
        ]
    },
    {
        "id": "p_84_83",
        "name": "Gigabyte Aorus Men Tshirt",
        "category": "Fashion",
        "subCategory": "mens-shirts",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 90,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
        "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
        "tags": [
            "clothing",
            "men's t-shirts"
        ]
    },
    {
        "id": "p_85_84",
        "name": "Man Plaid Shirt",
        "category": "Fashion",
        "subCategory": "mens-shirts",
        "vendor": "v_1",
        "price": 2239,
        "cost": 1400,
        "stock": 82,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
        "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
        "tags": [
            "clothing",
            "men's shirts"
        ]
    },
    {
        "id": "p_86_85",
        "name": "Man Short Sleeve Shirt",
        "category": "Fashion",
        "subCategory": "mens-shirts",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 2,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
        "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
        "tags": [
            "clothing",
            "men's shirts"
        ]
    },
    {
        "id": "p_87_86",
        "name": "Men Check Shirt",
        "category": "Fashion",
        "subCategory": "mens-shirts",
        "vendor": "v_1",
        "price": 1791,
        "cost": 1120,
        "stock": 95,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
        "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
        "tags": [
            "clothing",
            "men's shirts"
        ]
    },
    {
        "id": "p_88_87",
        "name": "Nike Air Jordan 1 Red And Black",
        "category": "Fashion",
        "subCategory": "mens-shoes",
        "vendor": "v_1",
        "price": 9599,
        "cost": 6000,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
        "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
        "tags": [
            "footwear",
            "athletic shoes"
        ]
    },
    {
        "id": "p_89_88",
        "name": "Nike Baseball Cleats",
        "category": "Fashion",
        "subCategory": "mens-shoes",
        "vendor": "v_1",
        "price": 5119,
        "cost": 3200,
        "stock": 12,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
        "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
        "tags": [
            "footwear",
            "sports cleats"
        ]
    },
    {
        "id": "p_90_89",
        "name": "Puma Future Rider Trainers",
        "category": "Fashion",
        "subCategory": "mens-shoes",
        "vendor": "v_1",
        "price": 5759,
        "cost": 3600,
        "stock": 90,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
        "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
        "tags": [
            "footwear",
            "casual shoes"
        ]
    },
    {
        "id": "p_91_90",
        "name": "Sports Sneakers Off White & Red",
        "category": "Fashion",
        "subCategory": "mens-shoes",
        "vendor": "v_1",
        "price": 7679,
        "cost": 4800,
        "stock": 17,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
        "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
        "tags": [
            "footwear",
            "athletic shoes"
        ]
    },
    {
        "id": "p_92_91",
        "name": "Sports Sneakers Off White Red",
        "category": "Fashion",
        "subCategory": "mens-shoes",
        "vendor": "v_1",
        "price": 7039,
        "cost": 4400,
        "stock": 62,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
        "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
        "tags": [
            "footwear",
            "casual shoes"
        ]
    },
    {
        "id": "p_93_92",
        "name": "Brown Leather Belt Watch",
        "category": "Fashion",
        "subCategory": "mens-watches",
        "vendor": "v_1",
        "price": 5759,
        "cost": 3600,
        "stock": 32,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
        "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
        "tags": [
            "watches",
            "leather watches"
        ]
    },
    {
        "id": "p_94_93",
        "name": "Longines Master Collection",
        "category": "Fashion",
        "subCategory": "mens-watches",
        "vendor": "v_1",
        "price": 95999,
        "cost": 60000,
        "stock": 100,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
        "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_95_94",
        "name": "Rolex Cellini Date Black Dial",
        "category": "Fashion",
        "subCategory": "mens-watches",
        "vendor": "v_1",
        "price": 575999,
        "cost": 360000,
        "stock": 40,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
        "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_97_96",
        "name": "Rolex Datejust",
        "category": "Fashion",
        "subCategory": "mens-watches",
        "vendor": "v_1",
        "price": 703999,
        "cost": 440000,
        "stock": 86,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
        "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_98_97",
        "name": "Rolex Submariner Watch",
        "category": "Fashion",
        "subCategory": "mens-watches",
        "vendor": "v_1",
        "price": 895999,
        "cost": 560000,
        "stock": 55,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
        "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_99_98",
        "name": "Amazon Echo Plus",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 6399,
        "cost": 4000,
        "stock": 61,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
        "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
        "tags": [
            "electronics",
            "smart speakers"
        ]
    },
    {
        "id": "p_100_99",
        "name": "Apple Airpods",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 8319,
        "cost": 5200,
        "stock": 67,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp",
        "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
        "tags": [
            "electronics",
            "wireless earphones"
        ]
    },
    {
        "id": "p_101_100",
        "name": "Apple AirPods Max Silver",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 35199,
        "cost": 22000,
        "stock": 59,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
        "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        "tags": [
            "electronics",
            "over-ear headphones"
        ]
    },
    {
        "id": "p_102_101",
        "name": "Apple Airpower Wireless Charger",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 5119,
        "cost": 3200,
        "stock": 1,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
        "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
        "tags": [
            "electronics",
            "wireless chargers"
        ]
    },
    {
        "id": "p_103_102",
        "name": "Apple HomePod Mini Cosmic Grey",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 6399,
        "cost": 4000,
        "stock": 27,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp",
        "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
        "tags": [
            "electronics",
            "smart speakers"
        ]
    },
    {
        "id": "p_104_103",
        "name": "Apple iPhone Charger",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 31,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%2018W%20USB-C%20Power%20Adapter/thumbnail.png",
        "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
        "tags": [
            "electronics",
            "chargers"
        ]
    },
    {
        "id": "p_105_104",
        "name": "Apple MagSafe Battery Pack",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 6399,
        "cost": 4000,
        "stock": 1,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
        "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
        "tags": [
            "electronics",
            "power banks"
        ]
    },
    {
        "id": "p_106_105",
        "name": "Apple Watch Series 4 Gold",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 22399,
        "cost": 14000,
        "stock": 33,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204/thumbnail.png",
        "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
        "tags": [
            "electronics",
            "smartwatches"
        ]
    },
    {
        "id": "p_107_106",
        "name": "Beats Flex Wireless Earphones",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
        "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
        "tags": [
            "electronics",
            "wireless earphones"
        ]
    },
    {
        "id": "p_108_107",
        "name": "iPhone 12 Silicone Case with MagSafe Plum",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 69,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
        "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
        "tags": [
            "electronics",
            "phone accessories"
        ]
    },
    {
        "id": "p_109_108",
        "name": "Monopod",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 48,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
        "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
        "tags": [
            "electronics",
            "camera accessories"
        ]
    },
    {
        "id": "p_110_109",
        "name": "Selfie Lamp with iPhone",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 959,
        "cost": 600,
        "stock": 58,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
        "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
        "tags": [
            "electronics",
            "selfie accessories"
        ]
    },
    {
        "id": "p_111_110",
        "name": "Selfie Stick Monopod",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 831,
        "cost": 520,
        "stock": 11,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png",
        "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
        "tags": [
            "electronics",
            "selfie accessories"
        ]
    },
    {
        "id": "p_112_111",
        "name": "TV Studio Camera Pedestal",
        "category": "Gadgets",
        "subCategory": "mobile-accessories",
        "vendor": "v_1",
        "price": 31999,
        "cost": 20000,
        "stock": 15,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
        "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
        "tags": [
            "electronics",
            "camera accessories"
        ]
    },
    {
        "id": "p_113_112",
        "name": "Generic Motorcycle",
        "category": "Automotive",
        "subCategory": "motorcycle",
        "vendor": "v_1",
        "price": 255999,
        "cost": 160000,
        "stock": 34,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
        "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
        "tags": [
            "motorcycles"
        ]
    },
    {
        "id": "p_114_113",
        "name": "Kawasaki Z800",
        "category": "Automotive",
        "subCategory": "motorcycle",
        "vendor": "v_1",
        "price": 575999,
        "cost": 360000,
        "stock": 52,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp",
        "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
        "tags": [
            "motorcycles",
            "sportbikes"
        ]
    },
    {
        "id": "p_115_114",
        "name": "MotoGP CI.H1",
        "category": "Automotive",
        "subCategory": "motorcycle",
        "vendor": "v_1",
        "price": 959999,
        "cost": 600000,
        "stock": 10,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp",
        "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
        "tags": [
            "motorcycles",
            "sportbikes"
        ]
    },
    {
        "id": "p_116_115",
        "name": "Scooter Motorcycle",
        "category": "Automotive",
        "subCategory": "motorcycle",
        "vendor": "v_1",
        "price": 191999,
        "cost": 120000,
        "stock": 84,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp",
        "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
        "tags": [
            "motorcycles",
            "scooters"
        ]
    },
    {
        "id": "p_117_116",
        "name": "Sportbike Motorcycle",
        "category": "Automotive",
        "subCategory": "motorcycle",
        "vendor": "v_1",
        "price": 479999,
        "cost": 300000,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp",
        "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
        "tags": [
            "motorcycles",
            "sportbikes"
        ]
    },
    {
        "id": "p_118_117",
        "name": "Attitude Super Leaves Hand Soap",
        "category": "Beauty",
        "subCategory": "skin-care",
        "vendor": "v_1",
        "price": 575,
        "cost": 360,
        "stock": 94,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
        "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
        "tags": [
            "personal care",
            "hand soap"
        ]
    },
    {
        "id": "p_119_118",
        "name": "Olay Ultra Moisture Shea Butter Body Wash",
        "category": "Beauty",
        "subCategory": "skin-care",
        "vendor": "v_1",
        "price": 831,
        "cost": 520,
        "stock": 34,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
        "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
        "tags": [
            "personal care",
            "body wash"
        ]
    },
    {
        "id": "p_120_119",
        "name": "Vaseline Men Body and Face Lotion",
        "category": "Beauty",
        "subCategory": "skin-care",
        "vendor": "v_1",
        "price": 639,
        "cost": 400,
        "stock": 95,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
        "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
        "tags": [
            "personal care",
            "body lotion"
        ]
    },
    {
        "id": "p_121_120",
        "name": "iPhone 5s",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 12799,
        "cost": 8000,
        "stock": 25,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
        "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        "tags": [
            "smartphones",
            "apple"
        ]
    },
    {
        "id": "p_122_121",
        "name": "iPhone 6",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 60,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
        "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
        "tags": [
            "smartphones",
            "apple"
        ]
    },
    {
        "id": "p_123_122",
        "name": "iPhone 13 Pro",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 70399,
        "cost": 44000,
        "stock": 56,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
        "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
        "tags": [
            "smartphones",
            "apple"
        ]
    },
    {
        "id": "p_124_123",
        "name": "iPhone X",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 57599,
        "cost": 36000,
        "stock": 37,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
        "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
        "tags": [
            "smartphones",
            "apple"
        ]
    },
    {
        "id": "p_125_124",
        "name": "Oppo A57",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 15999,
        "cost": 10000,
        "stock": 19,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
        "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
        "tags": [
            "smartphones",
            "oppo"
        ]
    },
    {
        "id": "p_126_125",
        "name": "Oppo F19 Pro Plus",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 25599,
        "cost": 16000,
        "stock": 78,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
        "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
        "tags": [
            "smartphones",
            "oppo"
        ]
    },
    {
        "id": "p_127_126",
        "name": "Oppo K1",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 55,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
        "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
        "tags": [
            "smartphones",
            "oppo"
        ]
    },
    {
        "id": "p_128_127",
        "name": "Realme C35",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 9599,
        "cost": 6000,
        "stock": 48,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
        "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
        "tags": [
            "smartphones",
            "realme"
        ]
    },
    {
        "id": "p_129_128",
        "name": "Realme X",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 12,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
        "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
        "tags": [
            "smartphones",
            "realme"
        ]
    },
    {
        "id": "p_130_129",
        "name": "Realme XT",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 22399,
        "cost": 14000,
        "stock": 80,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png",
        "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
        "tags": [
            "smartphones",
            "realme"
        ]
    },
    {
        "id": "p_131_130",
        "name": "Samsung Galaxy S7",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 67,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
        "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
        "tags": [
            "smartphones",
            "samsung galaxy"
        ]
    },
    {
        "id": "p_132_131",
        "name": "Samsung Galaxy S8",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 31999,
        "cost": 20000,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
        "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
        "tags": [
            "smartphones",
            "samsung galaxy"
        ]
    },
    {
        "id": "p_133_132",
        "name": "Samsung Galaxy S10",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 44799,
        "cost": 28000,
        "stock": 19,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
        "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
        "tags": [
            "smartphones",
            "samsung galaxy"
        ]
    },
    {
        "id": "p_134_133",
        "name": "Vivo S1",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 15999,
        "cost": 10000,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
        "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
        "tags": [
            "smartphones",
            "vivo"
        ]
    },
    {
        "id": "p_135_134",
        "name": "Vivo V9",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 19199,
        "cost": 12000,
        "stock": 82,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
        "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
        "tags": [
            "smartphones",
            "vivo"
        ]
    },
    {
        "id": "p_136_135",
        "name": "Vivo X21",
        "category": "Electronics",
        "subCategory": "smartphones",
        "vendor": "v_1",
        "price": 31999,
        "cost": 20000,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
        "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
        "tags": [
            "smartphones",
            "vivo"
        ]
    },
    {
        "id": "p_137_136",
        "name": "American Football",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 53,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
        "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
        "tags": [
            "sports equipment",
            "american football"
        ]
    },
    {
        "id": "p_138_137",
        "name": "Baseball Ball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 575,
        "cost": 360,
        "stock": 100,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
        "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
        "tags": [
            "sports equipment",
            "baseball"
        ]
    },
    {
        "id": "p_139_138",
        "name": "Baseball Glove",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 22,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
        "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
        "tags": [
            "sports equipment",
            "baseball"
        ]
    },
    {
        "id": "p_140_139",
        "name": "Basketball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 959,
        "cost": 600,
        "stock": 75,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
        "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
        "tags": [
            "sports equipment",
            "basketball"
        ]
    },
    {
        "id": "p_141_140",
        "name": "Basketball Rim",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 43,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
        "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
        "tags": [
            "sports equipment",
            "basketball"
        ]
    },
    {
        "id": "p_142_141",
        "name": "Cricket Ball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 831,
        "cost": 520,
        "stock": 30,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
        "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
        "tags": [
            "sports equipment",
            "cricket"
        ]
    },
    {
        "id": "p_143_142",
        "name": "Cricket Bat",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 98,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
        "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
        "tags": [
            "sports equipment",
            "cricket"
        ]
    },
    {
        "id": "p_144_143",
        "name": "Cricket Helmet",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 2879,
        "cost": 1800,
        "stock": 10,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
        "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
        "tags": [
            "sports equipment",
            "cricket"
        ]
    },
    {
        "id": "p_145_144",
        "name": "Cricket Wicket",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 25,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
        "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
        "tags": [
            "sports equipment",
            "cricket"
        ]
    },
    {
        "id": "p_146_145",
        "name": "Feather Shuttlecock",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 383,
        "cost": 240,
        "stock": 95,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
        "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
        "tags": [
            "sports equipment",
            "badminton"
        ]
    },
    {
        "id": "p_147_146",
        "name": "Football",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1151,
        "cost": 720,
        "stock": 96,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
        "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
        "tags": [
            "sports equipment",
            "football"
        ]
    },
    {
        "id": "p_148_147",
        "name": "Golf Ball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 639,
        "cost": 400,
        "stock": 84,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
        "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
        "tags": [
            "sports equipment",
            "golf"
        ]
    },
    {
        "id": "p_149_148",
        "name": "Iron Golf",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 90,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
        "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
        "tags": [
            "sports equipment",
            "golf"
        ]
    },
    {
        "id": "p_150_149",
        "name": "Metal Baseball Bat",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 16,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
        "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
        "tags": [
            "sports equipment",
            "baseball"
        ]
    },
    {
        "id": "p_151_150",
        "name": "Tennis Ball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 447,
        "cost": 280,
        "stock": 28,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp",
        "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
        "tags": [
            "sports equipment",
            "tennis"
        ]
    },
    {
        "id": "p_152_151",
        "name": "Tennis Racket",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 6,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp",
        "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
        "tags": [
            "sports equipment",
            "tennis"
        ]
    },
    {
        "id": "p_153_152",
        "name": "Volleyball",
        "category": "Sports",
        "subCategory": "sports-accessories",
        "vendor": "v_1",
        "price": 767,
        "cost": 480,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp",
        "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
        "tags": [
            "sports equipment",
            "volleyball"
        ]
    },
    {
        "id": "p_154_153",
        "name": "Black Sun Glasses",
        "category": "Fashion",
        "subCategory": "sunglasses",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 60,
        "reorderLevel": 10,
        "image": "data:image/jpeg;base64,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",
        "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
        "tags": [
            "eyewear",
            "sunglasses"
        ]
    },
    {
        "id": "p_155_154",
        "name": "Classic Sun Glasses",
        "category": "Fashion",
        "subCategory": "sunglasses",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 1,
        "reorderLevel": 10,
        "image": "data:image/jpeg;base64,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",
        "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
        "tags": [
            "eyewear",
            "sunglasses"
        ]
    },
    {
        "id": "p_156_155",
        "name": "Green and Black Glasses",
        "category": "Fashion",
        "subCategory": "sunglasses",
        "vendor": "v_1",
        "price": 2239,
        "cost": 1400,
        "stock": 24,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
        "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
        "tags": [
            "eyewear",
            "sunglasses"
        ]
    },
    {
        "id": "p_157_156",
        "name": "Party Glasses",
        "category": "Fashion",
        "subCategory": "sunglasses",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 86,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png",
        "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
        "tags": [
            "eyewear",
            "party glasses"
        ]
    },
    {
        "id": "p_158_157",
        "name": "Sunglasses",
        "category": "Fashion",
        "subCategory": "sunglasses",
        "vendor": "v_1",
        "price": 1471,
        "cost": 920,
        "stock": 27,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/thumbnail.png",
        "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
        "tags": [
            "eyewear",
            "sunglasses"
        ]
    },
    {
        "id": "p_159_158",
        "name": "iPad Mini 2021 Starlight",
        "category": "Electronics",
        "subCategory": "tablets",
        "vendor": "v_1",
        "price": 31999,
        "cost": 20000,
        "stock": 47,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
        "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
        "tags": [
            "electronics",
            "tablets"
        ]
    },
    {
        "id": "p_160_159",
        "name": "Samsung Galaxy Tab S8 Plus Grey",
        "category": "Electronics",
        "subCategory": "tablets",
        "vendor": "v_1",
        "price": 38399,
        "cost": 24000,
        "stock": 62,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
        "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
        "tags": [
            "electronics",
            "tablets"
        ]
    },
    {
        "id": "p_161_160",
        "name": "Samsung Galaxy Tab White",
        "category": "Electronics",
        "subCategory": "tablets",
        "vendor": "v_1",
        "price": 22399,
        "cost": 14000,
        "stock": 92,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
        "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
        "tags": [
            "electronics",
            "tablets"
        ]
    },
    {
        "id": "p_162_161",
        "name": "Blue Frock",
        "category": "Fashion",
        "subCategory": "tops",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 52,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
        "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
        "tags": [
            "clothing",
            "dresses"
        ]
    },
    {
        "id": "p_163_162",
        "name": "Girl Summer Dress",
        "category": "Fashion",
        "subCategory": "tops",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 43,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
        "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
        "tags": [
            "clothing",
            "girls' dresses"
        ]
    },
    {
        "id": "p_164_163",
        "name": "Gray Dress",
        "category": "Fashion",
        "subCategory": "tops",
        "vendor": "v_1",
        "price": 2239,
        "cost": 1400,
        "stock": 55,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
        "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
        "tags": [
            "clothing",
            "dresses"
        ]
    },
    {
        "id": "p_165_164",
        "name": "Short Frock",
        "category": "Fashion",
        "subCategory": "tops",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 22,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
        "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
        "tags": [
            "clothing",
            "dresses"
        ]
    },
    {
        "id": "p_166_165",
        "name": "Tartan Dress",
        "category": "Fashion",
        "subCategory": "tops",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 73,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
        "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
        "tags": [
            "clothing",
            "dresses"
        ]
    },
    {
        "id": "p_167_166",
        "name": "300 Touring",
        "category": "Automotive",
        "subCategory": "vehicle",
        "vendor": "v_1",
        "price": 1855999,
        "cost": 1160000,
        "stock": 54,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp",
        "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
        "tags": [
            "sedans",
            "vehicles"
        ]
    },
    {
        "id": "p_168_167",
        "name": "Charger SXT RWD",
        "category": "Automotive",
        "subCategory": "vehicle",
        "vendor": "v_1",
        "price": 2111999,
        "cost": 1320000,
        "stock": 57,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp",
        "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
        "tags": [
            "sedans",
            "sports cars",
            "vehicles"
        ]
    },
    {
        "id": "p_169_168",
        "name": "Dodge Hornet GT Plus",
        "category": "Automotive",
        "subCategory": "vehicle",
        "vendor": "v_1",
        "price": 1599999,
        "cost": 1000000,
        "stock": 82,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp",
        "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
        "tags": [
            "hatchbacks",
            "compact cars",
            "vehicles"
        ]
    },
    {
        "id": "p_170_169",
        "name": "Durango SXT RWD",
        "category": "Automotive",
        "subCategory": "vehicle",
        "vendor": "v_1",
        "price": 2367999,
        "cost": 1480000,
        "stock": 95,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp",
        "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
        "tags": [
            "suvs",
            "vehicles"
        ]
    },
    {
        "id": "p_171_170",
        "name": "Pacifica Touring",
        "category": "Automotive",
        "subCategory": "vehicle",
        "vendor": "v_1",
        "price": 2047999,
        "cost": 1280000,
        "stock": 53,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp",
        "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
        "tags": [
            "minivans",
            "vehicles"
        ]
    },
    {
        "id": "p_172_171",
        "name": "Blue Women's Handbag",
        "category": "Fashion",
        "subCategory": "womens-bags",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 76,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
        "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
        "tags": [
            "fashion accessories",
            "handbags"
        ]
    },
    {
        "id": "p_173_172",
        "name": "Heshe Women's Leather Bag",
        "category": "Fashion",
        "subCategory": "womens-bags",
        "vendor": "v_1",
        "price": 8319,
        "cost": 5200,
        "stock": 99,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
        "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
        "tags": [
            "fashion accessories",
            "leather bags"
        ]
    },
    {
        "id": "p_174_173",
        "name": "Prada Women Bag",
        "category": "Fashion",
        "subCategory": "womens-bags",
        "vendor": "v_1",
        "price": 38399,
        "cost": 24000,
        "stock": 75,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp",
        "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
        "tags": [
            "fashion accessories",
            "designer bags"
        ]
    },
    {
        "id": "p_175_174",
        "name": "White Faux Leather Backpack",
        "category": "Fashion",
        "subCategory": "womens-bags",
        "vendor": "v_1",
        "price": 2559,
        "cost": 1600,
        "stock": 39,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
        "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
        "tags": [
            "fashion accessories",
            "backpacks"
        ]
    },
    {
        "id": "p_176_175",
        "name": "Women Handbag Black",
        "category": "Fashion",
        "subCategory": "womens-bags",
        "vendor": "v_1",
        "price": 3839,
        "cost": 2400,
        "stock": 11,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp",
        "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
        "tags": [
            "fashion accessories",
            "handbags"
        ]
    },
    {
        "id": "p_177_176",
        "name": "Black Women's Gown",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 8319,
        "cost": 5200,
        "stock": 25,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
        "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
        "tags": [
            "clothing",
            "gowns"
        ]
    },
    {
        "id": "p_178_177",
        "name": "Corset Leather With Skirt",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 5759,
        "cost": 3600,
        "stock": 30,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
        "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
        "tags": [
            "clothing",
            "corsets",
            "skirts"
        ]
    },
    {
        "id": "p_179_178",
        "name": "Corset With Black Skirt",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 5119,
        "cost": 3200,
        "stock": 33,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
        "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
        "tags": [
            "clothing",
            "corsets",
            "skirts"
        ]
    },
    {
        "id": "p_180_179",
        "name": "Dress Pea",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 6,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
        "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
        "tags": [
            "clothing",
            "dresses"
        ]
    },
    {
        "id": "p_181_180",
        "name": "Marni Red & Black Suit",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 11519,
        "cost": 7200,
        "stock": 62,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
        "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
        "tags": [
            "clothing",
            "suits"
        ]
    },
    {
        "id": "p_182_181",
        "name": "Green Crystal Earring",
        "category": "Fashion",
        "subCategory": "womens-jewellery",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 54,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp",
        "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
        "tags": [
            "fashion accessories",
            "earrings"
        ]
    },
    {
        "id": "p_183_182",
        "name": "Green Oval Earring",
        "category": "Fashion",
        "subCategory": "womens-jewellery",
        "vendor": "v_1",
        "price": 1599,
        "cost": 1000,
        "stock": 73,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp",
        "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
        "tags": [
            "fashion accessories",
            "earrings"
        ]
    },
    {
        "id": "p_184_183",
        "name": "Tropical Earring",
        "category": "Fashion",
        "subCategory": "womens-jewellery",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 1,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp",
        "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
        "tags": [
            "fashion accessories",
            "earrings"
        ]
    },
    {
        "id": "p_185_184",
        "name": "Black & Brown Slipper",
        "category": "Fashion",
        "subCategory": "womens-shoes",
        "vendor": "v_1",
        "price": 1279,
        "cost": 800,
        "stock": 3,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
        "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
        "tags": [
            "footwear",
            "slippers"
        ]
    },
    {
        "id": "p_186_185",
        "name": "Calvin Klein Heel Shoes",
        "category": "Fashion",
        "subCategory": "womens-shoes",
        "vendor": "v_1",
        "price": 5119,
        "cost": 3200,
        "stock": 93,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
        "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
        "tags": [
            "footwear",
            "heel shoes"
        ]
    },
    {
        "id": "p_187_186",
        "name": "Golden Shoes Woman",
        "category": "Fashion",
        "subCategory": "womens-shoes",
        "vendor": "v_1",
        "price": 3199,
        "cost": 2000,
        "stock": 88,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
        "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
        "tags": [
            "footwear",
            "women's shoes"
        ]
    },
    {
        "id": "p_188_187",
        "name": "Pampi Shoes",
        "category": "Fashion",
        "subCategory": "womens-shoes",
        "vendor": "v_1",
        "price": 1919,
        "cost": 1200,
        "stock": 49,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
        "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
        "tags": [
            "footwear",
            "casual shoes"
        ]
    },
    {
        "id": "p_189_188",
        "name": "Red Shoes",
        "category": "Fashion",
        "subCategory": "womens-shoes",
        "vendor": "v_1",
        "price": 2239,
        "cost": 1400,
        "stock": 7,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
        "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
        "tags": [
            "footwear",
            "women's shoes"
        ]
    },
    {
        "id": "p_190_189",
        "name": "IWC Ingenieur Automatic Steel",
        "category": "Fashion",
        "subCategory": "womens-watches",
        "vendor": "v_1",
        "price": 319999,
        "cost": 200000,
        "stock": 90,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp",
        "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_191_190",
        "name": "Rolex Cellini Moonphase",
        "category": "Fashion",
        "subCategory": "womens-watches",
        "vendor": "v_1",
        "price": 1023999,
        "cost": 640000,
        "stock": 52,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
        "description": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
        "tags": [
            "watches",
            "luxury watches"
        ]
    },
    {
        "id": "p_192_191",
        "name": "Rolex Datejust Women",
        "category": "Fashion",
        "subCategory": "womens-watches",
        "vendor": "v_1",
        "price": 703999,
        "cost": 440000,
        "stock": 4,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
        "description": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
        "tags": [
            "watches",
            "luxury watches",
            "women's watches"
        ]
    },
    {
        "id": "p_193_192",
        "name": "Watch Gold for Women",
        "category": "Fashion",
        "subCategory": "womens-watches",
        "vendor": "v_1",
        "price": 51199,
        "cost": 32000,
        "stock": 50,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp",
        "description": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
        "tags": [
            "watches",
            "women's watches"
        ]
    },
    {
        "id": "p_194_193",
        "name": "Women's Wrist Watch",
        "category": "Fashion",
        "subCategory": "womens-watches",
        "vendor": "v_1",
        "price": 8319,
        "cost": 5200,
        "stock": 12,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
        "description": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
        "tags": [
            "watches",
            "women's watches"
        ]
    },
    {
        "id": "p_195_194",
        "name": "Apple Watch Series 8",
        "category": "Electronics",
        "subCategory": "smartwatch",
        "vendor": "v_1",
        "price": 26399,
        "cost": 25000,
        "stock": 45,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
        "description": "The Apple Watch Series 8 features advanced health sensors and apps, so you can take an ECG, measure heart rate and blood oxygen, and track temperature changes.",
        "tags": [
            "smartwatch",
            "electronics"
        ]
    },
    {
        "id": "p_196_195",
        "name": "Sony Wireless Headphones",
        "category": "Electronics",
        "subCategory": "headphones",
        "vendor": "v_1",
        "price": 11999,
        "cost": 10000,
        "stock": 30,
        "reorderLevel": 10,
        "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
        "description": "Sony Wireless Headphones with industry-leading noise canceling.",
        "tags": [
            "headphones",
            "electronics"
        ]
    },
    {
        "id": "p_197_196",
        "name": "Cotton Embroidered Kurti",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 1039,
        "cost": 600,
        "stock": 100,
        "reorderLevel": 20,
        "sizes": ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
        "image": "data:image/jpeg;base64,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",
        "description": "Elegant cotton embroidered kurti, perfect for casual and festive occasions.",
        "tags": [
            "clothing",
            "dresses",
            "kurti"
        ]
    },
    {
        "id": "p_198_197",
        "name": "Silk Woven Saree",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 2799,
        "cost": 1500,
        "stock": 50,
        "reorderLevel": 10,
        "sizes": ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
        "image": "data:image/jpeg;base64,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",
        "description": "Beautiful silk woven saree with intricate traditional designs. Comes with an unstitched blouse piece.",
        "tags": [
            "clothing",
            "saree",
            "festive"
        ]
    },
    {
        "id": "p_199_198",
        "name": "High Waist Denim Jeans",
        "category": "Fashion",
        "subCategory": "womens-dresses",
        "vendor": "v_1",
        "price": 1519,
        "cost": 900,
        "stock": 80,
        "reorderLevel": 15,
        "sizes": ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
        "image": "data:image/jpeg;base64,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",
        "description": "Comfortable high waist denim jeans for everyday wear. Stretchy fabric for a perfect fit.",
        "tags": [
            "clothing",
            "jeans",
            "pants"
        ]
    }
    
];

export const DEFAULT_CART = [
    { ...INITIAL_PRODUCTS[0], quantity: 1 }
];
