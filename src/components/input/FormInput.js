import Icon from "components/Icon/Icon"
import { FormInputStyled } from "components/input/FormInput.styled"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"
import { setStorage } from "utils/helper"

const IconValidation = ({ valid, value }) => {
  if (value)
    return <Icon color={valid ? "#FF8A00" : "#1BD97B"}>{valid ? <MdClear /> : <MdCheck />}</Icon>
  return ""
}

const FormInput = ({ form, label, rules, name, ...props }) => {
  const { register, getValues } = form

  const valueName = getValues(name)
  const valueForm = getValues()
  const onChangeInput = ({ target: { value = "" } }) => {
    setStorage("formData", JSON.stringify({ ...valueForm, [name]: value }))
  }

  return (
    <FormInputStyled value={valueName} {...props}>
      <input
        {...register(name, { ...rules, onChange: onChangeInput })}
        disabled={
          (name === "dropshipperName" || name === "dropshipperPhoneNumber") && props.disabled
        }
        {...props}
      />
      <div className="label">{label}</div>
      <IconValidation value={valueName} valid={props.validation} />
    </FormInputStyled>
  )
}

export default FormInput
