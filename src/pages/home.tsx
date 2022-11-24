import React, { useEffect, useRef, useState } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./home.css";
import SideBar from "../components/home/SideBar";
import InvoiceDashboard from "../components/invoice-dashboard/invoiceDashboard";
import emitter from "../eventemitter";
import { Invoice } from "../types/invoiceTypes";
import DetailPanel from "../components/detail/DetailPanel";

const Home: React.FC = () => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [openInvoiceDetail, toggleInvoiceDetail] = useState(false);

  useEffect(() => {
    const listener = emitter.addListener("invoiceClicked", (data: Invoice) => {
      setInvoice(data);
      toggleInvoiceDetail(true);
    });

    const listenerDetailPanel = emitter.addListener(
      "closeDetails",
      (data: Invoice) => {
        toggleInvoiceDetail(false);
      }
    );

    return () => {
      listener.remove();
      listenerDetailPanel.remove();
    };
  }, []);

  return (
    <div className="container">
      <IonGrid content-id="main-content">
        <IonHeader class="header">
          <IonToolbar>
            <IonTitle>Trok</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                <SideBar />
              </IonCol>
              <IonCol>
                <InvoiceDashboard />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRow>
      </IonGrid>

      <IonGrid class={openInvoiceDetail ? "overlap" : "hidden"}>
        {invoice ? (
          <DetailPanel invoice={invoice} hide={!openInvoiceDetail} />
        ) : null}
      </IonGrid>
    </div>
  );
};

export default Home;
