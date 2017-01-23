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
        return { brands: brands, categories: categories, prices: prices, products: products, slideshowImages: slideshowImages };
    };
    return MockDataService;
}());
exports.MockDataService = MockDataService;
//# sourceMappingURL=mock-data.js.map