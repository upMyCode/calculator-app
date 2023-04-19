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
  border: 1px solid #000000;
  border-radius: 6px;
  margin-left: 30px;
  color: #000000;
  cursor: pointer;
  margin-top: 8px;
  &:hover { 
    color: #8a8a8a;
    border-color: #8a8a8a;
  };
}
`
export { ErrorMessage, ErrorBlock, ErrorResetter }
