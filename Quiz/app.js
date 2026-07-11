let locked = false;

const file = () => {
  return fetch("c.json").then((res) => res.json());
};

function declare(isRight) {
  const ele = document.querySelector(".result");

  if (isRight) {
    ele.textContent = "CORRECT!";
    ele.style.color = "green";
  } else {
    ele.textContent = "WRONG!";
    ele.style.color = "red";
  }

  setTimeout(() => {
    ele.textContent = "";
  }, 1500);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const pick = (table) => table[Math.floor(Math.random() * table.length)];

function main() {
  file().then((c) => {
    let cou = pick(c);
    c.splice(c.indexOf(cou), 1);

    let country = cou["country"];
    let capital = cou["capital"];

    let randoms = [];

    for (let i = 0; i < 3; i++) {
      let randomThing = pick(c);
      randoms.push(randomThing);
      c.splice(c.indexOf(randomThing), 1);
    }

    randoms.push(cou);
    shuffle(randoms);

    const quesLbl = document.querySelector(".ques");
    quesLbl.textContent = `What is the capital of ${country}?`;

    const options = document.querySelectorAll(".lbl");
    const buttons = document.querySelectorAll(".choice");

    options.forEach((el, index) => {
      el.textContent = randoms[index]["capital"];
    });

    buttons.forEach((el, index) => {
      // IMPORTANT: prevent stacking listeners
      el.replaceWith(el.cloneNode(true));
    });

    const newButtons = document.querySelectorAll(".choice");

    newButtons.forEach((el, index) => {
      el.addEventListener("click", () => {
        if (locked) return;
        locked = true;

        const isCorrect = options[index].textContent === capital;

        if (isCorrect) {
          console.log("CORRECT!");
          declare(true);
          el.style.border = "3px solid green";

          setTimeout(() => {
            el.style.border = "none";
            locked = false;
            main();
          }, 1500);
        } else {
          console.log("WRONG!");
          declare(false);
          el.style.border = "3px solid red";

          newButtons.forEach((btn, i) => {
            if (options[i].textContent === capital) {
              btn.style.border = "3px solid green";
            }
          });

          setTimeout(() => {
            newButtons.forEach((btn) => {
              btn.style.border = "none";
            });

            locked = false;
            main();
          }, 1500);
        }
      });
    });
  });
}

main();
