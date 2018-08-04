(function (app) {
    'use strict';  

    app.controller('purchaseFormCtrl', purchaseFormCtrl);

    purchaseFormCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal'];

    function purchaseFormCtrl($scope, apiService, notificationService, $modal) {     
        $scope.loadingPurchase = true;
        $scope.Purchases = [];
        $scope.page = 0;      
        $scope.search = search;
        $scope.openPurchaseDialog = openPurchaseDialog;     
        $scope.modelObj = {};       
        $scope.SupplierArry = [];
        //$scope.LocObj = {};
        $scope.SupObj = {};
        $scope.UomObj = {};
        $scope.ProdObj = {};
        $scope.storeObj = {};
        function search(page) {
            page = page || 0;
            $scope.loadingPurchase = true;
            var config = {
                params: {
                    page: page,
                    pageSize: 6                    
                }
            };
            apiService.get('/api/PurchaseForm/getallpurchase', config,
                purchaseLoadCompleted,
                purchaseLoadFailed);         
        }       
        function purchaseLoadCompleted(result) {
            console.log(result);
            $scope.Purchases = result.data;         
            $scope.loadingPurchase = false; 
        }
        function purchaseLoadFailed(response) {
            notificationService.displayError(response.data);
        }
       
        $scope.Id = 0;
        $scope.SelctedArry = [];       
        $scope.AddPurchase = function () {

            debugger
          
            $scope.Purchases;

            //$scope.LocationList = [];
            //$scope.LocationList = $scope.Purchases.LocationList;

            $scope.supplierList = [];
            $scope.supplierList = $scope.Purchases.supplierList;

            $scope.uOMList = [];
            $scope.uOMList = $scope.Purchases.uOMList;

            $scope.productList = [];
            $scope.productList = $scope.Purchases.productList;

            $scope.storeList = [];
            $scope.storeList = $scope.Purchases.storeList;
            $scope.openPurchaseDialog();
           
        } 
        
        //modified

        function openPurchaseDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/purchaseForm/purchaseformAdd.html', 
                controller: 'purchaseFormAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        $scope.fetchSupplier = function (data) {
            //$scope.LocationList = data; 
            $scope.supplierList = data;
            $scope.uOMList = data;
            $scope.productList = data;
            $scope.storeList = data;

        }
        $scope.search();

    }
})(angular.module('homeCinema'));
