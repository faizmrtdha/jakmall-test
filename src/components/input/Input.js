import React from "react"

const Input = ({ label, required, deliveryDetails }) => {
  return (
    <>
      <label>{label}</label>
      <input {...deliveryDetails(label, { required })} />
    </>
  )
}

export default Input
