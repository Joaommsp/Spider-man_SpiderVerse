let controller = document.querySelectorAll(".s-controller__button");
let cards = document.querySelectorAll(".s-card");

controller.forEach((btn) => {
  btn.addEventListener("click", () => {

    selectCarouselitem(btn);

    if (btn.id == 3) {
      let move = setInterval(() => {
        cards[0].classList.add("card-botton");
        cards[3].classList.remove("card-botton");
        console.log("wefwef");
        clearInterval(move);
      }, 200);
    }
    if (btn.id == 1) {
     let move = setInterval(() => {
      cards[0].classList.remove("card-botton");
      cards[3].classList.add("card-botton");
      clearInterval(move)
     }, 200);
    }
    if (btn.id == 4) {
      cards[0].classList.add("card-botton");
      cards[3].classList.remove("card-botton");
    }
    if (btn.id == 2) {
      let move = setInterval(() => {
        cards[0].classList.remove("card-botton");
        cards[3].classList.add("card-botton");
        clearInterval(move)
      }, 200);
    }
  });
});

function selectCarouselitem(selectedBtnElement) {
  const selectedItem = selectedBtnElement.id;

  const carousel = document.querySelector(".s-cards-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYdeg = -120 * (Number(selectedItem) - 1);
  const newTrasform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYdeg}deg)`
  );

  carousel.style.transform = newTrasform;

  const selectedBtn = document.querySelector('.s-controller__button--active')
  selectedBtn.classList.remove('s-controller__button--active')
  selectedBtnElement.classList.add('s-controller__button--active')
}
