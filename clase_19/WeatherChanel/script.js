let ciudad = document.querySelector("#input");

function cargarCiudad(ciudad) {
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad +
      "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",

    function (data) {
      console.log(data);
      document.querySelector("#descripcion").textContent =
        data.weather[0].description;
      document.querySelector("#wicon").src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      document.querySelector("#ciudad").textContent = data.name;
      document.querySelector("#temperatura").textContent = data.main.temp;
      document.querySelector("#temperatura").textContent = Math.round(
        data.main.temp
      );
    }
  );
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  cargarCiudad(ciudad.value);
  document.querySelector(".container").style.visibility = "visible";
});
let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cargarCiudad(ciudad.value);
    document.querySelector(".container").style.visibility = "visible";
  }
});
