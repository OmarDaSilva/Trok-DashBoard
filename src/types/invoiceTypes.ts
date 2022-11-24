export interface Invoice {
  _id: string;
  invoiceId: string;
  creationDate: string;
  lineItems: {
    description: string;
  };
  recipientCompanyAddress: string;
  vat: number;
  subTotal: number;
  totalInclVat: number;
  invoiceFrom: string;
  dueDate: string;
}
