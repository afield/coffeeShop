app.service('api', ApiService);

function ApiService($http){
    this.http = $http; 
    this.BASE_URL = 'http://localhost:8080';
}

ApiService.prototype.getRequest = function(endpoint,data){
    //http request to desired server
    //My Server in "server.js" is set up at this URL
    console.log('getShops Function Works');
   return this.http.get(this.BASE_URL + endpoint + data);
                                                                                   
}

ApiService.prototype.putRequest = function(endpoint,data){
    console.log('postRequest Function Works');
    data = JSON.stringify(data);
      return this.http.put(this.BASE_URL + endpoint,data);
}

//ApiService.prototype.getShop = function(shopId){
//    console.log('getShopID Function works' + shopId);
//    return this.http.getShop('http://localhost:8080/shops/'+shopId);
//}
