const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync('./timer/index.html')

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
  statesArray,
  initDOM,
  updateDOM
} = require('./index')

const setProgress = jest.fn()

window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};


let time = window.document.getElementById('time')
let count = window.document.getElementById('count')
let pic = window.document.getElementById('pic')
let about = window.document.getElementById('about')
let message = window.document.getElementById('message')
let state = window.document.getElementById('state')
let lang = window.document.getElementById('lang_label')


beforeEach(() => {
  pomo.started = true
  pomo.state = statesArray[1]
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0
  initDOM()
})

test('updateDOM', () => {
  pomo.minutes = 13
  pomo.seconds = 29
  pomo.count = 1
  pomo.state = statesArray[2]
  updateDOM(setProgress)
  expect(time.textContent).toBe('13:29')
  expect(count.textContent).toBe('1')
  expect(state.textContent).toBe(statesArray[2])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.href).toBe('./img/2.png')
})

test('updateDOM2', () => {
  pomo.minutes = 13
  pomo.seconds = 29
  pomo.count = 0
  pomo.state = statesArray[1]
  updateDOM(setProgress)
  expect(time.textContent).toBe('13:29')
  expect(count.textContent).toBe('0')
  expect(state.textContent).toBe(statesArray[1])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.href).toBe('./img/1.png')
})

test('updateDOM3', () => {
  pomo.minutes = 13
  pomo.seconds = 29
  pomo.count = 4
  pomo.state = statesArray[3]
  updateDOM(setProgress)
  expect(time.textContent).toBe('13:29')
  expect(count.textContent).toBe('4')
  expect(state.textContent).toBe(statesArray[3])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.href).toBe('./img/3.png')
})
