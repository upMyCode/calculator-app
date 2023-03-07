import {restructurizationExpression} from "../../utils/restructurizationExpression";
import {
  Operation,
  PlusOperation,
  MinusOperation,
  MultiplicationOperation,
  DivisionOperation,
  appResultState
} from '../../utils/calculatationExecuter';
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
      const restrExpr = restructurizationExpression(action.payload);

      for (let i = 0; i < restrExpr.length;i++) {
        let operator = "";
        //Searching the operator
        for (let j = 0; j < restrExpr[0].length; j++) {
          switch(restrExpr[0][j]) {
            case "+": {
              operator = restrExpr[0][j];
              break;
            }
          }
        }
        console.log(operator)
        switch(operator) {
          case "+": {
            const appState = new appResultState();

            const schema = /\d+/g;
            const match = restrExpr[0].match(schema);

            for (let c = 0; c < match.length; c++) {
             const plusOperation = new PlusOperation(appState, Number(match[c]));
              plusOperation.execute();
            }
            console.log(appState.result);
            break;
          }
        }
      }
    }
    default: return state;
  }
}

export default resultReducer;