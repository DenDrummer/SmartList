import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggleOverlay', [
      state('overlayShown', style({})),
      state('overlayHidden', style({})),
      transition('* => *', [animate('1s')])
    ])
  ]
})
export class AppComponent implements OnInit{
  name = 'Listom';
  showOverlay = false;
  showSidebar = false;
  windowWidth: number;
  shownList: number = null;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  @HostListener('window:resize')
  onResize(){
    this.windowWidth = window.innerWidth;
  }
}
