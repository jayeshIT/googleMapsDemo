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
  loadMultipleMarkers : boolean =false;
  SingleRoute(){
    
    this.loadSingleroute = true;
    this.loadMultiple =false;
    this.loadMultipleMarkers = false;
  }

  Multiple(){
    this.loadMultiple = true;
    this.loadSingleroute = false;
    this.loadMultipleMarkers = false;
  }

  MultipleMarkwers(){
    this.loadMultiple = false;
    this.loadSingleroute = false;
    this.loadMultipleMarkers = true;
  }

  ngOnInit() {
  }
}
