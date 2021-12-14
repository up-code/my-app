import React, { Component } from 'react';

import HomeHeader from './HomeHeader/Header';
import BannerCard from './Banner/Banner';
import VisitadosCard from './ProgramasVisitados/Visitados.jsx';


export default class Home extends Component {
    render() {
        return (<>
            <HomeHeader />
            <BannerCard />
            <VisitadosCard />
        </>);
    };
};