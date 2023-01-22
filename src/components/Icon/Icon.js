import React from "react"
import { StyledIcon } from "./Icon.styled"

const Icon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>
}

export default Icon
