import styled from 'styled-components'

export const ButtonCss = styled.button`
width: ${({width}) => width};
-webkit-box-align: center; 
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border-radius: 9px;
box-shadow: rgb(107 74 252 / 43%) 0px 4px 12px;
background: radial-gradient(100% 137.92% at 0% 0%,rgb(136,70,245) 0%,rgb(108,74,252) 100%);
color: white;
outline: none;
border: 0px;
padding: 13px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  *:focus {
    outline: none;
}
`
