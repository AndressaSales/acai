const potes = ref([
    {
        id: 1,
        num: "400 ML",
        preco: "5.50",
        url: "https://loja.goldfoodservice.com.br/image/cache/catalog/3071-1024x1024.jpg"
    },
    {
        id:2,
        num: "500 ML",
        preco: "7.50",
        url: "https://www.luembalagensplasticas.com/_jbloja/imagens/copo%20bolha,%20copo%20da%20felicidade,%20500ml%20com%20tampa%20bolha%20e%20tampa%20rete,%20importadora%20Lu%20Embalagens%20Plasticas%2016%20oz%20fabrica%20China.png"
    },
    {
        id:3,
        num:"700 ML",
        preco: "10.50",
        url: "https://89embalagens.com.br/wp-content/uploads/2021/10/copo-descartavel-translucido-700ml.jpg"
    },
    {
        id: 4,
        num: "1 L",
        preco: "12.50",
        url: "https://tse1.mm.bing.net/th?id=OIP.hhSa7F12JLmcA3Npjll5hQHaHa&pid=Api&P=0&h=180"
    }

])

const frutas = ref([
    {
        id: 1,
        name: "Banana",
        url: "https://loe.org/content/2014-04-18/10-bananabunch.gif"
    },
    {
        id: 2,
        name: "Morango",
        url: "https://omanualdaspapinhas.com/wp-content/uploads/2018/05/10-beneficios-do-morango-para-os-bebes2.jpg"
    },
    {
        id:3,
        name: "Manga",
        url: "https://tse2.mm.bing.net/th?id=OIP.D9Q1Mms1nJ4YGZID9E-DlgHaE7&pid=Api&P=0&h=180"
    },
    {
        id:4,
        name: "Kiwi",
        url: "https://tse1.mm.bing.net/th?id=OIP.pExcFzRcjCWUvWsR22V8GQHaFi&pid=Api&P=0&h=180"
    },
    {
        id: 5,
        name: "Abacaxi",
        url: "http://www.saudedicas.com.br/wp-content/uploads/2015/11/propriedades-do-abacaxi-para-perda-de-peso1.jpg"
    },
    {
        id: 6,
        name: "Amora",
        url: "https://tse2.mm.bing.net/th?id=OIP.iyBTt0nFeEKjJNihGeDOwgHaHa&pid=Api&P=0&h=180"
    },
    {
        id: 7,
        name: "uva",
        url: "https://tse3.mm.bing.net/th?id=OIP.MlKbwOfNHn3UtGefWKE3mQHaHa&pid=Api&P=0&h=180"
    }
])

const confeitos = ref([
    {
        id: 1,
        name: "Paçoca",
        preco: "2.00"
    },
    {
        id: 2,
        name: "Granola",
        preco: "2.00"
    },
    {
        id:3,
        name: "Jujuba",
        preco: "2.00"
    },
    {
        id: 4,
        name: "Balas de Goma",
        preco: "2.00"
    },
    {
        id: 5,
        name: "Granulado",
        preco: "2.00"
    },
    {
        id: 6,
        name: "Leite Condensado",
        preco: "2.00"
    },
    {
        id: 7,
        name: "Leite Ninho",
        preco: "2.00"
    },
    {
        id: 8,
        name: "Farofa de Castanha",
        preco: "2.00"
    },
    {
        id: 9,
        name: "Gotas de Chocolate",
        preco: "2.00"
    }
])

const cart = ref([])

const pedidos = ref([])
export const api = () =>{

    function addP(pote){
        /*const incartP = cart.value.some(o => o.id === pote.id)
        if(!incartP){
            cart.value.push(pote)
        }*/
        cart.value.push(pote)
    }
    function addF(fruta){
        cart.value.push(fruta)
        /*const incartF = cart.value.some(o => o.id === id)
        if(!incartF){
            cart.value.push(fruta)
        }*/
    }

    function addC(confeito){
        const incartC = cart.value.some(o => o.id === confeito.id)
        if(!incartC){
            cart.value.push(confeito)
        }
    }

    return{
        potes,
        frutas,
        confeitos,
        cart,
        addP,
        addF,
        addC,
        pedidos
    }
}