import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  myNum = 97;
 
  constructor() { 
    

  }

  ngOnInit(): void {
  }

  getRes() : void{
   this.myNum = Math.floor(Math.random()*100);
  }
  
}
