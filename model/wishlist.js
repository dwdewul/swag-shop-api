var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema({
    title: {
        type: String,
        default: "Cool Wish List"
    },
    // ref prop must have same name as what it is in the product.js model
    products: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
});

module.exports = mongoose.model('WishList', wishList);
