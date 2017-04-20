var expressForm;
(function (expressForm) {
    var app = angular.module('expressForm', []);
    // applesauce
    var formController = (function () {
        function formController($http) {
            this.$http = $http;
            this.message = "World";
        }
        formController.prototype.saveForm = function () {
            console.log('save');
            this.$http.post('/api/drinks', this.form).then(function (result) {
                console.log('ok');
            }).catch(function (err) { console.log(err); });
        };
        return formController;
    }());
    expressForm.formController = formController;
    app.controller('formController', formController);
})(expressForm || (expressForm = {}));
//# sourceMappingURL=app.js.map