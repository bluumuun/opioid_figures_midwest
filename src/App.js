// import logo from './logo.svg';
import './App.css';
import React from 'react';
import StateDataInput from './components/StateDataInput';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <StateDataInput /> {/* Render the StateDataInput component */}
      {/* Add other components as needed */}
      <Footer/>
    </div>
  );
}

export default App;

