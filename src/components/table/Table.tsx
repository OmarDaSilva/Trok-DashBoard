import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
} from "@ionic/react";
import moment from "moment";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";
import TableItem from "./table-item/tableItem";
import "./Table.css";

interface Props {
  invoices: Invoice[];
  loaded: boolean;
}

const Table: React.FC<Props> = (payload) => {
  const sortInvoicesByMonthAndYear = (): any[] => {
    let map = new Map<Date, Invoice[]>();
    payload.invoices?.forEach((inv) => {
      let invDate = new Date(inv.creationDate);

      if (map.has(invDate)) {
        let sortedInvoices = map.get(invDate);
        if (sortedInvoices) {
          map.set(invDate, [...sortedInvoices, inv]);
        }
      } else {
        map.set(invDate, [inv]);
      }
    });

    let data: any[] = [];
    map.forEach((value, key) => {
      console.log(key + value.toString());
      
      data.push([key, value]);
    });

    return data;
  };

  let sortedInvoices = payload ? sortInvoicesByMonthAndYear() : null;

  return (
    <>
      <IonList lines="none" class="table">
        <IonItem class="no-hover">
          <IonGrid>
            <IonRow>
              <IonCol class="table-columns-labels">Supplier Details</IonCol>
              <IonCol class="table-columns-labels">Created Date</IonCol>
              <IonCol class="table-columns-labels">Amount</IonCol>
              <IonCol class="table-columns-labels">Due date</IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonList>

      {payload.invoices
        ? sortedInvoices?.map((invoices) => {

            return (
              <IonList class="table" key={invoices[0]}>
                <IonListHeader class="table-header">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonLabel class="header-text">
                          {moment(invoices[0]).format("MMMM")}
                        </IonLabel>
                      </IonCol>
                      <IonCol></IonCol>
                      <IonCol></IonCol>
                      <IonCol>
                        <IonLabel class="header-text">
                          {moment(invoices[0]).format("YYYY")}
                        </IonLabel>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonListHeader>

                {invoices[1].map((inv: Invoice) => {
                  return <TableItem invoice={inv} key={inv._id} />;
                })}
              </IonList>
            );
          })
        : null}

      {/* <IonList class="table">
        <IonListHeader class="table-header">
          <IonGrid>
            <IonRow>
              <IonCol><IonLabel class="header-text">September</IonLabel></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol><IonLabel class="header-text">2023</IonLabel></IonCol>
          </IonRow>
          </IonGrid>
        </IonListHeader>

        {payload.invoices?.map(invoice => {
          return <TableItem invoice={invoice} key={invoice._id} />;
        })}
      </IonList> */}
    </>
  );
};

export default Table;
