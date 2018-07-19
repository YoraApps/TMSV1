(function (app) {
    'use strict';

    app.controller('suppliermasterCtrl', suppliermasterCtrl);

    suppliermasterCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function suppliermasterCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'suppliermasterCtrl';
        $scope.pageClass = 'page-supplier';
        $scope.loadingWatches = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.openSuppliersDialog = openSuppliersDialog;
        $scope.removesupplier = removesupplier;
       // $scope.openDialog = openDialog;
        $scope.suppliers = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        
        function search(page) {
            debugger
            page = page || 0;

            $scope.loadingWatches = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filtersuppliers
                }
            };

            apiService.get('/api/SupplierMaster/getallsupplier', config,
                suppliersLoadCompleted,
                suppliersLoadFailed);
        }

        function suppliersLoadCompleted(result) {
            $scope.suppliers = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingsuppliers = false;


            if ($scope.filtersuppliers && $scope.filtersuppliers.length) {
                notificationService.displayInfo(result.data.length + ' suppliers found');
            }

        }

        function suppliersLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filtersuppliers = '';
            search();
        }
        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {
            debugger
            $scope.ModelType = 'Edit';
            $scope.modelObj = data;     //editing
            openSuppliersDialog();
        }
        //popup for save
        $scope.AddSupplier = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            openSuppliersDialog();
        }
        function openSuppliersDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/suppliermaster/suppliermasterAdd.html',
                controller: 'suppliermasterAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
                //loadMovieDetails();
            }, function () {
            });
        }
        function removesupplier(data) {
            // $scope.loadingWatches = true;
            $scope.removeId = data;
            apiService.post('/api/SupplierMaster/Delete/' + $scope.removeId, null,
                supplierRemoveCompleted,
                supplierRemoveFailed);
        }

        function supplierRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
            // $modalInstance.dismiss();
            console.log(result);
            $scope.supplier = result.data;
           
        }

        function supplierRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }


        $scope.search();
        activate();

        function activate() { }

    }
})(angular.module('homeCinema'));

