import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { Payment, PaymentTrace } from '../../core/interfaces/payment.interface';

@Component({
  selector: 'pages-payment-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    CheckboxModule,
    DatePickerModule,
    FileUploadModule,
    ButtonModule,
  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  @Input() payments: Payment[] = [];
  @Input() statuses: string[] = [];
  @Input() methods: string[] = [];
  @Input() companies: string[] = [];
  @Input() types: string[] = [];
  @Input() operationAreas: string[] = [];
  @Input() categories: string[] = [];
  @Input() thirdParties: string[] = [];
  @Input() payment: Payment | null = null;
  @Output() save = new EventEmitter<Payment>();
  @Output() edit = new EventEmitter<Payment>();
  @Output() closeForm = new EventEmitter<boolean>();

  private fb = inject(FormBuilder);

  protected title: string = 'Agregar';

  form!: FormGroup;

  invoiceFile: File | null = null;
  supportFile: File | null = null;

  ngOnInit(): void {
    this.title = this.payment !== null ? 'Editar' : 'Agregar'
    this.form = this.fb.group({
      id: this.payment?.id ?? null,
      date: [this.payment?.date ?? null, Validators.required],
      company: [this.payment?.company ?? '', Validators.required],
      operationArea: [this.payment?.operationArea ?? ''],
      category: [this.payment?.category ?? ''],
      thirdParty: [
        this.payment?.thirdParty ?? '',
        [Validators.required, Validators.minLength(3)],
      ],
      operationValue: [
        this.payment?.operationValue ?? null,
        [Validators.required, Validators.min(1)],
      ],
      paymentStatus: [this.payment?.paymentStatus ?? null, Validators.required],
      incomeOrExpense: [this.payment?.incomeOrExpense ?? null],
      paymentMethod: [this.payment?.paymentMethod ?? null],
      hasBudget: [this.payment?.hasBudget ?? false],
    });
  }

  protected onFileSelect(event: any, type: 'invoice' | 'support'): void {
    const file = event.files?.[0];
    if (file) {
      if (type === 'invoice') {
        this.invoiceFile = file;
      } else {
        this.supportFile = file;
      }
    }
  }

  protected onRemoveFile(type: 'invoice' | 'support'): void {
    if (type === 'invoice') {
      this.invoiceFile = null;
    } else {
      this.supportFile = null;
    }
  }

  protected onSubmit(): void {
    if (this.form.invalid) return;
    this.payment === null ? this.onAdd() : this.onEdit();
  }

  protected onAdd():void {
    const now = new Date().toISOString();
    const trace: PaymentTrace = {
      user: 'usuario.mock',
      date: now,
      note: 'Creado',
    };

    const newPayment: Payment = {
      id: this.payment?.id ?? `P-${Math.floor(Math.random() * 10000)}`,
      ...this.form.value,
      invoiceUrl: this.invoiceFile ? this.invoiceFile.name : null,
      supportUrl: this.supportFile ? this.supportFile.name : null,
      traceability: [...(this.payment?.traceability ?? []), trace],
    };

    this.save.emit(newPayment);
    this.onClose();
  }

  protected onEdit():void {
    const now = new Date().toISOString();
    const trace: PaymentTrace = {
      user: 'usuario.mock',
      date: now,
      note: 'Modificado',
    };

    const editPayment: Payment = {
      ...this.form.value,
      traceability: [...(this.payment?.traceability ?? []), trace],
    }

    this.edit.emit(editPayment);
    this.onClose();
  }

  protected onClose(): void {
    this.form.reset();
    this.invoiceFile = null;
    this.supportFile = null;
    this.closeForm.emit(false);
  }
}
