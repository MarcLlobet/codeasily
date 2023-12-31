import { OperatorNameKey } from "./names"

export type OperatorInfo = {
  description: string
}

export const operatorInfo: Record<OperatorNameKey, OperatorInfo> = {
  IF: {
    description: 'allows something to happen if the condition is true'
  },
  WHILE: {
    description: 'will do something while the condition is true'
  },
  FOR_LOOP: {
    description: '',
  },
  IS_EQUAL: {
    description: 'compares if both values are the same'
  },
  IS_NOT_EQUAL: {
    description: 'compares if both values are different'
  },
  GREATER_THAN: {
    description: ''
  },
  GREATER_OR_EQUAL_THAN: {
    description: ''
  },
  LOWER_THAN: {
    description: ''
  },
  LOWER_OR_EQUAL_THAN: {
    description: ''
  },
}