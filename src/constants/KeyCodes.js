//The operators list needs for handleKeyPressed function for defining operator on display
const operators = ["*", "+", "-", "/", "%", "(", ")"];
//The digits list needs for handleKeyPressed function for defining digit on display
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//The usedKeyCodes list needs for handleKeyPressed function for defining all symbols and digits for calculation process
const usedKeyCodes = [
    49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 187,
    189, 8, 191, 13, 190, 96, 97, 98, 99, 100, 101,
    102, 103, 104, 105, 106, 107, 109, 110, 111,
];
//The keyCupsListOnTop list needs for displaying top buttons on Keypad component
const keyCupsListOnTop = [
  {
    label: "7",
    keyCode: 55
  },
  {
    label: "8",
    keyCode: 56
  },
  {
    label: "9",
    keyCode: 57
  },
  {
    label: "4",
    keyCode: 52
  },
  {
    label: "5",
    keyCode: 53
  },
  {
    label: "6",
    keyCode: 54
  },
  {
    label: "1",
    keyCode: 49
  },
  {
    label: "2",
    keyCode: 50
  },
  {
    label: "3",
    keyCode: 51
  },
  {
    label: "(",
    keyCode: 57
  },
  {
    label: "0",
    keyCode: 48
  },
  {
    label: ")",
    keyCode: 48
  }
];
//The keyCupsListOnLeftSide list needs for displaying left side buttons on Keypad component
const keyCupsListOnLeftSide = [
  {
    label: "C"
  },
  {
    label: "-",
    keyCode: 189
  },
  {
    label: "+",
    keyCode: 187
  },
  {
    label: ".",
    keyCode: 190
  }
];
//The keyCupsListOnRightSide list needs for displaying right side buttons on Keypad component
const keyCupsListOnRightSide = [
  {
    label: "*",
    keyCode: 56
  },
  {
    label: "/",
    keyCode: 191
  },
  {
    label: "=",
    keyCode: 13
  },
  {
    label: "CE",
    keyCode: 8
  }
];

export {
  operators,
  digits,
  usedKeyCodes,
  keyCupsListOnTop,
  keyCupsListOnLeftSide,
  keyCupsListOnRightSide
};
