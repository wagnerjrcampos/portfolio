function escrevendoLetra(){
        function ativaletra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
                setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaletra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})
