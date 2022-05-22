import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nameservice:Service;
  allInfo:any;
  constructor(nameservice:Service){
    this.nameservice=nameservice;

  }
  doAction(name:string){
    this.nameservice.getDataFromCount(name).subscribe(
      data=>{
        this.allInfo=(data);
        console.log(this.allInfo);
      },
      err=>{
        console.log(err)
      }
    );
  }

}


