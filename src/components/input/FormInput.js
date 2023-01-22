import Icon from "components/Icon/Icon"
import { FormInputStyled } from "components/input/FormInput.styled"
import React from "react"
import { MdCheck, MdClear } from "react-icons/md"
import { setStorage } from "utils/helper"

const IconValidation = ({ valid, value }) => {
  if (value)
    return <Icon color={valid ? "#1BD97B" : "#FF8A00"}>{valid ? <MdCheck /> : <MdClear />}</Icon>
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
    <FormInputStyled {...props}>
      <input
        {...register(name, { ...rules, onChange: onChangeInput })}
        valueinput={valueName}
        disabled={
          (name === "dropshipperName" || name === "dropshipperPhoneNumber") && props.disabled
        }
        validation={props.validation}
        {...props}
      />
      <div className="label">{label}</div>
      <IconValidation value={valueName} valid={props.validation} />
    </FormInputStyled>
  )
}

export default FormInput
