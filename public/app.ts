
namespace Barstucks {
    let module: ng.IModule = angular.module('BarStucks', ['ui.router'])
        .config((
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider
        )=>{
            $stateProvider.state('drinks', {
                url:'/',
                templateUrl:'drinks.html',
                controller:Barstucks.Controllers.DrinksController,
                controllerAs: 'vm'
            })
            .state('update', {
                url: '/update',
                templateUrl:'update.html',
                controller:Barstucks.Controllers.UpdateController,
                controllerAs: 'vm',
                params: {
                    drink: null
                }
            });

            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);
        });


}