var Barstucks;
(function (Barstucks) {
    var module = angular.module('BarStucks', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('drinks', {
            url: '/',
            templateUrl: 'drinks.html',
            controller: Barstucks.Controllers.DrinksController,
            controllerAs: 'vm'
        })
            .state('update', {
            url: '/update',
            templateUrl: 'update.html',
            controller: Barstucks.Controllers.UpdateController,
            controllerAs: 'vm',
            params: {
                drink: null
            }
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(Barstucks || (Barstucks = {}));
//# sourceMappingURL=app.js.map