// Determina as variáveis
let altura = 0;
let peso = 0;
let imc = 0;
let categoria = '';

//Função para determinar o IMC
function calcularImc(){
    
    //Define o conteúdo dos inputs nas variáveis
    altura = parseFloat(document.getElementById('inputAltura').value);
    peso = parseFloat(document.getElementById('inputPeso').value);

    //Cálculo do IMC
    imc = peso / (altura * altura);

    //IMC convertido para mostrar só um decimal
    imc = imc.toFixed(1);

    //Define as categorias de IMC
if (imc <= 18.5) {
    categoria = 'abaixo do peso';
} else if (imc > 18.5 && imc <= 24.9) {
    categoria = 'peso ideal';
} else if (imc > 24.9 && imc <= 29.9) {
    categoria = 'acima do peso';
} else if (imc > 29.9 && imc <= 34.9) {
    categoria = 'obesidade grau 1';
} else if (imc > 34.9 && imc <= 39.9) {
    categoria = 'obesidade grau 2';
} else if (imc > 39.9) {
    categoria = 'obesidade grau 3';
}

}

//Função para exibir o IMC no texto abaixo do botão
function exibirTextoNaTela(){
    document.getElementById("resultadoTexto").innerText = `Seu IMC é ${imc} e você está na categoria: ${categoria}`;
}
//Chama as funções
calcularImc();
