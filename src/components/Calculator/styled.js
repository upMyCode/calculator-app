import styled from 'styled-components'

const CalculatorBlock = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#FFFFFF;' : '#161616;'};
  &:focus {
    outline: none;
  }
`

export { CalculatorBlock }
