let Button1 = document.getElementById("button1");
let Button2 = document.getElementById("button2");
let Button3 = document.getElementById("button3");
let Button4 = document.getElementById("button4");
let Button5 = document.getElementById("button5");
let Button6 = document.getElementById("button6");

Button1.addEventListener("click", sound1);
Button2.addEventListener("click", sound2);
Button3.addEventListener("click", sound3);
Button4.addEventListener("click", sound4);
Button5.addEventListener("click", sound5);
Button6.addEventListener("click", sound6);

let firstAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-wild-lion-animal-roar-6.wav"
);
let secondAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-cartoon-quick-splat-2890.wav"
);
let thirdAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-retro-game-notification-212.wav"
);

let fourthAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-trumpets-and-strings-off-beat-2286.wav"
);

let fifthAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-sick-man-coughing-2221.wav"
);

let sixthAudio = new Audio(
  "/Users/michaelgalan/Desktop/SUMMER2022/SoundBoard/Sounds/mixkit-cartoon-kitty-begging-meow-92.wav"
);

let isOn = false;

function sound1() {
  if (firstAudio.paused) {
    firstAudio.play();

    secondAudio.pause();
    secondAudio.currentTime = 0;
    thirdAudio.pause();
    thirdAudio.currentTime = 0;
    fourthAudio.pause();
    fourthAudio.currentTime = 0;
    fifthAudio.pause();
    fifthAudio.currentTime = 0;
    sixthAudio.pause();
    sixthAudio.currentTime = 0;
  } else {
    firstAudio.currentTime = 0;
  }
}

function sound2() {
  if (secondAudio.paused) {
    secondAudio.play();

    firstAudio.pause();
    firstAudio.currentTime = 0;
    thirdAudio.pause();
    thirdAudio.currentTime = 0;
    fourthAudio.pause();
    fourthAudio.currentTime = 0;
    fifthAudio.pause();
    fifthAudio.currentTime = 0;
    sixthAudio.pause();
    sixthAudio.currentTime = 0;
  } else {
    secondAudio.currentTime = 0;
  }
}

function sound3() {
  if (thirdAudio.paused) {
    thirdAudio.play();

    secondAudio.pause();
    secondAudio.currentTime = 0;
    firstAudio.pause();
    firstAudio.currentTime = 0;
    fourthAudio.pause();
    fourthAudio.currentTime = 0;
    fifthAudio.pause();
    fifthAudio.currentTime = 0;
    sixthAudio.pause();
    sixthAudio.currentTime = 0;
  } else {
    thirdAudio.currentTime = 0;
  }
}

function sound4() {
  if (fourthAudio.paused) {
    fourthAudio.play();
    secondAudio.pause();
    secondAudio.currentTime = 0;
    thirdAudio.pause();
    thirdAudio.currentTime = 0;
    firstAudio.pause();
    firstAudio.currentTime = 0;
    fifthAudio.pause();
    fifthAudio.currentTime = 0;
    sixthAudio.pause();
    sixthAudio.currentTime = 0;
  } else {
    fourthAudio.currentTime = 0;
  }
}

function sound5() {
  if (fifthAudio.paused) {
    fifthAudio.play();

    secondAudio.pause();
    secondAudio.currentTime = 0;
    thirdAudio.pause();
    thirdAudio.currentTime = 0;
    fourthAudio.pause();
    fourthAudio.currentTime = 0;
    firstAudio.pause();
    firstAudio.currentTime = 0;
    sixthAudio.pause();
    sixthAudio.currentTime = 0;
  } else {
    fifthAudio.currentTime = 0;
  }
}

function sound6() {
  if (sixthAudio.paused) {
    sixthAudio.play();

    secondAudio.pause();
    secondAudio.currentTime = 0;
    thirdAudio.pause();
    thirdAudio.currentTime = 0;
    fourthAudio.pause();
    fourthAudio.currentTime = 0;
    fifthAudio.pause();
    fifthAudio.currentTime = 0;
    firstAudio.pause();
    firstAudio.currentTime = 0;
  } else {
    sixthAudio.currentTime = 0;
  }
}
