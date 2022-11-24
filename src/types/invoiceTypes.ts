export interface Invoice {
  _id: string;
  invoiceId: string;
  creationDate: string;
  lineItems: {
    description: string;
  };
  recipientCompanyAddress: string;
  vat: number;
  subTotal: string;
  totalInclVat: string;
  InvoiceFrom: string;
  dueDate: string;
}
