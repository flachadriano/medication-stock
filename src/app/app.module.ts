import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicationListComponent } from './view/medication-list/medication-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableModule } from 'primeng/table';
import { MedicationFormComponent } from './view/medication-form/medication-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PurchaseFormComponent } from './view/purchase-form/purchase-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicationListComponent,
    MedicationFormComponent,
    PurchaseFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ScrollingModule,
    FontAwesomeModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
