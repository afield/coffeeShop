app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(api, $stateParams){
   var ctrl = this;
    ctrl.$statParams = $stateParams;
    ctrl.api = api;
    ctrl.shops;
    ctrl.searchShopId;
    ctrl.delShopId;
    ctrl.updateId;
    ctrl.searchResult;
    ctrl.createdMessage;
    ctrl.updatedMessage;
    ctrl.deletedMessage;
//    
//    if($stateParams.shopId != undefined){
//		api.getRequest($stateParams.shopId)
//		.then(function(res){
//			console.log(res);
//			ctrl.product = res.data.shop;
//		})
//	}

}

ShopCtrl.prototype.displayShops = function(){
    var ctrl = this;
    ctrl.api.getRequest('/shops/','').then( function(response){
        shops = response.data;
        console.log(shops);
        return  ctrl.shops = this.shops;
    })
}

ShopCtrl.prototype.searchId = function(){
    var ctrl = this;
    var data = ctrl.searchShopId;
        ctrl.api.getRequest('/shop/',data).then( function(response){
        searchResult = response.data;
            console.log(response.data);
        return ctrl.searchResult = searchResult;     
    })
    
}

ShopCtrl.prototype.addShop = function(){
    var ctrl = this;
    var data = {
        "name" : ctrl.addName,
        "address" : ctrl.addAddress,
        "rating" : ctrl.addRating
    }
    
    ctrl.api.putRequest('/shops/add',data).then(function(response){
        console.log(response);
        ctrl.createdMessage = 'Shop Created!'
    });
    
};

ShopCtrl.prototype.updateShopId = function(){
    var ctrl = this;
    var data = {
        "name" : ctrl.updateName,
        "address" : ctrl.updateAddress,
        "rating" : ctrl.updateRating
    }   
    ctrl.api.postRequest('/shop/update/',ctrl.updateId,data).then(function(response){
        console.log(response)
        ctrl.updatedMessage = 'Shop Updated';
    });
};

ShopCtrl.prototype.deleteId = function(){
    var ctrl = this;
    var data = ctrl.delShopId;
    ctrl.api.delRequest('/shop/delete/',data).then(function(response){
            console.log(response.data);
     ctrl.deletedMessage =  'Shop Deleted';
    })
}


