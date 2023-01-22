import FormCheckbox from "components/input/FormCheckbox"
import FormInput from "components/input/FormInput"
import FormTextArea from "components/input/FormTextArea"
import React from "react"
import styled from "styled-components"
import { Flex } from "styles/Flex.styled"
import { DeliveryDetailsContainer } from "./Steps.styled"

const StyledDeliveryDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 700;
    color: #ff8a00;
  }
`

const DeliveryDetails = (props) => {
  const { deliveryForm, dataStep1, setDataStep1 } = props
  const {
    formState: { errors },
  } = deliveryForm

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked)
    setDataStep1({ ...dataStep1, tncDropshipper: e.target.checked })
  }

  return (
    <DeliveryDetailsContainer>
      <form>
        <StyledDeliveryDetailsHeader>
          <h1>Delivery Details</h1>
          <label>
            <FormCheckbox checked={dataStep1.tncDropshipper} onChange={handleCheckboxChange} />
            <span style={{ marginLeft: 8 }}>Send as dropshipper</span>
          </label>
        </StyledDeliveryDetailsHeader>
        <Flex gutter={{ x: 30 }}>
          <div className="leftForm">
            <FormInput
              form={deliveryForm}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email is not valid",
                },
              }}
              name="email"
              label="Email"
              placeholder="Email"
              validation={errors.email ? "false" : "true"}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
            <FormInput
              form={deliveryForm}
              rules={{
                required: "Phone number is required",
                pattern: {
                  // value: /^(\+62|62|0)12[1-9][0-9]{6,9}$/,
                  value: /^\+?\d{1,4}?[-]?\(?\d{1,3}?\)?[-]?\d{1,4}[-]?\d{1,4}[-]?\d{1,9}$/,
                  message: "Phone number is not valid",
                },
              }}
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              validation={errors.phoneNumber ? "false" : "true"}
            />
            {errors.phoneNumber && <p role="alert">{errors.phoneNumber.message}</p>}
            <FormTextArea
              form={deliveryForm}
              rules={{ required: "Address is required" }}
              name="address"
              maxLength={120}
              label="Delivery Address"
              placeholder="Delivery Address"
              validation={errors.address ? "false" : "true"}
            />
            {errors.address && <p role="alert">{errors.address.message}</p>}
          </div>
          <div className="rightForm">
            <FormInput
              type="text"
              disabled={!dataStep1.tncDropshipper}
              form={deliveryForm}
              rules={{
                required: dataStep1.tncDropshipper && "Dropshiper name is required",
              }}
              name="dropshipperName"
              label="Dropshipper name"
              placeholder="Dropshipper name"
            />
            {errors.dropshipperName && dataStep1.tncDropshipper && (
              <p role="alert">{errors.dropshipperName.message}</p>
            )}
            <FormInput
              form={deliveryForm}
              disabled={!dataStep1.tncDropshipper}
              rules={{
                required: dataStep1.tncDropshipper && "Dropshiper phone number is required",
              }}
              name="dropshipperPhoneNumber"
              label="Dropshipper phone number"
              placeholder="Dropshipper phone number"
            />
            {errors.dropshipperPhoneNumber && dataStep1.tncDropshipper && (
              <p role="alert">{errors.dropshipperPhoneNumber.message}</p>
            )}
          </div>
        </Flex>
      </form>
    </DeliveryDetailsContainer>
  )
}

export default DeliveryDetails
