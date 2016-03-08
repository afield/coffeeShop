app.service('api', ApiService);

function ApiService($http){
    this.http = $http; 
    this.BASE_URL = 'http://localhost:80';
}

ApiService.prototype.getRequest = function(endpoint,data){
   return this.http.get(this.BASE_URL + endpoint + data);
                                                                                   
}

ApiService.prototype.putRequest = function(endpoint,data){
    data = JSON.stringify(data);
      return this.http.put(this.BASE_URL + endpoint,data);
}

ApiService.prototype.postRequest = function(endpoint,id,data){
    console.log(data);
    return this.http.post(this.BASE_URL + endpoint + id,data);
}

ApiService.prototype.delRequest = function(endpoint,data){
    console.log(data);
    return this.http.delete(this.BASE_URL + endpoint + data);
}

