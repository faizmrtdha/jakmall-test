import React, { useState } from "react"
import StepProgress from "./components/progress/StepProgress"
import DeliveryDetails from "./DeliveryDetails"
import FinishStep from "./FinishStep"
import PaymentDetails from "./PaymentDetails"

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const stepItem = [
    { title: "Delivery", step: 1, content: <DeliveryDetails /> },
    { title: "Payment", step: 2, content: <PaymentDetails /> },
    { title: "Finish", step: 3, content: <FinishStep /> },
  ]

  return (
    <div className="steps__wrapper">
      <div className="stepProgress">
        {stepItem.map((item) => (
          <div className="stepProgress__wrapper">
            <div className="stepProgress__icon">{item.step}</div>
            <div className="stepProgress__icon">{item.content}</div>
          </div>
        ))}
      </div>
      <div className="stepContent">
        <div className="stepContent__wrapper">{stepItem[currentStep].content}</div>
      </div>
    </div>
  )
}

export default Steps
