/* Algorithmes */

/*
1 - Player and user chooses (they have 5 seconds) false
2 - The choosing one will display at the same time  false
3 - The chosen items will give a point to the winner; if both choose the same item, it's a draw.
4 - first to reach 3 points win and a winning display appear with restart
*/

// Lets start:

const aiBtns = document.querySelectorAll(".aibtn");
const userBtns = document.querySelectorAll(".userbtn");
const ids = Array.from(aiBtns).map((el) => el.id);

const aiContainer = document.getElementById("chosai");
const userContainer = document.getElementById("chosuser");

const randomAi = () => ids[Math.floor(Math.random() * ids.length)];
const label = document.querySelector(".Ah");
// Reusable function to display icon
function Won(ai, user, amount = 3) {
  if (ai != amount && user != amount) return false;
  if (ai == amount) {
    declareWinner("Ai wins the round!!!");
  } else if (user == amount) {
    declareWinner("You won the round!!!");
  }
  return true;
}
function declareWinner(text) {
  label.textContent = text;
  setTimeout(() => {
    label.textContent = "";
  }, 1700);
}

function displayChoice(container, originalElement) {
  container.innerHTML = ""; // Clear previous choice

  const el = document.createElement("i");
  el.classList.add(...Array.from(originalElement.classList));
  container.append(el);

  // Animation
  el.classList.add("animate");
  setTimeout(() => el.classList.remove("animate"), 250);
}
function add(element) {
  if (!element) return;

  let currentScore = Number(element.textContent) || 0;
  currentScore++;
  element.textContent = currentScore;
}
function addPoint(userWon) {
  const userRes = document.getElementById("userRes");
  const aiRes = document.getElementById("aiRes");
  let pointTo = userWon ? "user" : "ai";
  if (pointTo == "user") {
    add(userRes);
  } else {
    add(aiRes);
  }
}
// User click handler
let clicked = false;

userBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (clicked) return;

    const userChoice = btn.id;
    console.log(`User clicked: ${userChoice}`);

    // Display user choice
    const userIcon = document.getElementById(`${userChoice}1`);
    if (userIcon) {
      displayChoice(userContainer, userIcon);
    }

    // Play round
    playRound(userChoice);

    clicked = true;
    setTimeout(() => {
      clicked = false;
    }, 3000);
  });
});

// Game logic
function playRound(userChoice) {
  const aiChoice = randomAi();
  console.log(`AI chose: ${aiChoice}`);

  const aiIcon = document.getElementById(`${aiChoice}1`);
  if (aiIcon) {
    const blah = document.getElementById("randomP");
    aiContainer.innerHTML = "";
    function toggle() {
      blah.textContent = "Choosing...";
      setTimeout(() => {
        blah.textContent = "";
      }, 500);
    }
    toggle();
    setTimeout(() => {
      displayChoice(aiContainer, aiIcon);
    }, 500);
  }

  //  Add win/lose logic here: DONE
  beats = {
    paper: "rock",
    rock: "scissor",
    scissor: "paper",
  };
  // Draw
  if (userChoice === aiChoice) {
    setTimeout(() => {
      console.log("Draw!");
      declareWinner("Draw!");
    }, 1400);
  }

  // User Wins
  else if (beats[userChoice] === aiChoice) {
    setTimeout(() => {
      addPoint(true);
      console.log("User wins! 🎉");
      declareWinner("You won! 🎉");

      // Check for winner
      let aiScore = Number(document.getElementById("aiRes").textContent);
      let userScore = Number(document.getElementById("userRes").textContent);

      let result = Won(aiScore, userScore);

      console.log(
        "Won() returned:",
        result,
        "| AI:",
        aiScore,
        "| User:",
        userScore,
      );

      if (result) {
        console.log("✅ Round ended - Resetting in 2s...");
        setTimeout(() => {
          resetGame();
        }, 2000);
      }
    }, 1400);
  }

  // AI Wins
  else if (beats[aiChoice] === userChoice) {
    setTimeout(() => {
      addPoint(false);
      console.log("AI wins! 🤖");
      declareWinner("Ai wins! 🤖");

      // Check for winner
      let aiScore = Number(document.getElementById("aiRes").textContent);
      let userScore = Number(document.getElementById("userRes").textContent);

      let result = Won(aiScore, userScore);

      if (result) {
        console.log("✅ Round ended - Resetting in 2s...");
        setTimeout(() => {
          resetGame();
        }, 2000);
      }
    }, 1400);
  }
}

function resetGame() {
  console.log("RESETED!"); // Keep this for testing

  // Reset scores
  document.getElementById("userRes").textContent = "0";
  document.getElementById("aiRes").textContent = "0";

  // Clear choices
  userContainer.innerHTML = "";
  aiContainer.innerHTML = "";

  // Reset click blocker
  clicked = false;

  // Optional: clear any message
  if (label) label.textContent = "";

  console.log("Game fully reset ✅");
}
