let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("pastelThing");
      counter++;
    } else {
      secondSelection = card.getAttribute("PastelThing");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[pastelThing='" + firstSelection + "']"
        );

        correctCards[0].classList.add("right");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("right");
        correctCards[1].classList.remove("clicked");
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("wrong");
        incorrectCards[1].classList.add("wrong");

        setTimeout(() => {
          incorrectCards[0].classList.remove("wrong");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("wrong");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
});