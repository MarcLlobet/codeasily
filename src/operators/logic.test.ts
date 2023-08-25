import { operators } from "./logic"

describe('operators logic', () => {
  describe('IS_EQUAL', () => {
    it('returns true', () => {
      const comparison = operators.IS_EQUAL(2,2)
      expect(comparison).toBe(true)
    })

    it('returns false', () => {
      const comparison = operators.IS_EQUAL(1,2)
      expect(comparison).toBe(false)
    })
  })

  describe('IS_NOT_EQUAL', () => {
    it('returns true', () => {
      const comparison = operators.IS_NOT_EQUAL(1,2)
      expect(comparison).toBe(true)
    })

    it('returns false', () => {
      const comparison = operators.IS_NOT_EQUAL(2,2)
      expect(comparison).toBe(false)
    })
  })

  describe('IF', () => {
    beforeEach(() => {
      jest.resetAllMocks()
    })
    it('callback is triggered when condition is true', () => {
      const mockCallback = jest.fn()
      operators.IF(true, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })

    it('callback is triggered when condition is false', () => {
      const mockCallback = jest.fn()
      operators.IF(false, mockCallback)
      expect(mockCallback).not.toHaveBeenCalled()
    })
  })

  describe('WHILE', () => {
    beforeEach(() => {
      jest.resetAllMocks()
    })
    it('callback is triggered as many times as number passed', () => {
      let value = 0
      
      const mockCallback = jest.fn(() => {value += 1})
      const conditionFunction = () => value < 5
      operators.WHILE(conditionFunction, mockCallback)
      expect(mockCallback).toHaveBeenCalledTimes(5)
    })
  })

  describe('FOR_LOOP', () => {
    beforeEach(() => {
      jest.resetAllMocks()
    })
    it('callback is triggered as many times as number passed', () => {
      const mockCallback = jest.fn()
      operators.FOR_LOOP(5, mockCallback)
      expect(mockCallback).toHaveBeenCalledTimes(5)
    })
  })

  describe('GREATER_THAN', () => {
    it('returns true if greater', () => {
      expect(operators.GREATER_THAN(5, 4)).toBe(true)
    })

    it('returns false if equal', () => {
      expect(operators.GREATER_THAN(5, 5)).toBe(false)
    })

    it('returns false if lower', () => {
      expect(operators.GREATER_THAN(4, 5)).toBe(false)
    })
  })
  describe('GREATER_OR_EQUAL_THAN', () => {
    it('returns true if greater', () => {
      expect(operators.GREATER_OR_EQUAL_THAN(5, 4)).toBe(true)
    })

    it('returns true if equal', () => {
      expect(operators.GREATER_OR_EQUAL_THAN(5, 5)).toBe(true)
    })

    it('returns false if lower', () => {
      expect(operators.GREATER_OR_EQUAL_THAN(4, 5)).toBe(false)
    })
  })

  describe('LOWER_THAN', () => {
    it('returns true if lower', () => {
      expect(operators.LOWER_THAN(4, 5)).toBe(true)
    })

    it('returns false if equal', () => {
      expect(operators.LOWER_THAN(5, 5)).toBe(false)
    })

    it('returns false if greater', () => {
      expect(operators.LOWER_THAN(5, 4)).toBe(false)
    })
  })

  describe('LOWER_OR_EQUAL_THAN', () => {
    it('returns true if lower', () => {
      expect(operators.LOWER_OR_EQUAL_THAN(4, 5)).toBe(true)
    })

    it('returns true if equal', () => {
      expect(operators.LOWER_OR_EQUAL_THAN(5, 5)).toBe(true)
    })

    it('returns false if greater', () => {
      expect(operators.LOWER_OR_EQUAL_THAN(5, 4)).toBe(false)
    })
  })
})