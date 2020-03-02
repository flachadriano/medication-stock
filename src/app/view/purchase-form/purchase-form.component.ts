import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Purchase } from 'src/app/model/purchase';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { MedicationService } from 'src/app/service/medication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;
  purchase: Purchase;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor(
    private medicationService: MedicationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const medicationSession = this.medicationService.medicationSession;
    this.purchase = medicationSession.purchase;
  }

  onSave() {
    debugger;
    this.purchase.firstQuarterPrice = Number(this.purchase.firstQuarterPrice);
    this.purchase.firstQuarterQuantity = Number(this.purchase.firstQuarterQuantity);
    this.purchase.secondQuarterPrice = Number(this.purchase.secondQuarterPrice);
    this.purchase.secondQuarterQuantity = Number(this.purchase.secondQuarterQuantity);
    this.purchase.thirdQuarterPrice = Number(this.purchase.thirdQuarterPrice);
    this.purchase.thirdQuarterQuantity = Number(this.purchase.thirdQuarterQuantity);
    this.purchase.fourthQuarterPrice = Number(this.purchase.fourthQuarterPrice);
    this.purchase.fourthQuarterQuantity = Number(this.purchase.fourthQuarterQuantity);
    this.medicationService.medicationSession.purchase = this.purchase;
    this.purchase = undefined;
    this.router.navigateByUrl('/medication-list');
  }

  onCancel() {
    this.purchase = undefined;
    this.medicationService.medicationSession = undefined;
    this.router.navigateByUrl('/medication-list');
  }
}
