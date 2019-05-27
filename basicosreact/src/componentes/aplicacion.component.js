import React, {Component} from 'react';
import Header from './header.component';
import Productos from './productos.component';
import Footer from './footer.component';

class Aplicacion extends Component {

    state = {
        productos : [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco', precio: 50},
            {nombre: 'Trombon', precio: 300},
            {nombre: 'Trompeta', precio: 500},
            {nombre: 'Saxofon', precio: 800}
        ]
    };

    render() {
        return (
            <div>
                <Header 
                    titulo="Nuestra Tienda Virtual"
                />
                <Productos 
                    productos={this.state.productos} 
                />
                <Footer />
            </div>
        )
    }
}

export default Aplicacion;