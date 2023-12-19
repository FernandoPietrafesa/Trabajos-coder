// Declaración de variables y objetos
let edades = []; // Array para almacenar las edades ingresadas por el usuario

// Función para capturar entradas de edades
function capturarEdad() {
  let edad = prompt('Ingrese una edad (o escriba "fin" para terminar):');

  while (edad !== 'fin') {
    edad = parseInt(edad); // Convertir a número
    if (!isNaN(edad)) {
      edades.push(edad); // Agregar la edad al array
    }
    edad = prompt('Ingrese otra edad (o escriba "fin" para terminar):');
  }

  calcularEdadPromedio();
}

// Función para calcular la edad promedio
function calcularEdadPromedio() {
  let totalEdades = 0;

  // Calcular la suma total de edades
  for (let i = 0; i < edades.length; i++) {
    totalEdades += edades[i];
  }

  // Calcular la edad promedio
  let edadPromedio = totalEdades / edades.length;

  // Mostrar resultado usando alert()
  if (!isNaN(edadPromedio)) {
    alert(`La edad promedio es: ${edadPromedio.toFixed(2)}`);
  } else {
    alert('No se ingresaron edades válidas.');
  }
}

// Llamar a la función principal para iniciar el proceso
capturarEdad();