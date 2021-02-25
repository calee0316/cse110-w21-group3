const fs = require('fs')
const html = fs.readFileSync('./index.html')
window.document.body.innerHTML = html
const {
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
  updateDOM,
  setProgress
} = require('./index')

window.HTMLMediaElement.prototype.play = () => {

}

const time = window.document.getElementById('time')
const count = window.document.getElementById('count')
const pic = window.document.getElementById('pic')
const about = window.document.getElementById('about')
const message = window.document.getElementById('message')
const state = window.document.getElementById('state')
const lang = window.document.getElementById('lang_label')
const bar = window.document.getElementById('currProg')
const button = window.document.getElementById('button')

beforeEach(() => {
  pomo.started = true
  pomo.state = statesArray[1]
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0
  initDOM()
})

test('updateDOM', () => {
  pomo.minutes = 3
  pomo.seconds = 0
  pomo.count = 1
  pomo.state = statesArray[2]
  pomo.perc = 40
  updateDOM(setProgress)
  expect(time.textContent).toBe('03:00')
  expect(count.textContent).toBe('1')
  expect(state.textContent).toBe(statesArray[2])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.src).toBe('http://localhost/img/2.png')
  expect(pomo.perc).toBe(40)
  expect(bar.style.width).toBe('40%')
})

test('updateDOM2', () => {
  pomo.minutes = 22
  pomo.seconds = 0
  pomo.count = 0
  pomo.state = statesArray[1]
  pomo.perc = 12.0
  updateDOM(setProgress)
  expect(time.textContent).toBe('22:00')
  expect(count.textContent).toBe('0')
  expect(state.textContent).toBe(statesArray[1])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.src).toBe('http://localhost/img/1.png')
  expect(pomo.perc).toBe(12)
  expect(bar.style.width).toBe('12%')
  expect(button.textContent).toBe('STOP')
})

test('updateDOM3', () => {
  pomo.minutes = 5
  pomo.seconds = 0
  pomo.count = 4
  pomo.state = statesArray[3]
  pomo.perc = 28.6
  updateDOM(setProgress)
  expect(time.textContent).toBe('05:00')
  expect(count.textContent).toBe('4')
  expect(state.textContent).toBe(statesArray[3])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.src).toBe('http://localhost/img/3.png')
  expect(pomo.perc).toBe(28.6)
  expect(bar.style.width).toBe('28.6%')
  expect(button.textContent).toBe('STOP')
})

test('updateDOM5', () => {
  pomo.minutes = 25
  pomo.seconds = 0
  pomo.count = 0
  pomo.state = statesArray[0]
  pomo.perc = 0
  pomo.started = false
  updateDOM(setProgress)
  expect(time.textContent).toBe('25:00')
  expect(count.textContent).toBe('0')
  expect(state.textContent).toBe(statesArray[0])
  expect(about.textContent).toBe('ABOUT US')
  expect(message.textContent).toBe('SUCCESSFUL POMOS')
  expect(lang.textContent).toBe('Language: ')
  expect(pic.src).toBe('http://localhost/img/1.png')
  expect(pomo.perc).toBe(0)
  expect(bar.style.width).toBe('0%')
  expect(button.textContent).toBe('START')
})
