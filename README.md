# YupWeather-WEB 🌦️

A modern, responsive weather web application that provides current weather conditions and a multi-day forecast for any city around the world. Built with Node.js, Express, and EJS, it integrates with the OpenWeatherMap API to deliver real-time meteorological data wrapped in a clean, animated user interface.

---

## 📖 Description

YupWeather-WEB allows users to search for a city and instantly view:

- **Current weather**: temperature, humidity, wind speed, atmospheric pressure, sunrise/sunset times, and a descriptive icon.
- **5-day forecast**: expected weather for the upcoming days with min/max temperatures and conditions.

The app follows a classic **MVC-inspired architecture** with separation of concerns between routes, services, and data models, making it easy to maintain and extend.

---

## 🚀 Technologies Used

### Backend

- **[Node.js](https://nodejs.org/)** — JavaScript runtime environment for executing server-side code.
- **[Express 5](https://expressjs.com/)** — Minimalist web framework for handling routing, middleware, and HTTP requests.
- **[Axios](https://axios-http.com/)** — Promise-based HTTP client used to consume the external OpenWeatherMap API.
- **[dotenv](https://github.com/motdotla/dotenv)** — Loads environment variables (such as the API key) from a `.env` file into `process.env`.

### Templating Engine

- **[EJS](https://ejs.co/)** — Embedded JavaScript templating engine used to render dynamic HTML pages on the server side.

### External API

- **[OpenWeatherMap API](https://openweathermap.org/api)** — Provides current weather data and 5-day/3-hour forecast data based on city name.

### Frontend

- **HTML5 / CSS3** — Structure and styling of the user interface.
- **Vanilla JavaScript** — Client-side interactivity (form handling, DOM updates).
- **[Anime.js](https://animejs.com/)** — Lightweight JavaScript animation library used to create smooth UI animations and transitions.

### Deployment

- **[Render](https://render.com/)** — Cloud platform used for hosting the application (uses `PORT` and `HOST` environment variables).

### Version Control

- **Git** — Distributed version control system.

---

## 📁 Project Structure

```
YupWeather-WEB/
├── app.js                  # Main application entry point
├── package.json            # Project metadata and dependencies
├── models/
│   ├── day.js             # Data model / normalizer for current weather day
│   └── forecast.js        # Data model / normalizer for forecast data
├── routes/
│   └── weather.js         # Express routes for weather endpoints
├── services/
│   └── weatherService.js  # Business logic: API calls to OpenWeatherMap
├── views/
│   └── index.ejs          # Main EJS template rendered to the user
├── public/
│   ├── css/
│   │   └── style.css      # Application styles
│   ├── js/
│   │   ├── cliente.js     # Client-side JavaScript
│   │   └── anime.js       # Anime.js library
│   └── images/            # Static image assets
└── .env                   # Environment variables (not committed)
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### 2. Clone the repository

```bash
git clone <repository-url>
cd YupWeather-WEB
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
WEATHER_API_KEY=your_openweathermap_api_key
PORT=3000
HOST=localhost
```

### 5. Start the server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🔌 Available Scripts

| Command     | Description                                  |
| ----------- | -------------------------------------------- |
| `npm start` | Starts the Node.js server with `node app.js` |

---

## 🌐 API Endpoints

| Method | Route                       | Description                                   |
| ------ | --------------------------- | --------------------------------------------- |
| GET    | `/`                         | Renders the home page (search form + results) |
| GET    | `/weather?city=<city_name>` | Returns weather data and forecast for a city  |

---

## 🔑 Environment Variables

| Variable          | Description                   | Required |
| ----------------- | ----------------------------- | -------- |
| `WEATHER_API_KEY` | Your OpenWeatherMap API key   | ✅ Yes   |
| `PORT`            | Port where the server listens | Optional |
| `HOST`            | Host where the server listens | Optional |

---

## 🛠️ How It Works

1. The user enters a city name in the search form on the frontend.
2. The Express route receives the request and calls the `weatherService`.
3. The service makes two parallel HTTP requests (via Axios) to OpenWeatherMap:
   - Current weather endpoint (`/data/2.5/weather`)
   - 5-day forecast endpoint (`/data/2.5/forecast`)
4. The raw responses are normalized through the data models (`day.js` and `forecast.js`).
5. The cleaned data is passed to the EJS template (`index.ejs`) and rendered as HTML.
6. The frontend uses Anime.js to animate the results once they appear.

---
