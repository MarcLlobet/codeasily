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
})