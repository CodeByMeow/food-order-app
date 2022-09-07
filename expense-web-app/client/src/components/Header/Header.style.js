import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";

export const Row = styled.div`
  padding: 3em 2em;
  text-align: right;
`;

export const AddButton = () => {
  return <RiAddCircleFill fontSize="3em" cursor="pointer" />;
};
