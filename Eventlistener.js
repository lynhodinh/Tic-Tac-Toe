// const noughts = document.querySelector
// const crosses = document.querySelector

const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("button");
const words = document.querySelector(".words");

let currentPlayer = "O";

const toggle = () => {
  if (currentPlayer === "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (!box.innerHTML) {
      box.innerHTML = `<h1>${currentPlayer}</h1>`;
      let id = event.target.id;
      let clickedIndex = id[0];
      toggle();
      checkForWin(clickedIndex);
    }
  });
});

const resetBoard = () => {
  boxes.forEach((box) => {
    box.textContent = "";
  });
  resetHighlight();
  currentPlayer = "O";
  win = null;
};

reset.addEventListener("click", resetBoard);

const checkForWin = (id) => {
  const game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  console.log(`${id}`);
  switch (id) {
    case 0:
      game[0][0] = currentPlayer;
      break;
    case 1:
      game[0][1] = currentPlayer;
      break;
    case 2:
      game[0][2] = currentPlayer;
      break;
    default:
      break;
  }

  for (let i = 0; i < 3; i++) {
    if (
      game[i][0] !== "" &&
      game[i][0] === game[i][1] &&
      game[i][1] === game[i][2]
    ) {
      declareWinner();
      return true;
    }
    if (
      game[0][i] !== "" &&
      game[0][i] === game[1][i] &&
      game[1][i] === game[2][i]
    ) {
      declareWinner();
      return true;
    }
    if (
      game[0][0] !== "" &&
      game[0][0] === game[1][1] &&
      game[1][1] === game[2][2]
    ) {
      declareWinner();
      return true;
    }
    if (
      game[0][2] !== "" &&
      game[0][2] === game[1][1] &&
      game[1][1] === game[2][0]
    ) {
      declareWinner();
      return true;
    }
  }
};

const declareWinner = (currentPlayer) => {
  words.innerHTML = `<h2>${currentPlayer} wins!<h2>`;
  highlight();
};

const highlight = () => {
  if (win) {
    for (let i = 0; i < 3; i++) {
      let id = `${winCode[i]}`;
      const el = document.getElementById(id);
      el.style.background = "lightcyan";
    }
  }
};

const resetHighlight = () => {
  boxes.forEach((box) => {
    box.style.background = "white";
  });
};
