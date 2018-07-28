(function (app) {
    'use strict';    
    app.controller('productAddCtrl', productAddCtrl);
    productAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance', 'fileUploadService'];   
    function productAddCtrl($scope, apiService, notificationService, $modalInstance, fileUploadService) {
        $scope.title = 'productAddCtrl';
        $scope.pruduct = {};
        $scope.SaveProduct = SaveProduct;
        $scope.UpdateProduct = UpdateProduct;

        var Imageurl = null;

        function SaveProduct() {
            if (document.getElementById('file').files.length > 0) {
                var f = document.getElementById('file').files
                $scope.modelObj.ImageURI = f[0].name;
            }
            $scope.pruduct = {
                "Name": $scope.modelObj.Name,
                "Description": $scope.modelObj.Description,
                "ImageURI": $scope.modelObj.ImageURI,
                "GRNCode": $scope.modelObj.GRNCode,
                "Prod_Cat_Id": $scope.selectedObj.Id
            };
            apiService.post('/api/Product/Create', $scope.pruduct,

                addProductSucceded,
                addProductFailed);
        }

        function prepareFiles($files) {
            debugger
            Imageurl = $files;
            console.log("prepareFiles: " + Imageurl)
        }
        function addProductSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.Product = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();

            //if (Imageurl) {
            //    fileUploadService.uploadImage(Imageurl);
            //}
            debugger
            if (document.getElementById('file').files.length > 0) {
                var f = document.getElementById('file').files;
                fileUploadService.uploadImage(f, response.data.Id);
            }
            //    r = new FileReader();

            //r.onloadend = function (e) {
            //    var data = e.target.result;
            //    //send your binary data via $http or $resource or do anything else with it
            //}

            //r.readAsBinaryString(f);

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
