import Icon from "components/Icon/Icon"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"
import { setStorage } from "utils/helper"
import { FormTextAreaStyled } from "./FormTextArea.styled"

const FormTextArea = ({ label, rules, form, name, ...props }) => {
  const { register, getValues } = form
  const valueForm = getValues()
  const onChangeInput = ({ target: { value = "" } }) => {
    setStorage("formData", JSON.stringify({ ...valueForm, [name]: value }))
  }
  return (
    <FormTextAreaStyled {...props}>
      <textarea
        {...register(name, { ...rules, onChange: onChangeInput })}
        validation={props.validation}
        {...props}
      />
      <div className="label">{label}</div>
      <Icon color={props.valid ? "#1BD97B" : "#FF8A00"}>
        {props.valid ? <MdCheck /> : <MdClear />}
      </Icon>
    </FormTextAreaStyled>
  )
}

export default FormTextArea
