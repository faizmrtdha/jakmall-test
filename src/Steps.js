import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import StepProgress from "./components/progress/StepProgress"
import DeliveryDetails from "./DeliveryDetails"
import FinishStep from "./FinishStep"
import PaymentDetails from "./PaymentDetails"

const StyledStepProgress = styled.div`
  padding: 20px 38px;
  width: 500px;
  border-radius: 35px;
  background: #fffae6;
  margin: auto;
`

const StyledStepContent = styled.div`
  background: #fff;
  margin-inline: 50px;
`

const StyledStepWrapper = styled.div`
  position: relative;
`

const Steps = () => {
  const { register: delivery, handleSubmit: handleDelivery } = useForm()
  const { register: payment, handleSubmit: handlePayment } = useForm()
  const [currentStep, setCurrentStep] = useState(0)
  const [dataStep1, setDataStep1] = useState(false)
  const [dataStep2, setDataStep2] = useState(false)

  const gatherDelivery = (data) => {
    console.log(data)
  }

  const forms = { delivery, payment, handleDelivery, handlePayment }
  const props = { ...forms, gatherDelivery }

  const stepItem = [
    { title: "Delivery", step: 0, content: <DeliveryDetails {...props} /> },
    { title: "Payment", step: 1, content: <PaymentDetails {...props} /> },
    { title: "Finish", step: 2, content: <FinishStep /> },
  ]

  return (
    <StyledStepWrapper>
      <StyledStepProgress>
        <StepProgress item={stepItem} current={currentStep} />
      </StyledStepProgress>
      <StyledStepContent>{stepItem[currentStep].content}</StyledStepContent>
    </StyledStepWrapper>
  )
}

export default Steps
