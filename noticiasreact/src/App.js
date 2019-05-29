import React, { Component, Fragment } from 'react';
import Header from './components/header.component';
import ListaNoticias from './components/lista-noticias.component';

class App extends Component {
  state = { 
    noticias : []
  }

  async componentDidMount() {
    this.consultNewsAPI();
  }

  consultNewsAPI = async () => {
    const urlAPI = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c6fb03c0f76546edaf7ae8736f7b356f`;

    const response = await fetch(urlAPI);
    const news = await response.json();

    // filtramos las noticias por las que tienen imagen
    const filterNews = news.articles.filter(x => x.urlToImage !== null && x.author !== null);

    this.setState({
      noticias: filterNews
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header
          titulo='API de noticias'
        />

        <div className="container white contenedor-noticias">
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
     );
  }

}

export default App;
