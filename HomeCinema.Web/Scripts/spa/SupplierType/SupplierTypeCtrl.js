(function (app) {
    'use strict';


    app.controller('SupplierTypeCtrl', SupplierTypeCtrl);

    SupplierTypeCtrl.$inject = ['$scope', '$modal', 'apiService', 'notificationService'];

    function SupplierTypeCtrl($scope, $modal, apiService, notificationService) {
        $scope.title = 'SupplierTypeCtrl';
        $scope.pageClass = 'page-Suppliertype';
        $scope.loadingsupplier = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.SupplierTypes = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit;
        $scope.UpdatedSuppliertype = UpdatedSuppliertype;
        $scope.AddSupplierModel = AddSupplierModel;
        $scope.removeSupplierType = removeSupplierType;
        
       
         

//getall SupplierTypes

        function search(page) {
            page = page || 0;

            $scope.loadingsupplier = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterSupplierTypes
                }
            };

            apiService.get('/api/SupplierType/GetAllSupplierType', config,
                suppliertypeLoadCompleted,
                suppliertypeLoadFailed);
        }

        function suppliertypeLoadCompleted(result) {
            $scope.SupplierTypes = result.data;
            $scope.adjustSupplierTypeList();
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingsupplier = false;

            if ($scope.filterSupplierTypes && $scope.filterSupplierTypes.length) {
                notificationService.displayInfo(result.data.length + ' customertype found');
            }

        }

        function suppliertypeLoadFailed(response) {
            notificationService.displayError(response.data);
        }
//filter clearsearch 

        function clearSearch() {
            $scope.filterSupplierTypes = '';
            search();
        }

 //popup modal

        $scope.Modals = {
            openSupplierTypeDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/SupplierType/Add.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },

 //cnacel modal

            cancelSupplierTypeDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

//Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelSupplierTypeDialog();
        }

//popup edit SupplierType

        $scope.modelobj = {};
        $scope.openSupplierTypeDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openSupplierTypeDialog();
        }

//popup Added new SupplierType

        $scope.AddSupplier = function () {
            $scope.save = 'add';
            $scope.Modals.openSupplierTypeDialog();
        }

 //Update SupplierType

        $scope.SupplierObj = {};
        function UpdatedSuppliertype() {
            $scope.SupplierObj = $scope.modelobj;
            apiService.post('/api/SupplierType/Update', $scope.SupplierObj,
                updateSupplierSucceded,
                updateSupplierFailed);
        }

        function updateSupplierSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }


        function updateSupplierFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

//Save CustomerType
        function AddSupplierModel() {
            debugger
            apiService.post('/api/SupplierType/Save', $scope.modelobj,
                AddSupplierModelSucceded,
                AddSupplierModelFailed);
        }
        function AddSupplierModelSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.SupplierTypes = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddSupplierModelFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }

        //remove CustomerType

        function removeSupplierType(data) {
            $scope.id = data;
            apiService.post('/api/SupplierType/Delete/' + $scope.id, null,
                removeSupplierTypeCompleted,
                removeSupplierTypeFailed);
        }
        function removeSupplierTypeCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.SupplierTypes = result.data;
            $scope.search();

        }
        function removeSupplierTypeFailed(response) {
            notificationService.displayError(response);
        }

// pagination 
          // $scope.filteredSubjectData = [];
             $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
            $scope.orderByField = 'Id';
            $scope.reverseSort = true;
          $scope.adjustSupplierTypeList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredSubjectData = angular.copy($scope.SupplierTypes.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustSupplierTypeList();
        });

        $scope.showPerPageDataOptions = [3,5, 10, 25, 50, 100];
       
        $scope.search();

        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));


