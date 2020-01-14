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
import {FormsModule} from "@angular/forms";
import {ParamCellComponent} from './to-do-list/param-cell/param-cell.component';
import {ImageParamCellComponent} from './to-do-list/param-cell/image-param-cell/image-param-cell.component';
import {TitleParamCellComponent} from './to-do-list/param-cell/title-param-cell/title-param-cell.component';
import {TextParamCellComponent} from './to-do-list/param-cell/text-param-cell/text-param-cell.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {MatIconModule} from "@angular/material/icon";
import {ListMenuComponent} from './list-menu/list-menu.component';
import {HttpClientModule} from "@angular/common/http";
//import {NgScrollbarModule} from "ngx-scrollbar";
//import {ScrollingModule} from "@angular/cdk/typings/esm5/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    ToDoListComponent,
    ListOverviewComponent,
    ListCardComponent,
    ParamCellComponent,
    ImageParamCellComponent,
    TitleParamCellComponent,
    TextParamCellComponent,
    CheckboxComponent,
    ListMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSortModule,
    MatTableModule
    //NgScrollbarModule,
    //ScrollingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
