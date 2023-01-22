import React from "react"
import { MdCheck } from "react-icons/md"
import { IconRadio, InputRadio, LabelRadio, RadioWrapper } from "./FormRadio.styled"

const FormRadioButton = ({ label, price, selected, onClick, form, name }) => {
  const { register } = form
  const isSelected = selected.label === label

  return (
    <label>
      <InputRadio
        for={name}
        value={label}
        checked={isSelected}
        {...register(name, { onChange: onClick })}
      />
      <LabelRadio>
        <div>
          <span>{label}</span>
          <p>{price.toLocaleString("en-US")}</p>
        </div>
        <IconRadio>
          <MdCheck />
        </IconRadio>
      </LabelRadio>
    </label>
  )
}

export default FormRadioButton
