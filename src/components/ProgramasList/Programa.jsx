import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { URL_PATH_MEDIA_TURISCLUB, URL_API_TURISCLUB } from "../../utils/constante";

const Programa = () => {
    //recibímos el parámetro enviado por URL
    const { IdPrograma } = useParams();

    const [programa, setPrograma] = useState([]);

    //Inicio Petición API
    var request = `/api/Programs/retrieve/${IdPrograma}`;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);

    var raw = JSON.stringify({ "EntityId": IdPrograma, "CurrencyCode": "CLP" });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    }
    const requestFetch = async () => {
        const response = await fetch(URL_API_TURISCLUB + request, requestOptions);
        const json = await response.json();
        console.log("Entidad: " + json);
        setPrograma(json.entity);


    }

    useEffect(() => {
        requestFetch();

    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    // Fin Petición API


    // Componentes funcionales

    //Cabecera
    const Head = () => {
        return (<>
            <div className="row" style={{ marginTop: '12rem' }}>
                <div className="col-md-12">
                    <h2 id="programTitle" className="mt-4 mb-3 col-sd-12">{programa.Titulo}&nbsp;<small>{programa.SubTitulo}</small>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="zona-area col-md-12">
                    <h5>{programa.Destino}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-3 d-flex">
                    <div className="card mb-4 box-shadow flex-grow-1 p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                        <img className="img-fluid flex-grow-1 rounded-lg" src={URL_PATH_MEDIA_TURISCLUB + programa.Imagen} alt="" style={{ objectFit: "contain", width: '560px', height: 'auto' }} />
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{programa.Dias + " días / " + programa.Noches + " noches"}</h4>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">{programa.PrecioTxt}</p>
                            <h1 className="text-center price-detail"> {formatter.format(programa.PrecioUsd).replace("$", "USD ").replace(",", ".").replace(",", ".")}</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                {programa.Incluye && programa.Incluye.map((include) => {
                                    return <li key={include.Id}><i className="fa fa-check"></i>&nbsp;{include.TextoIncluye}</li>
                                })}
                            </ul>
                        </div >
                    </div >
                </div >
            </div >
        </>);
    }
    //Tasas
    const Tax = () => {
        if (programa.TasasIncluidas && programa.TasasIncluidas.length > 0) {
            return (<div className="alert alert-warning col-lg-12 col-md-6 col-xs-12" role="alert">
                <div>
                    <h4 className="alert-heading">Tasas Incluidas</h4>
                    <ul className="list-unstyled">
                        {programa.TasasIncluidas && programa.TasasIncluidas.sort((a, b) => a.Orden - b.Orden).map((item) => {
                            return <li className="suplemento-detail" key={item.Id}> {item.TextoIncluye}</li>
                        })}
                    </ul>
                </div>
            </div>)
        } else {
            return (<></>)
        }
    }
    // Itinerario
    const Itinerary = () => {
        return (<> {programa.Itinerarios && programa.Itinerarios.map((item) => {
            return <div className="col-md-12-programa col-sm-6-programa">
                <h5 className="itinerario-detail" key={item.Id}> {item.TextoDia} {item.TextoTramo}</h5>
                <p className="itinerario-body-detail" dangerouslySetInnerHTML={{ __html: item.TextoItinerario }}>{ }</p>
            </div>
        })}</>);
    }
    // Observaciones
    const Observations = () => {

        return (<div className="col-md-12-programa">
            <ul className="list-unstyled-programa">
                {programa.Observaciones && programa.Observaciones.sort((a, b) => a.Orden - b.Orden).map((item) => {
                    return <li className="observacion-detail" key={item.Id}>
                        <span style={{ fontSize: 10, verticalAlign: "bottom" }} className="fa-stack">
                            <span className="fa fa-circle-thin fa-stack-2x"></span>
                            <strong className="fa-stack-1x">{item.Orden || item.Correlativo}</strong>
                        </span>&nbsp;{item.TextoIncluye}</li>
                })}
            </ul>
        </div>);
    }
    //Suplementos aéreos
    const Suplements = () => {
        if (programa.SuplementosAereos && programa.SuplementosAereos.length > 0) {
            return (<div className="alert alert-success col-lg-12 col-md-6 col-xs-12 mt-3" role="alert">
                <div>
                    <h4 className="alert-heading">Suplementos Aereos</h4>
                    <ul className="list-unstyled">
                        {programa.SuplementosAereos && programa.SuplementosAereos.sort((a, b) => a.Orden - b.Orden).map((item) => {
                            return <li className="suplemento-detail" key={item.Id}> {item.TextoIncluye}</li>
                        })}
                    </ul>
                </div>
            </div>)
        } else {
            return (<></>)
        }
    }
    //Logos Pie Programa
    const Pie = () => {
        return (<div className="col-sm-12 d-flex flex-row justify-content-around align-items-center">
            {programa.Aerolineas && programa.Aerolineas.sort((a, b) => a.Orden - b.Orden).map((item, i) => {
                return <div key={item.Id} >
                    <img className="img-fluid-programa" src={URL_PATH_MEDIA_TURISCLUB + item.Logo} alt="" />
                </div>
            })}
        </div >);
    }

    return (<>

        <div className="container">
            <Head />

            <Itinerary />
            <Observations />
            <Suplements />
            <Tax />
            {/* <Pie /> */}
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
         */}
    </>);

}

export default Programa;