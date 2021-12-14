import React, { useState, useEffect } from "react";
//import axios from "axios";
import { TEST_URL_API, URL_API_TURISCLUB } from "./constante";

export const Consummer = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [entities, setEntities] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "Take": 1,
        "Sort": ["FechaHasta"],
        "Criteria": [
            [["FechaDesde"], "<= ", "2021-12-07"],
            "and",
            [["FechaHasta"], ">=", "2021-12-07"]
        ]
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };




    useEffect(() => {
        fetch("https://apirest.turisclub.cl/api/Parameters/Valores", { requestOptions })
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    console.log(data);
                    setEntities(data.entities);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    if (error) {
        return <div style={{ fontSize: "20px", color: "white" }}>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (<>
            <h2>Respuesta de API TURISCLUB</h2>
            <ul>
                {entities.map((entity) => (
                    <h2 key={entity.id}>$ {entity.TipoCambio}</h2>
                ))}
            </ul>
        </>);
    }
}