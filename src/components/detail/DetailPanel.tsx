import { IonCard, IonGrid } from "@ionic/react";
import React from "react";
import { Invoice } from "../../types/invoiceTypes";
import Detail from "./detail";

interface Input {
  invoice: Invoice | null;
  hide: boolean;
}

const DetailPanel: React.FC<Input> = (payload) => {
  const invoice = payload.invoice;
  return (
    <>
      <Detail hide={payload.hide} invoice={payload.invoice} />
    </>
  );
};
export default DetailPanel;
