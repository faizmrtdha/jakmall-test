import styled from "styled-components"

export const FormItemStyled = styled.div`
  position: relative;
  display: flex;
  height: 40px;

  .label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(20px, -50%);
    font-size: 16px;
    font-weight: 500;
    transform-origin: 0% 0%;
  }

  input {
    height: inherit;
    font-size: 16px;
    font-weight: 700;
    padding: 20px 15px;
  }
  input:focus ~ .label {
    transform: translate(0, -2.875rem) scale(0.875);
  }
`
