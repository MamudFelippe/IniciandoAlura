//parametros de função

//function soma(numero1, numero2){
  //  return numero1 + numero2;
//}

//console.log (soma(2, 2))
//console.log (soma(12, 4))
//console.log (soma(-500, 2))

//parametros x argumentos
//ordem dos parametros

function divisao(numero1, numero2){
    return numero1 / numero2;
}

//console.log (divisao(2, 2))
//console.log (divisao(12, 4))
//console.log (divisao(-500, 2))

function texto(texto1, texto2){
    return texto1 + texto2;
}

//console.log (texto("alo", "felippe"))


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("felippe", 31))

function soma(numero1, numero2){
  return numero1 + numero2;
}

function multiplica(numero1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))