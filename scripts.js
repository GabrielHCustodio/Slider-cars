const dots = document.querySelectorAll('.dot');
const boxes = document.querySelectorAll('.container-box')
const openExtra = document.querySelector('#open-extra')
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

function moreInfo() {
    openExtra.addEventListener('click', () => {
        extra.classList.add('active')
    })
    closeExtra.addEventListener('click', () => {
        extra.classList.remove('active')
    })
}
moreInfo()