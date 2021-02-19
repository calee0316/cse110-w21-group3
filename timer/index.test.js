const {
  update,
  pomo,
  statesArray,
  workMinutes,
  workSeconds,
  doubleDigit,
  audio
} = require('./index')

window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};
document.body.innerHTML =
  '<div>' +
  '<select name="language-picker-select" id="language-picker-select">' +
  '</select>' +
  '<div class="state">' +
  '<h2 id="state">Click Start To Begin</h2>' +
  '</div>' +
  '<div class="complete">' +
  '<h3 id="count">0 pomos completed</h3>' +
  '</div>' +
  '<div class="timer">' +
  '<img src="./img/1.png" id="pic">' +
  '<h2 id="time">25:00</h2>' +
  '<div class="button">' +
  '<button class="button1" id="button">Start</button>' +
  '</div>' +
  '</div>' +
  '</div>'
pomo.init()

jest.useFakeTimers()
update()

beforeEach(()=>{
  pomo.started = true
  pomo.state = statesArray[1]
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0
})

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
