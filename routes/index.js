var express = require('express');
var router = express.Router();
var products = require('../models/product');
/* GET home page. */

router.get('/', function (req, res, next) {
    var productsMap = {};
    products.find({}, function (err, product) {
        product.forEach(function (producto) {
            productsMap[producto._id] = producto;
        });
    });
    res.render('index', {product : productsMap});
});

router.get('/novarota', function (req, res, next) {
    res.render('novarota');
});


module.exports = router;
