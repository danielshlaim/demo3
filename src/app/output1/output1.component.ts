import { outputAst } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit {

 
  @Output()changeNameEvent =  new EventEmitter<string>()
  @Output()changeTempEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }


}
