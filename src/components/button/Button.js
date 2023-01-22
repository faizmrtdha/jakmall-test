import Icon from "components/Icon/Icon"
import React from "react"
import { MdArrowBack } from "react-icons/md"
import { StyledButton } from "./Button.styled"

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon small>
        <MdArrowBack />
      </Icon>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button
