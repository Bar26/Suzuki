import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './assets/styles/style.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        
        <App />
    </Provider>
);

// reportWebVitals();



