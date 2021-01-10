import React, { Component } from 'react'

export class SkillsComponent extends Component {
    render() {
        return (
            <section id="skills" className="section pt--100 pb--40" data-bg-img="img/skills-img/darker.jpg" data-overlay="0.7">
                <div className="container">
                    {/*<!-- Section Title Start -->*/}
                    <div className="section--title pb--60 text-center">
                        <h2 className="h2 text-white text-uppercase">Färdigheter</h2>
                    </div>
                    {/*<!-- Section Title End -->*/}

                    <div className="row">
                        <div className="col-md-6 pb--60">
                            {/*<!-- Skills Items Start -->*/}
                            <div className="skills--items">
                                <div className="skill--title text-uppercase">
                                    <h3 className="h4 text-white">Personliga Färdigheter</h3>
                                </div>

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Strukturerad</span>
                                        <span className="skill--count float--right">80%</span>
                                    </h4>

                                    <p className="skill--progress" style={{ 'width': '80%' }} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Problemlösande</span>
                                        <span className="skill--count float--right">90%</span>
                                    </h4>

                                    <p className="skill--progress" style={{'width': '90%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Kommunikation</span>
                                        <span className="skill--count float--right">60%</span>
                                    </h4>

                                    <p className="skill--progress" style={{'width': '60%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Inspirerande</span>
                                        <span className="skill--count float--right">65%</span>
                                    </h4>

                                    <p className="skill--progress" style= {{'width': '65%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Lyhörd</span>
                                        <span className="skill--count float--right">70%</span>
                                    </h4>

                                    <p className="skill--progress" style= {{'width': '70%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}
                            </div>
                            {/*<!-- Skills Items End -->*/}
                        </div>

                        <div className="col-md-6 pb--60">
                            {/*<!-- Skills Items Start -->*/}
                            <div className="skills--items">
                                <div className="skill--title text-uppercase">
                                    <h3 className="h4 text-white">Professionella Färdigheter</h3>
                                </div>

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Skattejuridik</span>
                                        <span className="skill--count float--right">80%</span>
                                    </h4>

                                    <p className="skill--progress" style={{'width': '80%' }}data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Arbeta i team</span>
                                        <span className="skill--count float--right">60%</span>
                                    </h4>

                                    <p className="skill--progress" style= {{'width': '60%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Projektledning</span>
                                        <span className="skill--count float--right">90%</span>
                                    </h4>

                                    <p className="skill--progress" style={{'width': '90%'}}data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Affärssinne</span>
                                        <span className="skill--count float--right">65%</span>
                                    </h4>

                                    <p className="skill--progress" style= {{'width': '65%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}

                                {/*<!-- Skill Item Start -->*/}
                                <div className="skill--item">
                                    <h4 className="h6 fw--400 text-white text-uppercase clearfix">
                                        <span className="skill--text">Digitalisering</span>
                                        <span className="skill--count float--right">70%</span>
                                    </h4>

                                    <p className="skill--progress" style= {{'width': '70%'}} data-trigger="progress_bar"></p>
                                </div>
                                {/*<!-- Skill Item End -->*/}
                            </div>
                            {/*<!-- Skills Items End -->*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SkillsComponent
