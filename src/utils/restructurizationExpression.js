export const restructurizationExpression = (expr) => {
  const schema =  /\d+\-\d+|\d+\+\d+|[(]{1,}\d[)]{1,}|\(+\-\d\)+]|\d+\-|\d+\-|\d+\/|\d+\*}/g;
  const result = expr.match(schema);
  console.log(result)
  return result
};

