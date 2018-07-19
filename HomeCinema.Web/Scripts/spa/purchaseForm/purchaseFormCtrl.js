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
        $scope.LocObj = {};
        $scope.SupObj = {};
        $scope.UomObj = {};
        $scope.ProdObj = {};
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
        $scope.AddPurchase = function (data) {
            debugger
            $scope.modelObj = data;
            $scope.SelctedArry = $scope.modelObj.LocationList.filter(x => x.Id === data.LocationId);
            $scope.LocationList = [];            
            $scope.LocationList = $scope.modelObj.LocationList;       
            $scope.SelctedArry = $scope.modelObj.supplierList.filter(x => x.Id === data.SupplierId);
            $scope.supplierList = [];
            $scope.supplierList = $scope.modelObj.supplierList;
            
            $scope.SelctedArry = $scope.modelObj.uOMList.filter(x => x.Id === data.UOMId);
            $scope.uOMList = [];
            $scope.uOMList = $scope.modelObj.uOMList; 

            $scope.SelctedArry = $scope.modelObj.productList.filter(x => x.Id === data.ProductId);
            $scope.productList = [];
            $scope.productList = $scope.modelObj.productList; 
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
            debugger
            $scope.LocationList = data; 
            $scope.supplierList = data;
            $scope.uOMList = data;
            $scope.productList = data;

        }
        $scope.search();

    }
})(angular.module('homeCinema'));
