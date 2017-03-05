var app = angular.module('myApp', []);
app.controller('listCtrl', function ($scope, userService) {

    
   userService.getAllUsers()
    .then(function (response) {
        console.log(response);
        $scope.names = response.data.data;  
    });

});

app.service('userService', function ($http) {

    this.getAllUsers = function () {
        return $http.get("https://reqres.in/api/users?page=2")


    }
});


