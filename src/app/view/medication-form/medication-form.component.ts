import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Medication } from 'src/app/model/medication';
import { MedicationService } from 'src/app/service/medication.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api/public_api';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {

  faPrescriptionBottle = faPrescriptionBottle;
  faBalanceScale = faBalanceScale;
  faPills = faPills;
  faClipboardCheck = faClipboardCheck;
  medication: Medication;

  constructor(private medicationService: MedicationService,
    private router: Router) { }

  ngOnInit(): void {
    this.medication = this.medicationService.medicationSession;
  }

  public save() {
    this.medication.initialInventory = Number(this.medication.initialInventory);
    this.medicationService.medicationSession = this.medication;
    this.router.navigateByUrl('/medication-list');
  }

  public cancel() {
    this.medicationService.medicationSession = undefined;
    this.router.navigateByUrl('/medication-list');
  }
}
