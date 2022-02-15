import { LightningElement } from "lwc";

export default class App extends LightningElement {

 cod = "01";
 name = "Mari Bueno";
 phone = "3225-4722";
 email= "mb@hotmail.com";
 rating = "x";

 visible = true;
  
    alterarDados (){
   if(this.visible == true){
     this.visible = false;
   }else {
     this.visible = true;
   }
 }


    alteraDados(){
        this.cod = "02";
        this.name = "Murillo Franco";
        this.phone = "3232-9797";
        this.email = "mf@gmail.com";
        this.rating = "z";
    }



}



   
   
    
   