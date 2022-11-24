import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonCard,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
} from "@ionic/react";
import { calendar, location, informationCircle, people } from "ionicons/icons";
import { personCircleOutline, chevronDownOutline } from "ionicons/icons";

import "./home.css";
import SideBar from "../components/home/SideBar";
// import Dashboard from "../components/dashboard/Dashboard";
import InvoiceDashboard from "../components/invoice-dashboard/invoiceDashboard";

const Home: React.FC = () => {
  return (
    <IonGrid>
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
              <InvoiceDashboard/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
