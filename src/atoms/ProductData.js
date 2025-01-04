import watchImg1 from "../assets/products/watches/elegant_black_watch.jpg";
import watchImg2 from "../assets/products/watches/classic_silver_watch.jpg";
import watchImg3 from "../assets/products/watches/sporty_digital_watch.jpg";

import glassImg1 from "../assets/products/glasses/aviator_metal_glasses.jpg";
import glassImg2 from "../assets/products/glasses/black_square_frames.jpg";
import glassImg3 from "../assets/products/glasses/blue_light_glasses.jpg";

import shoeImg1 from "../assets/products/shoes/classic_white_sneakers.jpg";
import shoeImg2 from "../assets/products/shoes/leather_dress_shoes.jpg";
import shoeImg3 from "../assets/products/shoes/running_trail_shoes.jpg";

import hoodieImg1 from "../assets/products/hoodies/black_zip-up_hoodie.jpg";
import hoodieImg2 from "../assets/products/hoodies/oversized_grey_hoodie.jpg";
import hoodieImg3 from "../assets/products/hoodies/fleece_lined_hoodie.jpg";

import mobileImg1 from "../assets/products/mobiles/galaxy_Z_fold.jpg";
import mobileImg2 from "../assets/products/mobiles/iPhone_14_pro_max.jpg";
import mobileImg3 from "../assets/products/mobiles/pixel_7_pro.jpg";

import laptopImg1 from "../assets/products/laptops/MacBook_pro_16.jpg";
import laptopImg2 from "../assets/products/laptops/dell_XPS_13.jpg";
import laptopImg3 from "../assets/products/laptops/lenovo_ThinkPad_X1.jpg";


const productsData = [
    //? Watches
    {
        "id": 1,
        "title": "Elegant Black Watch",
        "description": "This sleek, minimalist watch features a black leather strap, perfect for formal events or everyday wear. Its stainless steel case and precise quartz movement ensure durability and accuracy. Water-resistant up to 30 meters, with a date display and adjustable clasp for added convenience.",
        "price": 120,
        "totalPrice": 120,
        "category": "Watches",
        "image": watchImg1,
        "quantity": 1,
    },
    {
        "id": 2,
        "title": "Classic Silver Watch",
        "description": "Timeless design meets durability in this classic silver watch. Its stainless steel band and water-resistant construction make it perfect for daily wear. Features a date display, adjustable clasp, and luminous hands for enhanced visibility.",
        "price": 85,
        "totalPrice": 85,
        "category": "Watches",
        "image": watchImg2,
        "quantity": 1,
    },
    {
        "id": 3,
        "title": "Sporty Digital Watch",
        "description": "Stay active with this water-resistant digital watch, featuring a backlight, stopwatch, alarm, and timer. Perfect for athletes and outdoor enthusiasts, with a battery life of up to 2 years and replaceable battery.",
        "price": 65,
        "totalPrice": 65,
        "category": "Watches",
        "image": watchImg3,
        "quantity": 1,
    },

    // //? Glasses
    {
        "id": 11,
        "title": "Aviator Metal Glasses",
        "description": "Classic aviator design with durable metal frames, suitable for both men and women. Features adjustable nose pads and temple tips for comfort, along with scratch-resistant lenses. Lens width: 58mm, frame material: stainless steel.",
        "price": 50,
        "totalPrice": 50,
        "category": "Glasses",
        "image": glassImg1,
        "quantity": 1,
    },
    {
        "id": 12,
        "title": "Black Square Frames",
        "description": "Sleek black square frames perfect for a modern, minimalist look. Made from high-quality acetate for durability and flexibility. Frame width: 48mm, lens material: polycarbonate.",
        "price": 45,
        "totalPrice": 45,
        "category": "Glasses",
        "image": glassImg2,
        "quantity": 1,
    },
    {
        "id": 13,
        "title": "Blue Light Glasses",
        "description": "Protect your eyes from digital screens with these blue light blocking glasses. Ideal for computer users and gamers, featuring anti-glare coating and UV protection. Lens width: 50mm, frame material: TR-90.",
        "price": 30,
        "totalPrice": 30,
        "category": "Glasses",
        "image": glassImg3,
        "quantity": 1,
    },

    // //? Shoes
    {
        "id": 21,
        "title": "Classic White Sneakers",
        "description": "Timeless and versatile, these comfortable white sneakers are perfect for everyday wear. Featuring breathable mesh panels, cushioned insoles, and durable rubber outsoles. Heel-to-toe length: 10 inches, weight: 12 oz.",
        "price": 75,
        "totalPrice": 75,
        "category": "Shoes",
        "image": shoeImg1,
        "quantity": 1,
    },
    {
        "id": 22,
        "title": "Leather Dress Shoes",
        "description": "Elevate your formal style with these elegant black leather shoes. Handcrafted with premium leather, featuring a sleek design and comfortable fit. Heel-to-toe length: 11 inches, weight: 14 oz.",
        "price": 120,
        "totalPrice": 120,
        "category": "Shoes",
        "image": shoeImg2,
        "quantity": 1,
    },
    {
        "id": 23,
        "title": "Running Trail Shoes",
        "description": "Conquer rugged trails with these durable running shoes. Featuring aggressive tread patterns, breathable mesh uppers, and supportive ankle collars. Weight: 11 oz, heel-to-toe drop: 8mm.",
        "price": 90,
        "totalPrice": 90,
        "category": "Shoes",
        "image": shoeImg3,
        "quantity": 1,
    },

    // //? Hoodies
    {
        "id": 31,
        "title": "Black Zip-Up Hoodie",
        "description": "Stay cozy with this soft black hoodie featuring a front zipper and adjustable drawstrings. Made from premium cotton blend for comfort and durability. Fit: regular, fabric thickness: 280gsm.",
        "price": 60,
        "totalPrice": 60,
        "category": "Hoodies",
        "image": hoodieImg1,
        "quantity": 1,
    },
    {
        "id": 32,
        "title": "Oversized Grey Hoodie",
        "description": "Lounging just got comfier with this oversized grey hoodie. Features a relaxed fit, soft fleece lining, and kangaroo pockets for convenience. Fabric: 80% cotton, 20% polyester.",
        "price": 45,
        "totalPrice": 45,
        "category": "Hoodies",
        "image": hoodieImg2,
        "quantity": 1,
    },
    {
        "id": 33,
        "title": "Fleece Lined Hoodie",
        "description": "Brave the cold with this cozy fleece-lined hoodie. Thick, plush fleece traps warmth, while the durable outer shell withstands harsh weather. Weight: 400gsm.",
        "price": 55,
        "totalPrice": 55,
        "category": "Hoodies",
        "image": hoodieImg3,
        "quantity": 1,
    },
    
    // //? Mobiles
    {
        "id": 41,
        "title": "Galaxy Z Fold",
        "description": "Experience the future of smartphones with Samsung's revolutionary foldable phone. Featuring a stunning 7.6-inch Dynamic AMOLED display, powerful Snapdragon 888 processor, and advanced multi-camera system. Enjoy seamless multitasking, immersive gaming, and cinematic entertainment. RAM: 12GB, storage: 512GB.",
        "price": 1800,
        "totalPrice": 1800,
        "category": "Mobiles",
        "image": mobileImg1,
        "quantity": 1,
    },
    {
        "id": 42,
        "title": "iPhone 14 Pro",
        "description": "Elevate your mobile experience with Apple's latest flagship. Boasting advanced quad-camera setup with Night mode, A16 Bionic chip, and stunning 6.1-inch Super Retina XDR display. Water-resistant, wireless charging, and iOS 16 operating system. RAM: 6GB, storage: 128GB.",
        "price": 1200,
        "totalPrice": 1200,
        "category": "Mobiles",
        "image": mobileImg2,
        "quantity": 1,
    },
    {
        "id": 43,
        "title": "Pixel 7 Pro",
        "description": "Capture life's moments with Google's smartphone featuring smart AI-powered camera software. Equipped with 6.7-inch OLED display, Snapdragon 888 processor, and timely software updates. Enjoy seamless Google ecosystem integration and intuitive interface. RAM: 12GB, storage: 256GB.",
        "price": 950,
        "totalPrice": 950,
        "category": "Mobiles",
        "image": mobileImg3,
        "quantity": 1,
    },

    // //? Laptops
    {
        "id": 51,
        "title": "MacBook Pro 16",
        "description": "Unlock unparalleled performance with Apple's MacBook Pro 16, powered by the revolutionary M1 chip. Features a stunning 16-inch Retina display, up to 16 hours of battery life, and seamless integration with other Apple devices. Storage: 512GB SSD, RAM: 16GB.",
        "price": 2500,
        "totalPrice": 2500,
        "category": "Laptops",
        "image": laptopImg1,
        "quantity": 1,
    },
    {
        "id": 52,
        "title": "Dell XPS 13",
        "description": "Experience premium portability with Dell's ultra-thin XPS 13, boasting a breathtaking 4K display. Weighs just 2.7lbs, features 10th Gen Intel Core i7 processor, and up to 12 hours of battery life. Storage: 1TB SSD, RAM: 16GB.",
        "price": 1500,
        "totalPrice": 1500,
        "category": "Laptops",
        "image": laptopImg2,
        "quantity": 1,
    },
    {
        "id": 53,
        "title": "Lenovo ThinkPad X1",
        "description": "Built for business, Lenovo's ThinkPad X1 combines durability with exceptional performance. Features a 14-inch Full HD display, 11th Gen Intel Core i7 processor, and legendary ThinkPad keyboard. Storage: 512GB SSD, RAM: 16GB.",
        "price": 1800,
        "totalPrice": 1800,
        "category": "Laptops",
        "image": laptopImg3,
        "quantity": 1,
    },
];

export default productsData;