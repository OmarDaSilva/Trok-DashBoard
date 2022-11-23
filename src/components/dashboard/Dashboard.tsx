import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonRow,
} from "@ionic/react";
import React from "react";
import Table from "../table/Table";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle class="title">Invoices</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <Table />
        </IonCardContent>
      </IonCard>
  );
};
export default Dashboard;

