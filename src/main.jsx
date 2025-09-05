import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from 'react-router';
import MovieContext from './context/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
    <MovieContext>
        <App />
    </MovieContext>
    </BrowserRouter>
)