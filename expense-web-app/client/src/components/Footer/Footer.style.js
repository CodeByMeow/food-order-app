import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--gray);
`;

export const Row = styled.div`
  padding: 3em 2em;
  background-color: #fff;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.5em;
  color: var(--gray);
  .active {
    color: var(--black);
  }
`;
