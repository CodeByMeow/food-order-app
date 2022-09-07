import "./Checkout.css";
import { useFormik } from "formik";
import { CartItem } from "../../components";
import { useCartContext } from "../../contexts/CartContext";
const Checkout = () => {
   const validate = (values) => {
      const errors = {};
      if (!values.fullname) errors.fullname = "required";
      if (!values.city) errors.city = "required";
      if (!values.email) {
         errors.email = "required";
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
         errors.email = "Invalid email address";
      }

      return errors;
   };
   const formik = useFormik({
      initialValues: {
         fullname: "",
         city: "",
         email: "",
      },
      validate,
      onSubmit: (values) => {
         console.log(JSON.stringify(values, null, 2));
      },
   });
   const {
      cart: { items },
      updateItemCart,
   } = useCartContext();

   if (!items.length)
      return (
         <div className="container">
            <div className="checkout-inner">Your cart is empty</div>
         </div>
      );
   return (
      <div className="container">
         <div className="checkout-inner">
            <div className="meal-order">
               {items &&
                  items.map((item) => (
                     <CartItem
                        item={item}
                        updateItemCart={updateItemCart}
                        key={item.id}
                     />
                  ))}
            </div>
            <form onSubmit={formik.handleSubmit}>
               <div className="form-field">
                  <label htmlFor="fullname">Your name</label>
                  <input
                     className="form-input"
                     type="text"
                     id="fullname"
                     name="fullname"
                     onChange={formik.handleChange}
                     value={formik.values.fullname}
                  />
                  {formik.errors.fullname && (
                     <span className="error">{formik.errors.fullname}</span>
                  )}
               </div>
               <div className="form-field">
                  <label htmlFor="city">City</label>
                  <input
                     className="form-input"
                     type="text"
                     id="city"
                     name="city"
                     onChange={formik.handleChange}
                     value={formik.values.city}
                  />
                  {formik.errors.city && (
                     <span className="error">{formik.errors.city}</span>
                  )}
               </div>
               <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                     className="form-input"
                     type="text"
                     id="email"
                     name="email"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                  />
                  {formik.errors.email && (
                     <span className="error">{formik.errors.email}</span>
                  )}
               </div>
               <div className="submition">
                  <button className="btn btn--dark">Checkout</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Checkout;
