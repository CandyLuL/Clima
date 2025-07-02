document.addEventListener('DOMContentLoaded', () => {
    // *** TU API KEY DE OPENWEATHERMAP HA SIDO INSERTADA AQUÍ ***
    const API_KEY = '469bb8bf6db3aad7c48d46857b31a95d';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    // Elementos del DOM
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const errorMessage = document.getElementById('error-message');
    const loadingSpinner = document.getElementById('loading-spinner');
    const weatherInfo = document.getElementById('weather-info');

    const cityName = document.getElementById('city-name');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const minMaxTemp = document.getElementById('min-max-temp');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const feelsLike = document.getElementById('feels-like');
    const pressure = document.getElementById('pressure');

    // Función para mostrar/ocultar elementos de estado
    function showLoading() {
        weatherInfo.style.display = 'none';
        errorMessage.style.display = 'none';
        loadingSpinner.style.display = 'block';
    }

    function hideLoading() {
        loadingSpinner.style.display = 'none';
    }

    function showWeatherInfo() {
        weatherInfo.style.display = 'block';
    }

    function showErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        weatherInfo.style.display = 'none';
    }

    // Función principal para obtener el clima
    async function getWeatherData(city) {
        if (!city) {
            showErrorMessage('Por favor, ingresa una ciudad.');
            return;
        }

        showLoading();

        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`); // units=metric para Celsius, lang=es para español
            const data = await response.json();

            if (response.ok) {
                updateWeatherDisplay(data);
                showWeatherInfo();
            } else {
                // Manejar errores de la API (ej. ciudad no encontrada)
                let message = 'No se pudo obtener el clima. Intenta de nuevo.';
                if (data.message) {
                    if (data.message === "city not found") {
                        message = 'Ciudad no encontrada. Verifica el nombre.';
                    } else if (data.message === "Invalid API key") {
                        message = 'Error: Clave API inválida. Revisa tu script.js.'; // Mensaje más específico
                    } else {
                        message = `Error: ${data.message}`;
                    }
                }
                showErrorMessage(message);
            }
        } catch (error) {
            console.error('Error al obtener los datos del clima:', error);
            showErrorMessage('Ocurrió un error de conexión. Intenta más tarde.');
        } finally {
            hideLoading();
        }
    }

    // Función para actualizar la interfaz con los datos del clima
    function updateWeatherDisplay(data) {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Iconos del clima
        minMaxTemp.textContent = `Min: ${Math.round(data.main.temp_min)}°C / Max: ${Math.round(data.main.temp_max)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`; // Convertir m/s a km/h
        feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
        pressure.textContent = `${data.main.pressure} hPa`;
    }

    // Event Listeners
    searchBtn.addEventListener('click', () => {
        getWeatherData(cityInput.value.trim());
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getWeatherData(cityInput.value.trim());
        }
    });

    // Cargar clima por defecto al iniciar (ej. Naucalpan de Juárez)
    getWeatherData('Naucalpan de Juárez');
});
