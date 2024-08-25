const data = [
  {
    heading: "INTRO",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyxk-rsNru1ecu_Cev5BisarbCzuZgfg9WucBMFvSMWcHo6Qgi2trvn3qYw&s",
    desc: "first",
  },
  {
    heading: "WORK",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyxk-rsNru1ecu_Cev5BisarbCzuZgfg9WucBMFvSMWcHo6Qgi2trvn3qYw&s",
    desc: "second",
  },
  {
    heading: "ABOUT",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyxk-rsNru1ecu_Cev5BisarbCzuZgfg9WucBMFvSMWcHo6Qgi2trvn3qYw&s",
    desc: "third",
  },
  {
    heading: "CONTACT",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyxk-rsNru1ecu_Cev5BisarbCzuZgfg9WucBMFvSMWcHo6Qgi2trvn3qYw&s",
    desc: "forth",
  },
];
const figure = document.querySelector("figure");
const list = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const modal = document.querySelector(".modal");
const header = document.querySelector("h1");
const img = document.querySelector("img");
const desc = document.querySelector(".desc");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", (e) => {
    img.src = data[i].img;
    header.textContent = data[i].heading;
    desc.textContent = data[i].desc;
    console.log(modal);
    modal.style.scale = "1";
    nav.style.scale = "0";
  });
}

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    ![modal, header, img, desc, figure, ...list].some(
      (element) => e.target === element,
    )
  ) {
    modal.style.scale = "0";
    nav.style.scale = "1";
  }
});
