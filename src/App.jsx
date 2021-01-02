import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
import Contact2 from './components/contact2';
import JsonData from './data/data.json';
// import Avatar from './components/features2';
import './App.css'
export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <div className='top'>Hello</div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Contact data={this.state.landingPageData.Contact} />
        {/* <Avatar></Avatar> */}
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact2 data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
