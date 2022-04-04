import { Component, OnInit,Input } from '@angular/core';
import { Tag } from '../Interface/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() { }

  @Input() mainToTag:Tag ={content:'',class:''}
  ngOnInit(): void {
  }

}
