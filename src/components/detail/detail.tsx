import { IonCard, IonGrid, IonHeader } from "@ionic/react";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";

interface Props {
  hide: boolean;
  invoice: Invoice | null;
}

const Detail: React.FC<Props> = (payload) => {
  const props = payload;
  return (
    <div>
      {!props.hide ? (
        <IonGrid>
          <IonHeader>Header</IonHeader>
          <IonCard hidden={payload.hide}>Hello</IonCard>
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
