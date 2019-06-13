import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit, AfterViewInit {
  public displaySideMenu: Boolean = false;
  public canvas: any;
  public particle: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const sideMenuIcon = document.getElementsByClassName('side-menu-pop-up')[0];
    sideMenuIcon.addEventListener('click', () => {

    });
    window.addEventListener('click', (event) => {
      if (event.srcElement.className === 'side-menu-pop-up') {
        this.displaySideMenu = true;
        this.particle = document.getElementsByClassName('particles')[0] as HTMLElement;
        this.particle.style.marginLeft = '54px';
      } else {
        if (event) {
          this.displaySideMenu = false;
          this.particle.style.marginLeft = '-88px';
        }
      }
    });
  }

  public hideSideMenu(event: any): void {
    if (event) {
      this.displaySideMenu = false;
      this.particle.style.marginLeft = '-88px';
    }
  }
}
