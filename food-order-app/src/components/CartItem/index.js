import "./CartItem.css";
const CartItem = (props) => {
   const {
      item: { name, price, amount, image, id },
      updateItemCart,
   } = props;
   return (
      <div className="cart-item">
         <div className="cart-item__info">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <div className="desc">
               <span className="price">${price}</span>
               <span className="item-amount">{amount}</span>
            </div>
         </div>
         <div className="cart-item__amount">
            <button
               className="decrease"
               onClick={(e) => {
                  e.stopPropagation();
                  updateItemCart(id, -1);
               }}
            >
               -
            </button>
            <button
               className="increase"
               onClick={(e) => {
                  e.stopPropagation();
                  updateItemCart(id, 1);
               }}
            >
               +
            </button>
         </div>
      </div>
   );
};

export default CartItem;
