"use strict";
var MockDataService = (function () {
    function MockDataService() {
    }
    MockDataService.prototype.createDb = function () {
        var brands = [
            { id: 11, name: '12 Survivors' },
            { id: 12, name: '5.11' },
            { id: 13, name: '5.11 Tctical Series' },
            { id: 14, name: 'AccuSharp' },
            { id: 15, name: 'Adam Unlimited' },
            { id: 16, name: 'Adventure Medical Kits' },
            { id: 17, name: 'Al Mar' },
            { id: 18, name: 'Alar-DISC' },
            { id: 19, name: 'Alpen' },
            { id: 20, name: 'Alps Cedar Ridge' }
        ];
        var categories = [
            { id: 11, name: 'Knives - Fixed Blades' },
            { id: 12, name: 'Knives - Folders' },
            { id: 13, name: 'Knives - Accessories' },
            { id: 14, name: 'Knives - Fantasy' },
            { id: 15, name: 'Knives - Throwing' },
            { id: 16, name: 'Knives - Handmade' },
        ];
        var prices = [
            { id: 1, name: '$1.00 - $9.99' },
            { id: 2, name: '$10.00 - $24.99' },
            { id: 3, name: '$25.00 - $49.99' },
            { id: 4, name: '$50.00 - $74.99' },
            { id: 5, name: '$75.00 - $99.99' },
            { id: 6, name: '$100.00 and over' },
        ];
        var products = [
            {
                productId: 1,
                manufacturerName: 'Spyderco',
                categoryName: 'Knives - Folders',
                productName: 'Byrd Finch 2, Black G10 Handle, Satin Plain', description: 'The Finch2 folder from byrd makes an excellent pocket knife. It is small in size, yet strong in hand. The blade is flat ground 8Cr13MoV steel with a thumb hole for easy one-hand opening. Textured black G-10 handle with steel liners, screw construction, and back lock. The Finch2 has a lanyard hole for pocket carry or attachment to a keychain',
                supplierName: 'Moteng',
                features: 'The Finch2 folder from byrd makes an excellent pocket knife. It is small in size, yet strong in hand. The blade is flat ground 8Cr13MoV steel with a thumb hole for easy one-hand opening. Textured black G-10 handle with steel liners, screw construction, and back lock. The Finch2 has a lanyard hole for pocket carry or attachment to a keychain.',
                sku: 'BY11GP2',
                imageUrl: 'http://productimages.moteng.com/BY11GP2.jpg',
                price: 20.00
            },
            {
                productId: 2,
                manufacturerName: 'Spyderco',
                categoryName: 'Knives - Folders',
                productName: 'Byrd Finch 2, Black G10 Handle, Satin Plain', description: 'The Finch2 folder from byrd makes an excellent pocket knife. It is small in size, yet strong in hand. The blade is flat ground 8Cr13MoV steel with a thumb hole for easy one-hand opening. Textured black G-10 handle with steel liners, screw construction, and back lock. The Finch2 has a lanyard hole for pocket carry or attachment to a keychain',
                supplierName: 'Moteng',
                features: 'The Finch2 folder from byrd makes an excellent pocket knife. It is small in size, yet strong in hand. The blade is flat ground 8Cr13MoV steel with a thumb hole for easy one-hand opening. Textured black G-10 handle with steel liners, screw construction, and back lock. The Finch2 has a lanyard hole for pocket carry or attachment to a keychain.',
                sku: 'BY11GP2',
                imageUrl: 'http://productimages.moteng.com/BY11GP2.jpg',
                price: 20.00
            }
        ];
        var slideshowImages = [
            { id: 1, name: '', path: '/Images//Slideshow/slide-show-image-1.jpg' },
            { id: 2, name: '', path: '/Images/Slideshow/slide-show-image-2.jpg' },
            { id: 3, name: '', path: '/Images/Slideshow/slide-show-image-3.jpg' },
            { id: 4, name: '', path: '/Images/Slideshow/slide-show-image-4.jpg' },
            { id: 5, name: '', path: '/Images/Slideshow/slide-show-image-5.jpg' },
            { id: 6, name: '', path: '/Images/Slideshow/slide-show-image-6.jpg' },
            { id: 7, name: '', path: '/Images/Slideshow/slide-show-image-7.jpg' },
            { id: 8, name: '', path: '/Images/Slideshow/slide-show-image-8.jpg' },
            { id: 9, name: '', path: '/Images/Slideshow/slide-show-image-9.png' },
            { id: 10, name: '', path: '/Images/Slideshow/slide-show-image-10.jpg' },
        ];
        var searchResults = [
            {
                "ProductId": 374972,
                "ProductName": "G.P.S. Handgunner Backpack Tan",
                "ItemNumber": "GPS-1711BPT",
                "RetailPrice": 124.2500,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2935413&c=902676&h=7b517345f374c68c8d41"
            },
            {
                "ProductId": 374973,
                "ProductName": "Boker Plus Urban Trapper 3 1\/2\" Blade w\/G-10 Handle",
                "ItemNumber": "01BO732",
                "RetailPrice": 83.7100,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3191198&c=902676&h=c007f8d766118c333b19"
            },
            {
                "ProductId": 374974,
                "ProductName": "Tundra Series 5 Degree High Performance Cooler Pak-Ice Med",
                "ItemNumber": "1203",
                "RetailPrice": 17.8200,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132313&c=902676&h=76d9215daedefbe5a415"
            },
            {
                "ProductId": 374975,
                "ProductName": "Chillin Brew 28 Degree Collegiate Royal Blue Ice Panel-XL",
                "ItemNumber": "1212",
                "RetailPrice": 27.6400,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132320&c=902676&h=de10119bd9341058bac7"
            },
            {
                "ProductId": 374976,
                "ProductName": "Chillin Brew 28 Degree Collegiate Red Ice Panel-XL",
                "ItemNumber": "1215",
                "RetailPrice": 27.6400,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132323&c=902676&h=ad2a1ed470aec30e57a4"
            },
            {
                "ProductId": 374977,
                "ProductName": "Cold Steel Knit Cap 94HCSKBB",
                "ItemNumber": "94HCSKBB",
                "RetailPrice": 12.9500,
                "ImageUrl": "http:\/\/www.motengna.com\/2006060.jpg"
            },
            {
                "ProductId": 374978,
                "ProductName": "Snugpak Backpacker Bundle-Mosquito Net & Sleeper Lite Olive",
                "ItemNumber": "BUN105",
                "RetailPrice": 72.1100,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2846887&c=902676&h=978afec2805b0a9ca839"
            },
            {
                "ProductId": 374979,
                "ProductName": "Snugpak Jungle Poncho-Jungle Bag-Dri-Sak Bundle - Olive",
                "ItemNumber": "BUN107",
                "RetailPrice": 98.4200,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2846889&c=902676&h=31602640a16b21cb884c"
            },
            {
                "ProductId": 374980,
                "ProductName": "Magnum Bravo Echo Folding Knife 4\" Blade - 9 1\/8\" Overall",
                "ItemNumber": "01EL635",
                "RetailPrice": 36.3700,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3191180&c=902676&h=56468d39df92e6eb7238"
            },
            {
                "ProductId": 374981,
                "ProductName": "Magnum Golf Tango Fixed Knife 4 1\/8\" Blade- 7 7\/8\" Overall",
                "ItemNumber": "02SC647",
                "RetailPrice": 55.9000,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3191190&c=902676&h=e902a9377523a7821f58"
            },
            {
                "ProductId": 374982,
                "ProductName": "Spyderco Manix2 XL Black G-10 Plainedge Knife",
                "ItemNumber": "C95GP2",
                "RetailPrice": 146.9300,
                "ImageUrl": "http:\/\/www.motengna.com\/4008353_2.jpg"
            },
            {
                "ProductId": 374983,
                "ProductName": "Alaskan Series 33 Degree High Performance Cooler Pak-Ice Sm",
                "ItemNumber": "1200",
                "RetailPrice": 14.6700,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132308&c=902676&h=145fea36f50094337c67"
            },
            {
                "ProductId": 374984,
                "ProductName": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Sm",
                "ItemNumber": "1208",
                "RetailPrice": 15.1300,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132316&c=902676&h=cef6ce81687ad426b4dd"
            },
            {
                "ProductId": 374985,
                "ProductName": "EZ KUT Sling Pack",
                "ItemNumber": "3110 SLP",
                "RetailPrice": 81.9400,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2753791&c=902676&h=8a25042ac8636e778548"
            },
            {
                "ProductId": 374986,
                "ProductName": "G.P.S. Medium Range Bag Tan",
                "ItemNumber": "GPS-1411MRBT",
                "RetailPrice": 78.8600,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2935407&c=902676&h=2def9c87f515cb888d10"
            },
            {
                "ProductId": 374987,
                "ProductName": "G.P.S. Quad Pistol Case in Tan",
                "ItemNumber": "GPS-1310PCT",
                "RetailPrice": 47.3900,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=2935408&c=902676&h=43a0de554bbe3934bf75"
            },
            {
                "ProductId": 374988,
                "ProductName": "Stack-On 22 Drawer Storage Cabinet",
                "ItemNumber": "DS-22",
                "RetailPrice": 22.2300,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3411384&c=902676&h=a7e909e185c399f142b4"
            },
            {
                "ProductId": 374989,
                "ProductName": "Stack-On 27 Bin Plastic Drawer Cabinet",
                "ItemNumber": "DS-27",
                "RetailPrice": 21.1000,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3411383&c=902676&h=7e9071039183a300dad7"
            },
            {
                "ProductId": 374990,
                "ProductName": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Lrg",
                "ItemNumber": "1210",
                "RetailPrice": 19.9200,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132318&c=902676&h=463ad5fccb9bb3c7d545"
            },
            {
                "ProductId": 374991,
                "ProductName": "Chillin Brew 28 Degree Collegiate Orange Ice Panel-XL",
                "ItemNumber": "1213",
                "RetailPrice": 27.6400,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=3132321&c=902676&h=75ccb3d794773b4df12a"
            },
            {
                "ProductId": 374992,
                "ProductName": "Cold Steel Laredo Bowie San Mai III 16CCB",
                "ItemNumber": "16CCB",
                "RetailPrice": 483.0000,
                "ImageUrl": "http:\/\/www.motengna.com\/2006466_2.jpg"
            },
            {
                "ProductId": 374993,
                "ProductName": "Cold Steel Sure Balance Thrower 80TSB",
                "ItemNumber": "80TSB",
                "RetailPrice": 22.4700,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=285490&c=902676&h=d15903afe9dd085cfc5a"
            },
            {
                "ProductId": 374994,
                "ProductName": "Cold Steel Sure Balance Sheath Only SC80TBP",
                "ItemNumber": "SC80TBP",
                "RetailPrice": 12.3900,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=285492&c=902676&h=da8589fb90c119f2aed1"
            },
            {
                "ProductId": 374995,
                "ProductName": "Cold Steel US Army Officers Saber 88MAS",
                "ItemNumber": "88MAS",
                "RetailPrice": 225.3700,
                "ImageUrl": "http:\/\/www.motengna.com\/core\/media\/media.nl?id=45552&c=902676&h=6ab092f827ca5c0cef95"
            },
            {
                "ProductId": 374996,
                "ProductName": "Cold Steel 1908 English Cavalry Saber 88ECS",
                "ItemNumber": "88ECS",
                "RetailPrice": 273.1700,
                "ImageUrl": "http:\/\/www.motengna.com\/2009313_2.jpg"
            }
        ];
        return { brands: brands, categories: categories, prices: prices, products: products, slideshowImages: slideshowImages, searchResults: searchResults };
    };
    return MockDataService;
}());
exports.MockDataService = MockDataService;
//# sourceMappingURL=mock-data.js.map