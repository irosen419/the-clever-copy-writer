import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/styles.css'

function App(props) {
  return (
    <div className="App">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
