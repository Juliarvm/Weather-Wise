const apiKey = "86b9c258c852e0c456baef234d20d150";
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png";
const apiUnsplash = `https://api.unsplash.com/photos/random?query=`;
const unsplashAccessKey = "UEPE5VMoGBo0qtGt0g0mPvVxY4HUrBoVQAGvx3F0Xx0";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Função para buscar a imagem da cidade
const getCityImage = async (city) => {
  try {
    const response = await fetch(`${apiUnsplash}${city}&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    return data.urls.regular; // Retorna a URL da imagem
  } catch (error) {
    console.error("Erro ao buscar a imagem da cidade:", error);
    return null; // Retorna nulo em caso de erro
  }
};
// Array de cores para o fundo do container
const containerGradients = [
  "linear-gradient(180deg, rgba(135, 206, 235, 0.8) 0%, rgba(229, 252, 255, 0.8) 100%)", // Céu claro
  "linear-gradient(180deg, rgba(255, 69, 0, 0.8) 0%, rgba(255, 140, 0, 0.8) 100%)", // Pôr do sol
  "linear-gradient(180deg, rgba(0, 0, 139, 0.8) 0%, rgba(0, 191, 255, 0.8) 100%)", // Tempestade
  "linear-gradient(180deg, rgba(0, 191, 255, 0.8) 0%, rgba(74, 174, 255, 0.8) 100%)", // Céu nublado
  "linear-gradient(180deg, rgba(32, 178, 170, 0.8) 0%, rgba(0, 255, 255, 0.8) 100%)", // Temperatura fria (verde água)
];

// Função para mudar o gradiente do container aleatoriamente
const changeContainerGradient = () => {
  const randomGradient = containerGradients[Math.floor(Math.random() * containerGradients.length)];
  const container = document.querySelector(".container");
  container.style.background = randomGradient;
};

// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  // Mudar o gradiente do container
  changeContainerGradient();

  // Busca a imagem da cidade e atualiza o plano de fundo do body
  const imageUrl = await getCityImage(city);
  if (imageUrl) {
    document.body.style.backgroundImage = `url("${imageUrl}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  weatherContainer.classList.remove("hide");
};


searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
