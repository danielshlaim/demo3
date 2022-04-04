import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';
import { TagsComponent } from './tags/tags.component';
import { Output1Component } from './output1/output1.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { TwoWayCompComponent } from './two-way-comp/two-way-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FatherComponent,
    TagsComponent,
    Output1Component,
    TwoWayComponent,
    TwoWayCompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
