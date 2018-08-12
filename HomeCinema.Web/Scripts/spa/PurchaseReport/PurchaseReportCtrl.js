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
        $scope.Name = [];
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit;
        $scope.UpdatePurchase = UpdatePurchase;
        $scope.unitofmeasurementsLoadCompleted = unitofmeasurementsLoadCompleted;
        $scope.unitofmeasurementsLoadFailed = unitofmeasurementsLoadFailed;
        $scope.openPurchaseDialog = openPurchaseDialog;
        $scope.PurchasesArr = [];
        $scope.Purchases = [];
        $scope.LocHoldArr = [];
        $scope.SupHoldArr = [];
        $scope.UomHoldArr = [];
        $scope.ProdHoldArr = [];
        $scope.storeHoldArr = [];
        $scope.LocObj = {};
        $scope.SupObj = {};
        $scope.UomObj = {};
        $scope.ProdObj = {};
        $scope.storeObj = {};
        $scope.modelObj = {};
        $scope.selectedObj = {};
        $scope.selectedStr = '';
        $scope.purchaseAnguList = [];
        $scope.openPurchaseDialog = openPurchaseDialog;
        $scope.purchase = {};
        $scope.SavePurchase = SavePurchase;

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
          
            apiService.get('/api/UnitOfMeasurementMaster/getallUnit', config,
                unitofmeasurementsLoadCompleted,
                unitofmeasurementsLoadFailed);

        }

        function purchaseLoadCompleted(result) {
          
            console.log(result);
   
            $scope.PurchasesArr = result.data;
          
        }
        function purchaseLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function unitofmeasurementsLoadCompleted(result) {
          
            $scope.unitofmeasurements = result.data;
        }
        function unitofmeasurementsLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function PurchaseReportLoadCompleted(result) {

            debugger
           
            $scope.Purchases = result.data;
            $scope.adjustPurchaseReportList();
           
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

        $scope.storeObjFromPostModel = function (data) {
            $scope.storeObj = data;
        }
        

        function UpdatePurchase() {

            $scope.selectedObj = {
                "PurchaseId": $scope.modelObj.Id,
                "Product": $scope.ProdObj,
                "Supplier": $scope.SupObj,
                "UOM": $scope.UomObj,
                //"Location": $scope.LocObj,
                "Store": $scope.storeObj,
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

        //function removePurchase(data) {
        //    $scope.Id = data;
        //    apiService.post('api/PurchaseReport/delete/' + $scope.Id, null,
        //        PurchaseReportsremoveCompleted,
        //        PurchaseReporsremoveFailed);

        //    function PurchaseReportsremoveCompleted(result) {

        //        notificationService.displaySuccess('has been remove');
        //        $scope.Purchases = result.data;
        //        $scope.search();

        //    }
        //    function PurchaseReporsremoveFailed(response) {
        //        notificationService.displayError(response);
        //    }
        //}
       
     


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


            $scope.storearr = $scope.PurchasesArr.storeList;
            $scope.storeHoldArr = $scope.storearr.filter(x => x.StoreId == abc.StoreId);
            $scope.storeObj = $scope.storeHoldArr[0];
           
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

        $scope.getPurchaseGuiRep = function (data) {
            console.log(data.originalObject);
            apiService.post('/api/PurchaseReport/getPurchaseReportInaGraph/', data.originalObject,
                PurchaseGraphicReportLoadCompleted,
                PurchaseGraphicReportLoadFailed);
        }
        function PurchaseGraphicReportLoadCompleted(result) {
            debugger
            $scope.PurchasesGUI = result.data;  
            Morris.Bar({
                element: "purchase-bar",
                data: $scope.PurchasesGUI,
                xkey: "ProductName",
                ykeys: ["Quantity"],
                labels: ["Product Quantity"],
                barRatio: 0.4,
                xLabelAngle: 55,
                hideHover: "auto",
                resize: 'true'
            });
            $scope.loadingPurchase = false;

        }
      
        function PurchaseGraphicReportLoadFailed(response) {
            notificationService.displayError(response.data);
        }
      
        function clearSearch() {
            $scope.filterPurchase = '';
            $scope.search();
        }



        $scope.Id = 0;
        $scope.SelctedArry = [];
        $scope.AddPurchase = function () {
            debugger
            $scope.Purchases;

            $scope.LocationList = [];
            $scope.LocationList = $scope.PurchasesArr.LocationList;

            $scope.supplierList = [];
            $scope.supplierList = $scope.PurchasesArr.supplierList;

            $scope.uOMList = [];
            $scope.uOMList = $scope.PurchasesArr.uOMList;

            $scope.productList = [];
            $scope.productList = $scope.PurchasesArr.productList;

            $scope.storeList = [];
            $scope.storeList = $scope.PurchasesArr.storeList;
            $scope.openPurchaseDialog();

        } 
        function openPurchaseDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/purchaseForm/purchaseformAdd.html',
                //controller: 'purchaseFormAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        $scope.fetchSupplier = function (data) {
            $scope.LocationList = data;
            $scope.supplierList = data;
            $scope.uOMList = data;
            $scope.productList = data;
            $scope.storeList = data;

        }
        function SavePurchase() {
            debugger
            $scope.purchase = {
               
                "Supplier": $scope.SupObj,
                "Location": $scope.LocObj,
                "UOM": $scope.UomObj,
                "Product": $scope.ProdObj,
                "Store": $scope.storeObj,
                "Quantity": $scope.modelObj.Quantity,
                "PurchaseDate": $scope.modelObj.date
            }

            //$scope.purchase = $scope.modelObj;
            // console.log(watch);
            apiService.post('/api/PurchaseForm/save', $scope.purchase,
                addPurchaseSucceded,
                addPurchaseFailed);
        }
        function addPurchaseSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            debugger
            $scope.purchase = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }
        function addPurchaseFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;
        }

        //pagination

        $scope.filteredPurchaseReportData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustPurchaseReportList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredPurchaseReportData = angular.copy($scope.Purchases.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustPurchaseReportList();
        });

        $scope.showPerPageDataOptions = [3, 5, 10, 25, 50, 100];
        $scope.search();
    }
})(angular.module('homeCinema'));
