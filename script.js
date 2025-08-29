/**
 * Script para la página de chistes de Chuck Norris
 * Obtiene chistes en español desde la API
 */

// Variables globales
const jokeText = document.getElementById('jokeText');
const loading = document.getElementById('loading');
const getJokeBtn = document.getElementById('getJokeBtn');
const newJokeBtn = document.getElementById('newJokeBtn');

// URL de la API de Chuck Norris en español
const API_URL = 'https://api.chucknorris.io/jokes/random?language=es';

// Elementos para animaciones
const jokeContainer = document.querySelector('.joke-container');

/**
 * Función para obtener un chiste de la API
 * @returns {Promise<void>}
 */
async function getChuckNorrisJoke() {
    try {
        // Mostrar el indicador de carga y ocultar el texto del chiste
        showLoadingState();
        
        // Realizar la petición a la API
        const response = await fetch(API_URL);
        
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Mostrar el chiste después de un pequeño retraso para mejor UX
        setTimeout(() => {
            hideLoadingState();
            displayJoke(data.value);
        }, 500);
        
    } catch (error) {
        // Manejar errores
        handleError(error);
    }
}

/**
 * Muestra el estado de carga
 */
function showLoadingState() {
    loading.style.display = 'block';
    jokeText.style.display = 'none';
    jokeContainer.classList.add('loading');
}

/**
 * Oculta el estado de carga
 */
function hideLoadingState() {
    loading.style.display = 'none';
    jokeText.style.display = 'block';
    jokeContainer.classList.remove('loading');
}

/**
 * Muestra el chiste en la interfaz
 * @param {string} joke - El chiste a mostrar
 */
function displayJoke(joke) {
    jokeText.textContent = joke;
    
    // Animación para resaltar el nuevo chiste
    jokeText.classList.add('fade-in');
    setTimeout(() => {
        jokeText.classList.remove('fade-in');
    }, 1000);
}

/**
 * Maneja los errores de la aplicación
 * @param {Error} error - El error ocurrido
 */
function handleError(error) {
    console.error('Error al obtener el chiste:', error);
    hideLoadingState();
    jokeText.textContent = '¡Ups! Chuck Norris roundhouse-kickeó nuestra API. Intenta de nuevo.';
}

/**
 * Inicializa la aplicación
 */
function initApp() {
    // Añadir event listeners para los botones
    getJokeBtn.addEventListener('click', getChuckNorrisJoke);
    newJokeBtn.addEventListener('click', getChuckNorrisJoke);
    
    // Opcional: Cargar un chiste al iniciar la página
    // getChuckNorrisJoke();
}

// Iniciar la aplicación cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}