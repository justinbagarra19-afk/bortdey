const textBox = document.getElementById("text");
const imgBox = document.getElementById("imageBox");
const btn = document.getElementById("btn");
const giftArea = document.getElementById("giftArea");
const topBtn = document.getElementById("topBtn");

let screen = 0;
let typing = false;
let opening = false;

const screens = [
  { text: "hihi open mo", img: "giftclose.png" },
];

function typeText(text) {
  typing = true;
  textBox.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      textBox.textContent += text.charAt(i++);
      setTimeout(type, 40);
    } else {
      typing = false;
    }
  }
  type();
}

function nextScreen() {
  if (typing || opening) return;
  
  if (screen === 1) {
    opening = true;

    imgBox.classList.remove("bounce");
    imgBox.classList.add("egg-shake");
    typeText("...");

    setTimeout(() => {
      imgBox.classList.replace("egg-shake", "egg-shake-strong");
      typeText("hihi...");
    }, 1500);

    setTimeout(() => {
      giftArea.style.display = "none";
      
      typeText("");
      topBtn.classList.remove("hidden");

      opening = false;
    }, 3200);

    return;
  }
  
  if (screen < screens.length) {
    imgBox.innerHTML = `<img src="${screens[screen].img}" class="pop">`;
    typeText(screens[screen].text);
    screen++;
  }
}

topBtn.addEventListener("click", () => {
  window.location.href = "cake.html";
});

nextScreen();