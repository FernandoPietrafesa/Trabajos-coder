// Array para almacenar las edades
const edades = [];

// Función para agregar edades al array y calcular la edad promedio
function agregarEdad() {
  const ageInput = document.getElementById('ageInput');
  const ageList = document.getElementById('ageList');
  const averageAge = document.getElementById('averageAge');

  const edad = parseInt(ageInput.value);

  if (!isNaN(edad)) {
    edades.push(edad);
    ageList.textContent = edades.join(', ');

    // Calcular la edad promedio
    const totalEdades = edades.reduce((acc, edad) => acc + edad, 0);
    const edadPromedio = totalEdades / edades.length;

    averageAge.textContent = isNaN(edadPromedio) ? '-' : edadPromedio.toFixed(2);
  }

  ageInput.value = ''; // Limpiar el campo de entrada
}

// Event listener para el botón de agregar edad
document.getElementById('addAge').addEventListener('click', agregarEdad);