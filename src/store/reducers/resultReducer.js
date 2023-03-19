import { mathExecuterHelper } from "../../utils/mathExecuterHelper";
import { appResultState } from '../../utils/mathOperationExecuterHelper';

const initialState = {
  result: ""
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESULT": {
      const schema = /\d*/g;
      const allNumbersInExprList = action.payload.match(schema);
      const isOnlyOneNumber = allNumbersInExprList.length === 1 ? true : false;
      //To check the expression of a calculator on a single number in an expression
      if (isOnlyOneNumber) {
        return {
          result: allNumbersInExprList[0]
        }
      };
      //To execute math expression
      const applyMath = mathExecuterHelper();
      applyMath(action.payload);
      let result = appResultState.getResult();

      return {
        result
      }
    }
    default: return state;
  }
}

export default resultReducer;