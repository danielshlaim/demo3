import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

 @Input() randomNum =0
 // @Input() item = 0 // deckoretor
  //יכולת של שפת TYPESCRIPT שאתה יכול להוסיף מעל פונקציות או מעל קלאסים מובנה מראש מוכן מראש עם @ וזה קורא לפונקציה שכתובה מאחורי הקלעים 
  ngOnInit(): void {
  }

}
