import FormRadioButton from "components/input/FormRadioButton"
import React from "react"
import { getStorage, setStorage } from "utils/helper"
import { PaymentDetailsContainer, SelectorWrapper, ShipmentSelectorWrapper } from "./Steps.styled"

const listShipment = [
  { label: "GO-SEND", price: 15000 },
  { label: "JNE", price: 9000 },
  { label: "Personal Courier", price: 29000 },
]

const listPayment = [
  { label: "e-Wallet", price: "1,500,000 left" },
  { label: "Bank Transfer", price: 1500000 },
  { label: "Virtual Account", price: 1500000 },
]

const PaymentDetails = (props) => {
  const { dataStep2, setDataStep2, shipmentForm } = props
  const formData = JSON.parse(getStorage("formData"))

  const onClickShipment = ({ target: { value } }) => {
    const shipment = listShipment.find((item) => item.label === value)
    setDataStep2({ ...dataStep2, shipment })
    setStorage("formData", JSON.stringify({ ...formData, shipment }))
  }

  const onClickPayment = ({ target: { value } }) => {
    const payment = listPayment.find((item) => item.label === value)
    setDataStep2({ ...dataStep2, payment })
    setStorage("formData", JSON.stringify({ ...formData, payment }))
  }

  return (
    <PaymentDetailsContainer>
      <form>
        <h1>Shipment</h1>
        <SelectorWrapper>
          {listShipment.map((shipmentItem) => (
            <FormRadioButton
              form={shipmentForm}
              name="shipment"
              key={shipmentItem.label}
              onClick={onClickShipment}
              selected={dataStep2.shipment}
              {...shipmentItem}
            />
          ))}
        </SelectorWrapper>
        <h1>Payment</h1>
        <SelectorWrapper>
          {listPayment.map((paymentItem) => (
            <FormRadioButton
              form={shipmentForm}
              name="payment"
              key={paymentItem.label}
              onClick={onClickPayment}
              selected={dataStep2.payment}
              {...paymentItem}
            />
          ))}
        </SelectorWrapper>
      </form>
    </PaymentDetailsContainer>
  )
}

export default PaymentDetails
