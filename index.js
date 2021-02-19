const container = document.getElementById('container');
for (let i = 1; i <= 100; i++) {
    const heart = document.createElement('div')
    heart.classList.add('heart');
    container.appendChild(heart);
}

const animateHearts=()=>{
    anime({
        targets:'.heart',
        translateX: ()=>anime.random(-70,70) * 10,
        translateY: ()=>anime.random(-50,50)*10,
        rotate: 45,
        scale: ()=>anime.random(1,3),
        easing: 'easeInOutBack',
        duration:3000,
        delay: anime.stagger(10),
        complete: animateHearts,

    });
};

animateHearts();