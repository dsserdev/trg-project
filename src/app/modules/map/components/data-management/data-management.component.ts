import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { IILocationsEdit, ILocationsLatLng } from 'src/app/core/interfaces/locations.interface';
import { AddLocationComponent } from 'src/app/shared/components/add-location/add-location.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'actions'];
  dataSource = new MatTableDataSource<ILocationsLatLng[]>();
  markers: any;

  constructor(
    private dialog: MatDialog,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locationService.getLocationsWithLatLngField().pipe(
      take(1)
    ).subscribe(res => {
      this.markers = res;
      this.dataSource.data = this.markers;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddLocation() {
    const dialogRef = this.dialog.open(AddLocationComponent);

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.markers.push(result);
        this.dataSource.data = [...this.markers];
      }
    });
  }

  onEdit(location: IILocationsEdit) {
    location.isEdit = !location.isEdit;
  }
}
