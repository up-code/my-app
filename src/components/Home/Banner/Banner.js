import React, { Component } from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { URL_API_TURISCLUB, URL_PATH_MEDIA_TURISCLUB } from '../../../utils/constante';

export default class BannerCard extends Component {

  state = {
    entities: [],
    status: false
  }

  query = () => {
    var request = "/api/Definitions/Banners";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);

    var raw = JSON.stringify({ "Sort": ["Orden"], "EqualityFilter": { "SiActivadoWeb": true, "IDTIpoBanner": 2 }, "CurrencyCode": "USD" });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    this.queryFecth(request, requestOptions);
  }

  queryFecth = async (request, requestOptions) => {
    const response = await fetch(URL_API_TURISCLUB + request, requestOptions);
    const json = await response.json();
    this.setState({ entities: json.entities, status: true });

  }

  componentDidMount() {
    this.query();
  }

  render() {

    return (<>
      <div className="fh5co-listing" id="areas">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {this.state.entities.map((entity) => {
              return (<div key={entity.Id} className="col-md-4 col-sm-4 fh5co-item-wrap">

                <Link to={`/areas/${entity.IdArea}`} className="fh5co-listing-item" >
                  <img
                    src={URL_PATH_MEDIA_TURISCLUB + entity.Src}
                    alt=""
                    className="img-responsive"
                  />
                  <div className="fh5co-listing-copy">
                    <h2>{entity.Titulo}</h2>
                    <span className="icon">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </div>
                </Link>

              </div>);
            })}
          </div>
        </div>
      </div>

    </>);


  }
}