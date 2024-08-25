


const container = document.getElementsByClassName('container')[0];
const close_btn = document.getElementsByClassName('close_btn')[0];
const user_front = document.querySelector('.front');  

   

  user_front.onclick = () => {

    container.classList.add('open_profile');
    console.log('hello');

  }


  close_btn.onclick = () => {
    container.classList.remove('open_profile');
  }






