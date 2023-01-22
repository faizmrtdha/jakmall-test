import styled from "styled-components"

export const TextLabel = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`
export const TextValue = styled.div`
  display: inline;
  font-size: 14;
  line-height: 17px;
  font-weight: 700;
`

export const SummaryTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const TotalDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`

export const TotalLabel = styled.div`
  color: #ff8a00;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;

  & + ${TextValue} {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: #ff8a00;
  }
`

export const ContainerSummary = styled.div`
  padding: 20px 0 20px 30px;
  height: 500px;

  .summaryTitle {
    color: #ff8a00;
  }
  .summaryDesc {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    background: #ff8a00;
    border: 0;
    box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
    border-radius: 2px;
    font-size: 14px;
    text-align: center;
    font-family: inherit;
    cursor: pointer;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    background-image: none;
    user-select: none;
    touch-action: manipulation;
    height: auto;
    padding: 20px 39px 18px 40px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    width: 100%;
    margin-top: 18px;
  }
`

export const SummaryBody = styled.div`
  width: 100%;
`

export const SummaryFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`
export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-left: 1px solid rgba(255, 138, 0, 0.2);
  padding: 15px 20px 0 19px;
`
