import React, {Component} from 'react';
import HeaderComponent from './header.component';

class PrimerComponente extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <p>Hola desde mi primer componente</p>
            </div>
        )
    }
}

export default PrimerComponente;