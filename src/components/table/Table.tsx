import { IonCol, IonGrid, IonItem, IonList, IonRow } from "@ionic/react";
import React from "react";
import "./Table.css";

const Table: React.FC = () => {
  return (
    <>
      <IonList lines="none" class="table">
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol>Supplier Details</IonCol>
              <IonCol>Created Date</IonCol>
              <IonCol>Amount</IonCol>
              <IonCol>Due date</IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonList>

      <IonList lines="none" class="table">
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>September</IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol>2023</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>

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

      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>Esso</IonCol>
            <IonCol>September 2nd 2023</IonCol>
            <IonCol>£300.02</IonCol>
            <IonCol>01/10/11</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonList>
    </>
  );
};

export default Table;
