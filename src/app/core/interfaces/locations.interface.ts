export interface ILocations {
  name: string,
  coordinates?: Array<number>,
  latitude?: number,
  longitude?: number
}

export interface ILocationsLatLng extends Omit<ILocations, "coordinates"> {
  coordinates: { lat: number, lng: number }
}


export interface IILocationsEdit extends ILocations {
  isEdit?: boolean;
}
