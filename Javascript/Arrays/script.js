//Arrays é uma estrutura de dados que armazena uma coleção de elementos em uma única variável. como se fosse uma lista de itens python.

//let nomes = ["Rodrigo", "Ana", "Juliana", "André"];
//console.log(nomes);
//console.log(nomes[2]); //acessando o elemento do array


//push adiciona um elemento no final do array
//nomes.push("Marcos"); //adicionando um elemento no final do array
//console.log(nomes);

//delete nomes[1]; //removendo o elemento do array
//console.log(nomes);

function gerarFraseMotivacional() {
    const frases = [
        "Os problemas são oportunidades para se mostrar o que sabe.",
        "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
        "Tente de novo. Fracasse de novo. Mas fracasse melhor.",
        "Experiência é o nome que cada um dá a seus erros.",
        "Um objetivo nada mais é do que um sonho com limite de tempo.",
        "Sorte é o que acontece quando a preparação encontra a oportunidade.",
        "O único lugar que o sucesso vem antes do trabalho é no dicionário.",
        "É tentando o impossível que se chega à realização do possível.",
        "Muda tuas ideias e mudarás teu mundo.",
        "Em busca do ótimo não se faz o bom.",
    ]

    //math.random() gera um número aleatório entre 0 e 1
    //math.floor() arredonda o número para inteiro
    //multiplicando math.random() pelo tamanho do array frases.length para obter um número entre 0 e o tamanho do array
    //usando o número gerado para acessar um elemento do array frases

    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    const frase = frases[numeroAleatorio];
    

    document.getElementById("frase").innerText = frase
}



