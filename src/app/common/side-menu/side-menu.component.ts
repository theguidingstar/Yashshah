import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sidemenu = document.getElementsByClassName('side-menu')[0] as HTMLElement;
    sidemenu.style.height = '' + window.innerHeight + 'px';
  }

}
