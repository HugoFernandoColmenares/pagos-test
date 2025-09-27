import { Component, inject, ViewChild } from '@angular/core';
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

  private paymentService = inject(PaymentService);
  private filterService = inject(FilterService);

  protected payments: Payment[] = [];
  protected statuses: string[] = [];
  protected methods: string[] = [];
  protected companies: string[] = [];
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
    this.payments = this.paymentService.getPayments();
    this.statuses = [...new Set(this.payments.map((c) => c.paymentStatus))];
    this.methods = [...new Set(this.payments.map((c) => c.paymentMethod))];
    this.companies = [...new Set(this.payments.map((c) => c.company))];
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

  applyDateRangeFilter(table: Table) {
    table.filter(this.filters, 'date', 'custom');
  }

  customDateFilter(value: any, filter: any): boolean {
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

  exportCsv(): void {
    this.paymentTable.exportCSV();
  }
}
