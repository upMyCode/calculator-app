import {
  PlusOperation,
  MinusOperation,
  MultiplicationOperation,
  DivisionOperation,
  appResultState
} from './mathOperationExecuterHelper';

export const mathExecuterHelper = () => {
  const math = getMathFn();

  return applyMath;

  function applyMath(math_str) {
    throwUnmatchedScopes(math_str);

    math_str = deepRemoveScopes(math_str);
    math_str = autoCorrect(math_str);

    let result = parseLinearMath(math_str);
    appResultState.setMathResult(result);
  }

  function deepRemoveScopes(str) {
    str = autoCorrect(str);

    let index = str.indexOf("(");
    if( index === -1 ) return parseLinearMath(str);

    let scope = "(";
    let open = 1;

    for( let i = index + 1; i <= 100000; i++ ) {
      if( i === 100000 ) console.log("Кажется пошел бесконечный цикл");

      scope += str[i];

      if( str[i] === "(" ) {
        open++;
      } else if( str[i] === ")" ) {
        open--;
      }

      if( open === 0 ) {
        return deepRemoveScopes( str.replace(scope, deepRemoveScopes( scope.slice(1, -1) ) ) );
      }
    }
  }

  function parseLinearMath(math_str) {
    math_str = autoCorrect(math_str);
    math_str = mul_div(math_str);
    math_str = plus_minus(math_str);

    return math_str;

    function mul_div(math_str) {
      let length = (math_str.match(/\/|\*/g) || []).length;
      if (!length) return math_str;

      for (let i = 0; i < length; i++) {
        math_str = math_str.replace(
            /(\d+(?:\.\d+)?)(\/|\*)(-?\d+(?:\.\d+)?)/,
            function(_, a, oper, b) {
              return math(a, oper, b);
            }
        );

        math_str = autoCorrect(math_str);
      }

      return math_str;
    }

    function plus_minus(math_str) {
      let length = (math_str.match(/\+|-/g) || []).length;
      if (!length) return math_str;

      for (let i = 0; i < length; i++) {
        math_str = math_str.replace(
            /((?:^-)?\d+(?:\.\d+)?)(\+|-)(\d+(?:\.\d+)?)/,
            function(_, a, oper, b) {
              return math(a, oper, b);
            }
        );

        math_str = autoCorrect(math_str);
      }

      return math_str;
    }
  }

  function autoCorrect(math_str) {
    return (math_str
            .replace(/\s/g, "")
            .replace(/\(\)/g, "")
            .replace(/--/g, "+")
            .replace(/(\+\+|\*\*|\/\/)/g, (_, oper) => oper[0])
            .replace(/\+-|-\+/g, "-")
            .replace(/\)\(/g, ")*(")
            .replace(/(\d)\(/g, "$1*(")
            .replace(/\)(\d)/g, ")*$1")
            .replace(/(\/|\*)\+/g, "$1")
    );
  }

  function throwUnmatchedScopes(math_str) {
    let scopes_open = (math_str.match(/\(/g) || []).length;
    let scopes_close = (math_str.match(/\)/g) || []).length;

    if (scopes_open !== scopes_close) {
      throw new Error("Unmatched parenthesis at " + math_str);
    }
  }

  function getMathFn() {
    let local_math = {
      "+": (a, b) => {
        const state = new appResultState();
        const plusOperation = new PlusOperation(state, Number(a), Number(b));
        let result = 0;

        plusOperation.execute();
        result = state.intermediateResult;
        state.resetIntermediateResult();

        return result;
      },
      "-": (a, b) => {
        const state = new appResultState();
        const minusOperation = new MinusOperation(state, Number(a), Number(b));
        let result = 0;

        minusOperation.execute();
        result = state.intermediateResult;
        state.resetIntermediateResult();

        return result;
      },
      "*": (a, b) => {
        const state = new appResultState();
        const multOperation = new MultiplicationOperation(state, Number(a), Number(b));
        let result = 0;

        multOperation.execute();
        result = state.intermediateResult;
        state.resetIntermediateResult();

        return result;
      },
      "/": (a, b) => {
        const state = new appResultState();
        const divOperation = new DivisionOperation(state, Number(a), Number(b));
        let result = 0;

        divOperation.execute();
        result = state.intermediateResult;
        state.resetIntermediateResult();

        return result
      },
    };

    return function math(a, operation, b) {
      return local_math[operation](a, b);
    }
  }
};

