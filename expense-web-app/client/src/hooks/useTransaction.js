import { useContext } from "react";
import { GlobalState } from "../contexts/GlobalState";

const useTransaction = () => {
  const [state, dispatch] = useContext(GlobalState);
  return [state, dispatch];
};

export default useTransaction;
