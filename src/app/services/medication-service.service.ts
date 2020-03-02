import { Injectable } from '@angular/core';
import { Medication } from '../model/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationServiceService {

  constructor() { }

  public getMedicationList(): Medication[] {
    return this.medicationList;
  }

  private medicationList: Medication[] = [
    {
      id: 0,
      name: 'Dipirona',
      unit: 'comprimido',
      dosage: '5mg',
      initialInventory: 0
    },
    {
      id: 1,
      name: 'Diclofenaco',
      unit: 'ampola',
      dosage: '10mg',
      initialInventory: 0
    },
    {
      id: 2,
      name: 'Diazepan',
      unit: 'comprimido',
      dosage: '5mg',
      initialInventory: 0
    },
    {
      id: 3,
      name: 'Citoneurin',
      unit: 'ampola',
      dosage: '12mg',
      initialInventory: 0
    },
    {
      id: 4,
      name: 'Amoxicilina',
      dosage: '500mg',
      unit: 'pílula',
      initialInventory: 0
    }
  ];
}
