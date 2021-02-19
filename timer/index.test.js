let {
  update,
  updateDOM,
  pomo,
  statesArray,
  workMinutes,
  workSeconds,
  doubleDigit
} = require('./index')

// updateDOM = jest.fn()
jest.mock('./index', () => ({ updateDOM: jest.fn()}))
// pomo.setProgress = jest.fn()
window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};

beforeEach(() => {
  pomo.started = true
  pomo.state = statesArray[1]
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0
})

jest.useFakeTimers()
update()

test('test for update function, see if state changes from work to rest, correct time set after 25 min', () => {
  //25 minutes
  jest.advanceTimersByTime(1501000)
  expect(pomo.minutes).toBe(5)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(1)
  expect(pomo.state).toBe(statesArray[2])
})

test('test for update function, 5 min', () => {
  //5 minutes
  jest.advanceTimersByTime(300000)
  expect(pomo.state).toBe(statesArray[1])
  expect(pomo.count).toBe(0)
  expect(pomo.minutes).toBe(20)
  expect(pomo.seconds).toBe(0)
  jest.clearAllMocks()
})


test('convert single digit to double digit', () => {
  expect(doubleDigit(1)).toBe('01')
})

test('convert double digit to double digit', () => {
  expect(doubleDigit(12)).toBe('12')
})
