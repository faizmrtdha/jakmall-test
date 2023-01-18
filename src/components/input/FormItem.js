import { FormItemStyled } from "components/styles/FormItem.styled"
import React from "react"

const FormItem = ({ label, required, register, name, ...props }) => {
  return (
    <FormItemStyled>
      <div className="label">{label}</div>
      <input {...register(name, { required })} {...props} />
    </FormItemStyled>
  )
}

export default FormItem
