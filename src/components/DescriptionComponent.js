import React, { Component } from 'react';

export class DescriptionComponent extends Component {

    render() {
        return (
            <section id="banner" className="banner--section" data-bg-parallax="img/banner-img/darker.jpg" data-overlay="0.8">
                <div className="vc--parent">
                    <div className="vc--child">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    {/*<!-- Banner Content Start -->*/}
                                    <div className="banner--content text-center pt--160 pb--100">
                                        <div className="title text-uppercase">
                                            <h2 className="h3 text-white"><span className="text-primary">Axture </span>presenterar</h2>
                                        </div>

                                        <div className="name text-uppercase">
                                            <h3 className="h2 text-white">Mattias Andersson</h3>
                                        </div>

                                        <div className="role fs--18 fw--700 text-white">
                                            <p>Business Expert / Legal-tech</p>
                                        </div>

                                        <div className="desc">
                                            <p>Mattias Andersson är auktoriserad skattejurist med sju års erfarenhet som skattekonsult. Inom skattejuridikens område har han arbetat med omstruktureringar, långsiktig skatteoptimering, rättsutredningar, internationella ärenden, incitamentsprogram, due diligence, skatteprocesser, inkomstdeklarationer, bolagsdeklarationer, skatterevisioner, generationsskiften, frivilliga rättelser, utlandsetablering m.m.<br/><br/>Mattias är en ambitiös och driven person med ett gott affärssinne i sina projekt. Han är en framåblickande, resultatorienterad och en praktisk teamledare med god organisationsförmåga. Han trivs med komplexa utmaningar där digitalisering gärna kan vara en av lösningarna. Han tycker om att bygga en god kundkontakt och vara nära kunden och använder gärna sin entreprenörsanda och kompetens från ekonomprogrammet och juristprogrammet.<br/><br/>Mattias har i 2020 startat bolaget Globify Hub AB som är ett legaltech bolag som riktar sig mot att digitalisera komplexa processer inom juridiska frågor. Globify Hub håller även på med ett nytt IP, ett uberliknande koncept för att enkelt kunna utföra legala tjänster globalt och brygga kompetensgapet som finns när cross-border processer ska skapas.</p>
                                        </div>

                      {/*<!--                  <div class="action">
                                          <a href="#" class="btn btn-default">Hire Me</a>
                                            <a href="#" class="btn btn-white">My Works</a>    
                        </div> -->*/}
                        
                                    
                                    {/*<!-- Banner Content End -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DescriptionComponent