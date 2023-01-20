import styled from "styled-components"

export const FormTextAreaStyled = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  border: 1px solid #cccccc;
  align-items: center;

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
    transform-origin: 0% 0%;
    padding-left: 15px;
  }

  textarea {
    font-size: 16px;
    font-weight: 700;
    border: none;
    width: 100%;
    line-height: 19px;
    background: transparent;
    outline: 0;
    resize: none;
    max-height: 120px;
    overflow: auto;
  }

  textarea::placeholder {
    color: transparent;
  }

  textarea:placeholder-shown ~ .label {
    cursor: text;
    top: 20px;
  }

  textarea:focus {
    /* border-color: ${(props) => (props.valid ? "#1BD97B" : "#FF8A00")}; */
    padding: 20px 15px 0 15px;
  }

  textarea:focus ~ .label {
    position: absolute;
    top: 12px;
    display: block;
    transition: 0.2s;
    /* color: ${(props) => (props.valid ? "#1BD97B" : "#ffcc70")}; */
    margin-bottom: 2px;
    font-size: 13px;
  }

  .input_field:required,
  .input__field:invalid {
    box-shadow: none;
  }
`
