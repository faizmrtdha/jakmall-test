import FormRadioButton from "components/input/FormRadioButton"
import React from "react"
import { getStorage, setStorage } from "utils/helper"
import { HeaderPaymentSection, PaymentDetailsContainer, SelectorWrapper } from "./Steps.styled"

const listShipment = [
  { label: "GO-SEND", price: 15000, estimation: "today" },
  { label: "JNE", price: 9000, estimation: "2 days" },
  { label: "Personal Courier", price: 29000, estimation: "1 day" },
]

const listPayment = [
  { label: "e-Wallet", price: "1,500,000 left" },
  { label: "Bank Transfer" },
  { label: "Virtual Account" },
]

const PaymentDetails = (props) => {
  const { dataStep2, setDataStep2, shipmentForm } = props
  const {
    formState: { errors },
  } = shipmentForm
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
        <HeaderPaymentSection>
          <h1>Shipment</h1>
        </HeaderPaymentSection>
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
          {errors.shipment && <p role="alert">{errors.shipment.message}</p>}
        </SelectorWrapper>
        <HeaderPaymentSection>
          <h1>Payment</h1>
        </HeaderPaymentSection>
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
          {errors.payment && <p role="alert">{errors.payment.message}</p>}
        </SelectorWrapper>
      </form>
    </PaymentDetailsContainer>
  )
}

export default PaymentDetails
