let painel = document.querySelector('.painel')

function criaCaixa(){
    let caixa = document.createElement('div')
    return caixa
}

let linfocito = criaCaixa()
painel.appendChild(linfocito)
linfocito.classList.add('linfocito')

let virus = criaCaixa()
painel.appendChild(virus)
virus.classList.add('virus')

