import axios from "axios";
import React from "react";
import { TEST_URL_API } from "./constante";

export default class RequestApi extends React.Component {

    state = {
        users: [],
        status: false
    }

    componentDidMount() {
        var request = "/users";

        axios.get(TEST_URL_API + request).then(resp => {
            const users = resp.data;
            this.setState({ users, status: true });
        });

    }


    render() {
        return (<>

            <h1>Esta es la Peticion</h1>
            < div >
                {this.state.users.map(item => (
                    <div key={item.id}>{item.name} - Email: {item.email} - Company Name: {item.company.name} | City: {item.address.city}</div>
                ))}
            </ div >
        </>);
    }
}