import React, { useEffect } from "react"
import { Divider } from "./Steps.styled"
import {
  ContainerSummary,
  SummaryBody,
  SummaryFooter,
  SummaryTextWrapper,
  SummaryWrapper,
  TextLabel,
  TextValue,
  TotalDisplayWrapper,
  TotalLabel,
} from "./StepsSummary.styled"

const Action = (props) => {
  const { nextStep, currentStep, deliveryForm, shipmentForm } = props
  const { handleSubmit: handleDelivery } = deliveryForm
  const { handleSubmit: handleShipment } = shipmentForm

  const clickNext = () => {
    if (currentStep === 0) {
      handleDelivery(nextStep)()
    } else if (currentStep === 1) handleShipment(nextStep)()
  }

  return (
    <button type="submit" onClick={clickNext}>
      Continue to Payment
    </button>
  )
}

const SummaryText = ({ label, value }) => {
  return (
    <SummaryTextWrapper>
      <TextLabel>{label}</TextLabel>
      <TextValue>{value.toLocaleString("en-us")}</TextValue>
    </SummaryTextWrapper>
  )
}

const ShipmentText = ({ shipment, price }) => {
  return (
    <SummaryTextWrapper>
      <TextLabel>
        <TextValue>{shipment}</TextValue> shipment
      </TextLabel>
      <TextValue>{price.toLocaleString("en-US")}</TextValue>
    </SummaryTextWrapper>
  )
}

const TotalDisplay = (props) => {
  const { finalPrice } = props

  return (
    <TotalDisplayWrapper>
      <TotalLabel>Total</TotalLabel>
      <TextValue>{finalPrice.toLocaleString("en-US")}</TextValue>
    </TotalDisplayWrapper>
  )
}

const StepsSummary = (props) => {
  const { dataStep1, dataStep2, setFinalPrice, currentStep } = props

  useEffect(() => {
    const basePrice = 500000
    if (dataStep1.tncDropshipper) {
      const priceDrop = basePrice + 5900
      setFinalPrice(priceDrop)
      if (dataStep2.shipment) {
        const totalPrice = priceDrop + dataStep2.shipment.price
        setFinalPrice(totalPrice)
      }
    } else if (dataStep2.shipment) {
      const totalPrice = basePrice + dataStep2.shipment.price
      setFinalPrice(totalPrice)
    } else setFinalPrice(basePrice)
  }, [setFinalPrice, dataStep1.tncDropshipper, dataStep2.shipment])

  return (
    <ContainerSummary>
      <SummaryWrapper>
        <SummaryBody>
          <h2 className="summaryTitle">Summary</h2>
          <p className="summaryDesc">10 items purchased</p>
          {dataStep2.shipment && (
            <>
              <Divider />
              <div className="title">
                <p>Delivery estimation</p>
                <p className="description">
                  {dataStep2.shipment.estimation} by {dataStep2.shipment.label}
                </p>
              </div>
            </>
          )}
          {currentStep === 2 && dataStep2.payment && (
            <>
              <Divider />
              <div className="title">
                <p>Payment method</p>
                <p className="description">{dataStep2.payment.label}</p>
              </div>
            </>
          )}
        </SummaryBody>
        <SummaryFooter>
          <SummaryText label="Cost of goods" value={500000} />
          {dataStep1.tncDropshipper && <SummaryText label="Dropshipping Fee" value={5900} />}
          {dataStep2.shipment && (
            <ShipmentText shipment={dataStep2.shipment.label} price={dataStep2.shipment.price} />
          )}
          <TotalDisplay {...props} />
          <Action {...props} />
        </SummaryFooter>
      </SummaryWrapper>
    </ContainerSummary>
  )
}

export default StepsSummary
