import React, { Component } from 'react';

export class AboutComponent extends Component {

    render() {
        return (
            <section id="aboutme" className="section pt--100 pb--40">
                <div className="container">
                    {/*<!-- Section Title Start -->*/}
                    <div className="section--title pb--60 text-center">
                        <h2 className="h2 text-uppercase">Mattias ord</h2>
                    </div>
                    {/*<!-- Section Title End -->*/}

                    <div className="row row--md-vc">
                        <div className="col-md-6 pb--60">
                            {/*<!-- Image Block Start --> */}
                            <div className="img--block">
                                <img src="img/about-img/mattiasanderssonbig.jpg" alt=""/>
                            </div>
                             {/*<!-- Image Block End -->*/}
                        </div>
                        
                        <div className="col-md-6 pb--60">
                             {/*<!-- About Block Start -->*/}
                            <div className="about--block">
                                <div className="title">
                                    <h2 className="h4 fw--700 text-uppercase">Att våga digitalisera är framgångsfaktorn</h2>
                                </div>

                                <div className="details pt--30 text-dark">
                                    <p>Juristbranschen karakteriseras ofta som långsam och oförmögen till nya innovationer. Branschen har igenom decennier gått från skrivmaskin till datorer och från faxmaskiner till emails, samtidigt som andra branscher bokstavligen revolutionerats flertalet gånger om under samma korta tid. Min åsikt är att digitaliseringen har hållts tillbaka på grund av diverse fyrkantiga regelverk men även de höga timarvoden som inte skulle gynnas om processer plötsligt gick mycket fortare. Vissa uppgifter som kräver låg juridisk kompetens men som är tidskrävande kan enkelt effektiviseras genom digitalisering. Många nya tjänster för såväl avtalsmallar och digitala signaturer har skapats och blivit framgångsrika koncept. Däremot finns det en myriad av olika juridiska tjänster som skulle kunna förbättras genom digitalisering.</p>
                                </div>

                                <div className="details pt--30">
                                    <p>Jag har i mitt yrkesverksamma liv arbetat med due diligence, skatteoptimering, fusioner, fissioner och omstruktureringar för att uppnå skattemässiga fördelar för kunden. Mina erfarenheter har gjort mig bevandrad inom både research och compliance. Detta kombinerat med min tekniska kompetens gör att det finns mycket som jag kan erbjuda er.<br/><br/>Språkkunskaper<br/>Svenska (Modersmål eller tvåspråkiga kunskaper)<br/>Engelska (Fullständiga yrkeskunskaper)<br/>Franska (Grundläggande kunskaper)<br/>Koreanska (Grundläggande kunskaper)<br/><br/>Nedan finner ni information om Mattias nya projekt.</p>
                                </div>

                   {/*<!--              <div className="info pt--50">
                                    <table className="ff--primary">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <i className="fa fa-calendar"></i>
                                                    <span>Ålder</span>
                                                </th>
                                                <td>12/10/1990</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <i className="fa fa-phone"></i>
                                                    <span>Phone</span>
                                                </th>
                                                <td><a href="tel:+123123123456" className="btn-link">(+123) 123 123456</a></td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <i className="fa fa-envelope"></i>
                                                    <span>Email</span>
                                                </th>
                                                <td><a href="mailto:john@example.com" className="btn-link">john@example.com</a></td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <i className="fa fa-skype"></i>
                                                    <span>Skype</span>
                                                </th>
                                                <td>john_doe</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <i className="fa fa-globe"></i>
                                                    <span>Website</span>
                                                </th>
                                                <td><a href="www.johndoe.com" className="btn-link">www.johndoe.com</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="social text-dark pt--30">
                                    <ul className="nav">
                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                    </ul>
                      </div> -->*/}

                                <div className="action pt--60">
                                {/*// eslint-disable-next-line*/}
                                    <a href="https://drive.google.com/file/d/1TzGjIf4eWYt8yU2UYWh0F3QnPyCnyEL3/view?fbclid=IwAR3pNLlu-sAOKfwK2O0XNuDWI-j3nSKPeWBtd4ZVkCxArX52qj52Mb911r0" target="_blank" className="btn btn-default" rel="noreferrer">Ladda ner Globify Hub PDF</a> <a href="https://drive.google.com/file/d/1ZbWkQWnHfs1s_cZqasncNeOQQ-8a5QKH/view?fbclid=IwAR1EjyODNLNR097cGDAvJH0nNhTy_Ar61HrCCyPwoC7psMMReg6hlKActPI" target="_blank" className="btn btn-default" rel="noreferrer">Ladda ner Atlashub pdf </a>
                                </div>

                            </div>
                             {/*<!-- About Block End -->*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AboutComponent