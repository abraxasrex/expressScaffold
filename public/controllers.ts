namespace Barstucks.Controllers {

    export class UpdateController {
        public form;
        public updateDrink(){
            this.$http.put('/api/drinks', this.form).then((results)=>{
                console.log(` put ${this.form.name }`);
                this.$state.go('drinks');
            }).catch( (e)=> console.log(e) );
        }
        constructor(
            private $state: ng.ui.IStateService, 
            private $stateParams: ng.ui.IStateParamsService,
            private $http: ng.IHttpService
            ){
                this.form = this.$stateParams["drink"];
        }
    }

    export class DrinksController {
        public drinks;
        public form;
        public getDrinks(){
            this.$http.get('/api/drinks').then((results)=>{
                this.drinks = results.data;
            }).catch( (e) => console.log(e) );
        }
        public postDrink(){
            this.$http.post('/api/drinks', this.form).then((results)=>{
                this.getDrinks();
                this.form = {};
            }).catch( (e)=> console.log(e));
        }
        public deleteDrink(drink){
            this.$http.delete('/api/drinks/' + drink.name).then((results)=>{
                console.log(`deleted ${drink.name} `);
                this.getDrinks();
            }).catch( (e) => console.log(e) );
        }
        constructor(private $http: ng.IHttpService){
            this.getDrinks();
        }
    }
}