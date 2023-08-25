import { OperatorNameKey } from "./names"

export const operators: Record<OperatorNameKey, Function> = {
  IF: (condition: boolean, nestedCallback: Function = () => {}) => {
    if(condition){
      nestedCallback()
    }
  },
  WHILE: (condition: boolean, nestedCallback: Function = () => {}) => {
      while(condition){
        nestedCallback()
      }
  },
  IS_EQUAL: (value1: any, value2: any): boolean => value1 === value2,
  IS_NOT_EQUAL: (value1: any, value2: any): boolean => value1 !== value2,
}