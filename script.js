var animations = [
    // bloco de código exemplo do uso da biblioteca para animar
    {
        id: '#banner', // seletor do elemento html
        duration: 600, // duração da transição da propriedade 'animations'
        delayBefore: 600, // tempo para atraso da animação
        delayAfter: 0, // tempo de aguardo para a o fim desta animação
        animations: {marginTop: -280} // propriedades de animação, precisa inserir no CSS o valor inicial da propriedade inserida
    },

    // para fazer efeitos de animações em simultâneo com vários elementos html, insira um array com hashes como no exemplo abaixo:
    [
        {
            id: '#elem1', // seletor do elemento html
            duration: 600, // duração da transição da propriedade 'animations'
            delayBefore: 0, // tempo para atraso da animação
            delayAfter: 0, // tempo de aguardo para a o fim desta animação
            animations: {top: 100} // propriedades de animação, precisa inserir no CSS o valor inicial da propriedade inserida
        },
        {
            id: '#elem2', // seletor do elemento html
            duration: 600, // duração da transição da propriedade 'animations'
            delayBefore: 0, // tempo para atraso da animação
            delayAfter: 0, // tempo de aguardo para a o fim desta animação
            animations: {left: 100} // propriedades de animação, precisa inserir no CSS o valor inicial da propriedade inserida
        },
    ]
]

new YAnimation(animations, {loop: false, clearAfterEnd: false}).startAnimation()