import { ArrowForwardIos } from "@mui/icons-material"
import React from "react"
import styled from "styled-components"

const StyledStepProgress = styled.div`
  background: #fffae6;
  display: flex;
  align-items: center;
  column-gap: 21px;
  > .stepProgress__wrapper {
    font-size: 16px;
    display: flex;
    align-items: center;
    .stepProgress__title {
      color: #ff8a00;
      padding-right: 22px;
    }
  }
`

const StyledStepProgressIcon = styled.div`
  background: ${(props) => (props.active ? "rgba(255, 138, 0, 1)" : "rgba(255, 138, 0, 0.2)")};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  line-height: 30px;
  margin-right: 10px;
  > .roundedRectangle {
    color: ${(props) => (props.active ? "#FFF" : "rgba(255, 138, 0, 1)")};
    text-align: center;
  }
`

const StepProgress = ({ item: stepItem, current }) => {
  return (
    <StyledStepProgress>
      {stepItem.map((item) => (
        <div className="stepProgress__wrapper">
          <StyledStepProgressIcon active={current === item.step}>
            <div className="roundedRectangle">{item.step}</div>
          </StyledStepProgressIcon>
          <div className="stepProgress__title">{item.title}</div>
          {item.step !== stepItem.length && <ArrowForwardIos htmlColor="#FF8A00" />}
        </div>
      ))}
    </StyledStepProgress>
  )
}

export default StepProgress
