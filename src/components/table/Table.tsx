import { IonCol, IonGrid, IonItem, IonLabel, IonList, IonListHeader, IonRow } from "@ionic/react";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";
import TableItem from "./table-item/tableItem";
import "./Table.css";

const Table: React.FC<{ invoices: Invoice[] | null }> = (payload) => {
  return (
    <>
      <IonList lines="none" class="table">
        <IonItem>
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

      <IonList class="table">
        <IonListHeader class="table-header">
          <IonGrid>
            <IonRow>
              <IonCol><IonLabel>September</IonLabel></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol>2023</IonCol>
            </IonRow>
          </IonGrid>
        </IonListHeader>

        {payload.invoices?.map(invoice => {
          return <TableItem invoice={invoice} key={invoice._id} />;
        })}
      </IonList>
    </>
  );
};

export default Table;
