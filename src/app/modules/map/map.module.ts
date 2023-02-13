import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoogleFullScreenDirective } from 'src/app/shared/directives/google-full-screen.directive';
import { DataManagementComponent } from './components/data-management/data-management.component';
import { FullmapComponent } from './components/fullmap/fullmap.component';
import { MapRoutingModule } from './map-routing.module';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FullmapComponent,
    DataManagementComponent,
    GoogleFullScreenDirective
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    GoogleFullScreenDirective,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class MapModule { }
