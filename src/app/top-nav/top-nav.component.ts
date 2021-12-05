import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public isLight:boolean = true;
  public isDrawerOpen:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
