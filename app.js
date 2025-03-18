// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//se crea un array para almacenar los nombres

//Capturar el valor de entrada

let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let listaNombres = [];

function agregarAmigo() {
    if (inputAmigo.value === '') {

        alert("Debes ingresar el nombre de un amigo");
    }

    else if (listaNombres.includes(inputAmigo.value)) {


        alert("el Amigo ingresado ya está registrado, por favor ingresa otro amigo");


    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputAmigo.value;
        listaNombres.push(inputAmigo.value)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listaAmigos.appendChild(li);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
    }

    limpiarCampo();


}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

listaAmigos.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(listaAmigos);
    }
    listaNombres = []
    let elementos = listaAmigos.querySelectorAll("li")

    for (let i = 0; i < elementos.length; i++) {
        let element = elementos[i];
        let texto = element.textContent;
        texto = texto.slice(0, -1)

        listaNombres.push(texto)
    }


}, false);

function sortearAmigo() {
    if (inputAmigo.length === 0) {
        alert("No hay amigos para sortear");
        return;

    }

    let amigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo sorteado es: ${amigoSecreto}`;

    let limpiarLista = document.getElementById("listaAmigos");
    listaNombres = []
    limpiarLista.innerHTML = "";
}