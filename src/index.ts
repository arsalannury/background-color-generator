const title = document.querySelector(".title") as HTMLHeadingElement;
const parag = document.querySelector(".current_color") as HTMLParagraphElement;
const app = document.querySelector("main")!;

type n = number;
type s = string;
let colorGenerate: n;

app.addEventListener("mousemove", (e: Event) => {
  colorGenerate = Math.floor(Math.random() * 1000000);
  app.style.background = `#${colorGenerate}`;
  parag.innerText = `#${colorGenerate}`;
});

app.addEventListener("mousedown", (e: Event) => {
  navigator.clipboard.writeText(colorGenerate.toString());
});

window.addEventListener("load", () => {
  alert("Click on the screen and copy color code");
});


