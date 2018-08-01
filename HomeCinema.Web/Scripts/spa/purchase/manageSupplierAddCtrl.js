(function (app) {
    'use strict'
    app.controller('manageSupplierAddCtrl', manageSupplierAddCtrl);

    manageSupplierAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function manageSupplierAddCtrl($scope, apiService, notificationService, $modalInstance) {
        $scope.title = 'manageSupplierAddCtrl';
        $scope.purchase = {};
        $scope.SavePurchase = SavePurchase;
        $scope.UpdatePurchase = UpdatePurchase;
        function SavePurchase(data) {
            $scope.purchase= {
                "Status": data.Status,                
                "Supplier_Id": $scope.selectedObj.Id
            }
            $scope.selectedObj;
            //$scope.purchase = $scope.modelObj;
            // console.log(watch);
            apiService.post('/api/PurchaseMaster/Create', $scope.purchase,
                addPurchaseSucceded,
                addPurchaseFailed);
        }
        function addPurchaseSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
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
        //updating
        $scope.supplierObj = {};
        function UpdatePurchase(data) {
            $scope.supplierObj = {
                "Id": data.Id,
                "Status": data.Status,
                "Supplier_Id": $scope.Supplier_Id
            }
            debugger
            apiService.post('api/PurchaseMaster/Update/' + $scope.supplierObj.Id, $scope.supplierObj,
                updatePurchaseSucceded,
                updatePurchaseFailed);
        }
        function updatePurchaseSucceded(response) {            
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $modalInstance.dismiss();
        }

        function updatePurchaseFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }
    }
       
})(angular.module('homeCinema'));
