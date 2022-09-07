import { useState } from "react";
import "./MealItem.css";
const MealItem = (props) => {
   const {
      meal: { name, description, price, image, id },
      addToCart,
   } = props;
   const [amount, setAmount] = useState(1);
   const onChangeHandler = (e) => setAmount(parseInt(e.target.value));

   return (
      <div className="meal-item">
         <div className="meal-item-info">
            <div className="meal-item-image">
               <img src={image} alt={name} />
            </div>
            <div className="meal-item-desc">
               <h4>{name}</h4>
               <p>{description}</p>
               <span>${price}</span>
            </div>
         </div>
         <div className="meal-add-to-cart">
            <div className="amount">
               <label htmlFor={id}>Amount</label>
               <input
                  type="number"
                  id={id}
                  min={1}
                  onChange={onChangeHandler}
                  defaultValue={1}
               />
            </div>
            <button
               className="btn btn-add"
               onClick={() => addToCart(props.meal, amount)}
            >
               + Add
            </button>
         </div>
      </div>
   );
};

export default MealItem;
