import { IonCard, IonCardContent, IonLabel } from "@ionic/react";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";
import "./DetailTable.css";
interface Props {
  invoice: Invoice | null;
}

const DetailTable: React.FC<Props> = (payload) => {
    const invoice = payload.invoice;
  return (
    <IonCard class="card">
      <IonCardContent>
        <table>
            <tr>
                <th>Download Invoice</th>
            </tr>
          {/* <th>Test</th>
            <th>Hello</th> */}
          <tr>
            <td><IonLabel class="label">Invoice Number</IonLabel></td>
            <td>{"INV-" + invoice?.invoiceId}</td>
          </tr>
          <tr>
            <td><IonLabel class="label">Merchant</IonLabel></td>
            <td>{invoice?.invoiceFrom}</td>
          </tr>
          <tr>
            <td><IonLabel class="label">Subtotal</IonLabel></td>
            <td>{'£' + invoice?.subTotal}</td>
          </tr>
          <tr>
            <td><IonLabel class="label">VAT</IonLabel></td>
            <td>{'£' + invoice?.vat}</td>
          </tr>
          <tr>
            <td><IonLabel class="label">Amount</IonLabel></td>
            <td>{'£' + invoice?.totalInclVat}</td>
          </tr>
          <tr>
            <td><IonLabel class="label">recipient company address</IonLabel></td>
            <td>{invoice?.recipientCompanyAddress}</td>
          </tr>

          <tr>
            <td><IonLabel class="label">items</IonLabel></td>
            <td>{invoice?.lineItems.description}</td>
          </tr>
        </table>
      </IonCardContent>
    </IonCard>
  );
};
export default DetailTable;
