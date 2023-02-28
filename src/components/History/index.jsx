import React from 'react';
import {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
} from './styled';

const History = () => {
  return (
      <HistoryBlock>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryOperationList>
          <HistoryOperationItem>100 * 2</HistoryOperationItem>
          <HistoryOperationItem>200 + 450</HistoryOperationItem>
          <HistoryOperationItem>300 * 0.5</HistoryOperationItem>
          <HistoryOperationItem>900 / 3</HistoryOperationItem>
          <HistoryOperationItem>30 * 1</HistoryOperationItem>
          <HistoryOperationItem>30 / 1</HistoryOperationItem>
          <HistoryOperationItem>60 * 1.5</HistoryOperationItem>
          <HistoryOperationItem>90 * 10</HistoryOperationItem>
          <HistoryOperationItem>9 + 9</HistoryOperationItem>
          <HistoryOperationItem>90 * 10</HistoryOperationItem>
          <HistoryOperationItem>9 + 9</HistoryOperationItem>
        </HistoryOperationList>
      </HistoryBlock>
  );
};

export default History;
