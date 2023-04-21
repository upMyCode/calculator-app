import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: #de120b;
`
const ErrorBlock = styled.p`
  display: flex;
`
const ErrorResetter = styled.button`
  width: 45px;
  height: 45px;
  padding: 10px;
  border:${(props) =>
    props.theme.globalThemeColor === 'Light theme'
      ? '1px solid #000000'
      : '1px solid #FFFFFF'};
  border-radius: 6px;
  margin-left: 30px;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#FFFFFF;'};
  cursor: pointer;
  margin-top: 8px;
  &:hover { 
    color: #8a8a8a;
    border-color: #8a8a8a;
  };
}
`
export { ErrorMessage, ErrorBlock, ErrorResetter }
