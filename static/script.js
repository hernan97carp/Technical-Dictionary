
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el botón y agregar un evento de clic
  document.getElementById("searchButton").addEventListener("click", function () {  // Cambié "addEventLister" a "addEventListener"
      // Obtener el valor del input
      let input = document.getElementById("search").value;

      // Mostrar el resultado en el <p id="result">
      document.getElementById("result").innerHTML = "BUSCASTE: <b>" + input + "</b>";
  });
});