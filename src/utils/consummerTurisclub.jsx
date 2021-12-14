import React from 'react';
import Cookies from 'js-cookie';
import { URL_API_TURISCLUB } from './constante';

var today = new Date();
var datestring = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

export default class TurisclubConsummer extends React.Component {
    state = {
        entities: [],
        status: false
    }

    query = () => {
        var request = "/api/Parameters/Valores"
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append("Authorization", `Bearer ${Cookies.get('Token')}`);


        var raw = JSON.stringify({
            "Take": 0,
            "Sort": ["FechaHasta"],
            "Criteria": [
                [["FechaDesde"], "<=", datestring],
                "and",
                [["FechaHasta"], ">=", datestring]
            ]
        });

        var requestOptions = {

            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: "follow"

        };

        this.queryFetch(request, requestOptions);

    }

    queryFetch = async (request, requestOptions) => {
        const response = await fetch(URL_API_TURISCLUB + request, requestOptions);
        const json = await response.json();

        this.setState({ entities: json.entities, status: true });

    }

    componentDidMount() {

        this.query();
        console.log('Fecha de Hoy :>> ', datestring);
    }

    render() {
        return (<>


            <div>
                {this.state.entities.map((entity) => {
                    return (<p key={entity.Id} style={{ color: 'white' }}>
                        Tipo Cambio Contado: ${entity.TipoCambio} | Tipo Cambio Crédito: ${entity.ValorTerrestre == null ? (entity.TipoCambio + 10) : entity.ValorTerrestre}
                    </p>);
                })}
            </div>
        </>);
    }

}

