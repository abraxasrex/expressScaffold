
namespace expressForm {

let app = angular.module('expressForm', []);
// applesauce
export class formController {
  public form;
  public message;
  public saveForm(){
    console.log('save');
    this.$http.post('/api/drinks', this.form).then((result)=>{
      console.log('ok');
    }).catch((err)=>{ console.log(err); })
  }

  constructor(private $http: ng.IHttpService){
    this.message = "World";
  }
}

app.controller('formController', formController);

}
