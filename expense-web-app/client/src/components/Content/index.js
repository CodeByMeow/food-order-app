import { Row, OverView } from "./Content.style";
import useTransaction from "../../hooks/useTransaction";
import { getDecimalPart } from "../../utils/handleNumber";
const Content = () => {
  const [state] = useTransaction();
  const { totalSpent } = state;
  const naturalTotal = Math.trunc(totalSpent);
  const decimalTotal = getDecimalPart(totalSpent);
  return (
    <Row>
      <h4>Your balance</h4>
      <OverView>
        <span className="currency">$</span>
        <span className="total-transaction">{naturalTotal}</span>
        <span className="decimal">{`.${decimalTotal}`}</span>
      </OverView>
    </Row>
  );
};

export default Content;
