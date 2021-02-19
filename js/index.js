const container = document.getElementById('container');
const heart = document.getElementsByClassName('heart')[0];
for (let i = 1; i <= 70; i++) {
    container.appendChild(heart.cloneNode());
}

const animateHearts=()=>{
    anime({
        targets:'.heart',
        translateX: ()=>anime.random(-60,60) * 10,
        translateY: ()=>anime.random(-30,30)*10,
        rotate: 45,
        scale: ()=>anime.random(1,4),
        easing: 'easeInOutBack',
        duration:3000,
        delay: anime.stagger(10),
        complete: animateHearts,

    });
};

animateHearts();