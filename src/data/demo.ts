export const businessProfile = {
  name: "Mahalima Imports Trading",
  tin: "009-482-771-000",
  rdo: "043",
  atp: "ATP-2025-0198",
  ptu: "PTU-2025-3341",
  vatStatus: "VAT-registered",
  address: "Unit 1203, One Paseo, Makati City",
};

export const customers = [
  {
    id: "CUST-0007",
    name: "Luna Retail Ventures",
    tin: "123-456-789-000",
    email: "ap@lunaretail.ph",
    phone: "+63 917 221 4401",
    address: "48 Scout Borromeo, Quezon City",
    balance: 6200,
  },
  {
    id: "CUST-0008",
    name: "SariHub Online Store",
    tin: null,
    email: "hello@sarihub.store",
    phone: "+63 936 310 8821",
    address: "Cebu IT Park, Cebu City",
    balance: 1250,
  },
  {
    id: "CUST-0009",
    name: "Bituin Co. Ltd.",
    tin: "987-654-321-000",
    email: "finance@bituin.co",
    phone: "+63 905 778 2210",
    address: "Bonifacio Global City, Taguig",
    balance: 9800,
  },
];

export const items = [
  {
    id: "ITEM-101",
    name: "Import Handling Fee",
    sku: "IMP-HAND-01",
    price: 4000,
    vatType: "Standard",
  },
  {
    id: "ITEM-102",
    name: "Documentation Service",
    sku: "DOC-002",
    price: 500,
    vatType: "Standard",
  },
  {
    id: "ITEM-103",
    name: "Logistics Consulting",
    sku: "CONS-003",
    price: 2500,
    vatType: "Zero-rated",
  },
];

export const transactions = [
  {
    id: "TRX-2026-0142",
    date: "Feb 3, 2026",
    customerId: "CUST-0007",
    customer: "Luna Retail Ventures",
    amount: 5040,
    vatType: "Standard",
    status: "Issued",
    items: [
      { name: "Import Handling Fee", qty: 1, price: 4000 },
      { name: "Documentation Service", qty: 1, price: 500 },
    ],
  },
  {
    id: "TRX-2026-0141",
    date: "Feb 2, 2026",
    customerId: "CUST-0009",
    customer: "Bituin Co. Ltd.",
    amount: 9800,
    vatType: "Zero-rated",
    status: "Draft",
    items: [{ name: "Logistics Consulting", qty: 1, price: 2500 }],
  },
  {
    id: "TRX-2026-0140",
    date: "Feb 2, 2026",
    customerId: "CUST-0008",
    customer: "SariHub Online Store",
    amount: 1250,
    vatType: "Exempt",
    status: "Issued",
    items: [{ name: "Documentation Service", qty: 1, price: 1250 }],
  },
];

export const documents = [
  {
    id: "INV-1042",
    type: "Invoice",
    customer: "Luna Retail Ventures",
    amount: 5040,
    status: "Paid",
    issuedAt: "Feb 3, 2026",
    series: "INV-",
    number: 1042,
    vatType: "Standard",
  },
  {
    id: "OR-5821",
    type: "Official Receipt",
    customer: "SariHub Online Store",
    amount: 1250,
    status: "Pending",
    issuedAt: "Feb 2, 2026",
    series: "OR-",
    number: 5821,
    vatType: "Exempt",
  },
  {
    id: "INV-1041",
    type: "Invoice",
    customer: "Bituin Co. Ltd.",
    amount: 9800,
    status: "Overdue",
    issuedAt: "Feb 1, 2026",
    series: "INV-",
    number: 1041,
    vatType: "Zero-rated",
  },
];

export const payments = [
  {
    id: "PAY-0091",
    doc: "INV-1042",
    amount: 5040,
    method: "Bank Transfer",
    date: "Feb 3, 2026",
    reference: "BPI-2026-0021",
  },
  {
    id: "PAY-0090",
    doc: "OR-5821",
    amount: 1250,
    method: "Cash",
    date: "Feb 2, 2026",
    reference: "Cash-Receipt-5821",
  },
];

export const dashboardStats = [
  { label: "Total sales (MTD)", value: 128450, note: "+12.4% vs last month" },
  { label: "VAT payable", value: 12845, note: "Next filing: Mar 31" },
  { label: "Outstanding balance", value: 32100, note: "8 invoices unpaid" },
  { label: "Documents issued", value: 142, note: "Invoices + ORs" },
];

export const recentActivity = [
  { id: "INV-1042", customer: "Luna Retail Ventures", amount: 5040, status: "Paid" },
  { id: "OR-5821", customer: "SariHub Online Store", amount: 1250, status: "Pending" },
  { id: "INV-1041", customer: "Bituin Co. Ltd.", amount: 9800, status: "Overdue" },
];
