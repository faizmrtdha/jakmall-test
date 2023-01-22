import styled from "styled-components"

export const IconRadio = styled.div`
  visibility: hidden;
`

export const LabelRadio = styled.div`
  color: #2d2a40;
  border: 1px solid #cccccc;
  background: #ffffff;
  width: 180px;
  height: 60px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    margin-bottom: 2px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: rgba(45, 42, 64, 0.6);
  }
`

export const InputRadio = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked {
    + ${LabelRadio} {
      background-color: rgba(27, 217, 123, 0.1);
      border: 2px solid #1bd97b;

      p {
        color: rgba(45, 42, 64, 1);
      }

      ${IconRadio} {
        visibility: visible;
        color: #1bd97b;
      }
    }
  }
`
