app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(api){
   var ctrl = this;
    ctrl.api = api;
    ctrl.shops;
    ctrl.shopId;
    ctrl.searchResult;
    ctrl.createdMessage;

}

ShopCtrl.prototype.displayShops = function(){
    var ctrl = this;
    ctrl.api.getRequest('/shops/','').then( function(response){
        shops = response.data;
        console.log(shops);
        return  ctrl.shops = shops;
    })
}

ShopCtrl.prototype.searchId = function(){
    var ctrl = this;
    var data = ctrl.shopId;
        ctrl.api.getRequest('/shop/',data).then( function(response){
        searchResult = response.data;
            console.log(response.data);
        return ctrl.searchResult = searchResult;     
    })
    
}

ShopCtrl.prototype.addShop = function(){
    var ctrl = this;
    var data = {
        "name" : ctrl.name,
        "address" : ctrl.address,
        "rating" : ctrl.rating
    }
    
    ctrl.api.putRequest('/shops/add',data).then(function(response){
        console.log(response);
        ctrl.createdMessage = 'Shop Created!'
    });
    
};


