import Button from "components/button/Button"
import React from "react"
import { BodySection, FinishContainter, HeaderSection } from "./Steps.styled"

const FinishStep = (props) => {
  const { dataStep2 } = props
  const randomOrderID = () => {
    const randomId = Math.random().toString(36).slice(2, 7).split("")
    let id = randomId
    const checkId = id.filter(
      (char) => char === "1" || char === "I" || char === "0" || char === "O"
    )
    if (checkId.length > 0) randomOrderID()
    else return id.join("").toUpperCase()
  }

  const onBackHomepage = () => window.location.replace("https://jakmall.com/")

  return (
    <FinishContainter className="finishContainer">
      <HeaderSection>
        <h1>Thank you</h1>
      </HeaderSection>
      <BodySection>
        <p className="order">Order ID : {randomOrderID()}</p>
        <p className="desc">
          Your order will be delivered{" "}
          {`${dataStep2.shipment.estimation} by ${dataStep2.shipment.label}`}
        </p>
      </BodySection>
      <Button className="homepageButton" onClick={onBackHomepage}>
        Go to homepage
      </Button>
    </FinishContainter>
  )
}

export default FinishStep
