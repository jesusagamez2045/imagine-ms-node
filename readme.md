# Microservicio Node.js - Imagine Apps

Este microservicio escucha eventos de Redis publicados por el backend en **Laravel** (ej: cuando una tarea se marca como completada) y simula el envío de notificaciones.  

Forma parte de la prueba técnica **Imagine Apps** (stack: Laravel + Node.js + React + React Native).

---

## 🚀 Tecnologías

- Node.js (>= 18)
- Redis (pub/sub)
- npm o yarn

---

## 📂 Estructura del proyecto

node-ms/
│── src/
│ ├── index.js # Punto de entrada principal
│── .env # Configuración de entorno (host/puerto de Redis)
│── package.json
│── .gitignore
│── README.md


---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz con lo siguiente:

```env
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

- Instala dependencias

    npm install

- Para arrancar

    npm start

- Correr test

    npm run test