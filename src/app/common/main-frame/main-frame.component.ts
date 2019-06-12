import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit, AfterViewInit {
  public displaySideMenu: Boolean = true;
  public canvas: any;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.setSideMenu();
  }

  public setSideMenu(): void {
    this.canvas = document.getElementsByClassName('pg-canvas')[0] as HTMLElement;
    if (this.canvas) {
      const sideMenuOpen = document.getElementsByClassName('side-menu-pop-up')[0] as HTMLElement;
    sideMenuOpen.style.marginTop = '-' +  + 'px';
    } else {
      this.setSideMenu();
    }
  }

}
