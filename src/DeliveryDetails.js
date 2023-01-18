import FormItem from "components/input/FormItem"
import { Flex } from "components/styles/Flex.styled"
import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const StyledDeliveryDetails = styled.div``

const StyledDeliveryDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 700;
    color: #ff8a00;
  }
`
const InputWrapper = styled.div``

const DeliveryDetails = (props) => {
  const { delivery, gatherDelivery, handleDelivery } = props

  return (
    <StyledDeliveryDetails>
      <form onSubmit={handleDelivery(gatherDelivery)}>
        <StyledDeliveryDetailsHeader>
          <h1>Delivery Details</h1>
          <div>
            <input type="checkbox" name="dropshipper" />
            <label htmlFor="dropshipper">Ship for dropshipper</label>
          </div>
        </StyledDeliveryDetailsHeader>
        <Flex direction="column" gutter="10">
          <FormItem register={delivery} name="name" label="Name" />
          <FormItem register={delivery} name="phoneNumber" label="Phone Number" />
        </Flex>
      </form>
    </StyledDeliveryDetails>
  )
}

export default DeliveryDetails
