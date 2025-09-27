import { Payment } from "../app/core/interfaces/payment.interface";

export const PAYMENTS: Payment[] = [
  {
    id: 'P-0001',
    date: new Date('2025-08-01'),
    company: 'SESPA',
    operationArea: 'TRANSPORTES',
    category: 'COMBUSTIBLES',
    thirdParty: 'ESTACION ABC S.A.S.',
    operationValue: 1_250_000,
    paymentStatus: 'PENDIENTE',
    incomeOrExpense: 'GASTO',
    paymentMethod: 'TRANSFERENCIA',
    hasBudget: true,
    invoiceUrl: null,
    supportUrl: null,
    traceability: [
      { user: 'joroa', date: '2025-08-01T09:30:00Z', note: 'Creado' },
    ],
  },
  {
    id: 'P-0002',
    date: new Date('2025-08-02'),
    company: 'ONIRIUMS',
    operationArea: 'FINANZAS',
    category: 'SERVICIOS DIGITALES',
    thirdParty: 'MEGATECH SOLUTIONS',
    operationValue: 2_800_000,
    paymentStatus: 'PAGADO',
    incomeOrExpense: 'GASTO',
    paymentMethod: 'TARJETA',
    hasBudget: true,
    invoiceUrl: 'https://example.com/facturas/P-0002.pdf',
    supportUrl: null,
    traceability: [
      { user: 'conta', date: '2025-08-02T14:00:00Z', note: 'Creado' },
    ],
  },
  {
    id: 'P-0003',
    date: new Date('2025-08-03'),
    company: 'SESPA',
    operationArea: 'VENTAS',
    category: 'VENTA PRODUCTOS',
    thirdParty: 'CLIENTE ZETA LTDA',
    operationValue: 9_700_000,
    paymentStatus: 'PAGADO',
    incomeOrExpense: 'INGRESO',
    paymentMethod: 'EFECTIVO',
    hasBudget: false,
    invoiceUrl: null,
    supportUrl: null,
    traceability: [
      { user: 'ventas', date: '2025-08-03T11:30:00Z', note: 'Modificado' },
    ],
  },
  {
    id: 'P-0004',
    date: new Date('2025-08-04'),
    company: 'ONIRIUMS',
    operationArea: 'MANTENIMIENTO',
    category: 'REPUESTOS',
    thirdParty: 'REFACOM S.A.',
    operationValue: 3_200_000,
    paymentStatus: 'RECHAZADO',
    incomeOrExpense: 'GASTO',
    paymentMethod: 'TRANSFERENCIA',
    hasBudget: false,
    invoiceUrl: null,
    supportUrl: null,
    traceability: [
      { user: 'karla', date: '2025-08-04T10:00:00Z', note: 'Creado' },
    ],
  },
  {
    id: 'P-0005',
    date: new Date('2025-08-05'),
    company: 'SESPA',
    operationArea: 'COMPRAS',
    category: 'MATERIA PRIMA',
    thirdParty: 'HARINERA EL SOL',
    operationValue: 5_500_000,
    paymentStatus: 'PAGADO',
    incomeOrExpense: 'GASTO',
    paymentMethod: 'TRANSFERENCIA',
    hasBudget: true,
    invoiceUrl: 'https://example.com/facturas/P-0005.pdf',
    supportUrl: 'https://example.com/soportes/P-0005.pdf',
    traceability: [
      { user: 'admin', date: '2025-08-05T13:00:00Z', note: 'Creado' },
    ],
  },
  // 👇 Se generan automáticamente más variaciones hasta P-0050
  ...Array.from({ length: 45 }).map((_, i) => {
    const id = `P-${String(i + 6).padStart(4, '0')}`;
    const date = new Date(2025, 7, i + 6); // Agosto 2025
    const companies = ['SESPA', 'ONIRIUMS', 'GLOBALSOFT', 'INDUPAN'];
    const areas = ['FINANZAS', 'VENTAS', 'OPERACIONES', 'LOGÍSTICA', 'TECNOLOGÍA'];
    const categories = [
      'SERVICIOS',
      'SOFTWARE',
      'PUBLICIDAD',
      'TRANSPORTE',
      'COMBUSTIBLES',
      'REPUESTOS',
      'MATERIA PRIMA',
    ];
    const thirdParties = [
      'CLIENTE XYZ',
      'BANCO POPULAR',
      'ASEGURADORA ANDINA',
      'MARKETING GLOBAL',
      'LICENCIAS PRO S.A.S.',
      'ESTACIÓN LOS PINOS',
    ];
    const statuses: Payment['paymentStatus'][] = ['PENDIENTE', 'PAGADO', 'RECHAZADO'];
    const methods: Payment['paymentMethod'][] = ['TRANSFERENCIA', 'EFECTIVO', 'TARJETA'];
    const incomes: Payment['incomeOrExpense'][] = ['INGRESO', 'GASTO'];

    return {
      id,
      date,
      company: companies[Math.floor(Math.random() * companies.length)],
      operationArea: areas[Math.floor(Math.random() * areas.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      thirdParty: thirdParties[Math.floor(Math.random() * thirdParties.length)],
      operationValue: Math.floor(Math.random() * 10_000_000) + 500_000,
      paymentStatus: statuses[Math.floor(Math.random() * statuses.length)],
      incomeOrExpense: incomes[Math.floor(Math.random() * incomes.length)],
      paymentMethod: methods[Math.floor(Math.random() * methods.length)],
      hasBudget: Math.random() > 0.3,
      invoiceUrl: Math.random() > 0.5 ? `https://example.com/facturas/${id}.pdf` : null,
      supportUrl: Math.random() > 0.7 ? `https://example.com/soportes/${id}.pdf` : null,
      traceability: [
        {
          user: 'system',
          date: date.toISOString(),
          note: 'Creado',
        },
      ],
    } as Payment;
  }),
];
