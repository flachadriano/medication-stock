import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicationFormComponent } from './view/medication-form/medication-form.component';
import { PurchaseFormComponent } from './view/purchase-form/purchase-form.component';
import { MedicationListComponent } from './view/medication-list/medication-list.component';


const routes: Routes = [

  {
    path: 'medication-list',
    component: MedicationListComponent,
  },
  {
    path: 'medication-form',
    component: MedicationFormComponent

  },
  {
    path: 'purchase-form',
    component: PurchaseFormComponent
  },
  {
    path: '',
    redirectTo: '/medication-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
