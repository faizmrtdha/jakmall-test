import styled from "styled-components"
import { getWidthString } from "utils/helper"

export const Column = styled.div`
  display: block;
  ${({ xs }) => (xs ? getWidthString(xs) : `flex:0 0 100%;max-width: 100%;}`)}

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
`
