export const addAccuracyForExpression = (expr, accuracy) => {
  let strBeforePeriod = ''
  let strAfterPeriod = ''
  let periodIndex = 0
  let resultExpr = ''

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '.') periodIndex = i
  }

  if (periodIndex === 0) return expr

  for (let j = 0; j < periodIndex; j++) strBeforePeriod += expr[j]
  for (let x = periodIndex + 1; x < expr.length; x++) strAfterPeriod += expr[x]

  strAfterPeriod = strAfterPeriod.slice(0, accuracy)

  resultExpr = `${strBeforePeriod}.${strAfterPeriod}`

  return resultExpr
}
