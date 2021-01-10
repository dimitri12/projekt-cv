import React from 'react';

function Header(){
    return (
        <header id="header" className="header--section">
                <nav className="header--navbar navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="index.html" className="navbar-brand">
                                <span className="vc--parent">
                                    <span className="vc--child">
                                        <img src={"img/logo1.png"} alt=""/>
                                    </span>
                                </span>
                            </a>
                        </div>

                        <div id="headerNav" className="navbar-collapse collapse">
                            <ul className="header--nav-links ff--primary nav navbar-right">
                                <li className="active"><a href="#header" data-trigger="scroll">Kandidaten</a></li>
                                <li><a href="#aboutme" data-trigger="scroll">Mattias Ord</a></li>
                                <li><a href="#services" data-trigger="scroll">Erfarenheter</a></li>
                          {/*     <li><a href="#portfolio" data-trigger="scroll">Portfolio</a></li> -->*/}
                                <li><a href="#skills" data-trigger="scroll">Färdigheter</a></li>
                          {/*<!--      <li><a href="#blog" data-trigger="scroll">Blog</a></li> -->*/}
                          {/*<!--      <li><a href="#contact" data-trigger="scroll">Contact</a></li>
                                <li class="dropdown"> -->*/}
                            {/*<!--        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages<span class="caret"></span></a> -->*(})*/}

                              {/*<!--      <ul class="dropdown-menu">
                                        <li><a href="index.html">Home Page</a></li>
                                        <li><a href="blog.html">Blog Page</a></li>
                                        <li><a href="blog-details.html">Blog Details Page</a></li>
                                        <li><a href="contact.html">Contact Page</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                            </ul> -->
                          <!-- Header Nav Links End -->*/}
                          </ul>
                        </div>
                    </div>
                </nav>
                {/*<!-- Header Navbar End -->*/}
            </header>
    )
}


export default Header;