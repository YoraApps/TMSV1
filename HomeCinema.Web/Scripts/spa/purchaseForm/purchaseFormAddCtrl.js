(function (app) {
    'use strict';
    app.controller('purchaseFormAddCtrl', purchaseFormAddCtrl);

    purchaseFormAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

        function purchaseFormAddCtrl($scope, apiService, notificationService, $modalInstance){
        $scope.title = 'purchaseFormAddCtrl';
        $scope.purchase = {};       
        $scope.SavePurchase = SavePurchase; 
            
            function SavePurchase() {
               
            $scope.purchase = {
                "Supplier": $scope.SupObj,
                //"Location": $scope.LocObj,
                "UOM": $scope.UomObj,
                "Product": $scope.ProdObj,
                "Store": $scope.storeObj,
                "Quantity": $scope.modelObj.Quantity,
                "PurchaseDate":$scope.modelObj.date
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
        //cancel
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }   
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }
       
         //date picker
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
    }
})(angular.module('homeCinema'));
