import { Injectable, signal } from '@angular/core';

import { Payment } from '../interfaces/payment.interface';
import * as data from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // Signal con los datos iniciales
  private paymentData = signal<Payment[]>(data.PAYMENTS);

  // ====== READ ======
  public getPayments(): Payment[] {
    return this.paymentData();
  }

  // ====== Get by Id ======
  public getPaymentById(id: string): Payment | null {
    const payment = this.paymentData().find(p => p.id === id);
    return payment ?? null;
  }

  // ====== CREATE ======
  public addPayment(newPayment: Payment): void {
    this.paymentData.update(currentPayments => [...currentPayments, newPayment]);
  }

  // ====== UPDATE ======
  public updatePayment(updatedPayment: Payment): void {
    this.paymentData.update(currentPayments => currentPayments.map(p => (p.id === updatedPayment.id ? updatedPayment : p)) );
  }

  // ====== DELETE ======
  public deletePayment(id: string): void {
    this.paymentData.update(currentPayments => currentPayments.filter(p => p.id !== id) );
  }
}
