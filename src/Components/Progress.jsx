
import React from "react";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
    position:  fixed;
    width:  100%;
    height:  5px;
    z-index:  3;
    box-shadow: rgb(107 74 252 / 43%) 0px 4px 12px;
    background: radial-gradient(100% 137.92% at 0% 0%,rgb(136,70,245) 0%,rgb(108,74,252) 100%);
    background-size: 400% 400%;
    display: inline-block;
    // animation: ${rotate} 2s linear infinite;
    // font-size: 1.2rem;
`;

const ProgressBar = ({ color, width }) => {
  return (
    <Container color={color} width={width}>
        
    </Container>
  );
};



export default ProgressBar;
