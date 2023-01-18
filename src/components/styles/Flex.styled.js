import styled, { css } from "styled-components"

export const Flex = styled.div`
  display: flex;
  ${(props) => {
    switch (props.direction) {
      case "column":
        return css`
          flex-direction: column;
          row-gap: ${props.gutter ? `${props.gutter}px` : 0};
        `
      default:
        return css`
          flex-direction: row;
          align-items: center;
        `
    }
  }}
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
