
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el botón y agregar un evento de clic
  document.getElementById("searchButton").addEventListener("click", function () {  // Cambié "addEventLister" a "addEventListener"
      // Obtener el valor del input
      let input = document.getElementById("search").value;

      // Mostrar el resultado en el <p id="result">
      document.getElementById("result").innerHTML = "BUSCASTE: <b>" + input + "</b>";
  });
});

fetch('/get_data')
.then(response => response.json())
.then(data => {
    const list = document.getElementById("dictionary-list");
    for (let word in data) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${word}:</strong> ${data[word]}`;
        list.appendChild(listItem);
    }
})
.catch(error => console.error('Error fetching data:', error));