import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { ILocationsLatLng } from 'src/app/core/interfaces/locations.interface';
import { LocationService } from '../../services/location.service';



@Component({
  selector: 'app-fullmap',
  templateUrl: './fullmap.component.html',
  styleUrls: ['./fullmap.component.css']
})
export class FullmapComponent implements OnInit {
  @ViewChild(MapInfoWindow) mapInfoWindow: MapInfoWindow | undefined;

  apiLoaded: Observable<boolean>;
  center!: google.maps.LatLngLiteral;
  zoom: number = 6;
  currentMarker!: any;
  markers: any;
  showSidebar: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private locationService: LocationService
  ) {
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDDYJGzRCavv3YmD6z8kt7TDolZPBNwSmk', 'callback')
      .pipe(
        map(() => true),
        take(1),
        catchError(() => of(false)),
      );

    this.locationService.getLocationsWithCoordinates().pipe(
      take(1)
    ).subscribe(res => {
      this.markers = res;
      this.center = this.markers[0].coordinates
    });
  }

  ngOnInit() {
    if (this.mapInfoWindow != undefined)
      google.maps.event.addListener(this.mapInfoWindow, 'closeclick', () => {
        this.showSidebar = false;
      });
  }

  openInfoWindow(marker: MapMarker, item: ILocationsLatLng) {
    if (this.mapInfoWindow != undefined) {
      this.mapInfoWindow.open(marker);
      this.mapInfoWindow.infoWindow?.setContent(item.name);
      this.showSidebar = true;

      //used in sidepanel for details
      this.currentMarker = {
        name: item.name,
        lat: item.coordinates.lat,
        lng: item.coordinates.lng
      }
    }

    //fired when the close button was clicked.
    this.mapInfoWindow?.closeclick.pipe(take(1)).subscribe(() => this.showSidebar = false);
  }
}
