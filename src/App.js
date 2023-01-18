import React from "react"
import styled from "styled-components"
import Steps from "./Steps"

const StyledApp = styled.div`
  background: #fffae6;
  height: 100%;
  width: 100%;
  font-family: "Montserrat, Inter";
`

function App() {
  return (
    <StyledApp>
      <Steps />
    </StyledApp>
  )
}

export default App
