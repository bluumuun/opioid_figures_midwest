import React, { useState } from 'react';
// import './App.css';

function StateDataInput() {
  // Initialize state variables for the Midwestern states
  const midwesternStates = [
    { name: 'Ohio', deathRate: 48.1 },
    { name: 'Illinois', deathRate: 29.0 },
    { name: 'Indiana', deathRate: 43.0 },
    { name: 'Michigan', deathRate: 31.5 },
    { name: 'Wisconsin', deathRate: 31.6 },
    { name: 'Minnesota', deathRate: 24.5 },
    { name: 'Iowa', deathRate: 15.3 },
    { name: 'Missouri', deathRate: 36.5 },
    { name: 'North Dakota', deathRate: 17.2 },
    { name: 'South Dakota', deathRate: 12.6 },
    { name: 'Nebraska', deathRate: 11.4 },
    { name: 'Kansas', deathRate: 24.3 },
  ];

  // Initialize state variables for displaying the random state and death rate
  const [randomState, setRandomState] = useState(null);

  // Function to select a random state and display it
  const getRandomState = () => {
    const randomIndex = Math.floor(Math.random() * midwesternStates.length);
    setRandomState(midwesternStates[randomIndex]);
  };

  return (
    <div>
      <h2>Drug Overdose Mortality in the Midwest (2021)</h2>
      <h3>The opioid epidemic has decimated thousands of lives, those suffering from addiction, and their families. Click the randomizer to see the Mortality Rate in the MidWest. *figures are expected climb each year* Before you begin, guess which state has the highest death rate in the MidWest.</h3>

      {/* Randomizer Button */}
      <button onClick={getRandomState}>Randomize State</button>

      {/* Display the selected state and death rate */}
      {randomState && (
        <div>
          <h3>Randomly Selected State:</h3>
          <p>State Name: {randomState.name}</p>
          <p>Death Rate: {randomState.deathRate}</p>
        </div>
      )}
    </div>
  );
}

export default StateDataInput;
