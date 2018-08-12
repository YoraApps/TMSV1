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
        $scope.suppliers = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.SupplierArry = [];
        $scope.selectedObj = {};
        $scope.suppliertypeLoadCompleted = suppliertypeLoadCompleted;
        $scope.supplierstypeLoadFailed = supplierstypeLoadFailed;
        
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

            apiService.get('/api/SupplierType/GetAllSupplierType', config,
                suppliertypeLoadCompleted,
                supplierstypeLoadFailed);
        }
        function suppliertypeLoadCompleted(response) {
          
            $scope.SupplierArry = response.data;

        }
        function supplierstypeLoadFailed(error) {
            console.log("error in Supplier Type Get Call Service");
        }

        function suppliersLoadCompleted(result) {
           
            $scope.suppliers = result.data;
            $scope.adjustSupplierList();
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
        $scope.Id = 0;
        $scope.SelctedArry = [];

        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {
            $scope.SelctedArry = $scope.SupplierArry.filter(x => x.Id === data.SupplierTypeId);
            $scope.selectedObj = $scope.SelctedArry[0];

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
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }
    
    function removesupplier(data) {
        // $scope.loadingWatches = true;
        $scope.id = data;
        apiService.post('/api/SupplierMaster/Delete/' + $scope.id, null,
            supplierRemoveCompleted,
            supplierRemoveFailed);
    }

        function supplierRemoveCompleted(result) {
            debugger
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

        // pagination 
         $scope.filteredSupplierData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustSupplierList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredSupplierData = angular.copy($scope.suppliers.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustSupplierList();
        });

        $scope.showPerPageDataOptions = [3, 5, 10, 25, 50, 100];

        $scope.search();
    }
})(angular.module('homeCinema'));

