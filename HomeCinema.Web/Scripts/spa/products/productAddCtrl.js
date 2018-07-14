﻿(function (app) {
    'use strict';    
    app.controller('productAddCtrl', productAddCtrl);
    productAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];   
    function productAddCtrl($scope, apiService, notificationService, $modalInstance) {
        $scope.title = 'productAddCtrl';
        $scope.pruduct = {};
        $scope.SaveProduct = SaveProduct;
        $scope.UpdateProduct = UpdateProduct;
      


        function SaveProduct() {
           
            $scope.pruduct = {
                "Name": $scope.modelObj.Name,
                "Description": $scope.modelObj.Description,
                "ImageURI": $scope.modelObj.ImageURI,
                "GRNCode": $scope.modelObj.GRNCode,
                "Prod_Cat_Id": $scope.selectedObj.Id
            };
            $scope.selectedObj;
            //$scope.pruduct = $scope.modelObj;
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
        };
        //updating
        $scope.ProductObj = {};
        function UpdateProduct() {
            debugger
            $scope.ProductObj = {
                "Id": $scope.modelObj.Id,
                "Name": $scope.modelObj.Name,
                "Description": $scope.modelObj.Description,
                "ImageURI": $scope.modelObj.ImageURI,
                "GRNCode": $scope.modelObj.GRNCode,
                "Prod_Cat_Id": $scope.selectedObj.Id
            };
            apiService.post('/api/Product/Update/' + $scope.modelObj.Id, $scope.ProductObj,
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

        $scope.fetchProduct = function (data) {
            $scope.selectedObj = data;

        };
    }
})(angular.module('homeCinema'));
