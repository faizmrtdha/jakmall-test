import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  height: 100vh;
  padding-inline: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StepContent = styled.div`
  position: relative;

  &:has(.finishContainer) {
    height: 100%;
    .finishContainer {
      margin: auto;
      height: 100%;
    }
  }
`

export const Divider = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #d8d8d8;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  clear: both;
  width: 80px;
  margin: 21px 0;
`

export const StepContentContainer = styled.div`
  padding: 30px 0 0 50px;
  background-color: #fff;
  width: 100%;
  p[role="alert"] {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
  }
`

export const DeliveryDetailsContainer = styled.div`
  margin-top: 24px;
  .leftForm {
    width: 400px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  .rightForm {
    width: 300px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const PaymentDetailsContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`
export const HeaderPaymentSection = styled.div`
  margin-bottom: 30px;
  h1 {
    font-weight: 700;
    color: #ff8a00;
  }
`

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
`

export const FinishContainter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 324px;

  .homepageButton {
    align-self: flex-start;
  }
`

export const HeaderSection = styled.div`
  margin-bottom: 26px;
  h1 {
    color: #ff8a00;
  }
`

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 60px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    &.desc {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`
