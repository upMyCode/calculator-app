import {
  PlusOperation,
  MinusOperation,
  MultiplicationOperation,
  DivisionOperation,
  appResultState
} from './mathOperationExecuterHelper'

export const mathExecuterHelper = () => {
  const math = getMathFn()

  return applyMath

  function applyMath(mathStr) {
    const error = throwUnmatchedScopes(mathStr)

    if (error) {
      return error
    }

    mathStr = deepRemoveScopes(mathStr)
    mathStr = autoCorrect(mathStr)

    const result = parseLinearMath(mathStr)
    appResultState.setMathResult(result)
  }

  function deepRemoveScopes(str) {
    str = autoCorrect(str)

    const index = str.indexOf('(')
    if (index === -1) return parseLinearMath(str)

    let scope = '('
    let open = 1

    for (let i = index + 1; i <= 100000; i++) {
      if (i === 100000) console.log('Кажется пошел бесконечный цикл')

      scope += str[i]

      if (str[i] === '(') {
        open++
      } else if (str[i] === ')') {
        open--
      }

      if (open === 0) {
        return deepRemoveScopes(
          str.replace(scope, deepRemoveScopes(scope.slice(1, -1)))
        )
      }
    }
  }

  function parseLinearMath(mathStr) {
    mathStr = autoCorrect(mathStr)
    mathStr = mulDiv(mathStr)
    mathStr = plusMinus(mathStr)

    return mathStr

    function mulDiv(mathStr) {
      const length = (mathStr.match(/\/|\*/g) || []).length
      if (!length) return mathStr

      for (let i = 0; i < length; i++) {
        mathStr = mathStr.replace(
          /(\d+(?:\.\d+)?)(\/|\*)(-?\d+(?:\.\d+)?)/,
          function (_, a, oper, b) {
            return math(a, oper, b)
          }
        )

        mathStr = autoCorrect(mathStr)
      }

      return mathStr
    }

    function plusMinus(mathStr) {
      const length = (mathStr.match(/\+|-/g) || []).length
      if (!length) return mathStr

      for (let i = 0; i < length; i++) {
        mathStr = mathStr.replace(
          /((?:^-)?\d+(?:\.\d+)?)(\+|-)(\d+(?:\.\d+)?)/,
          function (_, a, oper, b) {
            return math(a, oper, b)
          }
        )

        mathStr = autoCorrect(mathStr)
      }

      return mathStr
    }
  }

  function autoCorrect(mathStr) {
    return mathStr
      .replace(/\s/g, '')
      .replace(/\(\)/g, '')
      .replace(/--/g, '+')
      .replace(/(\+\+|\*\*|\/\/)/g, (_, oper) => oper[0])
      .replace(/\+-|-\+/g, '-')
      .replace(/\)\(/g, ')*(')
      .replace(/(\d)\(/g, '$1*(')
      .replace(/\)(\d)/g, ')*$1')
      .replace(/(\/|\*)\+/g, '$1')
  }

  function throwUnmatchedScopes(mathStr) {
    const scopesOpen = (mathStr.match(/\(/g) || []).length
    const scopesClose = (mathStr.match(/\)/g) || []).length

    if (scopesOpen !== scopesClose) {
      return 'Parenthesis error'
    }
  }

  function getMathFn() {
    const localMath = {
      '+': (a, b) => {
        const state = new appResultState()
        const plusOperation = new PlusOperation(state, Number(a), Number(b))
        let result = 0

        plusOperation.execute()
        result = state.intermediateResult
        state.resetIntermediateResult()

        return result
      },
      '-': (a, b) => {
        const state = new appResultState()
        const minusOperation = new MinusOperation(state, Number(a), Number(b))
        let result = 0

        minusOperation.execute()
        result = state.intermediateResult
        state.resetIntermediateResult()

        return result
      },
      '*': (a, b) => {
        const state = new appResultState()
        const multOperation = new MultiplicationOperation(
          state,
          Number(a),
          Number(b)
        )
        let result = 0

        multOperation.execute()
        result = state.intermediateResult
        state.resetIntermediateResult()

        return result
      },
      '/': (a, b) => {
        const state = new appResultState()
        const divOperation = new DivisionOperation(state, Number(a), Number(b))
        let result = 0

        divOperation.execute()
        result = state.intermediateResult
        state.resetIntermediateResult()

        return result
      }
    }

    return function math(a, operation, b) {
      return localMath[operation](a, b)
    }
  }
}
