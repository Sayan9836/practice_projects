const small_circles = [
    {
        id: 0,
        img: './snake.png',
        name: 'Lizard'
    },
    {
        id: 1,
        img: 'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-hairdressing-black-cartoon-scissors-png-image_2987274.jpg',
        name: 'Scissor'
    },
    {
        id: 2,
        img: 'https://png.pngtree.com/element_our/20190530/ourmid/pngtree-stone-black-cobblestone-simulation-stone-image_1235761.jpg',
        name: 'Rock'
    },
    {
        id: 3,
        img: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-spiral-notebook-icon-png-image_3728102.jpg',
        name: 'Paper'
    },
    {
        id: 4,
        img: 'https://png.pngtree.com/png-clipart/20230814/original/pngtree-minimalist-vector-icon-of-the-vulcan-salute-a-symbolic-design-template-png-image_10350175.png',
        name: 'Spock'
    },
]

const rule = {

    Lizard: ["Spock", "Paper"],


    Scissor: ["Paper", "Lizard"],


    Rock: ["Lizard", "Scissor"],

    Paper: ["Rock", "Spock"],


    Spock: ["Scissor", "Rock"],


};

let Player_win_count = 0;

let Bot_win_count = 0;

const who_wins = document.getElementsByClassName('who_wins')[0]
const player_score_display = document.getElementsByClassName('player_score')[0];
const bot_score_display = document.getElementsByClassName('bot_score')[0];
const circle = document.querySelectorAll('.circle');

const circles_wrapper = document.querySelectorAll('.small_circle_wrapper');


for (let i = 0; i < 2; i++) {

    small_circles?.forEach((circu) => {
        const small_circle = document.createElement('div');
        small_circle.classList.add('small_circle');
        if (i === 1) {
            small_circle.classList.add('filled')
        }
        const innerImage = document.createElement('img');
        innerImage.src = `${circu.img}`
        innerImage.alt = `icons`
        small_circle.appendChild(innerImage);
        if (i == 0) {

            small_circle.onclick = () => handlePlayerClick(circu.img, circu.id, circu.name)

        }
        circles_wrapper[i].appendChild(small_circle);
    })

}






function handlePlayerClick(pic, player_id, player_name) {

    circle[0].innerHTML = '';
    const boro_image_player = document.createElement('img');
    boro_image_player.src = `${pic}`


    circle[0].appendChild(boro_image_player);


    const boro_image_bot = document.createElement('img');
    const bot_id = Math.floor(Math.random() * 5);


    circle[1].innerHTML = '';
    boro_image_bot.src = `${small_circles[bot_id].img}`

    circle[1].appendChild(boro_image_bot)



    if (bot_id === player_id) {
        who_wins.textContent = 'Oops tie'

    } else {

        const isPlayerWins = determineWinner(player_id, bot_id, player_name);
        console.log(isPlayerWins);


        if (isPlayerWins) {
            Player_win_count++;
            player_score_display.textContent = Player_win_count;
            who_wins.textContent = 'Player wins'
        } else {
            Bot_win_count++;
            bot_score_display.textContent = `${Bot_win_count}`;
            who_wins.textContent = 'Bot wins'
        }

    }



}



const determineWinner = (player_id, bot_id, player_name) => {

    if (player_name === 'Lizard') {
        return rule.Lizard.includes(small_circles[bot_id].name);
    }

    if (player_name === 'Scissor') {
        return rule.Scissor.includes(small_circles[bot_id].name);
    }

    if (player_name === 'Rock') {
        return rule.Rock.includes(small_circles[bot_id].name);
    }

    if (player_name === 'Paper') {
        return rule.Paper.includes(small_circles[bot_id].name);
    }

    if (player_name === 'Spock') {
        return rule.Spock.includes(small_circles[bot_id].name);
    }
}


function Reset() {
    
    Player_win_count = 0;
    Bot_win_count = 0;

    who_wins.textContent = '';
    player_score_display.textContent = '0';
    bot_score_display.textContent = '0';
    circle[0].innerHTML = '';
    circle[1].innerHTML = '';

}

