import Icon from "components/Icon/Icon"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"
import { FormTextAreaStyled } from "./FormTextArea.styled"

const FormTextArea = ({ label, rules, form, name, ...props }) => {
  const { register } = form
  return (
    <FormTextAreaStyled>
      <textarea {...register(name, { ...rules })} {...props} />
      <div className="label">{label}</div>
      <Icon color={props.valid ? "#1BD97B" : "#FF8A00"}>
        {props.valid ? <MdCheck /> : <MdClear />}
      </Icon>
    </FormTextAreaStyled>
  )
}

export default FormTextArea
