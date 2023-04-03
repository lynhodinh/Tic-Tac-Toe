// const noughts = document.querySelector
// const crosses = document.querySelector

const boxes = document.querySelectorAll(".box");

boxes.forEach((element) => {
  element.onclick = (event) => {
    console.dir(event.target.innerText);
  };
});
