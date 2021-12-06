import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public isDarkTheme:boolean = false;
  public isDrawerOpen:boolean = false;
  
  constructor(private chRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  refreshPage(){
    setTimeout(()=>{
      this.chRef.detectChanges();
    },500);
  }
}
