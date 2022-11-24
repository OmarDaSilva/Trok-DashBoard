import React, { useEffect, useRef, useState } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";

import "./home.css";
import SideBar from "../components/home/SideBar";
// import Dashboard from "../components/dashboard/Dashboard";
import InvoiceDashboard from "../components/invoice-dashboard/invoiceDashboard";
import emitter from "../eventemitter";
import { Invoice } from "../types/invoiceTypes";
import Detail from "../components/detail/detail";
import DetailPanel from "../components/detail/DetailPanel";

const Home: React.FC = () => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [openInvoiceDetail, toggleInvoiceDetail] = useState(false);

  useEffect(() => {
    const listener = emitter.addListener("invoiceClicked", (data: Invoice) => {
      setInvoice(data);
      toggleInvoiceDetail(true);
      alert(invoice);
    });

    return () => listener.remove();
  }, []);

  // const closeSidePanel = () => {
  //   ReactDOM.findDOMNode(component)
  // }

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
                <button onClick={() => toggleInvoiceDetail(!openInvoiceDetail)}>
                  Click
                </button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRow>
      </IonGrid>
      {/* {openInvoiceDetail ? (
        <IonGrid class="overlap">
          Hello
        < /IonGr
        id>
      ) : null} */}
      {/* {
        invoice ? (
          <DetailPanel invoice={invoice} toggle={openInvoiceDetail}/>
        ) : null
      } */}

      <IonGrid class={openInvoiceDetail ? "overlap" : "hidden"} >

        {invoice ? (
          <DetailPanel invoice={invoice} hide={!openInvoiceDetail}/>
        ) : null}
      </IonGrid>
    </div>
  );
};

export default Home;
