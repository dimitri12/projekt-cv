import React, { Component } from 'react'

export class PromotionComponent extends Component {
    render() {
        return (
            <section className="section pt--100 pb--100" data-bg-parallax="img/call-to-action-img/darker.jpg" data-overlay="0.7">
            <div className="container">
                <div className="cta--block text-center">
                    <div className="title">
                        <h2 className="h2 text-white">VI DIGITALISERAR ERA JURIDISKA UTMANINGAR</h2>
                    </div>
                    <div className="content fs--20 pt--10 text-white">
                        <p>Vår målsättning är att alltid kunna presentera ett digitaliseringsförslag som effektiviserar er verksamhet.</p>
                    </div>
                    <div className="action pt--20">
      {/*<!--                  <a href="#" class="btn btn-white">Hire Me Now</a> -->*/}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default PromotionComponent
