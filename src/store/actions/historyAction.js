const historyAction = (historyItem) => {
  return {
    type: "SET_HISTORY",
    payload: historyItem
  }
};

export default historyAction;