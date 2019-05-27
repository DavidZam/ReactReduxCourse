import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import PrimerComponente from './componentes/primer-componente.component'

// ReactDOM.render( < App /> , document.getElementById('root'));
ReactDOM.render( < PrimerComponente /> , document.getElementById('root'));
serviceWorker.unregister();