const potes = ref([
    {
        id: 1,
        name: "Copo de 400 ML",
        descricao: "açai, banana, creme coco, paçoca",
        preco: "6.50",
        url: "https://www.imagensempng.com.br/wp-content/uploads/2021/02/Copo-Acai-Png.png"
    },
    {
        id:2,
        name: "Copo de 400 ML",
        descricao: "açai, banana, creme coco, morango",
        preco: "6.50",
        url: "https://www.designi.com.br/images/preview/10295453.jpg"
    },
    {
        id:3,
        name:" Copo de 500 ML",
        descricao: "açai, gotas de chocolate, calda de morango, granola, leite condensado",
        preco: "8.50",
        url: "https://www.designi.com.br/images/preview/11149681.jpg"
    },
    {
        id: 4,
        name: "Copo de 500ml",
        descricao: "açai, morando, kiwi, leite condensado, granola",
        preco: "8.50",
        url: "https://www.designi.com.br/images/preview/10005107.jpg"
    },
    {
        id: 5,
        name: "Copo de 700ml",
        descricao: "açai, leite condensado, jujubas, gotas de chocolate, paçoca, banana, manga, leite ninho ",
        preco: "10.50",
        url: "https://i.pinimg.com/originals/54/59/c1/5459c11b676f91d7fa00e34aa9470302.jpg"
    },
    {
        id: 6,
        name: "Copo de 700ml",
        descricao: "açai, creme de amendoim, jujubas, kiwi, farofa de castanhas, lite ninho, leite condensado",
        preco: "10.50",
        url: "https://www.designi.com.br/images/preview/10001687.jpg"
    },
    {
        id: 7,
        name: "Copo de 700ml",
        descricao: "açai, balas de goma, abacaxi, morango, granulado, crene de morango, banana",
        preco: "10.50",
        url: "https://www.designi.com.br/images/preview/10068821.jpg"
    },
    {
        id: 8,
        name: "Pote de 2,2Kg",
        preco: "15.50",
        url: "https://www.imagensempng.com.br/wp-content/uploads/2021/02/Acai-Copo-Png.png"
    },
    {
        id: 9,
        name: "Tigela de Açai",
        descricao: "açai, banana, farora de granola, creme de cupuaçu, mamão, leite ninho, gotas de chocolate, castanhas, uvas, creme de banana, granola",
        preco: "18.50",
        url: "https://img.freepik.com/fotos-premium/tigela-brasileira-de-acai-com-banana-pacoca-e-morango-isolada-em-fundo-branco_317399-1676.jpg?w=2000"
    },
    {
        id: 10,
        name: "Tigela de Açai",
        descricao: "açai, mamão, manga, gotas de chocolate, leite ninho, jujubas, creme de banana, caldsa de chocolate, morango, farofa de castanha",
        preco: "18.50",
        url: "https://www.designi.com.br/images/preview/10005022.jpg"
    },
    {
        id: 11,
        name: "Barca de Açai",
        descricao: "açai, banana, manga, abacaxi, mamão, gotas de chocolate, morango, paçoca, leite condensado, leite ninho, jujubas, granulado, creme de banana, granola, balas de gomas, uva, kiwi",
        preco: "60.50",
        url: "https://i.pinimg.com/originals/e3/0a/33/e30a33e93f810103bdb32ac0c00a7aba.png"
    },
    {
        id: 12,
        name: "Pote de 1L",
        preco: "50.50",
        url: "https://geerresorvetes.com.br/wp-content/uploads/2022/08/ACAI-COM-LEITINHO-1L-1024x798.png"
    }

])


const cart = ref([])

const pedidos = ref([])
export const api = () =>{

    function add(pote){
        const incartP = cart.value.some(o => o.id === pote.id)
        if(!incartP){
            cart.value.push(pote)
        }
    }

    return{
        potes,
        pedidos,
        add
    }
}