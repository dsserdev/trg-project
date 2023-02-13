import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLocations(): Observable<any> {
    return this.httpClient.get('/assets/json/locations_2.json');
  }

  public getLocationsWithCoordinates() {
    return this.getLocations().pipe(
      tap(res => Object.values(res).map(
        (location: any) => {
          location.coordinates = { lat: location.coordinates[0], lng: location.coordinates[1] }
        })
      )
    );
  }

  public getLocationsWithLatLngField() {
    return this.getLocations().pipe(
      tap(res => Object.values(res).map(
        (location: any) => {
          location.latitude = location.coordinates[0];
          location.longitude = location.coordinates[1];
          return location;
        }))
    )
  }

}
