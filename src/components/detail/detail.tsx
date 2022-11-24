import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";
import "./detail.css";
import DetailTable from "./DetailTable";
import { closeOutline } from "ionicons/icons";
import emitter from "../../eventemitter";


interface Props {
  hide: boolean;
  invoice: Invoice | null;
}

const Detail: React.FC<Props> = (payload) => {
  const props = payload;
  const closeDetail = () => {
    emitter.emit('closeDetails')

  }
  return (
    <div>
      {!props.hide ? (
        <IonGrid class="no-grid-padding">
          <IonRow>
            <IonHeader>
              <IonToolbar>
                <IonTitle>
                  <IonGrid>
                    <IonCol>
                      <IonIcon icon={closeOutline} class="icons" onClick={closeDetail}/>
                    </IonCol>
                  </IonGrid>
                </IonTitle>
              </IonToolbar>
            </IonHeader>
          </IonRow>
          <IonRow>
            <IonTitle class="title-text">Invoice Details</IonTitle>
          </IonRow>
          <IonRow>
            <DetailTable invoice={payload.invoice} />
            {/* <IonCard hidden={payload.hide}>Hello</IonCard> */}
          </IonRow>
        </IonGrid>
      ) : null}
    </div>
  );
};
export default Detail;

// <IonGrid>
// <IonHeader>Header</IonHeader>
// <IonCard hidden={payload.hide}>Hello</IonCard>
// </IonGrid>
