import React, { useEffect } from 'react';
import './App.css';
import { useVariables } from './context/variables';
import { operators } from './operators';

function App() {
  const {variables, setVariables} = useVariables()

  useEffect(() => {
    setVariables?.({UN: 1, DOS: 2, TRES: 3, SEGON_TRES: 3})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log({
      variables,
      is: operators.IS_EQUAL(variables.TRES, variables.SEGON_TRES),
      isNot: operators.IS_NOT_EQUAL(variables.TRES, variables.DOS),
      if: operators.IF(
        operators.IS_EQUAL(variables.TRES, variables.SEGON_TRES), 
        console.log(variables.DOS)
      )
    })
    
  return (
    <div>A</div>
  );
}

export default App;
