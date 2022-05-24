let op;
let sexo;
let altura;
let peso;
let indice;
let consulta;

op = prompt("Desea saber su IMC (Indice de masa corporal) Si/No").toLowerCase();
while (op != "si" && op != "no") {
  alert("Ingrese Si o No");
  op = prompt("Desea saber su IMC (Indice de masa corporal) Si/No").toLowerCase();
}
//Leimos la opcion de si quiere o no saber si IMC
while (op == "si") {
  sexo = prompt("Ingrese su sexo M/F").toLowerCase();
  while (sexo != "m" && sexo != "f") {
    alert("Ingrese M para masculino o F para femenino ");
    sexo = prompt("Ingrese su sexo M/F").toLowerCase();
  }
  //Logramos que ingrese si es Hombre o Mujer
  altura = Number(prompt("Ingrese su altura en metros"));
  peso = Number(prompt("Ingrese su peso en kilogramos"));
  //Adquirimos datos para calcular el IMC
  let imc = (altura, peso) => peso / (altura * altura);
  indice=imc(altura,peso)
  alert("Tu IMC es de " + indice.toFixed(2));
  consulta = prompt("Desea saber cual es su condicion respecto a su IMC? Si/No").toLowerCase();
  while (consulta != "si" && consulta != "no") {
    alert("Ingrese Si o No");
    consulta = prompt("Desea saber cual es su condicion respecto a su IMC? Si/No").toLowerCase();
  }
  //Obtenemos si quiere saber la condición de su IMC
  if (consulta == "si") {
    if(indice<=18.5){
        alert('Su condicion es de "Peso Bajo"');
    }
    if(indice>18.5 && indice <=24.5){
        alert('Su condicion es de "Peso Normal"');
    }
    if(indice>24.5 && indice <=29.9){
        alert('Su condicion es de "Sobrepeso"');
    }
    if(indice>29.9){
        alert('Su condicion es de "Obesidad"');
    }
  } 
  op = prompt("Desea saber otro IMC (Indice de masa corporal) Si/No").toLowerCase();
  //Pregunto si quiere hacer otro test
}
alert("Que tengas un buen día");
