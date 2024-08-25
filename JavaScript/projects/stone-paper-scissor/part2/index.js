const player_score_Ref = document.querySelector(".player_score");
const bot_score_Ref = document.querySelector(".bot_score");
const whowins_Ref = document.querySelector(".whowins");
const circle_Ref = document.getElementsByClassName("circle");
const small_circle_wrapper_Ref = document.querySelectorAll(
  ".small_circle_wrapper",
);
const btn_Ref = document.querySelector(".btn");
let play_won_cnt = 0;
let bot_won_cnt = 0;
const options = [
  {
    name: "stone",
    image:
      "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-stone-black-cobblestone-simulation-stone-image_1235761.jpg",
  },
  {
    name: "paper",
    image:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-spiral-notebook-icon-png-image_3728102.jpg",
  },
  {
    name: "sessior",
    image:
      "https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-hairdressing-black-cartoon-scissors-png-image_2987274.jpg",
  },
];

const rules = {
  stone: ["sessior"],
  paper: ["stone"],
  sessior: ["paper"],
};

for (let i = 0; i < 2; i++) {
  options?.forEach((option, idx) => {
    const small_circle = document.createElement("div");
    small_circle.classList.add("small_circle");
    const img = document.createElement("img");
    img.src = option.image;
    small_circle.appendChild(img);
    if (i == 0) {
      small_circle.onclick = () => calculateLogic(idx);
    }
    small_circle_wrapper_Ref[i].appendChild(small_circle);
  });
}

const calculateLogic = (player_choosen_idx) => {
  //   const bot_choosen_idx = handleBotLogic(player_choosen_idx);
  const bot_choosen_idx = botWillWinBro(player_choosen_idx);

  player_option = options[player_choosen_idx].name;
  bot_option = options[bot_choosen_idx].name;

  circle_Ref[0].innerHTML = "";
  circle_Ref[1].innerHTML = "";
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");

  img1.src = options[player_choosen_idx].image;
  img2.src = options[bot_choosen_idx].image;

  circle_Ref[0].appendChild(img1);
  circle_Ref[1].appendChild(img2);

  console.log(circle_Ref[0]);

  if (player_option === bot_option) {
    whowins_Ref.textContent = "oops tie";
  } else if (rules[player_option].includes(bot_option)) {
    play_won_cnt++;
    player_score_Ref.textContent = play_won_cnt;
    whowins_Ref.textContent = "player wons";
  } else {
    bot_won_cnt++;
    bot_score_Ref.textContent = bot_won_cnt;
    whowins_Ref.textContent = "bot wons";
  }
};

const handleBotLogic = () => {
  return Math.floor(Math.random() * options.length);
};

const botWillWinBro = (player_idx) => {
  const player_option = options[player_idx].name;

  const play_win_option = rules[player_option][0];

  const myOptions = options?.filter((option) => {
    return option.name !== player_option && option.name !== play_win_option;
  });

  const bot_idx = Math.floor(Math.random() * myOptions.length);

  const choose_idx = options.findIndex(
    (option) => option.name === myOptions[bot_idx].name,
  );
  console.log(choose_idx);
  return choose_idx;
};
