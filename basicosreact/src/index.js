import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './componentes/aplicacion.component'

// ReactDOM.render( < App /> , document.getElementById('root'));
ReactDOM.render( < Aplicacion /> , document.getElementById('root'));
serviceWorker.unregister();