export interface PaymentTrace {
  user: string;
  date: string; // ISO 8601 string
  note: string;
}

export interface Payment {
  id: string; // Example: "P-0001"
  date: Date; // Example: "2025-08-01"
  company: string;
  operationArea: string;
  category: string;
  thirdParty: string;
  operationValue: number;
  paymentStatus: 'PENDIENTE' | 'PAGADO' | 'RECHAZADO';
  incomeOrExpense: 'INGRESO' | 'GASTO';
  paymentMethod: 'TRANSFERENCIA' | 'EFECTIVO' | 'TARJETA';
  hasBudget: boolean;
  invoiceUrl: string | null;
  supportUrl: string | null;
  traceability: PaymentTrace[];
}
