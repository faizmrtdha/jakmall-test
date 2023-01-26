import Icon from "components/Icon/Icon"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"
import { setStorage } from "utils/helper"
import { FormTextAreaStyled } from "./FormTextArea.styled"

const IconValidation = ({ valid, value }) => {
  if (value)
    return <Icon color={valid ? "#FF8A00" : "#1BD97B"}>{valid ? <MdClear /> : <MdCheck />}</Icon>
  return ""
}

const FormTextArea = ({ label, rules, form, name, ...props }) => {
  const { register, getValues } = form
  const valueName = getValues(name)
  const valueForm = getValues()
  const onChangeInput = ({ target: { value = "" } }) => {
    setStorage("formData", JSON.stringify({ ...valueForm, [name]: value }))
  }
  return (
    <FormTextAreaStyled value={valueName} {...props}>
      <textarea {...register(name, { ...rules, onChange: onChangeInput })} {...props} />
      <div className="label">{label}</div>
      <IconValidation value={valueName} valid={props.validation} />
    </FormTextAreaStyled>
  )
}

export default FormTextArea
