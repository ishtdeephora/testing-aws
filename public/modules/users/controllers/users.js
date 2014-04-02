'use strict';

angular.module('mean.users').controller('UserManagementController', ['$scope', '$http', '$location', 'UserData',
    function($scope, $http, $location, UserData) {
    
        $scope.create = function(){
            //add user to db
            $http.post('/api/user/create', $scope.inputData).success(function(data){
                //if user added the data is appended to the global model
                $scope.loadedData = data;

                //redirect to the user table
                $location.path('/users');
            }).error(function(data){
                $scope.error = data.message;
            });


            //reset form
            this.inputData = {};
        };

        //fix this here
        $scope.remove = function(index, User){
            $http.delete('/api/user/'+User._id, User).success(function(){
                $scope.success = 'User deleted!';
                $scope.loadedData.splice(index, 1);
            }).error(function(data){
                $scope.error = data.message;
            });
        };

        $scope.update = function(User){
            //the element is grabbed from the model and used to identify
            
            //first toggle the editing param
            User.editing = !User.editing;

            //save is editing
            if(User.editing){
                //the element is then saved to the varialbe toUpdate and sent via HTTP PUT
                console.log(User);
                $http.put('/api/user/'+User._id, User).success(function(){
                    $scope.success = 'User updated!';
                }).error(function(data){
                    $scope.error = data.message;
                });
            }
        };

        $scope.find = function(){
            UserData.query(function(users) {
                $scope.loadedData = users;
            });
        };
    }
]);