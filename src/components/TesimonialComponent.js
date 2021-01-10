import React, { Component } from 'react'

export class TesimonialComponent extends Component {
    render() {
        return (
            <section id="testimonial" className="section pt--90 pb--90" data-bg-parallax={"img/testimonial-img/darker.jpg"} data-overlay="0.5">
                <div className="container">
                    {/*<!-- Testimonial Slider Start -->*/}
                    <div className="testimonial--slider owl-carousel" data-owl-dots="true">
                        {/*<!-- Testimonial Item Start -->*/}
                        <div className="testimonial--item text-white">
                            <div className="icon">
                                <i className="fa fa-comments"></i>
                            </div>

                            <blockquote>
                                <p>Imponerad av engagemang med dubbla examen inom ekonomi och juridik. Mattias kunskap inom affärsutveckling & digitalisering kopplat till skatt & compliance gör honom unik. Globify Hub idén är helt rätt i tiden och förväntas bli en riktig gamechanger i branschen.</p>

                                <footer>Shahjahan Khan @ Axture AB</footer>
                            </blockquote>
                        </div>
                        {/*<!-- Testimonial Item End -->

                        <!-- Testimonial Item Start -->*/}
            {/*<!--            <div class="testimonial--item text-white">
                            <div class="icon">
                                <i class="fa fa-comments"></i>
                            </div>

                            <blockquote>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                <footer>Roger Martin @ Company Inc.</footer>
                            </blockquote>
                    </div> -->*/}
                        {/*<!-- Testimonial Item End -->

                        <!-- Testimonial Item Start -->*/}
            {/*<!--         <div class="testimonial--item text-white">
                            <div class="icon">
                                <i class="fa fa-comments"></i>
                            </div>

                            <blockquote>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                <footer>Wayne Stone @ Company Inc.</footer>
                            </blockquote>
                        </div> -->
                    <!-- Testimonial Item End -->*/}
                    </div>
                    {/* <!-- Testimonial Slider End -->*/}
                </div>
            </section>
        )
    }
}

export default TesimonialComponent
