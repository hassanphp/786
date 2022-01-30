import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
`

export const Column = styled.div`
  text-align: center;
  width: ${(props) => props.size / 12 * 100}vw;
`
