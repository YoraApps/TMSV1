(function (app) {
    'use strict';    
    app.controller('productAddCtrl', productAddCtrl);
    productAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];   
    function productAddCtrl($scope, apiService, notificationService, $modalInstance) {
        $scope.title = 'productAddCtrl';
        $scope.pruduct = {};
        $scope.SaveProduct = SaveProduct;
        $scope.UpdateProduct = UpdateProduct;
        function SaveProduct() {
            $scope.pruduct = $scope.modelObj;
            // console.log(watch);
            apiService.post('/api/Product/Create', $scope.pruduct,
                addProductSucceded,
                addProductFailed);
        }
        function addProductSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.Product = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }
        function addProductFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }
        //cancel
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }
        //updating
        function UpdateProduct() {
            debugger
            apiService.post('/api/Product/Update/' + $scope.modelObj.Id, $scope.modelObj,
                updateProductSucceded,
                updateProductFailed);
        }
        function updateProductSucceded(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $modalInstance.dismiss();         
        }
        function updateProductFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }
    }
})(angular.module('homeCinema'));
