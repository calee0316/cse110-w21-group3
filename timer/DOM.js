window.onload = () => {
  pomo.init(initDOM, updateDOM)
}

/**
 * updates the DOM based on changes that the
 * update() function made to the pomo object
 * changes will be reflected on the browser page
 */
function updateDOM() {
    setProgress(pomo.perc)
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

function setProgress(percent) {
  const offset = pomo.circumference - (percent / 100) * pomo.circumference;
  pomo.circle.style.strokeDashoffset = offset;
}

function initDOM() {
  pomo.timeDom = document.getElementById('time')
  pomo.stateDom = document.getElementById('state')
  pomo.numPomoDom = document.getElementById('count')
  pomo.picDom = document.getElementById('pic')
  pomo.circle = document.querySelector('.progress-ring__circle')
  pomo.radius = pomo.circle.r.baseVal.value;
  pomo.circumference = pomo.radius * 2 * Math.PI;
  pomo.circle.style.strokeDasharray = `${pomo.circumference} ${pomo.circumference}`;
  pomo.circle.style.strokeDashoffset = `${pomo.circumference}`;

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
      // pomo.minutes = workMinutes
      // pomo.seconds = workSeconds
      pomo.started = false
      // pomo.state = statesArray[0]
      // pomo.count = 0
      document.getElementById('button').textContent = buttonsArray[0]
      document.getElementById('button').style.backgroundColor = '#f6b432'
      audio = gameOver
      audio.play()
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
    pomo.perc = 0
    updateDOM()
    if (document.getElementById('button').style.backgroundColor == 'red') {
      document.getElementById('button').style.backgroundColor = '#f6b432'
    }
  }
}
