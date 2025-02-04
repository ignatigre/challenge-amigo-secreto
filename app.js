// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se define el arreglo que contendrá los nombres de los amigos ingresados
let amigos = [];

// Función que agrega un amigo al arreglo de amigos
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (esVacio(nombre)) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Si el campo no está vacío, se agrega el nombre al arreglo de amigos
  insertarEnLista(nombre);

  // Se limpia el campo de entrada
  limpiarCampo();

  actualizarLista();
}

// Función que verifica si un nombre es vacio
function esVacio(nombre) {
  return nombre.trim() === "";
}

// Función que agregar un amigo al arreglo de amigos
function insertarEnLista(nombre) {
  amigos.push(nombre);
}

// Función que limpia el campo de entrada
function limpiarCampo() {
  let input = document.getElementById("amigo");
  input.value = "";
  input.focus(); // Establece el foco en el campo después de limpiarlo
}

// Función para limpiar la lista de amigos en pantalla
function limpiarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}

// Función para actualizar la lista de amigos
function actualizarLista() {
  limpiarLista();

  // Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    // Agregar elementos a la lista
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para sortear los amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }

  // Generar un indice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indice];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

  // Limpiar los amigos ingresados
  limpiarLista();
  amigos = [];
}
