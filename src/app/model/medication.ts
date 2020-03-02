import { Purchase } from './purchase';

export interface Medication {
    id?: number;
    name: string;
    dosage?: string;
    unit?: string;
    initialInventory?: number;
    purchase: Purchase;
    averagePrice: number;
}
