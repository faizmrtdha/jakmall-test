import styled from "styled-components"

export const FormInputStyled = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  border: 1px solid #cccccc;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    margin-right: 15px;
  }

  .label {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    padding-left: 15px;
    pointer-events: none;
  }

  input {
    font-size: 16px;
    font-weight: 700;
    border: none;
    height: 60px;
    width: 100%;
    line-height: 19px;
    background: transparent;
    outline: 0;
    padding: 20px 15px 0 15px;
    /* z-index: 1; */
  }

  input::placeholder {
    color: transparent;
  }

  input:placeholder-shown ~ .label {
    cursor: text;
    top: 20px;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }

  input:focus ~ .label {
    position: absolute;
    top: 12px;
    display: block;
    transition: 0.2s;
    color: ${(props) => (props.validation ? "#ffcc70" : "#1BD97B")};
    margin-bottom: 2px;
    font-size: 13px;
  }

  input:not(:placeholder-shown) ~ .label {
    top: 12px;
    font-size: 13px;
  }

  input:disabled {
    cursor: not-allowed;
  }
`
