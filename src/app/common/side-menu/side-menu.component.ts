import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MainFrameComponent } from 'src/app/common/main-frame/main-frame.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public HideSideMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(mainFrameComponent: MainFrameComponent) { }

  ngOnInit() {
    const sidemenu = document.getElementsByClassName('side-menu')[0] as HTMLElement;
    sidemenu.style.height = '' + window.innerHeight + 'px';
    const crossIcon = document.getElementsByClassName('hide-sidemenu')[0];
    crossIcon.addEventListener('click', () => {
      this.HideSideMenu.emit(true);
    });
  }

}
