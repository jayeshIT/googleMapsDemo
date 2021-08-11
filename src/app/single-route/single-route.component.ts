import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-route',
  templateUrl: './single-route.component.html',
  styleUrls: ['./single-route.component.css']
})
export class SingleRouteComponent implements OnInit {

  map: google.maps.Map;
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  }
  
  constructor() { }

  ngOnInit() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    
    directionsRenderer.setMap(this.map);

    var setMap = new google.maps.LatLng(29.8174782, -95.6814757);
        var mapOptions = {
          zoom:55,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: setMap
        }
    this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    directionsRenderer.setMap(this.map);

        
  
  directionsService
    .route({
      // waypoints: waypts,
    //optimizeWaypoints: true,
      origin: { lat: 29.8174782, lng: -95.6814757 },
      destination: { lat: 40.6976637, lng: -74.119764 },
      travelMode: google.maps.TravelMode.DRIVING,

    },function(response,status) {
     
      console.log(status);
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      }else {
        window.alert('Map is not working right now !! Please try again.')
      }
      
    });

  }

}
