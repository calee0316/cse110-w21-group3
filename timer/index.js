/**
 * @file Creates all the majority of the functionality of the Pomodoro Timer.
 * Will start updating attributes and the DOM on window load.
 * @author Calvin Lee, Yijie Ruan, Ruichen Li
 */

 /**
  * @type { number } 
  * Represents the number of minutes in a work interval.
  */
const workMinutes = 25
/**
 * @type { number }
 * Represents the number of seconds on the clock at start of work interval.
 */
const workSeconds = 0
/**
  * @type { number } 
  * Represents the number of minutes in a rest interval.
  */
const restMinutes = 5
/**
 * @type { number }
 * Represents the number of seconds on the clock at start of rest interval.
 */
const restSeconds = 0
/**
  * @type { number } 
  * Represents the number of minutes in a long rest interval.
  */
const lRestMinutes = 15
/**
 * @type { number }
 * Represents the number of seconds on the clock at start of long rest interval.
 */
const lRestSeconds = 0

const statesDefault = ['Click Start To Begin', 'Work', 'Rest', 'Long Rest']
const buttonsDefault = ['START', 'STOP']
const statesChinese = ['点击开始', '进行中', '短休', '长休']
const statesKorean = ['시작을 누르세요', '작업', '휴식', '긴 휴식']
const statesJapanese = ['クリックして開始', '作業中', '短い休憩', '長い休憩']
const buttonsChinese = ['开始', '结束']
const buttonsKorean = ['시작', '정지']
const buttonsJapanese = ['開始', '終止']

const states = {
  def: statesDefault,
  CH: statesChinese,
  KR: statesKorean,
  JP: statesJapanese
}

const buttons = {
  def: buttonsDefault,
  CH: buttonsChinese,
  KR: buttonsKorean,
  JP: buttonsJapanese
}

const aboutUs = {
  def: 'ABOUT US',
  CH: '关于我们',
  KR: '팀 소개',
  JP: 'わたしたち'
}

const label = {
  def: 'Language: ',
  CH: '语言： ',
  KR: '언어: ',
  JP: '言語: '
}

const complete = {
  def: 'SUCCESSFUL POMOS',
  CH: '帕玛多拉 完成',
  KR: '완료된 포모',
  JP: 'ポモス 完成'
}

let statesArray = states.def
let buttonsArray = buttons.def
const powerDown = new Audio('./audio/powerdown.wav')
const coin = new Audio('./audio/coin.wav')
const stageClear = new Audio('./audio/stageclear.wav')
const gameOver = new Audio('./audio/gameover.wav')
const oneUp = new Audio('./audio/1up.wav')
const oof = new Audio('./audio/oof.wav')
let audio = coin

/**
 * @type { object }
 * Object that contains attributes that define the current state of the timer.
 * @property { boolean } started - Shows whether the timer has been started or not.
 * @property { Object } timeDom - The DOM element that represent the current time on the countdown.
 * @property { Object } stateDom - The DOM element that represents the current state (work, rest, etc) of timer.
 * @property { Object } picDom - The DOM element that represents the current picture (red/green/gold mushroom).
 * @property { Object } numPomoDom - The DOM element that represents the number of completed work cycles.
 * @property { number } minutes - The current number of minutes on the timer.
 * @property { number } seconds - The current number of seconds on the timer. 
 * @property { String } state - The current state of the timer (work, rest, etc).
 * @property { number } count - The current count of number of completed work cycles.
 * @property { Object } barDom - The DOM element that represents the completed (black) part of the progress bar.
 * @property { number } perc - The percentage of the current state that has been completed.
 * @property { String } pomoCompleted - The number of successful pomos message, will change based on current language.
 * @property { String } lang_label - The label for the language selector, changes based on current language.
 * @property { String } about - The text that represents the link to the team's documentation page, changes based on current language.
 * @property { function } init - Function that initializes DOM elements by calling initDOM as well as starts calling update. 
 */
const pomo = {
  started: false,
  timeDom: null,
  stateDom: null,
  picDom: null,
  numPomoDom: null,
  minutes: workMinutes,
  seconds: workSeconds,
  state: statesArray[0],
  count: 0,
  barDOM: null,
  perc: 0,
  pomoCompleted: 'SUCCESSFUL POMOS',
  lang_label: 'Language: ',
  about: 'ABOUT US',
  /**
   * Function that is called on window load, starts updating page after initializing initializes DOM elements.
   * @param { function } initDOM - Function that initializes DOM elements.
   * @param { function } updateDOM - Function that updates DOM elements based on attributes of pomo object.
   */
  init: function (initDOM, updateDOM) {
    initDOM()
    update(updateDOM)
  }
}

/**
 * Calls every second to update states and attributes
 * of the pomo object, which eventually updates the DOM using
 * the callback updateDOM
 * @param {function} updateDOM
 */
function update (updateDOM) {
  setInterval(() => {
    let minutes = workMinutes
    let seconds = workSeconds
    switch (pomo.state) {
      case statesArray[2]:
        minutes = restMinutes
        seconds = restSeconds
        break
      case statesArray[3]:
        minutes = lRestMinutes
        seconds = lRestSeconds
        break
      default:
        break
    }
    if (pomo.started) {
      if (pomo.seconds === 0) {
        if (pomo.minutes === 0) {
          // when both seconds and minutes are 0, switch states
          if (pomo.state === statesArray[1]) {
            // currently work ended
            pomo.count++
            if (pomo.count % 4 === 0) {
              // go to long rest
              pomo.minutes = lRestMinutes
              pomo.seconds = lRestSeconds
              pomo.state = statesArray[3]
              audio = stageClear
              audio.play()
            } else {
              pomo.minutes = restMinutes
              pomo.seconds = restSeconds
              pomo.state = statesArray[2]
              audio = oneUp
              audio.play()
            }
          } else {
            // currently rest ended
            pomo.minutes = workMinutes
            pomo.seconds = workSeconds
            pomo.state = statesArray[1]
            audio = powerDown
            audio.play()
          }
          pomo.perc = 0
        } else {
          pomo.seconds = 59
          pomo.minutes--
          pomo.perc = ((((minutes * 60 + seconds) - (pomo.minutes * 60 + pomo.seconds)) / (minutes * 60 + seconds)) * 100)
        }
      } else {
        pomo.seconds--
        pomo.perc = ((((minutes * 60 + seconds) - (pomo.minutes * 60 + pomo.seconds)) / (minutes * 60 + seconds)) * 100)
      }
    } else {
      pomo.perc = 0
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.count = 0
      pomo.state = statesArray[0]
    }
    updateDOM(setProgress)
  }, 1000)
}

// DOM related stuff

window.onload = () => {
  pomo.init(initDOM, updateDOM)
}

/**
 * updates the DOM based on changes that the
 * update() function made to the pomo object.
 * @param {function} setProgress callback function
 * which will set the progress bar to have the correct
 * percentage and black section of progress bar.
 */
function updateDOM (setProgress) {
  setProgress(pomo.perc)
  pomo.timeDom.textContent = doubleDigit(pomo.minutes) + ':' + doubleDigit(pomo.seconds)
  pomo.stateDom.textContent = pomo.state
  pomo.numPomoDom.textContent = pomo.count
  document.getElementById('about').textContent = pomo.about
  document.getElementById('lang_label').textContent = pomo.lang_label
  document.getElementById('message').textContent = pomo.pomoCompleted
  if (pomo.started) {
    document.getElementById('button').textContent = buttonsArray[1]
    document.getElementById('button').style.backgroundColor = 'red'
  } else {
    document.getElementById('button').textContent = buttonsArray[0]
    document.getElementById('button').style.backgroundColor = '#f6b432'
  }
  if (pomo.state === statesArray[0] || pomo.state === statesArray[1]) {
    pomo.picDom.src = './img/1.png'
  } else if (pomo.state === statesArray[2]) {
    pomo.picDom.src = './img/2.png'
  } else {
    pomo.picDom.src = './img/3.png'
  }
}

function setProgress (percent) {
  const bar = pomo.barDom
  bar.style.width = percent + '%'
  bar.textContent = Math.round(percent * 10) / 10 + '%'
}

function initDOM () {
  pomo.timeDom = document.getElementById('time')
  pomo.stateDom = document.getElementById('state')
  pomo.numPomoDom = document.getElementById('count')
  pomo.picDom = document.getElementById('pic')
  pomo.barDom = document.getElementById('currProg')
  document.getElementById('button').addEventListener('click', () => {
    if (!pomo.started) {
      pomo.state = statesArray[1]
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.started = true
      audio = oof
      audio.play()
    } else {
      pomo.started = false
      audio = gameOver
      audio.play()
      pomo.perc = 0
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.state = statesArray[0]
      pomo.count = 0
    }
    updateDOM(setProgress)
  })

  document.getElementById('language-picker-select').onchange = function () {
    const index = statesArray.indexOf(pomo.state)
    if (document.getElementById('language-picker-select').value === 'chinese') {
      statesArray = states.CH
      buttonsArray = buttons.CH
      pomo.lang_label = label.CH
      pomo.about = aboutUs.CH
      pomo.pomoCompleted = complete.CH
    } else if (document.getElementById('language-picker-select').value === 'korean') {
      statesArray = states.KR
      buttonsArray = buttons.KR
      pomo.lang_label = label.KR
      pomo.about = aboutUs.KR
      pomo.pomoCompleted = complete.KR
    } else if (document.getElementById('language-picker-select').value === 'japanese') {
      statesArray = states.JP
      buttonsArray = buttons.JP
      pomo.lang_label = label.JP
      pomo.about = aboutUs.JP
      pomo.pomoCompleted = complete.JP
    } else if (document.getElementById('language-picker-select').value === 'english') {
      statesArray = states.def
      buttonsArray = buttons.def
      pomo.lang_label = label.def
      pomo.about = aboutUs.def
      pomo.pomoCompleted = complete.def
    }
    pomo.state = statesArray[index]
    updateDOM(setProgress)
  }

  // todo list
  document.getElementById('add').addEventListener('click', () => { addTask(createCloseButtons) })
  const taskList = document.querySelector('ul')
  taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
    }
  }, false)
}

/**
 * Called when the add button on the task bar is clicked.
 * When called, adds a task with the input text. Also adds
 * a 'X' which will function as a delete button and calls
 * the createCloseButtons callback.
 * @param {function} createCloseButtons callback function
 * which will add event listeners to the 'X' generated to
 * implement the delete task functionality.
 */
function addTask (createCloseButtons) {
  const task = document.createElement('li')
  const taskDesc = document.getElementById('textInput').value
  task.appendChild(document.createTextNode(taskDesc))
  if (taskDesc === '') {
    // do nothing
  } else {
    document.getElementById('taskList').appendChild(task)
  }
  document.getElementById('textInput').value = ''

  const span = document.createElement('SPAN')
  span.className = 'close'
  span.appendChild(document.createTextNode('X'))
  task.appendChild(span)
  createCloseButtons()
}

/**
 * Creates the close buttons for each task. It creates
 * the event listeners necessary to get rid of task items.
 */
function createCloseButtons () {
  const close = document.getElementsByClassName('close')
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      const div = this.parentElement
      div.style.display = 'none'
    })
  }
}

/**
 * Converts input numbers into a double digit string.
 * @param {number} num the number to convert to double digits
 * @returns {string} num converted to double digits
 */
function doubleDigit (num) {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}

if (typeof module !== 'undefined') {
  exports.update = update
  exports.pomo = pomo
  exports.initDOM = initDOM
  exports.setProgress = setProgress
  exports.updateDOM = updateDOM
  exports.workMinutes = workMinutes
  exports.workSeconds = workSeconds
  exports.restMinutes = restMinutes
  exports.restSeconds = restSeconds
  exports.lRestMinutes = lRestMinutes
  exports.lRestSeconds = lRestSeconds
  exports.statesArray = statesArray
  exports.doubleDigit = doubleDigit
  exports.addTask = addTask
}
