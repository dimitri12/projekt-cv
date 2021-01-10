import React, { Component } from 'react'

export class ExperienceComponent extends Component {
    render() {
        return (
            <section id="services" className="section pt--100 pb--40 bg-light">
                <div className="container">
                     {/*<!-- Section Title Start -->*/}
                    <div className="section--title pb--60 text-center">
                        <h2 className="h2 text-uppercase">Huvudsakliga Erfarenheter</h2>
                    </div>
                     {/*<!-- Section Title End -->*/}

                    <div className="row AdjustRow" data-scroll-reveal="group">
                        <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                             {/*<!-- Service Block Start -->*/}
                            <div className="service--block">
                                <div className="icon">
                                    <i className="fa fa-handshake-o"></i>
                                </div>

                                <div className="title">
                                    <h3 className="h4">Projektledning</h3>
                                </div>

                                <div className="desc">
                                    <p>Leda projekt & team på ett agilt vis med fokus på genomförande av affärsmässiga mål samt tidsenliga leveranser.</p>
                                </div>
                            </div>
                             {/*<!-- Service Block End -->*/}
                        </div>

                        <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                             {/*<!-- Service Block Start -->*/}
                            <div className="service--block">
                                <div className="icon">
                                    <i className="fa fa-search"></i>
                                </div>

                                <div className="title">
                                    <h3 className="h4">Research & Due Diligence</h3>
                                </div>

                                <div className="desc">
                                    <p>Att gå igenom och lyfta ut affärskritisk data samt sätta ihop dokument, presentationer och framåtsträvande planer.</p>
                                </div>
                            </div>
                            {/*<!-- Service Block End -->*/}
                        </div>

                        <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                            {/*<!-- Service Block Start -->*/}
                            <div className="service--block">
                                <div className="icon">
                                    <i className="fa fa-cogs"></i>
                                </div>

                                <div className="title">
                                    <h3 className="h4">Omstrukturering</h3>
                                </div>

                                <div className="desc">
                                    <p>Uppköp är ett hett ord i dagens tech sfär, det blir allt vanligare att bolag växer genom fusioner och andra omstruktureringar.</p>
                                </div>
                            </div>
                           {/*<!-- Service Block End -->*/}
                        </div>

                        <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                            {/*<!-- Service Block Start -->*/}
                            <div className="service--block">
                                <div className="icon">
                                    <i className="fa fa-paint-brush"></i>
                                </div>

                                <div className="title">
                                    <h3 className="h4">Digitalisering</h3>
                                </div>

                                <div className="desc">
                                    <p>Leda utveckling av smarta hållbara och effektiva lösningar genom mjukvaruinitiativ och automatiseringslösningar.</p>
                                </div>
                            </div>
                            {/*<!-- Service Block End -->*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ExperienceComponent
