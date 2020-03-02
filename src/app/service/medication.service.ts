import { Injectable } from '@angular/core';
import { Medication } from '../model/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private _medicationSession: Medication;

  private _medicationList: Medication[] = [
    {
      id: 0,
      name: 'Dipirona',
      unit: 'comprimido',
      dosage: '5mg',
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
    },
    {
      id: 1,
      name: 'Diclofenaco',
      unit: 'ampola',
      dosage: '10mg',
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
    },
    {
      id: 2,
      name: 'Diazepan',
      unit: 'comprimido',
      dosage: '5mg',
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
    },
    {
      id: 3,
      name: 'Citoneurin',
      unit: 'ampola',
      dosage: '12mg',
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
    },
    {
      id: 4,
      name: 'Amoxicilina',
      dosage: '500mg',
      unit: 'pílula',
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
    }
  ];

  constructor() { }

  public get medicationList(): Medication[] {
    return this._medicationList;
  }

  public set medicationSession(medication: Medication) {
    this._medicationSession = { ...medication };
  }

  public get medicationSession(): Medication {
    return this._medicationSession;
  }
}
