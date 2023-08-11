const gameBoard = $("#input-div");
const pattern = [];

const startGame = (firstButton) => {
  pattern.push(parseInt(firstButton));
  console.log(...pattern);
  //after first push a new random number is selected and shown to the user
  pattern.push(randomInt());
  showPattern();
};

const showPattern = () => {
  let index = 0;

  if (index < pattern.length) {
    console.log(pattern[index]);
    //!TODO: working here to get 1 sec delay on logging out pattern with new value at the end
  }
};

const randomInt = () => Math.floor(Math.random() * 4) + 1;

gameBoard.click((e) => startGame(e.target.getAttribute("data")));
