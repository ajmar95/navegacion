import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html'
})
export class pagina3Page {
  pais:any={};
  constructor(private NavParams:NavParams,
    private NavCtrl:NavController ) {
    console.log(this.NavParams);
    this.pais=this.NavParams.get("pais");
  }
  iratras(){
this.NavCtrl.pop();
  }
  irroot(){
    this.NavCtrl.popToRoot();
      }
}