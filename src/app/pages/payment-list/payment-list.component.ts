import { Component, inject } from '@angular/core';
import { PaymentService } from '../../core/services/payment.service';
import { Payment } from '../../core/interfaces/payment.interface';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'pages-payment-list',
  imports: [CommonModule, TableModule],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css',
})
export class PaymentListComponent {
  private paymentService = inject(PaymentService);
  protected payments: Payment[] = [];

  ngOnInit(): void {
    this.payments = this.paymentService.getPayments();
  }
}
