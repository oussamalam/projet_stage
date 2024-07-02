import React from 'react';
import './App.css';
import Header from './Header'; // Import the Header component
import Footer from './Footer';
import logo from './logo.svg'; //  import the logo 

function App() {
  return (
    <div className="App">
      <Header /> {/* the Header component here */}
      <Footer /> {/* the Footer component */}
    </div>
  );
}

export default App;
