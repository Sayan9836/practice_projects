

const startBtn = document.getElementById('start');
const moles = document.querySelectorAll('.mole');
const length = moles.length;

startBtn.onclick = () => {

    setInterval(() => {

        moles.forEach(mole => {
            mole.classList.remove('active');
        })

        const currentMole = moles[Math.floor(Math.random()*length)]

        currentMole.classList.add('active');

    },700)

}