let score = 0; /* המשתנה של הציון */
let hearts = 3; /* המשתנה של הלבבות */
let arrLightBtn =
  document.getElementsByClassName("btns"); /* המערך של הכפתורים  */
let arrHeartImages = document.getElementsByClassName("heart");
let game;
function EndGame() {
  document.querySelector(".game-over").style.display = "flex";
  document.getElementById("btns-box").style.display = "none";

  // document.getElementsByClassName("btns-box")[0].style.display = "none";
}
// document.getElementsByClassName("btns-box")[0].style.display = "none";

// if (started !== true) {
//   hearts = 3;
// }

function startGame() {
  document.querySelector(".game-over").style.display = "none";
  document.getElementById("btns-box").style.display = "flex";
  debugger;
  let started = true;
  score = 0;
  hearts = 3;
  Array.from(arrHeartImages).forEach((heart) => {
    heart.style.display = "inline";
  });
  document.getElementById("score").innerText = score;
  document.getElementById("score").style.left = "230px";

  game = setInterval((btn) => {
    let RandomBtn = Math.floor(
      Math.random() * arrLightBtn.length
    ); /* בוחר כפור רנדומלי */
    lightTheBtn(arrLightBtn[RandomBtn]);
    setTimeout(() => {
      arrLightBtn[RandomBtn].style.backgroundColor = "";
    }, 850);
  }, 850);
  function lightTheBtn(btn) {
    /* מדליק את הכפתור, בודק אם הלבבות 0 גומר את המשחק */
    btn.style.backgroundColor = "red";
    if (hearts === 0) {
      // arrHeartImages.style.display = "none";
      console.log(game);
      clearInterval(game);
      EndGame();
      document
        .getElementById("start-game")
        .removeEventListener("click", startGame);
    }
  }
}

function onClick(event) {
  let btn = event.currentTarget;
  if (btn.style.backgroundColor === "red") {
    score++;
    document.getElementById("score").innerText = score;
    if (score > 9) {
      document.getElementById("score").style.left = "205px";
    }
  } else {
    hearts--;
    arrHeartImages[hearts].style.display = "none";
    if (hearts === 0) {
      clearInterval(game);
      EndGame();
    }
  }
}

Array.from(arrLightBtn).forEach((btn) => {
  btn.addEventListener("click", onClick);
});

document.getElementById("start-game").addEventListener("click", startGame);

// let pressedBtn = document.querySelectorAll(".btns");
