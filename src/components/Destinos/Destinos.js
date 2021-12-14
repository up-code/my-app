import React, { Component } from 'react'

import DestinosHeader from './DestinosHeader/DestinosHeader';
import DestinosBody from './DestinosBody/DestinosBody';

export default class DestinosCard extends Component{
render(){
    return(<>
        <DestinosHeader></DestinosHeader>
        <DestinosBody></DestinosBody>
    </>)
}
}