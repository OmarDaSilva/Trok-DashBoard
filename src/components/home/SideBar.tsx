import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonList, IonItem } from "@ionic/react";
import { personCircleOutline, chevronDownOutline } from "ionicons/icons";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <IonGrid style={{ width: "100%" }}>
      <IonRow>
        <IonGrid>
          <IonCol>
            <IonIcon icon={personCircleOutline} size="large"></IonIcon>
          </IonCol>
          <IonCol class="custom-column-profile">
            <IonLabel>John Doe</IonLabel>
            <IonIcon icon={chevronDownOutline} size="medium" />
          </IonCol>
        </IonGrid>
      </IonRow>
      <IonList lines="none">
        <IonItem>
          <IonLabel>Home</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Cards</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Invoices</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Accounting</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Settings</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Help</IonLabel>
        </IonItem>
      </IonList>
    </IonGrid>
  );
};
export default SideBar;
