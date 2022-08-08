const dots = document.querySelectorAll('.dot');
const boxes = document.querySelectorAll('.box')
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
    const info = document.getElementById('info')

    if(i === 0) {
        info.innerHTML = `<h2>Corvette C8</h2>
                          <p>Motor <span>V8 LT2 6.2</span></p>
                          <p>Potência <span>500 cv</span></p>
                          <p>0 - 100 km/h <span>3 segundos</span></p>
                          <p>Câmbio <span>automático de 8 marchas</span></p>
                          <p>Suspensão <span>magnética</span></p>
                         `
    }else if(i === 1) {
        info.innerHTML = `<h2>Camaro</h2>
                          <p>Motor <span>V8 6.2 SIDI</span></p>
                          <p>Potência <span>461 cv</span></p>
                          <p>0 - 100 km/h <span>4.2 segundos</span></p>
                          <p>Câmbio <span>automático de 10 marchas</span></p>
                          <p>Suspensão <span>barra estabilizadora</span></p>
                         `
    }else if(i === 2) {
        info.innerHTML = `<h2>Lamborguini Aventador</h2>
                          <p>Motor <span>V12 6.5</span></p>
                          <p>Potência <span>770 cv</span></p>
                          <p>0 - 100 km/h <span>2.8 segundos</span></p>
                          <p>Câmbio <span>automático de 7 marchas</span></p>
                          <p>Suspensão <span>braços sobrepostos</span></p>
                         `
    }else if(i === 3) {
        info.innerHTML = `<h2>Bugatti Chiron</h2>
                          <p>Motor <span>8.0 WR16</span></p>
                          <p>Potência <span>1500 cv</span></p>
                          <p>0 - 100 km/h <span>2.4 segundos</span></p>
                          <p>Câmbio <span>automático de 7 marchas</span></p>
                          <p>Suspensão <span>magnética</span></p>
                         `
    }else if(i === 4) {
        info.innerHTML = `<h2>Dodge Challenger</h2>
                          <p>Motor <span>V8 hellcat 6.2</span></p>
                          <p>Potência <span>717 cv</span></p>
                          <p>0 - 100 km/h <span>4 segundos</span></p>
                          <p>Câmbio <span>automático de 8 marchas</span></p>
                          <p>Suspensão <span>braço sobreposto</span></p>
                         `   
    }

    closeExtra.addEventListener('click', () => { extra.classList.remove('active')})
}

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        setExtra(i)
    })
}