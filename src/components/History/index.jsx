import React from 'react';
import {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
} from './styled';
import {useSelector} from 'react-redux';

const History = () => {
  const history = useSelector(state => state.historyReducer.operationHistory);

  return (
      <HistoryBlock>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryOperationList>
          {
            history.map((historyItem, id) => <HistoryOperationItem key={id}>{historyItem}</HistoryOperationItem>)
          }
        </HistoryOperationList>
      </HistoryBlock>
  );
};

export default History;
