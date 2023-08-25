import { OperatorNameKey } from "./names"

export const operators: Record<OperatorNameKey, Function> = {
  IF: (condition: boolean, nestedCallback: Function = () => {}) => {
    if(condition){
      nestedCallback()
    }
  },
  WHILE: (condition: Function, nestedCallback: Function = () => {}) => {
      while(condition()){
        nestedCallback()
      }
  },
  FOR_LOOP: (times: number, nestedCallback: Function): void => {
    let i = 1
    for(i; i <= times; i+=1){
      nestedCallback()
    }
  },
  IS_EQUAL: (value1: any, value2: any): boolean => value1 === value2,
  IS_NOT_EQUAL: (value1: any, value2: any): boolean => value1 !== value2,
  GREATER_THAN: (value1: any, value2: any): boolean => value1 > value2,
  GREATER_OR_EQUAL_THAN: (value1: any, value2: any): boolean => value1 >= value2,
  LOWER_THAN: (value1: any, value2: any): boolean => value1 < value2,
  LOWER_OR_EQUAL_THAN: (value1: any, value2: any): boolean => value1 <= value2,
  
}