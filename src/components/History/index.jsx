import React from 'react'
import {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
} from './styled'
import { useSelector } from 'react-redux'

const History = () => {
  const history = useSelector((state) => state.historyReducer.operationHistory)

  return (
    <HistoryBlock>
      <HistoryTitle>History</HistoryTitle>
      <HistoryOperationList data-test-target="history-items-list">
        {history.map((historyItem, id) => (
          <HistoryOperationItem
            data-test-target={`history-item-${id}`}
            key={id}
          >
            {historyItem}
          </HistoryOperationItem>
        ))}
      </HistoryOperationList>
    </HistoryBlock>
  )
}

export default History
