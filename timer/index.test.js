let {pomo, update, updateDOM, setProgress, initDOM,workMinutes, workSeconds, doubleDigit, statesArray} = require('./index')

window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};

beforeEach(() => {
  pomo.test = true;
  pomo.started = true
  pomo.state = statesArray[1]
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0
})

jest.useFakeTimers()
update()

//work to rest
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
  //jest.clearAllMocks()
})
// state changes, work to rest, rest to work, work to long rest, long rest to work, 
// make sure updateDom() and setProgress() is called in the right set of times.

//rest to work
test('test for update function, see if state changes from rest back to work, correct time set should be 25 mins for work', ()=>{
  jest.advanceTimersByTime(1802000)
  expect(pomo.minutes).toBe(25)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(1)
  expect(pomo.state).toBe(statesArray[1])
})

//work to long rest
test('test for update function, see if state changes from work to long rest, correct time set should be 15 mins for long break', ()=>{
  jest.advanceTimersByTime(6907000)
  expect(pomo.minutes).toBe(15)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(4)
  expect(pomo.state).toBe(statesArray[3])
})

//long rest to work
test('test for update function, see if state changes from long rest to work, correct time set should be 25 mins for work', ()=>{
  jest.advanceTimersByTime(7808000)
  expect(pomo.minutes).toBe(25)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(4)
  expect(pomo.state).toBe(statesArray[1])
})

test('convert single digit to double digit', () => {
  expect(doubleDigit(1)).toBe('01')
})

test('convert double digit to double digit', () => {
  expect(doubleDigit(12)).toBe('12')
})
