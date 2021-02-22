let {
  pomo,
  update,
  workMinutes,
  workSeconds,
  restMinutes,
  restSeconds,
  lRestSeconds,
  lRestMinutes,
  doubleDigit,
  statesArray
} = require('./index')

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
  updateDOM.mock.calls.length = 0
})
const updateDOM = jest.fn()
const initDOM = jest.fn()
jest.useFakeTimers()
pomo.init(initDOM, updateDOM)

//work to rest
test('test for update function, see if state changes from work to rest, correct time set after 25 min', () => {
  //25 minutes
  jest.advanceTimersByTime(1501000)
  expect(pomo.minutes).toBe(5)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(1)
  expect(pomo.state).toBe(statesArray[2])
  expect(pomo.perc).toBe(0)
  expect(updateDOM.mock.calls.length).toBe(1501)
})

test('test for update function, 5 min', () => {
  //5 minutes
  jest.advanceTimersByTime(300000)
  expect(pomo.state).toBe(statesArray[1])
  expect(pomo.count).toBe(0)
  expect(pomo.minutes).toBe(20)
  expect(pomo.seconds).toBe(0)
  expect(pomo.perc).toBe(20)
  expect(updateDOM.mock.calls.length).toBe(300)
})
// state changes, work to rest, rest to work, work to long rest, long rest to work,
// make sure updateDom() and setProgress() is called in the right set of times.

//rest to work
test('test for update function, see if state changes from rest back to work, correct time set should be 25 mins for work', () => {
  jest.advanceTimersByTime(1802000)
  expect(pomo.minutes).toBe(25)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(1)
  expect(pomo.state).toBe(statesArray[1])
  expect(pomo.perc).toBe(0)
  expect(updateDOM.mock.calls.length).toBe(1802)
})

//work to long rest
test('test for update function, see if state changes from work to long rest, correct time set should be 15 mins for long break', () => {
  jest.advanceTimersByTime(6907000)
  expect(pomo.minutes).toBe(15)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(4)
  expect(pomo.state).toBe(statesArray[3])
  expect(pomo.perc).toBe(0)
  expect(updateDOM.mock.calls.length).toBe(6907)
})

//long rest to work
test('test for update function, see if state changes from long rest to work, correct time set should be 25 mins for work', () => {
  jest.advanceTimersByTime(7808000)
  expect(pomo.minutes).toBe(25)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(4)
  expect(pomo.state).toBe(statesArray[1])
  expect(pomo.perc).toBe(0)
  expect(updateDOM.mock.calls.length).toBe(7808)
})

//not started
test('test for when timer is not started', () => {
  pomo.started = false
  jest.advanceTimersByTime(10000)
  expect(pomo.minutes).toBe(25)
  expect(pomo.seconds).toBe(0)
  expect(pomo.count).toBe(0)
  expect(pomo.state).toBe(statesArray[0])
  expect(pomo.perc).toBe(0)
  expect(updateDOM.mock.calls.length).toBe(10)
})


// //updateDOM() time
// test('check if the updateDom() runs correct amount of time',()=>{
//   const thing = jest.fn()
//   jest.advanceTimersByTime(3000)
//   expect(thing).toHaveBeenCalledTimes(3)
// })

test('convert single digit to double digit', () => {
  expect(doubleDigit(1)).toBe('01')
})

test('convert double digit to double digit', () => {
  expect(doubleDigit(12)).toBe('12')
})
