import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonButton,
} from "@ionic/react";
import React from "react";
import { Invoice } from "../../../types/invoiceTypes";
import moment from "moment";
import './tableItem.css'
import { slide as Menu } from 'react-burger-menu'


const TableItem: React.FC<{ invoice: Invoice }> = (data) => {
  const invoiceItem = data.invoice;

//   let showSettings = (event)  => {
//     event.preventDefault();
//   }

  return (
      <IonItem id="main-content" >
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonLabel>{invoiceItem.invoiceFrom}</IonLabel>
                </IonRow>

                <IonRow class="invoice-id">{'INV-' + invoiceItem.invoiceId}</IonRow>
              </IonGrid>
            </IonCol>
            <IonCol>
              <IonLabel>
                <IonRow>
                  {moment(invoiceItem.creationDate).format("DD-MM-YYYY")}
                </IonRow>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>{"£" + invoiceItem.totalInclVat}</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>
                {moment(invoiceItem.dueDate).format("DD-MM-YYYY")}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
  );
};

export default TableItem;
