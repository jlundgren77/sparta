import React from 'react';
import Header from './Header';
import Hero from './Hero';
import EventGrid from './EventGrid';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Hero />
        <EventGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;
