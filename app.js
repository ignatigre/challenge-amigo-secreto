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

  alert(amigos);
}

// Función que verifica si un nombre es vacio
function esVacio(nombre) {
  let nombreSinEspacios = nombre.trim();
  if (nombre == "") {
    return true;
  }
  return false;
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
