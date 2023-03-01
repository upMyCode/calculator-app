import styled from 'styled-components';

const HistoryBlock = styled.div`
  width: 283.125px;
  height: 910px;
`;

const HistoryTitle = styled.p`
  width: 100%;
  text-align: center;
  font: normal 32px Helvetica Neue;
  color: #000000;
  @media (max-width: 1440px) {
    font-size: 24px;
  };
`;

const HistoryOperationList = styled.div`
  width: 100%;
  max-height: 827px;
  overflow-y: scroll;
`;

const HistoryOperationItem = styled.p`
  font: normal 30px Helvetica Neue;
  color: #000000;
  margin: 50px 0 50px 40.125px;
  @media (max-width: 1440px) {
    font-size: 22.5px;
  };
`;

export {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
};