const submit = document.querySelector(".btn");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");
const weather_image = document.querySelector(".weather_image");

const conditionImage = {
  superCold:
    "https://images.unsplash.com/photo-1673842450064-e9a1197e1a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
  extraCold:
    "https://images.unsplash.com/photo-1551701113-60eec9564876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80",
  cold: "https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  normalCold:
    "https://images.unsplash.com/photo-1604299495321-ad7977097d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTczfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  normal:
    "https://images.unsplash.com/photo-1562180687-17d7d5c4258e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  sunny:
    "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  desert:
    "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  muri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  lava: "https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
};

let lastEdit = "celcius";

const updateLastEdit = () => {
  celsius.addEventListener("keyup", (e) => {
    lastEdit = "celcius";
  });
  fahrenheit.addEventListener("keyup", (e) => {
    lastEdit = "fahrenheit";
  });
  kelvin.addEventListener("keyup", (e) => {
    lastEdit = "kelvin";
  });
};

updateLastEdit();

const updateImage = (temp) => {
  if (temp < -10) {
    weather_image.setAttribute("src", conditionImage.superCold);
  } else if (temp < -10) {
    weather_image.setAttribute("src", conditionImage.extraCold);
  } else if (temp >= -10 && temp <= 0) {
    weather_image.setAttribute("src", conditionImage.cold);
  } else if (temp > -10 && temp <= 15) {
    weather_image.setAttribute("src", conditionImage.normalCold);
  } else if (temp > 15 && temp <= 25) {
    weather_image.setAttribute("src", conditionImage.normal);
  } else if (temp > 25 && temp <= 35) {
    weather_image.setAttribute("src", conditionImage.sunny);
  } else if (temp > 35 && temp < 1000) {
    weather_image.setAttribute("src", conditionImage.desert);
  } else if (temp >= 1000) {
    weather_image.setAttribute("src", conditionImage.lava);
  } else {
    weather_image.setAttribute("src", conditionImage.muri);
  }
};

const convert = (lastEdited) => {
  if (lastEdited === "celcius") {
    const fvalue = (parseFloat(celsius.value) * 9) / 5 + 32;
    const kvalue = parseFloat(celsius.value) + 273;
    fahrenheit.value = Math.floor(fvalue) + " °F";
    kelvin.value = Math.floor(kvalue) + " K";
  } else if (lastEdited === "fahrenheit") {
    const cvalue = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    const kvalue = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273;

    celsius.value = Math.floor(cvalue) + " °C";
    kelvin.value = Math.floor(kvalue) + " K";
  } else if (lastEdited === "kelvin") {
    const cvalue = parseFloat(fahrenheit.value) - 273;
    const fvalue = ((parseFloat(kelvin.value) - 273) * 9) / 5 + 32;

    celsius.value = Math.floor(cvalue) + " °C";
    fahrenheit.value = Math.floor(fvalue) + " °F";
  }
};

submit.addEventListener("click", () => {
  convert(lastEdit);
  let temp = "";
  if (lastEdit === "celcius") {
    temp = celsius.value;
  } else if (lastEdit === "fahrenheit") {
    temp = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  } else if (lastEdit === "kelvin") {
    temp = parseFloat(fahrenheit.value) - 273;
  }
  updateImage(temp);
});
