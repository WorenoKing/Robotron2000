const robo = document.querySelector('.robo');
const bomba = document.querySelector('.bomb');


const jump = () => {
    robo.classList.add('jump');

    setTimeout(() => {
        robo.classList.remove('jump');

    }, 500)
}

const loop = setInterval( () => {

    console.log('loop')

    const bombPosition = bomba.offsetLeft;
    const roboPosition = +window.getComputedStyle(robo).bottom.replace('px', '');

    
    if (bombPosition <= 120 && bombPosition > 0 && roboPosition < 80){

        bomba.style.animation = 'none';
        bomba.style.left = `${bombPosition}px`;

        robo.style.animation = 'none';
        robo.style.bottom = `${roboPosition}px`;

        robo.src = "./img/bom.webp"

        clearInterval(loop);
    }

}, 10)


document.addEventListener('keydown', jump)
