import React, {Component} from 'react';
import Header from './header.component';
import Productos from './productos.component';
import Footer from './footer.component';

class Aplicacion extends Component {
    render() {
        return (
            <div>
                <Header />
                <Productos />
                <Footer />
            </div>
        )
    }
}

export default Aplicacion;