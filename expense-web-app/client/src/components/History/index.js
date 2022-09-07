import { Container } from "../../global/styles/Global.style";
import { Row } from "./History.style";
import EmptyBlock from "../EmptyBlock";
import Transaction from "../Transaction";
import useTransaction from "../../hooks/useTransaction";

const History = ({ actions }) => {
  const [state] = useTransaction();
  const transList = state.transactions.map((item) => (
    <Transaction key={item.id} item={item} actions={actions} />
  ));
  return (
    <Container>
      <Row>{transList.length > 0 ? transList : <EmptyBlock />}</Row>
    </Container>
  );
};

export default History;
