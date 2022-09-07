import { Row, AddButton } from "./Header.style";
const Header = ({ actions }) => {
  return (
    <Row>
      <span onClick={() => actions.handleShowPopup(null)}>
        <AddButton />
      </span>
    </Row>
  );
};

export default Header;
