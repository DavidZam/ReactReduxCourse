import React from 'react';
import Noticia from './noticia.component';

const ListaNoticias = ({noticias}) => {

    return ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia} 
                />
            ))}
        </div>
    )
}
 
export default ListaNoticias;