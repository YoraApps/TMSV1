(function (app) {
    'use strict';

    
    app.controller('PurchaseReportCtrl', PurchaseReportCtrl);

    PurchaseReportCtrl.$inject = ['$scope', 'apiService', 'notificationService','$modal'];

    function PurchaseReportCtrl($scope, apiService, notificationService, $modal) {
        $scope.title = 'PurchaseReportCtrl';
        $scope.pageClass = 'page-Purchase';
        $scope.loadingPurchase = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit;
        $scope.UpdatePurchase = UpdatePurchase;
        $scope.PurchasesArr = [];
        $scope.Purchases = [];
        $scope.LocHoldArr = [];
        $scope.SupHoldArr = [];
        $scope.UomHoldArr = [];
        $scope.ProdHoldArr = [];
        $scope.LocObj = {};
        $scope.SupObj = {};
        $scope.UomObj = {};
        $scope.ProdObj = {};
        $scope.modelObj = {};
       
        function search(page) {
            page = page || 0;

            $scope.loadingPurchase = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    filter: $scope.filterPurchase
                }
                   
            };

            apiService.get('/api/PurchaseReport/GetAllPurchaseReport', config,  
                PurchaseReportLoadCompleted,
                PurchaseReportLoadFailed);


            apiService.get('/api/PurchaseForm/getallpurchase', config,
                purchaseLoadCompleted,
                purchaseLoadFailed);         

        }

        function purchaseLoadCompleted(result) {
            console.log(result);
            $scope.PurchasesArr = result.data;
            console.log("purchase", $scope.Purchases)
            $scope.loadingPurchase = false;
        }
        function purchaseLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function PurchaseReportLoadCompleted(result) {
            console.log("re", result);
            $scope.Purchases = result.data;
            console.log("pr", result);
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingpurchasereport = false;

            if ($scope.filterPurchase && $scope.filterPurchase.length) {
                notificationService.displayInfo(result.data.length + ' purchaseReport found');
            }

        }

        function PurchaseReportLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        $scope.prodObjFromPostModel = function (data) {
            $scope.ProdObj = data;
        }

        $scope.supObjFromPostModel = function (data) {
            $scope.SupObj = data;
        }

        $scope.uomObjFromPostModel = function (data) {
            $scope.UomObj = data;
        }

        $scope.locObjFromPostModel = function (data) {
            $scope.LocObj = data;
        }

        function UpdatePurchase() {

            $scope.selectedObj = {
                "PurchaseId": $scope.modelObj.Id,
                "Product": $scope.ProdObj,
                "Supplier": $scope.SupObj,
                "UOM": $scope.UomObj,
                "Location": $scope.LocObj,
                "Quantity": $scope.modelObj.Quantity,
                "PurchaseDate": $scope.modelObj.date
                
            };
            apiService.post('api/PurchaseReport/Update', $scope.selectedObj,
                PurchaseReportsLoadCompleted,
                ParchaseReportsLoadFailed);
        }
        function PurchaseReportsLoadCompleted() {

            $scope.modelObj = {};
            notificationService.displaySuccess('success');
            $scope.cancelEdit();
        }
        function ParchaseReportsLoadFailed() {
            $scope.modelObj = {};
            notificationService.displayError('error');
            $scope.cancelEdit();
        }

        function removePurchase(data) {
            $scope.Id = data;
            apiService.post('api/PurchaseReport/delete/' + $scope.Id, null,
                PurchaseReportsremoveCompleted,
                PurchaseReporsremoveFailed);

            function PurchaseReportsremoveCompleted(result) {

                notificationService.displaySuccess('has been remove');
                $scope.Purchases = result.data;
                $scope.search();

            }
            function PurchaseReporsremoveFailed(response) {
                notificationService.displayError(response);
            }
        }
       
     


        $scope.Modals = {

            openPurchaseDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/PurchaseReport/PurchaseReportAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },
            cancelPurchaseDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

        function cancelEdit() {
            $scope.Modals.cancelPurchaseDialog();
        }


        $scope.openPurchaseDialogContainer = function (abc) {

            $scope.productarr = $scope.PurchasesArr.productList;
            $scope.ProdHoldArr = $scope.productarr.filter(x => x.ProductId == abc.ProductId)
            $scope.ProdObj = $scope.ProdHoldArr[0];

            $scope.supplierarr = $scope.PurchasesArr.supplierList;
            $scope.SupHoldArr = $scope.supplierarr.filter(x => x.Supplier_Id == abc.Supplier_Id);
            $scope.SupObj = $scope.SupHoldArr[0];

            $scope.UOMarr = $scope.PurchasesArr.uOMList;
            $scope.UomHoldArr = $scope.UOMarr.filter(x => x.UomId == abc.UomId);
            $scope.UomObj = $scope.UomHoldArr[0];

            $scope.Locationarr = $scope.PurchasesArr.LocationList;
            $scope.LocHoldArr = $scope.Locationarr.filter(x => x.LocationId == abc.LocationId);
            $scope.LocObj = $scope.LocHoldArr[0];

           
            $scope.save = 'update';
            $scope.modelObj = abc;
            $scope.Modals.openPurchaseDialog();
            $scope.modelObj.date = abc.PurchaseDate;
            
        } 
      
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            minDate: new Date(1900, 9, 9),
            initDate: new Date('2018-07-13')
        };
        $scope.format = 'MM-dd-yyyy';               

       
        function clearSearch() {
            $scope.filterPurchase = '';
            $scope.search();
        }

        $scope.search(); 
    }
})(angular
    .module('homeCinema'));
