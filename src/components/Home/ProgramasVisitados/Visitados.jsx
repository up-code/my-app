import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { URL_API_TURISCLUB, URL_PATH_MEDIA_TURISCLUB } from '../../../utils/constante';

export default class VisitadosCard extends Component {
  state = {
    entities: [],
    status: false
  }

  query = () => {
    var request = '/api/Programs/List'
    var myHeaders = new Headers();
    if (!Cookies.get('Token')) {
      myHeaders.append('Content-Type', 'application/json');
    } else {
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);
    }

    var raw = JSON.stringify({ "EqualityFilter": { "Activo": true }, "CurrencyCode": "USD" });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    this.queryFetch(request, requestOptions);
  }

  queryFetch = async (request, requestOptions) => {
    const response = await fetch(URL_API_TURISCLUB + request, requestOptions);
    const json = await response.json();
    this.setState({ entities: json.entities, status: true });


  }
  componentDidMount() {

    this.query();

  }



  render() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    const ProgramasConsultados = (lista) => {
      return [...this.state.entities]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
        .slice(0, 3)
    }
    var listaProgramasConsultados = ProgramasConsultados(this.state.entities);
    return (
      <div className="fh5co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 fh5co-news">
              <h3>Programas más consultados</h3>
              <ul>
                {listaProgramasConsultados.map((entity) => {
                  return (< React.Fragment key={entity.Id}>
                    <div className="col-md-6 ">
                      <li>

                        <Link to={`/Programa/${entity.Id}`}>
                          <span className="fh5co-date">{entity.Destino}</span>
                          <h3>{entity.Titulo}</h3>
                          <p>{entity.SubTitulo}</p>
                          <h3>Desde: {formatter.format(entity.PrecioUsd).replace("$", "USD ").replace(",", ".").replace(",", ".")}</h3>
                          <h2>{entity.Dias} días / {entity.Noches} noches</h2>
                        </Link>

                      </li>
                    </div>
                    <div className="col-md-6 fh5co-testimonial d-flex">
                      <img
                        src={URL_PATH_MEDIA_TURISCLUB + entity.Imagen}
                        alt=""
                        className="mb20"
                        style={{ width: "555px", height: "226px" }}
                      />

                    </div>
                  </React.Fragment>)


                })}


              </ul>
            </div>

          </div>
        </div>
      </div >

    );
  }
}