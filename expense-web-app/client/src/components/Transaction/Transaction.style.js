import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-bettween;
  align-items: center;
  border-bottom: 1px solid var(--gray);
`;

export const ItemImg = styled.div`
  flex-shink: 0;
  padding: 1.5em;
  img {
    width: 4em;
    height: 4em;
    object-fit: cover;
  }
`;

export const ItemDesc = styled.div`
  flex: 1;
  padding: 1em 0;
  h4 {
    font-size: 2em;
    font-weight: 500;
  }
`;

export const ItemAmount = styled(ItemDesc)`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  h4 {
    text-align: right;
  }
  img {
    width: 2.5em;
    height: 2.5em;
    object-fit: cover;
  }
`;
