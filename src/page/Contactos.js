import React, { Component } from 'react'

export default class Contacto extends Component{
    render(){
        return <> <div className="fh5co-hero">
        <div className="fh5co-overlay"></div>
        <div
          className="fh5co-cover text-center"
          data-stellar-background-ratio="0.5"
          style={{backgroundImage: "url('../assets/contactenos.jpeg')",
           width: "1440px", height: "800px"}}>
          <div className="desc animate-box">
            <h2>Contactanos.</h2>
          </div>
        </div>
      </div>

      <div id="fh5co-contact" className="fh5co-section animate-box">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-md-6">
                <h3 className="section-title">Nuestra dirección</h3>
                <p>
                  Si usted tiene preguntas, utilice el formulario de Contacto
                  y le responderemos a la brevedad.
                </p>
                <ul className="contact-info">
                  <li>
                    <i className="icon-location-pin"></i>Coyancura 2241- Of. 53,
                    Providencia - Santiago
                  </li>
                  <li><i className="icon-phone2"></i>+562 2446-6900</li>
                  <li>
                    <i className="icon-mail"></i
                    ><a href="mailto:contacto@upcode.cl">contacto@upcode.cl</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        className="form-control"
                        id=""
                        cols="30"
                        rows="7"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Enviar Mensaje"
                        className="btn btn-primary btn-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      
</>
    }
}