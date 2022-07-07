
const text = document.querySelector(".chinese-text");
const btn = document.querySelector(".word .speech i");

const textEx = document.querySelector(".chinese-text-ex");
const btnEx = document.querySelector(".speech-example i");


btn.addEventListener('click', function() {
    speak(text.textContent);
})

btnEx.addEventListener('click', function() {
    speak(textEx.textContent);
})


function speak(text) {
  window.speechSynthesis.cancel();
  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.lang = "zh";
  speechMsg.text = text;
  window.speechSynthesis.speak(speechMsg);
}