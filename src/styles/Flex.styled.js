import styled, { css } from "styled-components"

export const Flex = styled.div`
  display: flex;
  ${(props) => {
    switch (props.direction) {
      case "column":
        return css`
          flex-direction: column;
        `
      default:
        return css`
          flex-direction: row;
        `
    }
  }}
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  ${({ gutter }) =>
    gutter && Object.keys(gutter).length > 0
      ? `row-gap: ${gutter.y ? gutter.y : 0}px;column-gap:${gutter.x ? gutter.x : 0}px;`
      : `gap: ${gutter}px;`}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
