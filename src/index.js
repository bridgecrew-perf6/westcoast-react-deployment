import React from 'react';
import ReactDOM from 'react-dom/client'

// 4. Import component created in App.jsx
import App from './App';

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />);