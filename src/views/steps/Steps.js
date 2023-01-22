import Button from "components/button/Button"
import StepProgress from "components/progress/StepProgress"
import { StyledStepProgress } from "components/progress/StepProgress.styled"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Column, Row } from "styles/Layout.Styled"
import { getStorage } from "utils/helper"
import DeliveryDetails from "./DeliveryDetails"
import FinishStep from "./FinishStep"
import PaymentDetails from "./PaymentDetails"
import { Container, StepContent, StepContentContainer } from "./Steps.styled"
import StepsSummary from "./StepsSummary"

const BackButton = (props) => {
  const { currentStep, setCurrentStep } = props
  if (currentStep === 2) return ""
  const onBack = () => {
    if (currentStep === 0) window.location.href = "https://jakmall.com/"
    else setCurrentStep(currentStep - 1)
  }
  return <Button onClick={onBack}>{currentStep === 0 ? "Back to cart" : "Back to delivery"}</Button>
}

const Steps = () => {
  const savedDelivery = JSON.parse(getStorage("formData"))
  const deliveryForm = useForm({
    defaultValues: {
      email: savedDelivery?.email,
      phoneNumber: savedDelivery?.phoneNumber,
      address: savedDelivery?.address,
      dropshipperName: savedDelivery?.dropshipperName,
      dropshipperPhoneNumber: savedDelivery?.dropshipperPhoneNumber,
    },
  })
  const shipmentForm = useForm({ mode: "onChange" })
  const [currentStep, setCurrentStep] = useState(0)
  const [dataStep1, setDataStep1] = useState({ tncDropshipper: false })
  const [dataStep2, setDataStep2] = useState({ shipment: false, payment: false })
  const [finalPrice, setFinalPrice] = useState(false)

  const gatherFormData = (form, callback) => {
    form((d) => console.log(d))
  }

  const gatherDelivery = (data) => {
    console.log(data)
    setCurrentStep(currentStep + 1)
  }

  const gatherShipment = (data) => {
    console.log(data)
    setCurrentStep(currentStep + 1)
  }

  const forms = { deliveryForm, shipmentForm }
  const states = { dataStep1, setDataStep1, dataStep2, setDataStep2 }
  const props = {
    ...forms,
    ...states,
    gatherDelivery,
    gatherShipment,
    currentStep,
    finalPrice,
    setFinalPrice,
    setCurrentStep,
  }

  const stepItem = [
    { title: "Delivery", step: 0, content: <DeliveryDetails {...props} /> },
    { title: "Payment", step: 1, content: <PaymentDetails {...props} /> },
    { title: "Finish", step: 2, content: <FinishStep /> },
  ]

  return (
    <Container>
      <StyledStepProgress>
        <StepProgress item={stepItem} current={currentStep} />
      </StyledStepProgress>
      <StepContentContainer>
        <Row>
          <Column lg="8">
            <BackButton {...props} />
            <StepContent>{stepItem[currentStep].content}</StepContent>
          </Column>
          <Column lg="4">
            <StepsSummary {...props} />
          </Column>
        </Row>
      </StepContentContainer>
    </Container>
  )
}

export default Steps
