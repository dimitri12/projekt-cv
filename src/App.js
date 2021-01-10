//eslint-disable-next-line
/* eslint-disable react/no-direct-mutation-state */
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import DescriptionComponent from './components/DescriptionComponent';
import AboutComponent from './components/AboutComponent';
import ExperienceComponent from './components/ExperienceComponent';
import PromotionComponent from './components/PromotionComponent';
import ResumeComponent from './components/ResumeComponent';
import SkillsComponent from './components/SkillsComponent';
import TesimonialComponent from './components/TesimonialComponent';
import Footer from './components/layout/Footer';
//import ContactComponent from './components/ContactComponent';
//import ClientsComponent from './components/ClientsComponent';
//import WorkComponent from './components/WorkComponent';
//import PortfolioComponent from './components/PortfolioComponent';

class App extends React.Component {

  render(){
  return (
    <div className="App">
        <div className="wrapper">
        <Header />
          <DescriptionComponent />
          <AboutComponent />
          <ExperienceComponent />
          <PromotionComponent />
          <ResumeComponent />
          <SkillsComponent />
          <TesimonialComponent />
         <Footer />

        </div>
        <div id="backToTop">
            <a href="/#" className="btn btn-default active"><i className="fa fa-long-arrow-up"></i></a>
        </div>

        </div>
        
  );
  }
}

export default App;
