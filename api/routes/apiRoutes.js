var express = require('express');
var router  = express.Router();

   //COFFEE SHOP
//Create a coffee shop object
var CoffeeShop = require('./../models/CoffeeShop');


//endpoint: http://localhost:8080/shops
router.get('/shops/',function(req,res){
    
 

    //the .find() method is a mongoose method (check out Mongoose API)
    //find an array, run a function that takes in err and the array being sent in
    CoffeeShop.find({}, function(err, coffeeShops) {
        if (err) {
            //this is an error message if anything goes wrong in this method
            console.log(err + " boops");
        } else {
            //returns an array of objects
            console.log(coffeeShops + " boop");
//res (response) has tons of methods you can use to transfer data.
    //print json object containing coffeeShops
            res.json(coffeeShops);
        }
    });  
});

//endpoint: http://localhost:8080/shops/:shopId
router.get('/shop/:shopId',function(req,res){
    var _id = req.params.shopId;
    console.log('Get result with id: ' + _id);
    //FIND BY ID
CoffeeShop.findById(_id, function(err, shop) {
    if (err) {
        console.log(err);
    } else {
        console.log(shop);
        res.json(shop);
        }
    });
});

//endpoint: http://localhost:8080/shops/add
router.put('/shops/add', function(req,res){
        
    console.log('Adding new employee:');
    console.log(req.body);
    var newCoffeeShop = CoffeeShop(
        {
            name: req.body.name,
            address: req.body.address,
            rating: req.body.rating
        }
    );

    //newCoffeeShop.summary();

    newCoffeeShop.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('User created!');
            res.json(newCoffeeShop);
        }
    });
});

//endpoint: http://localhost:8080/shops/update
router.post('/shop/update/:shopId', function(req,res){
   console.log('Updated shop with id: ' + req.params.shopId);
    var _shop = req.body;
    var update = {
        name:"_shop.name",
        address:"_shop.address",
        rating:"_shop.rating"
    }
    var query = {"_id":req.params.shopId}
    CoffeeShop.update(query,update,{},function(err,shop){
        if(err){
            console.log(err);
            res.status(400)
                .json({err:err})
        }else{
            console.log(shop);
            res.json({shop:shop});
        }
    })
});

//endpoint: http://localhost:8080/shops/delete
router.delete('/shop/delete/:shopId', function(req,res){
    console.log('Deleted shop with id: ' + req.params.shopId);
  CoffeeShop.findById({"_id":req.params.shopId},function(err,shop){
		shop.remove(function(err){
			if(err){
				console.log(err);
				res.status(400)
				   .json({err:err})
			}
			else{
				console.log(res.json);
			}
		  })
        })
	});



module.exports = router;

