

const start_btn = document.getElementById('typing_start_btn');
const str = document.querySelector('textarea').textContent;
const cursor = document.getElementById('cursor');


start_btn.addEventListener('click',() => {
    
    document.getElementById('text_type').innerHTML = '';
    const speed = document.querySelector('select').value;
    
    cursor.style.display = 'inline-block';
    type(str,speed);

})

let remaining = ''

function type(str,speed) {

    console.log('hey sayan')

    if (str === '') {
        clearTimeout(Interval)
    }

  var Interval = setTimeout(() => {

        document.getElementById('text_type').innerHTML+= str.substring(0,1);
        remaining = str?.substring(1,str.length);
        type(remaining,speed);
        
    }, 1000 - speed);


}


