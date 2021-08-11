import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'googleMapsDemo';
  loadSingleroute :boolean= false;
  loadMultiple :boolean= false;
  SingleRoute(){
    
    this.loadSingleroute = true;
    this.loadMultiple =false;
  }

  Multiple(){
    this.loadMultiple = true;
    this.loadSingleroute = false;
  }

  ngOnInit() {
    this.loadSingleroute = false;
    this.loadMultiple = false;
  }
}
