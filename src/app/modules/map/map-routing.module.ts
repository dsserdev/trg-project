import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './components/data-management/data-management.component';
import { FullmapComponent } from './components/fullmap/fullmap.component';

const routes: Routes = [
  {
    path: '',
    component: FullmapComponent,
  },
  {
    path: 'manage',
    component: DataManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
