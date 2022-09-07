import styled from "styled-components";

export const Item = styled.div`
  cursor: pointer;
  padding: 0.5em;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  h5 {
    font-size: 2em;
    font-weight: 300;
    padding: 0.8em;
  }
`;

export const Image = styled.img`
  width: 4em;
  height: 4em;
  object-fit: cover;
`;
