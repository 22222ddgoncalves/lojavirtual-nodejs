/**
 * Created by diogo on 28/11/2016.
 */
var express = require('express');
var router = express.Router();
var Shop = require('../models/Shop');
/* GET users listing. */
router.get('/', function (req, res, next) {
    var shopList = {}
    shopList = Shop.find({},function (err,shops) {
        shops.forEach(function (shop) {
            shopList[shop._id] = shop;
        });
    });
    res.render('lista_shop',{shoplist : shop});
});
router.get('/{{title}}', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/{{email}}', function (req, res, next) {
    res.send('respond with a resource');
});



router.get('/adiciona',function (req,res,next) {
    res.render('shop_adiciona');
});

router.post('/adiciona',function (req,res,next) {
      var shop = new Shop();
      shop.title = req.body.title;
      shop.price = req.body.price;
      shop.email = req.body.email;
      shop.save(function (err) {
          if(err){
              console.log(err);
              res.redirect('/shop/adiciona');
          }else{
              console.log("meow");
              res.redirect('/shop/adicionasucesso');
          }
      });
});

router.get('/adicionasucesso', function (req, res, next) {
    res.send('Adicionou com o sucesso todo!');
});

module.exports = router;