import { useEffect, useState } from "react";
import foodService from "../../services/foodServices";
import MealList from "../../components/MealList";
import HeroImage from "../../components/HeroImage";
const URL = "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals";
const HomePage = (props) => {
   const { addToCart } = props;
   const [meals, setMeals] = useState();
   const [loader, setLoader] = useState(true);
   const getMeals = async () => {
      const data = await foodService.get(URL);
      const rs = data.data.splice(0, 4);
      setMeals(rs);
   };

   useEffect(() => {
      setLoader(!loader);
      getMeals();
   }, [loader]);

   return (
      <>
         <HeroImage />
         <div className="container">
            {loader && loader ? (
               <div className="loader"></div>
            ) : (
               <MealList meals={meals} addToCart={addToCart} />
            )}
         </div>
      </>
   );
};

export default HomePage;
