import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(<div id="footer">
          
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <p className="fh5co-social-icons">
                    <a href="/"><i className="icon icon-twitter2"></i></a>
                    <a href="/"><i className="icon icon-facebook2"></i></a>
                    <a href="/"><i className="icon icon-instagram"></i></a>
                  </p>
                  <p>
                    Copyright 2021 <a href="https://upcode.cl">UP Code</a>. All
                    Rights Reserved. <br />Hecho con
                    <i className="icon-heart3"></i> by
                
                    <a href="https://upcode.cl/" rel="noopener noreferrer" target="_blank"> UP Code</a>
                    / Demo Template:
                    <a href="/" target="_blank" rel="noopener noreferrer">Agencias de Viaje</a>
                  </p>
                </div>
              </div>
            </div>
          </div>);
    }
}