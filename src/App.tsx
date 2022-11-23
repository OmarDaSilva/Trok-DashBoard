import React, { useEffect } from "react";
import "./App.css";
import "@ionic/react/css/core.css";

function App() {

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:5001/getInvoices', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])
  // const { error, isLoaded, items } = this.state;

  return (
   <div className="">

   </div>
  )
}

export default App;
