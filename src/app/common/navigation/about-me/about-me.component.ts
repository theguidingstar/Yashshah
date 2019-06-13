import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const aboutMe = document.getElementsByClassName('main-about-me')[0] as HTMLElement;
    aboutMe.style.height = '' + document.documentElement.clientHeight;
  }

}
