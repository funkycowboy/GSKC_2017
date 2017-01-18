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
            { productId: 1, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 2, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 3, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 4, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 5, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 6, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 7, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 8, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 9, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 10, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 11, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 12, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 13, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 14, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 15, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 16, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 17, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 18, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 19, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' },
            { productId: 20, manufacturerName: 'GSKC', productName: 'Product Name', description: 'This is a sample description for the product.', supplierName: 'GSKC', features: 'This is a sample description for the product.' }
        ];
        return { brands: brands, categories: categories, prices: prices, products: products };
    };
    return MockDataService;
}());
exports.MockDataService = MockDataService;
//# sourceMappingURL=mock-data.js.map