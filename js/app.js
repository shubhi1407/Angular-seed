var app = angular.module('myApp', []);
app.controller('listCtrl', function ($scope, userService) {
//    $scope.names = [{
//            firstName: 'Shubhi',
//            lastName: 'Gupta',
//            image: 'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png'
//        },
//        {
//            firstName: 'Vaibhav',
//            lastName: 'Bansal',
//            image: 'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png'
//        }, {
//            firstName: 'Mitran',
//            lastName: 'Bhavesh',
//            image: 'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png'
//        }]
    
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


