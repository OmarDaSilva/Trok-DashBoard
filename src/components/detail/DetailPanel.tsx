import React, { useRef, useEffect } from "react";
import { Invoice } from "../../types/invoiceTypes";
import Detail from "./detail";
import emitter from "../../eventemitter";


interface Input {
  invoice: Invoice | null;
  hide: boolean;
}

function useOutsideAlerter(ref: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = ($event: any) => {
      if (ref.current && !ref.current.contains($event.target)) {
        emitter.emit('closeDetails')
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}


const DetailPanel: React.FC<Input> = (payload) => {
  const invoice = payload.invoice;

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div ref={wrapperRef}>
      <Detail hide={payload.hide} invoice={invoice} />
    </div>
  );
};
export default DetailPanel;
