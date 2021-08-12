import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


@Component({
  selector: 'app-multiple-routes',
  templateUrl: './multiple-routes.component.html',
  styleUrls: ['./multiple-routes.component.css']
})
export class MultipleRoutesComponent implements OnInit {


  constructor() { }

  ngOnInit() {

      // I am cab driver I pickup 5 persons
    //My First and Last are source to desstination and rest 3 are my waypoints.

    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers : false
    });
    const directionsService = new google.maps.DirectionsService();

    var setMap = new google.maps.LatLng(19.1383, 77.3210);
    var mapOptions = {
        zoom: 10,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: setMap
    }
    let map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    directionsRenderer.setMap(map);
    let points = [{
            origin: {
                lat: 19.9974533,
                lng: 73.78980229999999
            },
            destination: {
                lat: 19.0759837,
                lng: 72.8776559
            },
            index: 0
        },
        {
            origin: {
                lat: 19.0759837,
                lng: 72.8776559
            },
            destination: {
                lat: 18.5204,
                lng: 73.8567
            },
            index: 1
        },
        {
            origin: {
                lat: 18.5204,
                lng: 73.8567
            },
            destination: {
                lat: 21.1458,
                lng: 79.0882
            },
            index: 2
        },
        {
            origin: {
                lat: 21.1458,
                lng: 79.0882
            },
            destination: {
                lat: 20.3899,
                lng: 78.1307
            },

            index: 3
        },
        {
            origin: {
                lat: 20.3899,
                lng: 78.1307
            },
            destination: {
                lat: 19.1383,
                lng: 77.3210
            },
            index: 4
        }
    ]

    let origion;
    let destination;

    if (points.length > 0) {
        let firstPoint = points[0];
        let lastPoint = points[points.length - 1];
        origion = firstPoint.origin
        destination = lastPoint.destination;
    }

    let tempPoints = [];
    _.each(points, function(d, i) {
        if (i != 0 && i != points.length - 1) {
            tempPoints.push(d);
        }
    })

    let waypts = [];
    tempPoints.forEach(x => waypts.push({
      location : x.origin,
      stopover: true
    }));

    let directionInput = {
        origin: origion,
        destination: destination,
        optimizeWaypoints: true,
        waypoints: waypts,
        travelMode: google.maps.TravelMode.DRIVING
    }

    function calculateAndDisplayRoute(directionsService, directionInput) {
        directionsService.route(directionInput, (response, status) => {
            console.log(response);
            debugger;
            if (status === "OK") {
                directionsRenderer.setDirections(response);
                directionsRenderer.setMap(map);
                
            } else {
                debugger;
                window.alert("Directions request failed due to " + status);
            }
        });
    }
    calculateAndDisplayRoute(directionsService, directionInput)
}

}
