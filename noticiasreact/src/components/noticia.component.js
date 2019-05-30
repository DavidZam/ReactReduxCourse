import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    // extraer los datos de cada noticia
    const { urlToImage, url, title, description, source } = noticia

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <a href={url} target="_blank" rel="noopener noreferrer">
                
                    <div className="card-image">
                        <img src={urlToImage} alt={title} />
                    </div>

                    <div className="card-content font-black-color">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </a> 

                {/* <div className="margin-left: 4px">
                <span>{author}</span>
                </div> */}

                <div className="font-underlined">
                    <span >{source.name}</span>
                </div>

                {/* <div className="card-action">
                    <a href={url} target="_blank" className="waves-effect waves-light btn">
                        Ver noticia completa
                    </a>
                </div> */}
                
            </div> 
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;