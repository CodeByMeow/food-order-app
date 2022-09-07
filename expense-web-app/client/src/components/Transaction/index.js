import { Item, ItemImg, ItemDesc, ItemAmount } from "./Transaction.style";
import useCategories from "../../hooks/useCategories";
import {
  CATEGORIES_IMG_PATH,
  DECREASE_ARROW,
  INCREASE_ARROW,
  STATUS_IMG_PATH,
} from "../../constants/imageSrc";
import { EXPENSES } from "../../constants/transactionTypes";

const Transaction = ({ item, actions }) => {
  const categories = useCategories();
  const cat = categories.find((category) => category.id === item.category);
  const { name: catTitle, img, type } = cat;
  const arrow = type === EXPENSES ? DECREASE_ARROW : INCREASE_ARROW;
  return (
    <Item onClick={() => actions.handleShowPopup(item, true)}>
      <ItemImg>
        <img src={`${CATEGORIES_IMG_PATH}${img}`} alt="{catTitle}" />
      </ItemImg>
      <ItemDesc>
        <h4>{catTitle}</h4>
        <span>{`${item.date}`}</span>
      </ItemDesc>
      <ItemAmount>
        <h4>{`$${item.amount}`}</h4>
        <img src={`${STATUS_IMG_PATH}${arrow}.png`} alt={`${arrow}`} />
      </ItemAmount>
    </Item>
  );
};

export default Transaction;
