import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import Table from "../table/Table";
import React, { useEffect, useState } from "react";
import "./invoiceDashboard.css";
import { Invoice } from "../../types/invoiceTypes";

const InvoiceDashboard: React.FC = () => {
  const [invoices, setInvoice] = useState<Invoice[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:5001/getInvoices";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setInvoice(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <IonCard class="dashboard">
      <IonCardHeader class="card-header">
        <IonCardTitle class="title">Invoices</IonCardTitle>
      </IonCardHeader>

    { }
      <IonCardContent class="margin-bottom">
        <Table invoices={invoices}/>
      </IonCardContent>
    </IonCard>
  );
};
export default InvoiceDashboard;
