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
import { AuthService } from '../../core/services/auth.service';
import { SessionData } from '../../core/interfaces/auth.interface';

import * as XLSX from 'xlsx';

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
  private authService = inject(AuthService);

  protected searchInputString: string = 'Ver más opciones';
  protected loading: boolean = true;
  protected seeMoreFilters: boolean = false;

  protected currentUser: SessionData | null = null;

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
    this.currentUser = this.authService.getSession();
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
    const filteredData: Payment[] =
      this.paymentTable.filteredValue ?? this.payments;

    if (!filteredData || filteredData.length === 0) {
      this.alertService.warningAlert('No hay datos para exportar.');
      return;
    }

    // Creamos un arreglo plano para exportar
    const exportData = filteredData.map((p) => ({
      ID: p.id,
      Fecha: new Date(p.date).toLocaleDateString('es-CO'),
      Empresa: p.company,
      AreaOperacion: p.operationArea,
      Rubro: p.category,
      Tercero: p.thirdParty,
      ValorOperacion: p.operationValue,
      Estado: p.paymentStatus,
      FormaPago: p.paymentMethod,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Pagos');

    XLSX.writeFile(workbook, 'pagos_filtrados.xlsx');
  }

  // --- Nuevo método auxiliar ---
  protected getFilteredSummary() {
    const data: Payment[] = this.paymentTable?.filteredValue ?? this.payments;

    const total = data.reduce((sum, item) => sum + item.operationValue, 0);

    return {
      count: data.length,
      total,
    };
  }

  protected onNewRegister(): void {
    if (this.currentUser?.permissions.canCreate === false) {
      this.alertService.warningAlert(
        'El usuario no cuenta con los permisos para crear un registro.'
      );
      return;
    }
    this.newRegister.emit();
  }

  protected onEditRegister(register: Payment): void {
    if (this.currentUser?.permissions.canEdit === false) {
      this.alertService.warningAlert(
        'El usuario no cuenta con los permisos para editar un registro.'
      );
      return;
    }
    this.editRegister.emit(register);
  }

  protected deletePayment(id: string): void {
    if (this.currentUser?.permissions.canDelete === false) {
      this.alertService.warningAlert(
        'El usuario no cuenta con los permisos para eliminar un registro.'
      );
      return;
    }
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
