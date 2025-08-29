# Chuck Norris Jokes - Landing Page

Una landing page interactiva que muestra chistes aleatorios de Chuck Norris consumiendo la API pública de Chuck Norris. Desarrollada con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

- **Diseño responsive**: Adaptable a dispositivos móviles, tablets y escritorio
- **Interfaz moderna**: Utilizando CSS Grid, Flexbox y variables CSS
- **Consumo de API**: Integración con la API pública de Chuck Norris
- **Interactividad**: Animaciones y transiciones suaves
- **Accesibilidad**: Implementa mejores prácticas de accesibilidad web
- **Buenas prácticas**: Código semántico, separación de concerns y organización modular

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones y diseño responsive
- **JavaScript ES6+**: Async/await, fetch API, manejo de eventos
- **API Chuck Norris**: [api.chucknorris.io](https://api.chucknorris.io)

## 📁 Estructura del Proyecto
chuck-norris-jokes/
-│

-├── index.html # Archivo HTML principal

-├── styles.css # Hoja de estilos

-├── script.js # Lógica de la aplicación

-└── README.md # Documentación


## 🎨 Diseño

El diseño sigue principios modernos de UI/UX:
- Esquema de colores: Azul oscuro, rojo y naranja
- Tipografía: Segoe UI con respaldo de fuentes seguras
- Iconografía: Font Awesome para iconos
- Efectos: Hover effects, transiciones y sombras
- Layout: Sistema de grid responsivo

## ⚙️ Funcionalidades

1. **Obtención de chistes**: Botón para recuperar chistes aleatorios de la API
2. **Indicador de carga**: Feedback visual durante las peticiones
3. **Manejo de errores**: Gestión elegante de fallos en la API
4. **Interfaz responsive**: Adaptación a diferentes tamaños de pantalla
5. **Animaciones**: Efectos visuales para mejorar la experiencia de usuario

## 🔌 API Utilizada

**Chuck Norris Jokes API**
- Endpoint: `https://api.chucknorris.io/jokes/random`
- Método: GET
- Respuesta: JSON con chiste aleatorio

Ejemplo de respuesta:
```json
{
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "random-id",
  "url": "https://api.chucknorris.io/jokes/random-id",
  "value": "Chuck Norris can divide by zero."
}
