import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnChanges {

  @Input()showFiller:boolean = false;
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  constructor() { }

  ngOnChanges(changes:SimpleChanges):void{
    if(changes.showFiller){
      console.info(`CurrentValue: ${changes.showFiller.currentValue}`);
      this.drawer?.toggle();
    }
  }

  ngOnInit(): void {
  }

}
