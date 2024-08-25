

const words = document.querySelectorAll('.word');



    setTimeout(() => {

        words.forEach(word => {
            word.classList.add('show');
        })

    },1500);
