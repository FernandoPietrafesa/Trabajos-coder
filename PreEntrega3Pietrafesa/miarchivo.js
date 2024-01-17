document.addEventListener('DOMContentLoaded', function () {
    const promptBox = document.getElementById('prompt-box');
    const startSimulationButton = document.getElementById('startSimulation');
  
    // Evento para iniciar la simulación al hacer clic en el botón
    startSimulationButton.addEventListener('click', function () {
      capturarEdad();
    });
  
    // Función para capturar edades y procesar la simulación
    function capturarEdad() {
      let edad = prompt('Ingrese una edad (o escriba "fin" para terminar):');
      const edadesArray = [];
  
      while (edad !== 'fin') {
        edad = parseInt(edad); // Convertir a número
        if (!isNaN(edad)) {
          edadesArray.push(edad); // Agregar la edad al array
        }
        edad = prompt('Ingrese otra edad (o escriba "fin" para terminar):');
      }
  
      // Almacenar en localStorage usando JSON.stringify
      localStorage.setItem('edades', JSON.stringify(edadesArray));
  
      calcularEdadPromedio(edadesArray);
    }
  
    // Función para calcular la edad promedio y mostrar el resultado en el DOM
    function calcularEdadPromedio(edadesArray) {
      let totalEdades = 0;
  
      // Calcular la suma total de edades
      for (let i = 0; i < edadesArray.length; i++) {
        totalEdades += edadesArray[i];
      }
  
      // Calcular la edad promedio
      let edadPromedio = totalEdades / edadesArray.length;
  
      // Mostrar resultado en el DOM
      if (!isNaN(edadPromedio)) {
        promptBox.innerHTML = `<p>La edad promedio es: ${edadPromedio.toFixed(2)}</p>`;
      } else {
        promptBox.innerHTML = '<p>No se ingresaron edades válidas.</p>';
      }
    }
  
    // Recuperar datos del localStorage y mostrarlos al cargar la página
    document.addEventListener('DOMContentLoaded', function () {
      const storedEdades = localStorage.getItem('edades');
      if (storedEdades) {
        const parsedEdades = JSON.parse(storedEdades);
        promptBox.innerHTML = `<p>Edades almacenadas: ${parsedEdades.join(', ')}</p>`;
      }
    });
  });
  