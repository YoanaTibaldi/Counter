
const miModulo = (() =>{const btnIncrementar = document.querySelector('#btnUp');
    const btnDecrementar = document.querySelector('#btnDown');
    const btnResetear    = document.querySelector('#btnReset');

    const num            = document.querySelector('#counter');

    let puntos = 0;


    btnIncrementar.addEventListener( 'click', () => {
    
        puntos++;
        document.querySelector('#counter').innerHTML = puntos;
        puntos.innerHTML = num;
    

    })

    btnDecrementar.addEventListener('click', () => {
        puntos--;
        document.querySelector('#counter').innerHTML = puntos;
        puntos.innerHTML = num;
    

    })

    btnResetear.addEventListener('click', () => {
        puntos = 0;
        document.querySelector('#counter').innerHTML = puntos;
        puntos.innerHTML = num;
    
    })
}) 

