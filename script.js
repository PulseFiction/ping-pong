const startBtn = document.querySelector(".start");

const validateNames = () => {
  const p1 = document.querySelector("#playerone").value;
  const p2 = document.querySelector("#playertwo").value;

  if (p1.length < 1 || p2.length < 1) {
    alert("Please enter a valid name");
  } else {
    startGame();
  }
};

const startGame = (playerOne, playerTwo) => {
  playerOne = document.querySelector("#playerone").value;
  playerTwo = document.querySelector("#playertwo").value;

  const players = document.createElement("div");
  players.classList.add("players");

  players.textContent = `${playerOne} vs ${playerTwo}`;

  const counter = document.createElement("div");
  counter.textContent = "Ready?";
  counter.classList.add("timer");

  const menu = document.querySelector(".menu");
  const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");

  labels.forEach((el) => (el.style.display = "none"));
  inputs.forEach((el) => (el.style.display = "none"));
  startBtn.style.display = "none";

  menu.appendChild(players);
  menu.appendChild(counter);

  startCountDown(3);
};

const startCountDown = (seconds) => {
  const ready = document.querySelector(".timer");
  let counter = seconds;

  const interval = setInterval(() => {
    if (counter === 0) {
      clearInterval(interval);
      ready.textContent = "Go!";
      ready.style.color = "Green";
      gameStart();
    } else {
      ready.textContent = counter;
      counter--;
    }
  }, 1000);
};

const gameStart = () => {
  console.log("Starting Game...");

  const playerOne = {
    paddle : document.querySelector(".paddleone"),

    movePaddleUp() {
      paddle.style.transform = `translateY(${(paddlePos -= 10)}px)`;
    },

    movePaddleDown() {
      paddle.style.transform = `translateY(${(paddlePos += 10)}px)`;
    }
  }

  const playerTwo = {
    paddle : document.querySelector(".paddletwo"),

    movePaddleUp() {
      paddle.style.transform = `translateY(${(paddlePos -= 10)}px)`;
    },

    movePaddleDown() {
      paddle.style.transform = `translateY(${(paddlePos += 10)}px)`;
    }
  }

  const controller = {
    'w' : {pressed: false, func: playerOne.movePaddleUp},
    's' : {pressed: false, func: playerOne.movePaddleDown},
    'ArrowUp' : {pressed: false, func: playerTwo.movePaddleUp},
    'ArrowDown' : {pressed: false, func: playerTwo.movePaddleDown}
  
  }
  
  document.addEventListener('keydown', (e) => {
    if (controller[e.key]) {
      controller[e.key].pressed = true;
      
    }
  })

  document.addEventListener('keyup', (e) => {
    if (controller[e.key]) {
      controller[e.key].pressed = false;
      
    }
  })
};


/*

const playerOneControl = () => {
  const paddle = document.querySelector(".paddleone");
  let position = paddle.getBoundingClientRect();
  let paddlePos = 0;

  console.log(position.y);

  window.addEventListener("keydown", (e) => {
    if (e.key === "w") {
      paddle.style.transform = `translateY(${(paddlePos -= 10)}px)`;
    } else if (e.key === "s") {
      paddle.style.transform = `translateY(${(paddlePos += 10)}px)`;
    }
  });
};

const playerTwoControl = () => {
  const paddle = document.querySelector(".paddletwo");
  let position = paddle.getBoundingClientRect();
  let paddlePos = 0;

  console.log(position.y);

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      paddle.style.transform = `translateY(${(paddlePos -= 10)}px)`;
    } else if (e.key === "ArrowDown") {
      paddle.style.transform = `translateY(${(paddlePos += 10)}px)`;
    }
  });
};

*/
















startBtn.addEventListener("click", validateNames);
