import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//import {MaterialModule} from "./material.module";
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar/sidebar-item/sidebar-item.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {ListOverviewComponent} from './list-overview/list-overview.component';
import {ListCardComponent} from './list-overview/list-card/list-card.component';
//import {ScrollingModule} from "@angular/cdk/typings/esm5/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    ToDoListComponent,
    ListOverviewComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    //ScrollingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
