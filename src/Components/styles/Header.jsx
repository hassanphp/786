import styled from 'styled-components'

export const TopHeaderLeft = styled.header`
    background-color: rgb(253, 253, 252);
    border-top: solid 1px #e5e5e5;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
`

export const TopHeaderRight = styled.header`
    background-color: rgb(253, 253, 252);
    border: solid 1px #e5e5e5;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
