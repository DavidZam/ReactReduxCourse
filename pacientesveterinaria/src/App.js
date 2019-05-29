import React, { Component } from 'react';
import Header from './components/header-component';
import NuevaCita from './components/nueva-cita.component';
import ListaCitas from './components/lista-citas.component';
import './bootstrap.min.css'

class App extends Component {
  state = {
    citas: []
  }

  // Cuando el componente se ha montado (se carga la pagina)
  componentDidMount() {
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage) {
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }

  // Cuando el componente se modifica (eliminar/agregar cita)
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    // copiar el state actual:
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state:
    this.setState({
      citas
    })
  }

  // metodo para eliminar las citas del state
  eliminarCita = id => {
    // crear una copia del state
    const citasActuales = [...this.state.citas];

    // utilizar filter para extraer el id del array
    const citas = citasActuales.filter(cita => cita.id !== id)

    // actualizar el state
    this.setState({
      citas
    })

  }

  render() {

    return ( 
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
                citas={this.state.citas}
                eliminarCita={this.eliminarCita}
            />

          </div>
        </div>
      </div>
     );
  }
}

export default App;
