const dots = document.querySelectorAll('.dot');
const boxes = document.querySelectorAll('.container-box')
const closeExtra = document.querySelector('#close-extra')
const extra = document.querySelector('.extra')

//Slider
function setActive(i) {
    for(box of boxes)
        box.classList.remove('active');
        boxes[i].classList.add('active');
        

    for(dot of dots)
        dot.classList.remove('active');
        dots[i].classList.add('active')
}

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        setActive(i)
    })
}

// Extra information
function setExtra(i) {
    extra.classList.add('active')
    const title = document.getElementById('title')

    if(i === 0) {
        title.innerHTML = "Corvette"
    }else if(i === 1) {
        title.innerHTML = "Camaro"
    }else if(i === 2) {
        title.innerHTML = "Lamborguini Aventador"
    }else if(i === 3) {
        title.innerHTML = "Bugatti Chiron"
    }else if(i === 4) {
        title.innerHTML = "Dodge Challenger"
    }

    closeExtra.addEventListener('click', () => { extra.classList.remove('active')})
}

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        setExtra(i)
    })
}