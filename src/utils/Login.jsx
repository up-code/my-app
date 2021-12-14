import React, { useEffect } from 'react';
import Cookies from 'js-cookie';


import { URL_API_TURISCLUB, URL_API_USERNAME, URL_API_PASSWORD } from './constante';

const Login = () => {


    var request = '/api/auth';
    var myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "Username": URL_API_USERNAME, "Password": URL_API_PASSWORD });

    var config = {
        method: "POST",
        headers: myHeader,
        body: raw

    }

    const RequestLogin = async () => {
        const response = await fetch(URL_API_TURISCLUB + request, config);
        const tok = await response.json();
        Cookies.set("Token", tok.value)

    }

    useEffect(() => {
        RequestLogin();
    }, [])
    // return token;

    return (<></>)
}
export default Login;






