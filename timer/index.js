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
  perc: 0,
  init: function(initDOM, updateDOM) {
    initDOM()
    update(updateDOM)
  }
}

// call this every second to update states and etc
/**
 * Calls every second to update states and attributes
 * of the pomo object, which eventually updates the DOM
 */
function update(updateDOM) {
  setInterval(() => {
    let minutes = workMinutes
    let seconds = workSeconds
    switch (pomo.state) {
      case statesArray[2]:
        minutes = restMinutes
        seconds = restSeconds
        break;
      case statesArray[3]:
        minutes = lRestMinutes
        seconds = lRestSeconds
        break;
      default:
        break;
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
    updateDOM()
  }, 1000)
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
  exports.statesArray = statesArray
  exports.doubleDigit = doubleDigit
}
