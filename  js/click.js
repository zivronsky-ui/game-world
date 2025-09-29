let score = 0; /* המשתנה של הציון */
let hearts = 3; /* המשתנה של הלבבות */
let arrLightBtn =
  document.getElementsByClassName("btns"); /* המערך של הכפתורים  */
function onClick(event) {
  let btn = event.currentTarget;
  if (btn.style.backgroundColor === "red") {
    score++;
  } else {
    hearts--;
  }
}
Array.from(arrLightBtn).forEach((btn) => {
  btn.addEventListener("click", onClick);
});
function lightTheBtn(btn) {
  /* מדליק את הכפתור, בודק אם הלבבות 0 גומר את המשחק */
  btn.style.backgroundColor = "red";
  if (hearts === 0) {
    clearInterval(game);
    alert("Game Over! Your score is: " + score);
  }
}

let game = setInterval((btn) => {
  let RandomBtn = Math.floor(
    Math.random() * arrLightBtn.length
  ); /* בוחר כפור רנדומלי */
  lightTheBtn(arrLightBtn[RandomBtn]);
  setTimeout(() => {
    arrLightBtn[RandomBtn].style.backgroundColor = "";
  }, 750);
}, 750);

let pressedBtn = document.querySelectorAll(".btns");
