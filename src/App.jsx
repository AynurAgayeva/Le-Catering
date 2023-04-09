import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Footer />


      </div>
    )
  }
}

export default App