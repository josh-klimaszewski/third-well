import React, { Component } from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UpdatesPage from './pages/UpdatesPage';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <IndexPage />
      <AboutPage />
      <ContactPage />
      <UpdatesPage />
      <Footer />
      </div>
    );
  }
}

export default App;
