window.onload = () => {
  pomo.init()
}

const workMinutes = 0
const workSeconds = 5
const restMinutes = 0
const restSeconds = 5
const lRestMinutes = 0
const lRestSeconds = 5
const statesDefault = ['Click Start To Begin', 'Work', 'Rest', 'Long Rest']
const buttonsDefault = ['Start', 'Stop']
const statesChinese = ['点击开始', '进行中', '短休', '长休']
const statesKorean = ['시작을 누르세요', '일', '휴식', '긴 휴식']
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
let pomoCompleted = ' pomos completed'
let statesArray = states.def
let buttonsArray = buttons.def
const powerDown = new Audio('./audio/powerdown.wav')
const coin = new Audio('./audio/coin.wav')
const stageClear = new Audio('./audio/stageclear.wav')
const gameOver = new Audio('./audio/gameover.wav')
const oneUp = new Audio('./audio/1up.wav')
const oof = new Audio('./audio/oof.wav')
let audio = coin
document.getElementById("language-picker-select").onchange = function () {
  if (document.getElementById("language-picker-select").value === 'chinese') {
    statesArray = states.CH
    buttonsArray = buttons.CH
    document.getElementById('about').textContent = '关于我们'
    document.getElementById('lang_label').textContent = '语言：'
    pomoCompleted = ' 帕玛多拉 完成'
  } else if (document.getElementById("language-picker-select").value === 'korean') {
    statesArray = states.KR
    buttonsArray = buttons.KR
    document.getElementById('about').textContent = '팀 소개'
    document.getElementById('lang_label').textContent = '언어: '
    pomoCompleted = ' 완료된 포모'
  } else if (document.getElementById("language-picker-select").value === 'japanese') {
    statesArray = states.JP
    buttonsArray = buttons.JP
    document.getElementById('about').textContent = 'わたしたち'
    document.getElementById('lang_label').textContent = '言語: '
    pomoCompleted = ' ポモス 完成'
  } else if (document.getElementById("language-picker-select").value === 'english') {
    statesArray = states.def
    buttonsArray = buttons.def
    document.getElementById('lang_label').textContent = 'Language: '
    pomoCompleted = ' pomos completed'
  }
  document.getElementById('button').textContent = buttonsArray[0]
  pomo.state = statesArray[0]
  pomo.started = false
  pomo.minutes = workMinutes
  pomo.seconds = workSeconds
  pomo.count = 0;
  updateDOM()
}

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
  init: function () {
    this.timeDom = document.getElementById('time')
    this.stateDom = document.getElementById('state')
    this.numPomoDom = document.getElementById('count')
    this.picDom = document.getElementById('pic')
    update()
    document.getElementById('button').addEventListener('click', () => {
      if (!pomo.started) {
        pomo.state = statesArray[1]
        pomo.minutes = workMinutes
        pomo.seconds = workSeconds
        pomo.started = true
        document.getElementById('button').textContent = buttonsArray[1]
        audio = oof
        audio.play()
      } else {
        pomo.minutes = workMinutes
        pomo.seconds = workSeconds
        pomo.started = false
        pomo.state = statesArray[0]
        pomo.count = 0
        document.getElementById('button').textContent = buttonsArray[0]
        audio = gameOver
        audio.play()
      }
    })
  }
}

// call this every second to update states and etc
/**
 * Calls every second to update states and attributes
 * of the pomo object, which eventually updates the DOM
 */
function update() {
  setInterval(() => {
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
          } else if (pomo.state === statesArray[2] || pomo.state === statesArray[3]) {
            // currently rest ended
            pomo.minutes = workMinutes
            pomo.seconds = workSeconds
            pomo.state = statesArray[1]
            audio = powerDown
            audio.play()
          }
        } else {
          pomo.seconds = 59
          pomo.minutes--
        }
      } else {
        pomo.seconds--
      }
    }
    updateDOM()
  }, 1000)
}

/**
 * updates the DOM based on changes that the
 * update() function made to the pomo object
 * changes will be reflected on the browser page
 */
function updateDOM() {
  pomo.timeDom.textContent = doubleDigit(pomo.minutes) + ':' + doubleDigit(pomo.seconds)
  pomo.stateDom.textContent = pomo.state
  pomo.numPomoDom.textContent = pomo.count + pomoCompleted
  if (pomo.state === statesArray[0] || pomo.state === statesArray[1]) {
    pomo.picDom.src = './img/1.png'
  } else if (pomo.state === statesArray[2]) {
    pomo.picDom.src = './img/2.png'
  } else if (pomo.state === statesArray[3]) {
    pomo.picDom.src = './img/3.png'
  }
}

/**
 * @param {number} num the number to convert to double digits
 * @returns {string} num converted to double digits
 */
function doubleDigit(num) {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}

if (typeof module !== 'undefined') {
  exports.update = update
  exports.pomo = pomo
  exports.workMinutes = workMinutes
  exports.workSeconds = workSeconds
  exports.restMinutes = restMinutes
  exports.restSeconds = restSeconds
  exports.lRestMinutes = lRestMinutes
  exports.lRestSeconds = lRestSeconds
  exports.states = states
  exports.doubleDigit = doubleDigit
}
