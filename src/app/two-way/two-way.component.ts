import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

someVar:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.someVar = 'hey ' + (Math.random()*10).toString();
  }

}
