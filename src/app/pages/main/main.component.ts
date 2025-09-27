import { Component, inject, OnInit } from '@angular/core';
import { PaymentListComponent } from '../payment-list/payment-list.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { Payment } from '../../core/interfaces/payment.interface';
import { PaymentService } from '../../core/services/payment.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'pages-main',
  imports: [
    HeaderComponent,
    FooterComponent,
    PaymentListComponent,
    PaymentFormComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  private paymentService = inject(PaymentService);
  private alertService = inject(AlertService);

  protected payments: Payment[] = [];
  protected statuses: string[] = [];
  protected methods: string[] = [];
  protected companies: string[] = [];
  protected types: string[] = [];
  protected operationAreas: string[] = [];
  protected categories: string[] = [];
  protected thirdParties: string[] = [];
  protected selectPayment: Payment | null = null;
  protected isShowingForm: boolean = false;

  ngOnInit(): void {
    this.getPayments();
  }

  private getPayments(): void {
    this.payments = this.paymentService.getPayments();
    this.statuses = [...new Set(this.payments.map((c) => c.paymentStatus))];
    this.methods = [...new Set(this.payments.map((c) => c.paymentMethod))];
    this.companies = [...new Set(this.payments.map((c) => c.company))];
    this.types = [...new Set(this.payments.map((c) => c.incomeOrExpense))];
    this.operationAreas = [
      ...new Set(this.payments.map((c) => c.operationArea)),
    ];
    this.categories = [...new Set(this.payments.map((c) => c.category))];
    this.thirdParties = [...new Set(this.payments.map((c) => c.thirdParty))];
  }

  protected onNewRegisterFromChild(): void {
    this.isShowingForm = true;
  }

  protected onEditRegisterFromChild(register: Payment): void {
    this.isShowingForm = true;
    register !== null ? this.selectPayment = register : null;
  }

  protected onClose(): void {
    this.isShowingForm = false;
    this.selectPayment = null;
    this.getPayments();
    this.isShowingForm = false;
    this.selectPayment = null;
  }

  protected onAdd(register: Payment): void {
    if (!register) return;
    const newId = this.payments.length + 1;
    register.id = `P-${String(newId).padStart(4, '0')}`;
    this.paymentService.addPayment(register);
    this.alertService.successAlert(
      'El registro se ha ingresado correctamente.'
    );
    this.onClose();
  }

  protected onEdit(register: Payment):void {
    if (!register) return;
    this.paymentService.updatePayment(register);
    this.alertService.successAlert(
      'El registro se ha editado correctamente.'
    );
    this.onClose();
  }
}
