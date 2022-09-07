import { createContext } from "react";
import { INCOME, EXPENSES } from "../constants/transactionTypes";
const initialCategories = [
  {
    id: "1",
    name: "Housing",
    type: EXPENSES,
    img: "housing.png",
  },
  {
    id: "2",
    name: "Transportation",
    type: EXPENSES,
    img: "transportation.png",
  },
  {
    id: "3",
    name: "Food",
    type: EXPENSES,
    img: "food.png",
  },
  {
    id: "5",
    name: "Insurance",
    type: EXPENSES,
    img: "insurance.png",
  },
  {
    id: "7",
    name: "Saving",
    type: EXPENSES,
    img: "saving.png",
  },
  {
    id: "8",
    name: "Personal Spending",
    type: EXPENSES,
    img: "personal.png",
  },
  {
    id: "9",
    name: "Entertainment",
    type: EXPENSES,
    img: "popcorn.png",
  },
  {
    id: "10",
    name: "Miscellaneous",
    type: EXPENSES,
    img: "duck.png",
  },
  {
    id: "11",
    name: "Wages",
    type: INCOME,
    img: "wage.png",
  },
  {
    id: "12",
    name: "Salary",
    type: INCOME,
    img: "salary.png",
  },
  {
    id: "13",
    name: "Gift",
    type: INCOME,
    img: "giftbox.png",
  },
  {
    id: "14",
    name: "Selling something",
    type: INCOME,
    img: "trade.png",
  },
  {
    id: "15",
    name: "Pocket money",
    type: INCOME,
    img: "wallet.png",
  },
];

export const CategoriesContext = createContext(initialCategories);

const CategoriesProvider = ({ children }) => {
  const categories = initialCategories.map((item) => ({
    ...item,
    totalTransaction: 0,
  }));
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
