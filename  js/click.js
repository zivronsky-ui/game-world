let score = 0; /* המשתנה של הציון */
let hearts = 3; /* המשתנה של הלבבות */
let arrLightBtn =
  document.getElementsByClassName("btns"); /* המערך של הכפתורים  */
let arrHeartImages = document.getElementsByClassName("heart");
let game;
let endGameSound = new Audio(
  "/home/zivronsky1/game-world-site-111/images/end-game-sound.mp3"
);
function EndGame() {
  document.querySelector(".game-over").style.display = "flex";
  document.getElementById("btns-box").style.display =
    "none"; /* GAME OVER פונקציה ששמה את    */
  endGameSound.play();
}

let time = 800;
let sound = new Audio("/home/zivronsky1/game-world-site-111/images/sound-.mp3");

function startGame() {
  document.querySelector(".game-over").style.display = "none";
  document.getElementById("btns-box").style.display = "flex";
  debugger;
  let started = true;
  score = 0;
  hearts = 3;
  time = 800;
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
    }, time);
  }, time);
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
    if (score > 3) {
      time = time - 50;
    }
    if (score > 6) {
      time = time - 50;
    }
    if (score > 9) {
      time = time - 50;
    }
    document.getElementById("score").innerText = score;
    if (score > 9) {
      document.getElementById("score").style.left = "205px";
    }
  } else {
    hearts--;
    arrHeartImages[hearts].style.display = "none";
    sound.play();
    // document.getElementById("error-sound").play();

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
