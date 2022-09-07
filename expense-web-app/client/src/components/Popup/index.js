import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EXPENSES, INCOME } from "../../constants/transactionTypes";
import { formatDate } from "../../utils/formatDatetime";
import useCategories from "../../hooks/useCategories";
import {
  ChangeTransaction,
  ContentInner,
  FieldInpout,
  Nav,
  Notes,
  Row,
  SubmitBtn,
} from "./Popup.style";
import useTransaction from "../../hooks/useTransaction";
import {
  addTransaction,
  changeCurrentTransactionType,
  updateTransaction,
} from "../../contexts/GlobalActions";
import Category from "../../components/Category";

const Popup = ({ actions, selectedTrans }) => {
  const [trans, setTrans] = useState(() => {
    const today = new Date();
    return {
      amount: "",
      date: formatDate(today),
      category: "",
      note: "",
      id: uuidv4(),
    };
  });
  const [state, dispatch] = useTransaction();
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const categories = useCategories();

  useEffect(() => {
    if (selectedTrans) {
      setTrans(selectedTrans);
      const cat = categories.find((item) => item.id === selectedTrans.category);
      dispatch(changeCurrentTransactionType(cat.type));
    }
  }, []);

  const autoSize = (e) => {
    let value = 1;
    if (e.key === "Backspace") value = -1;
    e.target.style.width = e.target.value.length + value + "ch";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrans({
      ...trans,
      [name]: value,
    });
  };

  const handleSelectCategory = (categoryId) => {
    setTrans({
      ...trans,
      category: categoryId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(trans));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      const hasID = state.transactions.some((item) => item.id === trans.id);
      if (hasID) {
        dispatch(updateTransaction(trans));
      } else {
        dispatch(addTransaction(trans));
      }
      actions.handleShowPopup();
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    if (!values.amount) errors.amount = "Amount is required";
    if (values.amount == 0) errors.amount = "Amount have to more than 0";
    if (!values.category) errors.category = "Category is required";
    return errors;
  };

  const handleChangeTransaction = () => {
    const transType =
      state.currentTransactionType === EXPENSES ? INCOME : EXPENSES;
    dispatch(changeCurrentTransactionType(transType));
  };

  return (
    <Row>
      <Nav>
        <div className="nav-inner">
          <button
            className="cancle"
            onClick={() => actions.handleShowPopup(null)}
          >
            Cancel
          </button>
          <span className="current-transaction">
            {state.currentTransactionType}
          </span>
        </div>
      </Nav>
      <ContentInner>
        <form onSubmit={handleSubmit}>
          <div className="transaction-input">
            <div className="input">
              <span className="currency">$</span>
              <input
                type="number"
                placeholder="0"
                onKeyDown={autoSize}
                value={trans.amount}
                onChange={handleInputChange}
                step={0.01}
                name="amount"
                min={0}
              />
            </div>
            <ChangeTransaction actions={{ handleChangeTransaction }} />
          </div>
          {error.amount && <p className="error-message">{error.amount}</p>}
          <FieldInpout>
            <input
              type="date"
              value={trans.date}
              onChange={handleInputChange}
              name="date"
            />
          </FieldInpout>
          <Category
            actions={{ handleSelectCategory }}
            selectedCat={trans.category}
          />
          {error.category && <p className="error-message">{error.category}</p>}
          <Notes>
            <textarea
              className="notes"
              placeholder="Note..."
              rows="1"
              onChange={handleInputChange}
              name="note"
              defaultValue={trans.note}
            ></textarea>
          </Notes>
          <SubmitBtn>
            <button type="submit" className="submit">
              Save
            </button>
          </SubmitBtn>
        </form>
      </ContentInner>
    </Row>
  );
};

export default Popup;
