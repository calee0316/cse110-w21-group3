window.onload = () => {
  pomo.init()
}

const workMinutes = 25
const workSeconds = 0
const restMinutes = 5
const restSeconds = 0
const lRestMinutes = 15
const lRestSeconds = 0
const statesDefault = ['Click Start To Begin', 'Work', 'Rest', 'Long Rest']
const buttonsDefault = ['Start', 'Stop']
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
let statesArray = states.def
let buttonsArray = buttons.def
const powerDown = new Audio('./audio/powerdown.wav')
const coin = new Audio('./audio/coin.wav')
const stageClear = new Audio('./audio/stageclear.wav')
const gameOver = new Audio('./audio/gameover.wav')
const oneUp = new Audio('./audio/1up.wav')
const oof = new Audio('./audio/oof.wav')
let audio = coin

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
  circle: null,
  radius: null,
  circumference: null,
  init: function() {
    this.timeDom = document.getElementById('time')
    this.stateDom = document.getElementById('state')
    this.numPomoDom = document.getElementById('count')
    this.picDom = document.getElementById('pic')
    this.circle = document.querySelector('.progress-ring__circle')
    this.radius = this.circle.r.baseVal.value;
    this.circumference = this.radius * 2 * Math.PI;

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = `${this.circumference}`;

    update()
    document.getElementById('button').addEventListener('click', () => {
      if (!pomo.started) {
        pomo.state = statesArray[1]
        pomo.minutes = workMinutes
        pomo.seconds = workSeconds
        pomo.started = true
        document.getElementById('button').textContent = buttonsArray[1]
        document.getElementById('button').style.backgroundColor = 'red'
        audio = oof
        audio.play()
      } else {
        pomo.minutes = workMinutes
        pomo.seconds = workSeconds
        pomo.started = false
        pomo.state = statesArray[0]
        pomo.count = 0
        document.getElementById('button').textContent = buttonsArray[0]
        document.getElementById('button').style.backgroundColor = '#f6b432'
        audio = gameOver
        audio.play()
        pomo.setProgress(0)
      }
    })

    document.getElementById("language-picker-select").onchange = function() {
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
        document.getElementById('about').textContent = 'About us'
        document.getElementById('lang_label').textContent = 'Language: '
        pomoCompleted = ' pomos completed'
      }
      document.getElementById('button').textContent = buttonsArray[0]
      document.getElementById('message').textContent = pomoCompleted
      pomo.state = statesArray[0]
      pomo.started = false
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.count = 0;
      updateDOM()
      pomo.setProgress(0)
      if(document.getElementById('button').style.backgroundColor == 'red'){
        document.getElementById('button').style.backgroundColor = '#f6b432'
      }
    }
  },
  setProgress: function(percent) {
    const offset = pomo.circumference - (percent / 100) * pomo.circumference;
    pomo.circle.style.strokeDashoffset = offset;
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
              pomo.setProgress(0)
            } else {
              pomo.minutes = restMinutes
              pomo.seconds = restSeconds
              pomo.state = statesArray[2]
              audio = oneUp
              audio.play()
              pomo.setProgress(0)
            }
          } else if (pomo.state === statesArray[2] || pomo.state === statesArray[3]) {
            // currently rest ended
            pomo.minutes = workMinutes
            pomo.seconds = workSeconds
            pomo.state = statesArray[1]
            audio = powerDown
            audio.play()
            pomo.setProgress(0)
          }
        } else {
          pomo.seconds = 59
          pomo.minutes--
          let perc = ((((workMinutes * 60 + workSeconds) - (pomo.minutes * 60 + pomo.seconds)) / (workMinutes * 60 + workSeconds))*100)
          pomo.setProgress(perc)
        }
      } else {
        pomo.seconds--
        let perc = ((((workMinutes * 60 + workSeconds) - (pomo.minutes * 60 + pomo.seconds)) / (workMinutes * 60 + workSeconds))*100)
        pomo.setProgress(perc)
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
  pomo.numPomoDom.textContent = pomo.count
  if (pomo.state === statesArray[0] || pomo.state === statesArray[1]) {
    pomo.picDom.href.baseVal = './img/1.png'
  } else if (pomo.state === statesArray[2]) {
    pomo.picDom.href.baseVal = './img/2.png'
  } else if (pomo.state === statesArray[3]) {
    pomo.picDom.href.baseVal = './img/3.png'
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
  exports.updateDOM = updateDOM
  exports.pomo = pomo
  exports.workMinutes = workMinutes
  exports.workSeconds = workSeconds
  exports.restMinutes = restMinutes
  exports.restSeconds = restSeconds
  exports.lRestMinutes = lRestMinutes
  exports.lRestSeconds = lRestSeconds
  exports.statesArray = statesArray
  exports.doubleDigit = doubleDigit
}
