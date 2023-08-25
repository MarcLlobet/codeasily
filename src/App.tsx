import React, { useEffect } from 'react';
import './App.css';
import { useVariables } from './context/variables';

function App() {
  const {variables, setVariables} = useVariables()

  useEffect(() => {
    setVariables?.({'dos': 2})
  }, [])

    console.log({variables})
    
  return (
    <div>A</div>
  );
}

export default App;
