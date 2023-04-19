class Operation {
  constructor(appResultState) {
    this.appResultState = appResultState
  }
  // Default executor

  execute() {
    throw new Error("You didn't execute operation")
  }
}

class PlusOperation extends Operation {
  constructor(appResultState, firstValue, secondValue) {
    super(appResultState)
    this.firstValue = firstValue
    this.secondValue = secondValue
  }

  execute() {
    console.log(this.firstValue, this.secondValue)
    this.appResultState.intermediateResult = this.firstValue + this.secondValue
  }
}

class MinusOperation extends Operation {
  constructor(appResultState, firstValue, secondValue) {
    super(appResultState)
    this.firstValue = firstValue
    this.secondValue = secondValue
  }

  execute() {
    this.appResultState.intermediateResult = this.firstValue - this.secondValue
  }
}

class MultiplicationOperation extends Operation {
  constructor(appResultState, firstValue, secondValue) {
    super(appResultState)
    this.firstValue = firstValue
    this.secondValue = secondValue
  }

  execute() {
    this.appResultState.intermediateResult = this.firstValue * this.secondValue
  }
}

class DivisionOperation extends Operation {
  constructor(appResultState, firstValue, secondValue) {
    super(appResultState)
    this.firstValue = firstValue
    this.secondValue = secondValue
  }

  execute() {
    this.appResultState.intermediateResult = this.firstValue / this.secondValue
  }
}

class appResultState {
  constructor() {
    this.result = 0
    this.intermediateResult = 0
  }

  static getResult() {
    return this.result
  }

  static setMathResult(result) {
    this.result = result
  }

  resetIntermediateResult() {
    this.intermediateResult = 0
  }
}

export {
  Operation,
  PlusOperation,
  MinusOperation,
  MultiplicationOperation,
  DivisionOperation,
  appResultState
}
