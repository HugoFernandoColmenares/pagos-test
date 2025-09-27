import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PaymentService } from '../../core/services/payment.service';
import { Payment } from '../../core/interfaces/payment.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { FilterService } from 'primeng/api';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'pages-payment-list',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    MultiSelectModule,
  ],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css',
})
export class PaymentListComponent {
  @ViewChild('paymentTable') paymentTable!: Table;
  @Input() payments: Payment[] = [];
  @Input() statuses: string[] = [];
  @Input() methods: string[] = [];
  @Input() companies: string[] = [];
  @Output() newRegister = new EventEmitter<void>();
  @Output() editRegister = new EventEmitter<Payment>();

  private paymentService = inject(PaymentService);
  private filterService = inject(FilterService);
  private alertService = inject(AlertService);

  protected searchInputString: string = 'Ver más opciones';
  protected loading: boolean = true;
  protected seeMoreFilters: boolean = false;

  protected filters: any = {
    global: '',
    id: '',
    date: '',
    company: '',
    operationArea: '',
    category: '',
    thirdParty: '',
    operationValue: '',
    paymentStatus: '',
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.filterService.register('custom', (value: any, filter: any) =>
      this.customDateFilter(value, filter)
    );
  }

  protected toggleSeeMoreFilters(): void {
    this.seeMoreFilters = !this.seeMoreFilters;
    this.seeMoreFilters
      ? (this.searchInputString = 'Ocultar opciones')
      : (this.searchInputString = 'Ver más opciones');
  }

  protected applyDateRangeFilter(table: Table) {
    table.filter(this.filters, 'date', 'custom');
  }

  protected customDateFilter(value: any, filter: any): boolean {
    if (!filter.startDate && !filter.endDate) return true;

    const date = new Date(value); // fecha del registro
    const start = filter.startDate ? new Date(filter.startDate) : null;
    const end = filter.endDate ? new Date(filter.endDate) : null;

    if (start && end) {
      return date >= start && date <= end;
    } else if (start) {
      return date >= start;
    } else if (end) {
      return date <= end;
    }
    return true;
  }

  protected exportCsv(): void {
    this.paymentTable.exportCSV();
  }

  protected onNewRegister():void {
    this.newRegister.emit();
  }

  protected onEditRegister(register: Payment):void {
    this.editRegister.emit(register);
  }

  protected deletePayment(id: string): void {
    this.alertService
      .optionsAlert('¿Seguro que deseas eliminar este pago?')
      .then((result) => {
        if (result.isConfirmed) {
          this.paymentService.deletePayment(id);
          this.payments = this.paymentService.getPayments();
          this.alertService.successAlert(
            'El pago ha sido eliminado correctamente.'
          );
        }
      })
      .catch(() => {
        this.alertService.errorAlert('No se pudo eliminar el pago.');
      });
  }
}
