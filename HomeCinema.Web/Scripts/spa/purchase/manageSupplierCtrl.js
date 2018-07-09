(function (app) {
    'use strict';

    app.controller('manageSupplierCtrl', manageSupplierCtrl);

    manageSupplierCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function manageSupplierCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'manageSupplierCtrl';
        $scope.pageClass = 'page-Purchases';
        $scope.loadingPurchase = true;
        $scope.Purchases = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.openPurchaseDialog = openPurchaseDialog;
        $scope.removePurchase = removePurchase;
        $scope.modelObj = {};
        $scope.supplierMasterLoadCompleted = supplierMasterLoadCompleted;
        $scope.supplierMasterLoadFailed = supplierMasterLoadFailed;
        $scope.SupplierArry = [];
        $scope.selectedObj = {};

        //getting data and filtering data

        $scope.fileName = "report";
        $scope.exportData = [];
        // Headers:
        $scope.Purchases.push(["Id", "ExamType", "Marks", "Result", "Comments ","sads","dsadsa","qwewq"]);

        function search(page) {
            page = page || 0;
            $scope.loadingPurchase = true;
            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterPurchase
                }
            };
            apiService.get('api/PurchaseMaster/getallpurchase', config,
                purchaseLoadCompleted,
                purchaseLoadFailed);

            apiService.get('/api/SupplierMaster/getallsupplier', config,
                supplierMasterLoadCompleted,
                supplierMasterLoadFailed);
        }
        function supplierMasterLoadCompleted(response) {
            $scope.SupplierArry = response.data;

        }
        function supplierMasterLoadFailed(error) {
            console.log("error in Product Group Get Call Service");
        }



        function purchaseLoadCompleted(result) {
            $scope.Purchases = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingPurchase = false;
            if ($scope.filterPurchase && $scope.filterPurchase.length) {
                notificationService.displayInfo(result.data.length + 'Purchase found');
            }
        }
        function purchaseLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterPurchase = '';
            search();
        }
        $scope.Id = 0;
        $scope.SelctedArry = [];

        $scope.openPurchaseDialogContainer = function (data) {
            $scope.modelObj = data;
            $scope.SelctedArry = $scope.SupplierArry.filter(x => x.Id === data.Supplier_Id);     
            $scope.selectedObj = $scope.SelctedArry[0];
            $scope.ModelType = 'Edit';
            debugger
            $scope.openPurchaseDialog();
        }
        //popup for save
        $scope.AddPurchase = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openPurchaseDialog();
        }
        //modified
        function openPurchaseDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/purchase/manageSupplierAdd.html',
                controller: 'manageSupplierAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }
        //remove
        function removePurchase(data) {
            $scope.removeID = data;
            apiService.post('/api/PurchaseMaster/Delete/' + $scope.removeID, null,
                purchaseRemoveCompleted,
                purchaseRemoveFailed);
        }
        function purchaseRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
            console.log(result);
            $scope.Purchases = result.data;
        }
        function purchaseRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }
        $scope.search();
      
    }
})(angular.module('homeCinema'));
