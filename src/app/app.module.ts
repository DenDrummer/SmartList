import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar/sidebar-item/sidebar-item.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSort,
    MatSortHeader
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
