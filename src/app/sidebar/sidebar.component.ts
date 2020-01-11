import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  lists: Map<number, string>;

  //@Output()


  constructor() {
  }

  ngOnInit() {
  }

  openList(id: number) {

  }
}
