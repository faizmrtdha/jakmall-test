import Icon from "components/Icon/Icon"
import { FormInputStyled } from "components/input/FormInput.styled"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"

const FormInput = ({ form, label, rules, name, ...props }) => {
  const { register } = form
  return (
    <FormInputStyled>
      <input {...props} {...register(name, { ...rules })} />
      <div className="label">{label}</div>
      <Icon color={props.valid ? "#1BD97B" : "#FF8A00"}>
        {props.valid ? <MdCheck /> : <MdClear />}
      </Icon>
    </FormInputStyled>
  )
}

export default FormInput
