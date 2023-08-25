import React, { useState, createContext, useContext } from 'react';

type Variables = Record<string, any>
type SetVariables = React.Dispatch<React.SetStateAction<Variables>>

type VariablesContextProviderValue = {
    variables: Variables,
    setVariables: SetVariables
}

const VariablesContext = createContext({
  variables: {}, 
  setVariables: () => ({})
} as VariablesContextProviderValue)

export const VariablesProvider = ({children}: {children: React.ReactNode}) => {
  const [variables, setVariables] = useState<Variables>({})
  return (
    <VariablesContext.Provider value={{
      variables, 
      setVariables,
    } as VariablesContextProviderValue}>
      {children}
    </VariablesContext.Provider>
  )
}

export const useVariables = () => {
  const {variables, setVariables} = useContext(VariablesContext)
  return {variables, setVariables}
}
