import styled from "styled-components";
import { RiExchangeLine } from "react-icons/ri";
export const Row = styled.div`
  padding: 3em 2em;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

export const Nav = styled.div`
  font-size: 2em;
  height: 8em;
  width: 100%;
  .nav-inner {
    position: relative;
    height: inherit;
  }
  .current-transaction {
    font-weight: 800;
    text-align: center;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .cancle {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: auto;
    border: none;
    outlien: none;
    background: #fff;
    font-size: 1em;
    cursor: pointer;
  }
`;

export const ContentInner = styled.div`
  height: 36em;
  form {
    width: 100%;
  }
  .error-message {
    color: red;
    font-size: 1.5em;
    text-align: center;
    :first-letter {
      text-transform: capitalize;
    }
  }
  .transaction-input {
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5em;
      margin-left: auto;
    }
    input {
      outline: none;
      border: none;
      min-width: calc(4ch + 0.4em);
      border-bottom: 3px solid var(--gray);
      display: block;
      font-size: 2em;
      text-align: center;
      width: 1em;
      padding: 0;
      -webkit-appearance: none;
      margin: 0;
      -moz-appearance: textfield;
    }
    .currency {
      color: var(--gray);
      align-self: flex-start;
    }
  }
`;

export const ChangeTransaction = ({ actions }) => {
  return (
    <span
      style={{
        marginLeft: "auto",
        color: "var(--gray)",
        cursor: "pointer",
        transiton: "all 1s ease-in-out",
        transform: "rotate(90deg)",
      }}
      onClick={actions.handleChangeTransaction}
    >
      <RiExchangeLine style={{ fontSize: "4em" }} />
    </span>
  );
};

export const FieldInpout = styled.div`
  text-align: center;
  padding: 5em 0;

  input[type="date"] {
    outline: none;
    font-size: 3em;
    border: none;
    border-bottom: 1px solid var(--gray);
    padding: 0 1em;
    cursor: pointer;
    font-family: inherit;
  }
`;

export const Notes = styled.div`
  padding: 0em 2em;
  .notes {
    font-size: 2em;
    font-weight: 300;
    padding: 1em;
    width: 100%;
    resize: none;
    border: none;
    border-bottom: 1px solid var(--gray);
    outline: none;
    font-family: inherit;
  }
`;

export const SubmitBtn = styled.div`
  padding: 3em 2em;
  .submit {
    font-size: 2em;
    background-color: var(--green);
    padding: 1em;
    width: 100%;
    border-radius: 1.125em;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;
