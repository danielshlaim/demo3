import { Component } from '@angular/core';
import { Tag } from './Interface/Tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoB';
  
 name:string = '';
 temp:string ='';

  tagArr:Tag[] = [];
  someData:number = 1;

  addNumber() : void {
    this.someData ++;
  }

 constructor(){
  this.atLast3ValueInArr();
  }


  atLast3ValueInArr(){
    this.tagArr.push({content:'superduke1290',class:'danger'});
    this.tagArr.push({content:'duke890',class:'warning'});
    this.tagArr.push({content:'duke390',class:'success'});
  }

  chageName(name:string){
    this.name = name;
  }

  chageTemp(temp:string){
    this.temp = temp;
  }
}
