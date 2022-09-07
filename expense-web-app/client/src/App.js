import { GlobalStyle } from "./global/styles/Global.style";
import HomePage from "./pages/HomePage";
import TransactionProvider from "./contexts/GlobalState";
import CategoriesContextProvider from "./contexts/CategoriesContext";

function App() {
  return (
    <CategoriesContextProvider>
      <TransactionProvider>
        <GlobalStyle />
        <HomePage />
      </TransactionProvider>
    </CategoriesContextProvider>
  );
}

export default App;
