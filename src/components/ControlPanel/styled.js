import styled from 'styled-components'

const ControlPanelBlock = styled.div`
  cursor: pointer;
  width: 411.5px;
  margin-top: 23.5px;
  border-left: 2px solid #707070;
  border-radius: 0 10px 10px 0;
  &: hover {
    background-color: ${(props) =>
      props.theme.globalThemeColor === 'Light theme' ? '#f0f0f0;' : '#242424;'};
  }
`

export { ControlPanelBlock }
