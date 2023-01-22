import styled, { css } from "styled-components"

export const StyledIcon = styled.span`
  color: ${(props) => (props.color ? props.color : `rgba(0, 0, 0, 0.6)`)};
  & svg {
    ${(props) =>
      props.small &&
      css`
        width: 18px !important;
        height: 18px !important;
      `}
    ${(props) =>
      props.med &&
      css`
        width: 24px !important;
        height: 24px !important;
      `}
  }
  margin-right: 10px;
  display: inline-block;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  vertical-align: middle;
`
