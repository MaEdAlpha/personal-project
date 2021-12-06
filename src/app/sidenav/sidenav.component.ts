import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

interface buttonElement {
  toolName:string;
  toolTag:string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit, OnChanges {

  @Input()showFiller:boolean = false;
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  public components:Array<buttonElement> = [
    {toolName: 'Dictionary', toolTag:'dict'}, 
    {toolName: 'Flash Cards', toolTag:'flash'},
    {toolName: 'Quiz', toolTag:'quiz'},
    {toolName: 'Timer', toolTag:'timer'},
    {toolName: 'Discipline', toolTag:'tracker'}
  ];

  constructor() { }

  ngOnChanges(changes:SimpleChanges):void{
    if(changes.showFiller){
      console.info(`CurrentValue: ${changes.showFiller.currentValue}`);
      this.drawer?.toggle();
    }
  }

  ngOnInit(): void {
  }

  retrieveComponent(toolTag:string):void{
    console.info(`${toolTag} clicked!`);
    //When clicked, it should retrieve all data from dataServices.
    //This will load it into  the child component <app-mainView></app-mainView>
  }

}
