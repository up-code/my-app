import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import { Link, useParams } from 'react-router-dom';

import { URL_API_TURISCLUB, URL_PATH_MEDIA_TURISCLUB } from "../../utils/constante";


const ProgramasList = () => {

    const { IdArea, Id } = useParams();
    const [programas, setProgramas] = useState([]);


    var request = "/api/Programs/List";
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);



    var raw = JSON.stringify({
        "EqualityFilter": { "IDArea": IdArea, "IdDestino": Id }, "CurrencyCode": "USD"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }

    const queryFetch = async () => {
        const response = await fetch(URL_API_TURISCLUB + request, requestOptions);
        const json = await response.json();
        setProgramas(json.entities);
    }


    useEffect(() => {
        queryFetch();
    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return (<>
        <div className="fh5co-section">
            <div className="container">
                <div className="row">
                    <div className="text-center" style={{ marginTop: '5rem' }}><h1>Programas</h1></div>
                    <div className="col-md-12 fh5co-news">
                        <ul>
                            {programas.map((entity) => {
                                return (<React.Fragment key={entity.Id}>
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
    </>);
}
export default ProgramasList;