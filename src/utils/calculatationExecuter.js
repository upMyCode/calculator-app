class Operation {
  constructor(appResultState) {
    this.appResultState = appResultState;
  }
//Default executor
  execute() {
    throw new Error("You didn't execute operation");
  }
};

class PlusOperation extends Operation {
  constructor(appResultState, value) {
    super(appResultState);
    this.value = value;
  }
  execute() {
    this.appResultState.result += this.value;
  }
};

class MinusOperation extends Operation {
  constructor(appResultState, value) {
    super(appResultState);
    this.value = value;
  }
  execute() {
    this.appResultState.result -= this.value;
  }
};

class MultiplicationOperation extends Operation {
  constructor(appResultState, value) {
    super(appResultState);
    this.value = value;
  }
  execute() {
    this.appResultState.result *= this.value;
  }
};

class DivisionOperation extends Operation {
  constructor(appResultState, value) {
    super(appResultState);
    this.value = value;
  }
  execute() {
    this.appResultState.result *= this.value;
  }
};

class appResultState {
  constructor() {
    this.result = 0;
  }
};

export {
  Operation,
  PlusOperation,
  MinusOperation,
  MultiplicationOperation,
  DivisionOperation,
  appResultState
};