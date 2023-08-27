import React, { useState, createContext, useContext } from 'react';

type SetVariables = React.Dispatch<React.SetStateAction<Variables>>
type Variables = Record<string, any>


const SetVariablesContext = createContext((() => {}) as SetVariables) 
const GetVariablesContext = createContext({} as Variables)

export const VariablesProvider = ({children}: {children: React.ReactNode}) => {
  const [variables, setVariables] = useState<Variables>({})
  return (
    <SetVariablesContext.Provider 
      value={ setVariables  as SetVariables}
    >
      <GetVariablesContext.Provider value={variables}>
      {children}
      </GetVariablesContext.Provider>
    </SetVariablesContext.Provider>
  )
}

export const useVariables = (): [Variables, SetVariables] => {
  const setVariables = useContext(SetVariablesContext)
  const variables = useContext(GetVariablesContext)

  return [variables, setVariables]
}
