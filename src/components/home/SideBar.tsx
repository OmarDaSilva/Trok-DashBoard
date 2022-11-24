import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonList,
  IonItem,
} from "@ionic/react";
import { personCircleOutline, chevronDownOutline } from "ionicons/icons";
import React from "react";
import "./SideBar.css";

const SideBar: React.FC = () => {
  return (
    <IonGrid style={{ width: "100%" }}>
      <IonRow>
        <IonGrid class="grid">
          <IonCol>
            <IonGrid>
              <IonCol>
                <IonIcon
                  icon={personCircleOutline}
                  class="icon-profile"
                ></IonIcon>
              </IonCol>
            </IonGrid>
          </IonCol>
        </IonGrid>
        <IonCol class="username">
          <IonLabel class="username-label">John Doe</IonLabel>
        </IonCol>
        <IonCol class="username-swap-icon">
          <IonIcon icon={chevronDownOutline} class="icon-dropdown username" />
        </IonCol>
      </IonRow>
      <IonList lines="none">
        <IonItem>
          <IonLabel class="label">Home</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="label">Cards</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="label">Invoices</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="label">Accounting</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="label">Settings</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="label">Help</IonLabel>
        </IonItem>
      </IonList>
    </IonGrid>
  );
};
export default SideBar;
