var Barstucks;
(function (Barstucks) {
    var Controllers;
    (function (Controllers) {
        var UpdateController = (function () {
            function UpdateController($state, $stateParams, $http) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$http = $http;
                this.form = this.$stateParams["drink"];
            }
            UpdateController.prototype.updateDrink = function () {
                var _this = this;
                this.$http.put('/api/drinks', this.form).then(function (results) {
                    console.log(" put " + _this.form.name);
                    _this.$state.go('drinks');
                }).catch(function (e) { return console.log(e); });
            };
            return UpdateController;
        }());
        Controllers.UpdateController = UpdateController;
        var DrinksController = (function () {
            function DrinksController($http) {
                this.$http = $http;
                this.getDrinks();
            }
            DrinksController.prototype.getDrinks = function () {
                var _this = this;
                this.$http.get('/api/drinks').then(function (results) {
                    _this.drinks = results.data;
                }).catch(function (e) { return console.log(e); });
            };
            DrinksController.prototype.postDrink = function () {
                var _this = this;
                this.$http.post('/api/drinks', this.form).then(function (results) {
                    _this.getDrinks();
                    _this.form = {};
                }).catch(function (e) { return console.log(e); });
            };
            DrinksController.prototype.deleteDrink = function (drink) {
                var _this = this;
                this.$http.delete('/api/drinks/' + drink.name).then(function (results) {
                    console.log("deleted " + drink.name + " ");
                    _this.getDrinks();
                }).catch(function (e) { return console.log(e); });
            };
            return DrinksController;
        }());
        Controllers.DrinksController = DrinksController;
    })(Controllers = Barstucks.Controllers || (Barstucks.Controllers = {}));
})(Barstucks || (Barstucks = {}));
//# sourceMappingURL=controllers.js.map