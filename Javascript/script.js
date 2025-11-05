function calcularPreco() {
   //validação dos campos
   let precoalcool = document.getElementById("alcool").value;
    let precogasolina = document.getElementById("gasolina").value;

    if (precoalcool == "" ||precogasolina == "") {
        document.getElementById("preencha").innerHTML = "Por favor, preencha os campos acima!";
    }
}

function calcularPreco() {
    let precoalcool = document.getElementById("alcool").value;
    let precogasolina = document.getElementById("gasolina").value;

    let resultado = precoalcool / precogasolina

    if (resultado >= 0.7) {
        document.getElementById("melhorPreco").innerHTML = "Melhor utilizar Gasolina!";
    } else {
        document.getElementById("melhorPreco").innerHTML = "Melhor utilizar Álcool!";
    }

}