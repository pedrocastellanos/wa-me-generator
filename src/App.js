import React, { Component, createRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import Clipboard from 'react-clipboard.js';

class App extends Component {
  state={
    url: ""
  }

    inputPhone = createRef()
    inputMessage = createRef()
    
    componentDidMount=()=>{
      intlTelInput(this.inputPhone.current, {
        separateDialCode: true,
        initialCountry: "cu",
      });
    }
    
    handleSubmit=(e)=>{
      e.preventDefault()
      // Number
      const countryData = window.intlTelInputGlobals.getInstance(this.inputPhone.current);
      const countryCode = countryData.getSelectedCountryData().dialCode
      const number = this.inputPhone.current.value
      const fullNumber = `${countryCode}${number}`

      // Message
      const message = this.inputMessage.current.value.replace(/\s+/g,"%20")
      
      // URL
      // https://cutt.ly/api/api.php?key=52c635a717af3ada1538540db364abbbe52bc&short=https://google.com
      let url = `https://wa.me/${fullNumber}?text=${message}`  
      fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
        'Authorization': 'Bearer {YOUR BITLY API KEY}',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": url})
      })
      .then(res=>res.json())
      .then(res=>{
        this.setState({
          url:res.link,
        })
      })
      .catch(err=>console.log(err))
    }

    render() { 
        return (
            <>
            <header>
            <nav className="navbar navbar-default active">
                <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#home" >
                    <img src="./assets/logo/icons8-whatsapp-64.svg" className="navbar-logo-img" alt="navbar-logo-img"/>
                    Wa.Me Generator
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#home" >Inicio</a></li>
                    <li><a href="#about" >Acerca De</a></li>
                    <li>
                        <p>
                        <a href="#create" className="btn btn-default navbar-btn" >Crear Link</a>
                        </p>
                    </li>

                    </ul>
                </div> 
                </div>
            </nav>
        </header>
        <div className="hero-full-container background-image-container white-text-container" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Wa.Me Generator</h1>
                        <p>Creador de enlaces de WhatsApp fácil y rápido</p>
                        <br/>
                        <a href="#create" className="btn btn-default btn-lg" >Crear!</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-container" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        <div className="text-center">
                            <h2>Acerca De</h2>
                            <p>
                            <b>¿Qué es un link de WhatsApp?</b> WhatsApp cuenta con una funcionalidad que permite crear links o enlaces en los que los usuarios pueden hacer clic para abrir una conversación (chat) directamente con la persona que creo el link.
                                <br />
                                Facebook, la empresa dueña de WhatsApp compró un dominio con el nombre wa.me que ha usado para poder abrir los chats de mensajería sin necesidad de abrir la aplicación, directamente en forma de ventana en cualquier navegador. ... Además permitire reproducirlo desde el mismo chat de WhatsApp, sin tener que abrir otras aplicaciones
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div
                  id="carousel-example-generic"
                  className="carousel carousel-fade slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img
                        className="img-responsive"
                        src="./assets/images/img-06.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption card-shadow reveal">
                        <h3>Fácil</h3>
                        <a
                          className="left carousel-control"
                          href="#carousel-example-generic"
                          role="button"
                          data-slide="prev"
                        >
                          <i className="fas fa-chevron-left" aria-hidden="true"></i>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="right carousel-control"
                          href="#carousel-example-generic"
                          role="button"
                          data-slide="next"
                        >
                          <i className="fas fa-chevron-right" aria-hidden="true"></i>
                          <span className="sr-only">Next</span>
                        </a>
                        <p>
                        La función de clic para chatear de WhatsApp te permite comenzar un chat con alguien sin necesidad de tener su número de teléfono guardado en la libreta de contactos de tu dispositivo. Si conoces el número de teléfono de una persona y esta tiene una cuenta activa de WhatsApp, puedes crear un enlace que te permitirá comenzar un chat con esa persona. Cuando hagas clic en el enlace, se abrirá el chat con esa persona automáticamente. Esta función está disponible tanto en el teléfono como en WhatsApp Web.
                        </p>
                        <a
                          href="#create"
                          className="btn btn-primary"
                          
                        >
                          Crear enlace!
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        className="img-responsive"
                        src="./assets/images/img-07.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption card-shadow reveal">
                        <h3>Útil</h3>
                        <a
                          className="left carousel-control"
                          href="#carousel-example-generic"
                          role="button"
                          data-slide="prev"
                        >
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="right carousel-control"
                          href="#carousel-example-generic"
                          role="button"
                          data-slide="next"
                        >
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                          <span className="sr-only">Next</span>
                        </a>
                        <p>
                        Clic para Chatear es un servicio especialmente indicado para cuando queremos enviar un mensaje a un contacto puntual del que no tengamos interés en almacenar su número de teléfono a largo plazo: una empresa, un negocio, un mensajero o un particular con el que interactuemos de manera transitoria.
                        </p>
                        <a
                          href="#create"
                          className="btn btn-primary"
                          
                        >
                          Crear enlace!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container contact-container" id="create">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="section-container-spacer">
                  <h2 className="text-center">Obtenlo fácil y rápido</h2>
                </div>
                <div className="card-container">
                  <div className="card card-shadow col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 reveal">
                    <form className="reveal-content" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group phone-input_group">
                            <input
                              type="tel"
                              className="form-control phone-input"
                              ref={this.inputPhone}
                              placeholder="Número de Teléfono"
                              required={true}
                              />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="Ingrese su mensaje"
                              ref={this.inputMessage}
                            >
                            </textarea>
                          </div>
                          <button type="submit" className="btn btn-primary btn-block">
                            Crear Link
                          </button>
                          {this.state.url && 
                            <div className="show-url bg-info" style={{position: 'relative'}}>
                              <p>{this.state.url}</p>
                              <Clipboard data-clipboard-text={this.state.url} className="btn btn-info" style={{position: 'absolute',top: '0' , right: '0'}}>
                                <i className="fas fa-copy"></i>
                              </Clipboard>
                            </div>
                          }
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="card-image col-xs-12"
                    style={{
                      backgroundImage: "url('/assets/images/img-01.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    }
}
export default App;
