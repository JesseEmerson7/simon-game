const gameBoard = $("#input-div");
const pattern = [];

const startGame = (firstButton) => {
  pattern.push(parseInt(firstButton));
  console.log(...pattern);
  showPattern();
};

const showPattern = () => {
  let randomInt = Math.floor(Math.random() * 4) + 1
  pattern.push(randomInt);
  
};

gameBoard.click((e) => startGame(e.target.getAttribute("data")));


