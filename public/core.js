var todoApp = angular.module('todoApp', []);

todoApp.controller("mainController", mainController);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.moment = moment;

    // when landing on the page, get all todos and show them
    $http.get('/tasks')
        .success(function(data) {
            $scope.todos = data;
            console.log("data returned : ",data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        if(!$scope.formData.name)
            return;
        $http.post('/tasks', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/tasks/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
