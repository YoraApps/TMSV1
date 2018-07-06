(function (app) {
    'use strict';
    
        app.controller('booksCtrl', booksCtrl);    

    booksCtrl.$inject = ['$scope', 'apiService','notificationService'];

    function booksCtrl($scope, apiService, notificationService) {
        $scope.title = 'booksCtrl';
        $scope.pageClass = 'page-books';
        $scope.loadingBooks = true;
        $scope.page = 0;
        $scope.pagesCount = 0;

        $scope.Books = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;

        function search(page) {
            page = page || 0;

            $scope.loadingBooks = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterMovies
                }
            };

            apiService.get('/api/books/getallbooks', config,
                booksLoadCompleted,
                booksLoadFailed);
        }
        function booksLoadCompleted(result) {
            $scope.Books = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingBooks = false;

            if ($scope.filterBooks && $scope.filterBooks.length) {
                notificationService.displayInfo(result.data.length + ' books found');
            }

        }

        function booksLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterBooks = '';
            search();
        }

        $scope.search();

        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
