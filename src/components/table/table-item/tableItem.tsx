import { IonItem, IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { Invoice } from "../../../types/invoiceTypes";


const TableItem: React.FC<{invoice: Invoice}> = (invoice) => {
    return (
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol>BP</IonCol>
              <IonCol>September 1st 2023</IonCol>
              <IonCol>£456.70</IonCol>
              <IonCol>01/10/11</IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
    )
}