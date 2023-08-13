const gameBoard = $("#input-div");
const pattern = [];

const startGame = (firstButton) => {
  if([pattern.length === 0]){
    pattern.push(parseInt(firstButton));
  }
  
  // console.log(...pattern);
  //after first push a new random number is selected and shown to the user
  pattern.push(randomInt());
  setTimeout(showPattern,1000);
};

const showPattern = (arrIndex = 0) => {
  if (arrIndex < pattern.length) {
    console.log(pattern[arrIndex]);
    setTimeout(() => {
      showPattern(arrIndex + 1);
    },1000)
  
};
};

const randomInt = () => Math.floor(Math.random() * 4) + 1;

  gameBoard.click((e) => startGame(e.target.getAttribute("data")));


