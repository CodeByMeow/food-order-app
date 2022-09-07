import { useState } from "react";
import { Container } from "../../global/styles/Global.style";
import Header from "../../components/Header";
import Content from "../../components/Content";
import History from "../../components/History";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";

const HomePage = () => {
  const [popup, setPopup] = useState(false);
  const [selectedTrans, setSelectedTrans] = useState(null);
  const handleShowPopup = (trans, isUpdate = false) => {
    setPopup((prev) => {
      if (isUpdate) {
        setSelectedTrans({ ...trans, old_amount: trans.amount });
      } else {
        setSelectedTrans(null);
      }
      return !prev;
    });
  };

  return (
    <Container>
      <Header actions={{ handleShowPopup }} />
      <Content />
      <History actions={{ handleShowPopup }} />
      <Footer />
      {popup && (
        <Popup actions={{ handleShowPopup }} selectedTrans={selectedTrans} />
      )}
    </Container>
  );
};

export default HomePage;
