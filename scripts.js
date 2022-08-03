const dots = document.querySelectorAll('.dot');
const boxes = document.querySelectorAll('.container-box')

function setActive(i) {
    for(box of boxes)
        box.classList.remove('active');
        boxes[i].classList.add('active')

    for(dot of dots)
        dot.classList.remove('active');
        dots[i].classList.add('active')
}

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        setActive(i)
    })
}

function sectionActive(i) {
    console.log(i)
}

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        sectionActive(i)
    })
}