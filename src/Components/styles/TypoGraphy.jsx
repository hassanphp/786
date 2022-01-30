import styled from 'styled-components'

export const TypoGraphy = styled.text`
font-size: ${({fontsize}) => fontsize};
color: ${({color}) => color};
font-weight: ${({fontWeight}) => fontWeight};
line-height: 54px;
}`