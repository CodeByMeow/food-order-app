import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import History from "./components/History";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const handleShowPopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      <Header />
      <MainContent />
      <History />
      <Footer />
      {popup && <Popup />}
    </>
  );
}

export default App;
