import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherDataProvider from "./context/weatherDataContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <WeatherDataProvider>
        <App />
    </WeatherDataProvider>
  // </React.StrictMode>,
)
