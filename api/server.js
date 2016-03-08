try{
    var env = require('./config/env_dev');
}catch(err){
    var env = require('./config/env_prod');
}

var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models/CoffeeShop.js');
//declare express app
var app = express();
var mongoose = require('mongoose');

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//
app.use(express.static(__dirname + './../app/'));

//DATABASE
//connect to db
mongoose.connect('mongodb://localhost/data/db/');
//error logging for db connection
// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});



//ROUTES SETUP
var apiRoutes = require('./routes/apiRoutes.js');
app.use('/', apiRoutes);



//------------------------------------------

//Connect to local host
app.listen(env.port, function(){
    //when I send an http request to THIS URL, it will connect whatever I am sending it from to "server.js"
   console.log('Listening on ' + env.host +':'+ env. port);
    console.log('Stop Server with CTRL + C');
});





//____________________EXTRA____________________

////FIND BY ID
//CoffeeShop.findById(<entry id>, function(err, shop) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(shop);
//    }
//});
//
////FIND IN GENERAL
//// By Id:
//CoffeeShop.find({"_id": <entry id>}, function(err, shop) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(shop);
//    }
//});
//
//// Or by address:
//CoffeeShop.find({"address": "460 King St. West"}, function(err, shop) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(shop);
//    }
//});
//
////FIND ONE OF SOMETHING NOT UNIQUE
//// By Id:
//CoffeeShop.findOne({"rating": 5}, function(err, shop) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(shop);
//    }
//});
//
////USING A WHERE CLAUSE
//CoffeeShop
//    .find({})
//    .where('rating').gt(4)
//    .limit(10)
//    .sort('+rating')
//    .select('name')
//    .exec(function(err, coffeeShops) {
//        if (err) {
//            console.log(err);
//        } else {
//            console.log(coffeeShops);
//        }
//    });
//
//// Update
//var update = {
//    address:'New Address'
//}
//
//var query = {"_id":<objectid>};
//CoffeeShop.update(query,update,{},function(err,shop){
//        if(err){
//            console.log(err);
//
//        }
//        else{
//            console.log(shop);
//        }
//    });
//
//// Delete.
//CoffeeShop.findOne({"address": "460 King St. West"}, function(err, shop) {
//    if (err) {
//        console.log(err);
//    } else {
//        shop.remove(function(err) {
//            if (err) {
//                console.log(err);
//            } else {
//                console.log(shop);
//            }
//        });
//    }
//});
