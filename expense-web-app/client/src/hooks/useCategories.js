import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";

const useCategories = () => {
  const categoriesCtx = useContext(CategoriesContext);
  return categoriesCtx;
};

export default useCategories;
