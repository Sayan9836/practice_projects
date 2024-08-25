const blocks = document.querySelectorAll(".field");

let choosedOption;
let userWins;
let botWins;

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const map = new Map();

map.set(1, [0, 0]);
map.set(2, [0, 1]);
map.set(3, [0, 2]);
map.set(4, [1, 0]);
map.set(5, [1, 1]);
map.set(6, [1, 2]);
map.set(7, [2, 0]);
map.set(8, [2, 1]);
map.set(9, [2, 2]);

const filledBlocks = [];
const AvailableBlocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rowNo;
let colNo;
blocks.forEach((block, index) => {
  block.onclick = () => {
    if (AvailableBlocks.includes(index + 1)) {
      block.textContent = choosedOption;
      filledBlocks.push(index + 1);
      const idxToRemove = AvailableBlocks.indexOf(index + 1);
      if (idxToRemove !== -1) {
        AvailableBlocks.splice(idxToRemove, 1);
      }

      BotsChanceToPlay();

      const [rowNo, colNo] = getRowAndColumnNo(index + 1);
      handleWinningLogic(rowNo, colNo);
    }
  };
});

const handleUserSelection = (option) => {
  choosedOption = option;
  console.log(choosedOption);
};

const handleWinningLogic = (rowNo, colNo) => {
  // for rows

  for (let i = 0; i < matrix.length; i++) {
    const nextColNo = matrix[rowNo][i];
    const content = document.querySelectorAll(".field")[nextColNo - 1].value;
    if (content !== choosedOption) {
      userWins = false;
    }
  }

  if (userWins !== false) {
    userWins = true;
    return;
  }

  // cols

  for (let i = 0; i < matrix.length; i++) {
    const nextColNo = matrix[i][colNo];
    const content = document.querySelectorAll(".field")[nextColNo - 1].value;
    if (content !== choosedOption) {
      userWins = false;
    }
  }

  if (userWins !== false) {
    userWins = true;
    return;
  }
};

const BotsChanceToPlay = () => {
  const idx = Math.floor(Math.random() * AvailableBlocks.length); // bug
  const blockToChoose = AvailableBlocks[idx];
  blocks[blockToChoose].textContent = choosedOption;
  handleWinningLogic();
};

const getRowAndColumnNo = (blockNo) => {
  return map.get(blockNo);
};
