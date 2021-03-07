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

/**
 * @type { Object }
 * The default statesArray, contains the English version of the states.
 */
const statesDefault = ['Click Start To Begin', 'Work', 'Rest', 'Long Rest']
/**
 * @type { Object }
 * The array that contains the strings that the button shows.
 * It will show 'START' in the beginning stage and 'STOP' in all other stages.
 * The default buttonsArray, contains the English version.
 */
const buttonsDefault = ['START', 'STOP']
/**
 * @type { Object }
 * The Chinese statesArray, contains the Chinese version of the states.
 */
const statesChinese = ['点击开始', '进行中', '短休', '长休']
/**
 * @type { Object }
 * The Korean statesArray, contains the Korean version of the states.
 */
const statesKorean = ['시작을 누르세요', '작업', '휴식', '긴 휴식']
/**
 * @type { Object }
 * The Japanese statesArray, contains the Japanese version of the states.
 */
const statesJapanese = ['クリックして開始', '作業中', '短い休憩', '長い休憩']
/**
 * @type { Object }
 * The Chinese buttonsArray, contains the Chinese version of START and STOP.
 */
const buttonsChinese = ['开始', '结束']
/**
 * @type { Object }
 * The Korean buttonsArray, contains the Korean version of START and STOP.
 */
const buttonsKorean = ['시작', '정지']
/**
 * @type { Object }
 * The Japanese buttonsArray, contains the Japanese version of START and STOP.
 */
const buttonsJapanese = ['開始', '終止']
/**
 * @type { Object }
 * The object that stores the dfferent language state arrays.
 */
const states = {
  def: statesDefault,
  CH: statesChinese,
  KR: statesKorean,
  JP: statesJapanese
}

/**
 * @type { Object }
 * The object that stores all the different language button arrays.
 */
const buttons = {
  def: buttonsDefault,
  CH: buttonsChinese,
  KR: buttonsKorean,
  JP: buttonsJapanese
}
/**
 * @type { Object }
 * The object that stores 'about us' links in all different languages.
 */
const aboutUs = {
  def: 'ABOUT US',
  CH: '关于我们',
  KR: '팀 소개',
  JP: 'わたしたち'
}

/**
 * @type { Object }
 * The object that stores all the different language versions of 'Language: '.
 *  This is for the label of the language select dropdown.
 */
const label = {
  def: 'Language: ',
  CH: '语言： ',
  KR: '언어: ',
  JP: '言語: '
}

/**
 * @type { Object }
 * The object that stores all the different language versions of 'SUCCESSFUL POMOS'.
 */
const complete = {
  def: 'SUCCESSFUL POMOS',
  CH: '帕玛多拉 完成',
  KR: '완료된 포모',
  JP: 'ポモス 完成'
}

/**
 * @type { Object }
 * This is an array that stores the 4 states.
 * The array changes based on the current language setting.
 */
let statesArray = states.def
/**
 * @type { Object }
 * This is an array that stores the 2 states of the button, START and STOP.
 * The array changes based on the current language setting.
 */
let buttonsArray = buttons.def
/**
 * @type { Object }
 * The sound of played when moving from a rest state to a work state.
 */
const powerDown = new Audio('./audio/powerdown.wav')
/**
 * @type { Object }
 * The sound of a coin
 */
const coin = new Audio('./audio/coin.wav')
/**
 * @type { Object }
 * The sound that is played when 4 work cycles are completed, and we are transitioning to long rest.
 */
const stageClear = new Audio('./audio/stageclear.wav')
/**
 * @type { Object }
 * The sound that is played when user clicks the stop button.
 */
const gameOver = new Audio('./audio/gameover.wav')
/**
 * @type { Object }
 * The sound that is played when moving from work to a rest state.
 */
const oneUp = new Audio('./audio/1up.wav')
/**
 * @type { Object }
 * The sound that is played when the start button is clicked.
 * During beginning to work state transition.
 */
const oof = new Audio('./audio/oof.wav')
/**
 * @type { Object }
 * The current audio sound.
 * This will be updated accordingly so that the correct sound is played during transition.
 */
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
 * Calls every second to update states and attributes of the pomo object.
 * Eventually updates the DOM using the callback updateDOM.
 * This is the main functionality of the timer.
 * @param {function} updateDOM
 */
function update (updateDOM) {
  // set interval to 1000, so that this function is called every second.
  setInterval(() => {
    // minutes default to workMinutes and workSeconds.
    // these will aid us in figuring out the current progress bar percentage value.
    let minutes = workMinutes
    let seconds = workSeconds
    // depending on the current state, set minutes and seconds as the total
    // minutes and seconds of the current interval
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
    // only update the time when timer has started.
    // no need to update time if timer has not begun.
    if (pomo.started) {
      if (pomo.seconds === 0) {
        if (pomo.minutes === 0) {
          // when both seconds and minutes are 0, switch states
          if (pomo.state === statesArray[1]) {
            // currently work ended
            // add to the work count
            pomo.count++
            if (pomo.count % 4 === 0) {
              // when a 4 work cycles are completed
              // go to long rest
              // play stageclear.wav audio
              pomo.minutes = lRestMinutes
              pomo.seconds = lRestSeconds
              pomo.state = statesArray[3]
              audio = stageClear
              audio.play()
            } else {
              // when 4 work cycles have not been completed
              // move to regular rest state
              // play the oneUp.wav audio
              pomo.minutes = restMinutes
              pomo.seconds = restSeconds
              pomo.state = statesArray[2]
              audio = oneUp
              audio.play()
            }
          } else {
            // rest or long rest ended
            // move to Work state
            // play powerDown.wav audio
            pomo.minutes = workMinutes
            pomo.seconds = workSeconds
            pomo.state = statesArray[1]
            audio = powerDown
            audio.play()
          }
          // set current progress percentage to 0 when states change
          pomo.perc = 0
        } else {
          // when only seconds is 0, minutes will go down 1
          // seconds will go to 59
          pomo.seconds = 59
          pomo.minutes--
          // percentage of progress depends on current minutes and seconds on the clock, and the total
          // minutes and seconds in the interval
          pomo.perc = ((((minutes * 60 + seconds) - (pomo.minutes * 60 + pomo.seconds)) / (minutes * 60 + seconds)) * 100)
        }
      } else {
        // when current seconds and minutes on the clock are both not 0
        // time of the pomo decrease by 1
        pomo.seconds--
        // percentage depends on current minutes and seconds on the clock, and the total
        // minutes and seconds in the interval
        pomo.perc = ((((minutes * 60 + seconds) - (pomo.minutes * 60 + pomo.seconds)) / (minutes * 60 + seconds)) * 100)
      }
    } else {
      // when the timer has not started
      // set everything to 0/default
      pomo.perc = 0
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.count = 0
      pomo.state = statesArray[0]
    }
    // after every update is finished, call updateDOM to change the actual visual screen
    // each update should take 1 second
    updateDOM(setProgress)
  }, 1000)
}

// DOM related stuff

window.onload = () => {
  pomo.init(initDOM, updateDOM)
}

/**
 * updates the DOM based on changes that the update() function made to pomo object.
 * @param {function} setProgress callback function which will set the progress bar percentage and width
 */
function updateDOM (setProgress) {
  // update the progress bar
  setProgress(pomo.perc)
  // update the time on screen based on the new updated minutes and seconds from pomo
  pomo.timeDom.textContent = doubleDigit(pomo.minutes) + ':' + doubleDigit(pomo.seconds)
  pomo.stateDom.textContent = pomo.state
  pomo.numPomoDom.textContent = pomo.count
  // set the About us, Language selector, and successful pomos message based on what the
  // current language is
  document.getElementById('about').textContent = pomo.about
  document.getElementById('lang_label').textContent = pomo.lang_label
  document.getElementById('message').textContent = pomo.pomoCompleted
  // if the timer started, the button would change to "STOP" and the color of the button will turn red
  // the language select and about us function are disabled when started working session
  // when the timer starts the header of todo list is set to none
  // and close buttons are set to none
  if (pomo.started) {
    document.getElementById('button').textContent = buttonsArray[1]
    document.getElementById('button').style.backgroundColor = 'red'
    document.getElementById('about').style.display = 'none'
    document.getElementById('language-select').style.display= 'none'
    document.getElementsByClassName('header')[0].style.display = 'none'
    const closeButtons = document.getElementsByClassName('close')
    Array.from(closeButtons).forEach(close => {
      close.style.display = 'none'
    })
  } else {
    // if the timer is not started, button should stay 'START' and color is orange.
    document.getElementById('button').textContent = buttonsArray[0]
    document.getElementById('button').style.backgroundColor = '#f6b432'
    document.getElementById('about').style.display = 'block'
    document.getElementById('language-select').style.display= 'block'
    document.getElementsByClassName('header')[0].style.display = ''
    const closeButtons = document.getElementsByClassName('close')
    Array.from(closeButtons).forEach(close => {
      close.style.display = ''
    })
  }
  // if the current state is either 'Click Start To Begin" or 'Work' or the same in a different language
  // the image would become the 1.png, which is the red mushroom
  if (pomo.state === statesArray[0] || pomo.state === statesArray[1]) {
    pomo.picDom.src = './img/1.png'
  } else if (pomo.state === statesArray[2]) {
    // set image when state is 'Rest' as the green mushroom
    pomo.picDom.src = './img/2.png'
  } else {
    // set image when state is 'Long Rest' as the gold mushroom
    pomo.picDom.src = './img/3.png'
  }
}

/**
 * This function changes the progress bar of our timer.
 * The progress bar is filled up based on the input value.
 * @param { number } percent
 */
function setProgress (percent) {
  const bar = pomo.barDom
  bar.style.width = percent + '%'
  bar.textContent = Math.round(percent * 10) / 10 + '%'
}

/**
 * This function initializes the DOM related attributes of the pomo object.
 * This function also sets various event listeners for different objects.
 */
function initDOM () {
  // The initialization for the time, state, number of pomo, picture, and the time bar
  pomo.timeDom = document.getElementById('time')
  pomo.stateDom = document.getElementById('state')
  pomo.numPomoDom = document.getElementById('count')
  pomo.picDom = document.getElementById('pic')
  pomo.barDom = document.getElementById('currProg')
  // adds event listener for clicking the main start and stop button
  document.getElementById('button').addEventListener('click', () => {
    // if timer is not started, set values accordingly, play the start
    // "oof" sound
    if (!pomo.started) {
      pomo.state = statesArray[1]
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.started = true
      audio = oof
      audio.play()
    } else {
      // if timer is started already, set accordingly, play the stop
      // "game over" sound
      pomo.started = false
      audio = gameOver
      audio.play()
      pomo.perc = 0
      pomo.minutes = workMinutes
      pomo.seconds = workSeconds
      pomo.state = statesArray[0]
      pomo.count = 0
    }
    // call updateDOM function to make keep the time and status updated
    updateDOM(setProgress)
  })

  /**
   * Event listener for changing languages.
   * This is called when the language selector drop down is changed.
   */
  document.getElementById('language-picker-select').onchange = function () {
    // get the index of the current state within statesArray
    const index = statesArray.indexOf(pomo.state)
    if (document.getElementById('language-picker-select').value === 'chinese') {
      // When language is changed to Chinese
      statesArray = states.CH
      buttonsArray = buttons.CH
      pomo.lang_label = label.CH
      pomo.about = aboutUs.CH
      pomo.pomoCompleted = complete.CH
    } else if (document.getElementById('language-picker-select').value === 'korean') {
      // When language is changed to Korean
      statesArray = states.KR
      buttonsArray = buttons.KR
      pomo.lang_label = label.KR
      pomo.about = aboutUs.KR
      pomo.pomoCompleted = complete.KR
    } else if (document.getElementById('language-picker-select').value === 'japanese') {
      // When language is changed to Japanese
      statesArray = states.JP
      buttonsArray = buttons.JP
      pomo.lang_label = label.JP
      pomo.about = aboutUs.JP
      pomo.pomoCompleted = complete.JP
    } else if (document.getElementById('language-picker-select').value === 'english') {
      // When language is changed to English
      statesArray = states.def
      buttonsArray = buttons.def
      pomo.lang_label = label.def
      pomo.about = aboutUs.def
      pomo.pomoCompleted = complete.def
    }
    // Set the state based on the index we had previously got, and the new statesArray
    // which now is a different language
    pomo.state = statesArray[index]
    // Update the DOM elements, this will cange the language of all the elements on screen
    updateDOM(setProgress)
  }

  // The event Listener that add the tasks. This is called when the 'Add' buttton on screen is clicked
  document.getElementById('add').addEventListener('click', () => {
      addTask(createCloseButtons) 
  })

  // initialize the tasklist based on the querySelector of 'ul'
  const taskList = document.querySelector('ul')

  // The event listener that checks the certain task. This is called when a certain task is clicked
  taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      const id = e.target.getAttribute('id')
      const myStorage = window.localStorage
      const tasks = JSON.parse(myStorage.getItem('tasks'))
      tasks.forEach(task => {
        if (task.id == id) {
          task.completed = !task.completed
        }
      })
      myStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, false)

  if (window.localStorage.getItem('tasks')) {
    addSaved(createCloseButtons)
  }
}

/**
 * Called if there are tasks that were on task list before refreshing or closing the page.
 * Regenerates the previous todo list.
 * @param { function } createCloseButtons Call back function that creates close button functionality.
 */
function addSaved (createCloseButtons) {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'))
  tasks.forEach(task => {
    const list = document.getElementById('taskList')
    const savedTask = document.createElement('li')
    const taskDesc = task.desc
    savedTask.appendChild(document.createTextNode(taskDesc))
    savedTask.setAttribute('id', task.id)
    if (task.completed) {
      savedTask.classList.toggle('checked')
    }
    list.appendChild(savedTask)
    const span = document.createElement('SPAN')
    // give the element class 'close'
    span.className = 'close'
    // set the text to be "X"
    span.appendChild(document.createTextNode('X'))
    savedTask.appendChild(span)
    // call the function that creates the event listeners for the close buttons
    createCloseButtons()
  })
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
  // create the element of the task
  const task = document.createElement('li')
  // create the element taken from the 'textInput'. This is the task that the user wrote on the text input.
  const taskDesc = document.getElementById('textInput').value
  // add the task description to the document
  task.appendChild(document.createTextNode(taskDesc))
  // if the inputted task is not empty text, append the task
  // to the list
  const id = Date.now()
  task.setAttribute('id', id)
  if (taskDesc === '') {
    // do nothing
  } else {
    document.getElementById('taskList').appendChild(task)
    const myStorage = window.localStorage
    let tasks = []
    if (myStorage.getItem('tasks')) {
      tasks = JSON.parse(myStorage.getItem('tasks'))
    }
    tasks.push({
      id: id,
      completed: false,
      desc: taskDesc
    })
    myStorage.setItem('tasks', JSON.stringify(tasks))
  }

  document.getElementById('textInput').value = ''
  // create the element for the delete button "x"
  const span = document.createElement('SPAN')
  // give the element class 'close'
  span.className = 'close'
  // set the text to be "X"
  span.appendChild(document.createTextNode('X'))
  task.appendChild(span)
  // call the function that creates the event listeners for the close buttons
  createCloseButtons()
}

/**
 * Creates the close buttons for each task.
 * It creates the event listeners necessary to get rid of task items.
 */
function createCloseButtons () {
  // store an array of all of the close, "x"s in the task list
  const close = document.getElementsByClassName('close')
  // make the eventlistener for all of the close "x"s,
  // these will delete the task when the "x" is clicked.
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      // get the task that the "x" is for
      const div = this.parentElement
      // set the task display to none, "deleting" it from the list
      div.style.display = 'none'
      const myStorage = window.localStorage
      let tasks = JSON.parse(myStorage.getItem('tasks'))
      const id = div.getAttribute('id')
      tasks = tasks.filter(function (item) {
        return item.id != id
      })
      myStorage.setItem('tasks', JSON.stringify(tasks))
    })
  }
}

/**
 * Converts input numbers into a double digit string.
 * @param {number} num the number to convert to double digits
 * @returns {string} num converted to double digits
 */
function doubleDigit (num) {
  // if the input is single digit, return a double digit version
  // with a leading 0
  if (num < 10) {
    return '0' + num
  }
  // if input is double digit, return it in string form
  return num.toString()
}

// These are exports for jest testing
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
  exports.addSaved = addSaved
}
