var app = angular.module('sachin', []);
app.factory('csv', ['$http', function(http) {
    var dataFactory = {};
    dataFactory.getCustomers = function() {
        return http.get('./sachin.csv');
    };
    return dataFactory;
}])
app.controller('mainCtrl', ['$scope', 'csv', function($scope, csv) {
	var main = this;
        csv.getCustomers().then(function(response) {
           main.data = csvJSON(response.data);
        })

}])

function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}