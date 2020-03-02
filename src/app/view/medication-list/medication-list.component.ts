import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/model/medication';
import { MedicationService } from 'src/app/service/medication.service';
import { Purchase } from 'src/app/model/purchase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

  medications: Medication[];
  columns: any[];
  multiSortMeta: any[];
  selectedMedication: Medication;

  constructor(
    private medicationService: MedicationService,
    private router: Router) { }

  ngOnInit(): void {
    debugger;
    if (!this.medications) {
      this.medications = this.medicationService.medicationList;
    }
    const medicationSession = this.medicationService.medicationSession;
    if (medicationSession) {
      if (medicationSession.id) {
        this.medications[medicationSession.id] = this.medicationService.medicationSession;
        this.updateInitialInventory(medicationSession);
        this.updateAveragePrice(medicationSession);
      } else {
        this.medications.push(medicationSession);
        this.updateInitialInventory(medicationSession);
        this.updateAveragePrice(medicationSession);
      }
      this.medicationService.medicationSession = undefined;
    }
    this.columns = [
      { field: 'name', header: 'Nome' },
      { field: 'dosage', header: 'Dosagem' },
      { field: 'unit', header: 'Unidade' },
      { field: 'initialInventory', header: 'Saldo inicial' },
      { field: 'averagePrice', header: 'Preço médio' },
    ];
    this.multiSortMeta = [
      { field: 'name', order: 1 },
      { field: 'dosage', order: 1 },
      { field: 'unit', order: 1 },
      { field: 'initialInventory', order: 1 },
      { field: 'averagePrice', order: 1 },
    ];
  }

  onAdd() {
    this.selectedMedication = undefined;
    this.medicationService.medicationSession = {
      name: '',
      initialInventory: 0,
      averagePrice: 0,
      purchase: {
        firstQuarterPrice: 0,
        firstQuarterQuantity: 0,
        secondQuarterPrice: 0,
        secondQuarterQuantity: 0,
        thirdQuarterPrice: 0,
        thirdQuarterQuantity: 0,
        fourthQuarterPrice: 0,
        fourthQuarterQuantity: 0
      }
    };
    this.router.navigateByUrl('/medication-form');
  }

  onEdit() {
    this.medicationService.medicationSession = this.selectedMedication;
    this.selectedMedication = undefined;
    this.router.navigateByUrl('/medication-form');
  }

  onPurchase() {
    if (this.selectedMedication) {
      this.medicationService.medicationSession = this.selectedMedication;
      this.selectedMedication = undefined;
      this.router.navigateByUrl('/purchase-form');
    }
  }

  private updateInitialInventory(medication: Medication) {
    medication.initialInventory = medication.purchase.firstQuarterQuantity
      + medication.purchase.secondQuarterQuantity
      + medication.purchase.thirdQuarterQuantity
      + medication.purchase.fourthQuarterQuantity;
  }

  private updateAveragePrice(medication: Medication) {
    if (medication.initialInventory) {
      const purchase: Purchase = medication.purchase;
      const totalPrice = (purchase.firstQuarterPrice * purchase.firstQuarterQuantity)
        + (purchase.secondQuarterPrice * purchase.secondQuarterQuantity)
        + (purchase.thirdQuarterPrice * purchase.thirdQuarterQuantity)
        + (purchase.fourthQuarterPrice * purchase.fourthQuarterQuantity);
      medication.averagePrice = totalPrice / medication.initialInventory;
    } else {
      medication.averagePrice = 0;
    }
  }
}
