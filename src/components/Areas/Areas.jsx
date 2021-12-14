import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Link, useParams } from 'react-router-dom';

import { URL_API_TURISCLUB, URL_PATH_MEDIA_TURISCLUB } from "../../utils/constante";




const Areas = () => {
    const { IdArea } = useParams();
    const [state, setState] = useState([]);


    useEffect(() => {

        var request = "/api/Definitions/Areas";
        var myHeaders = new Headers();
        if (!Cookies.get('Token')) {
            myHeaders.append('Content-Type', 'application/json');
        } else {
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);
        }

        var raw = JSON.stringify({
            "EqualityFilter": { "IDArea": IdArea }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch(URL_API_TURISCLUB + request, requestOptions)
            .then((response) => response.json())
            .then((data) => { setState(data.entities) },
                (error) => {
                    console.error(error);
                });
    }, []);

    return (<>
        <div className="fh5co-listing" style={{ marginTop: '13rem' }} id="areas">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {state.map((entity, i) => {
                        return (<div key={i} className="col-md-4 col-sm-4 fh5co-item-wrap">

                            <Link to={`/ProgramasList/${IdArea}/${entity.Id}`} className="fh5co-listing-item">
                                <img
                                    src={URL_PATH_MEDIA_TURISCLUB + entity.Imagen}
                                    alt={entity.Area}
                                    className="img-responsive"
                                />
                                <div className="fh5co-listing-copy">
                                    <h2>{entity.Destino}</h2>
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

export default Areas;