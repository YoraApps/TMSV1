//(function (app) {
//    'use strict';

    
//    app.controller('PurchaseReportAddCtrl', PurchaseReportAddCtrl);

//    PurchaseReportAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

//    function PurchaseReportAddCtrl($scope, apiService, notificationService, $modalInstance) {
//        $scope.purchase = {};
//        $scope.UpdatePurchase = UpdatePurchase;


//        $scope.cancelEdit = function () {
//            $scope.modelObj = {};
//            $modalInstance.dismiss();
//        }
//        function UpdatePurchase() {
//            $scope.purchase = $scope.modelObj;
//            apiService.post('/api/SupplierMaster/Update', $scope.purchase,
//                updatePurchaseSucceded,
//                updatePPurchaseFailed);
//        }


//        function updatePurchaseSucceded(response) {
//            console.log(response);
//            $scope.modelObj = {};
//            notificationService.displaySuccess('purchase has been updated');
//            $modalInstance.dismiss();
//            // $location.path('/watches');
//            // $scope.watch = response.data;

//        }
//        function updatePPurchaseFailed(response) {
//            console.log(response);
//            $scope.modelObj = {};
//            notificationService.displayError(response);
//        }


//    }
//})(angular.module('homeCinema'));
        

