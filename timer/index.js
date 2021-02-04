window.onload = () => {
  pomo.init();
}


let workMinutes = 0;
let workSeconds = 5;
let restMinutes = 0;
let restSeconds = 3;
let lRestMinutes = 0;
let lRestSeconds = 7;
let states = ['Click Start To Begin', 'Work', 'Rest', 'Long Rest'];

let pomo = {
  started: false,
  timeDom: null,
  stateDom: null,
  picDom: null,
  numPomoDom: null,
  minutes: workMinutes,
  seconds: workSeconds,
  state: states[0],
  count: 0,
  init: function() {
    let self = this;
    this.timeDom = document.getElementById('time');
    this.stateDom = document.getElementById('state');
    this.numPomoDom = document.getElementById('count');
    this.picDom = document.getElementById('pic');
    update();
    document.getElementById('start').addEventListener('click', () => {
      if (!pomo.started) {
        pomo.state = states[1];
        pomo.minutes = workMinutes;
        pomo.seconds = workSeconds;
        pomo.started = true;
      }
    })
    document.getElementById('stop').addEventListener('click', () => {
      if (pomo.started) {
        pomo.minutes = workMinutes;
        pomo.seconds = workSeconds;
        pomo.started = false;
        pomo.state = states[0];
      }
    })
  }
}

//call this every second to update states and etc
function update() {
  setInterval(() => {
    if (pomo.started) {
      if (pomo.seconds == 0) {
        if (pomo.minutes == 0) {
          //when both seconds and minutes are 0, switch states
          if (pomo.state == states[1]) {
            //currently work ended
            pomo.count++;
            if (pomo.count % 4 == 0) {
              //go to long rest
              pomo.minutes = lRestMinutes;
              pomo.seconds = lRestSeconds;
              pomo.state = states[3];
            } else {
              pomo.minutes = restMinutes;
              pomo.seconds = restSeconds;
              pomo.state = states[2];
            }
          } else if(pomo.state == states[2] || pomo.state == states[3]){
            //currently rest ended
            pomo.minutes = workMinutes;
            pomo.seconds = workSeconds;
            pomo.state = states[1];
          }
        } else {
          pomo.seconds = 59;
          pomo.minutes--;
        }
      }else{
        pomo.seconds--;
      }
    }
    updateDOM();
  }, 1000)
}

function updateDOM() {
  pomo.timeDom.innerHTML = doubleDigit(pomo.minutes) + ':' + doubleDigit(pomo.seconds);
  pomo.stateDom.innerHTML = pomo.state;
  pomo.numPomoDom.innerHTML = pomo.count + " pomos completed";
  if (pomo.state == states[0] || pomo.state == states[1]) {
    pomo.picDom.src = './img/1.png';
  } else if (pomo.state == states[2]) {
    pomo.picDom.src = './img/2.png';
  } else if (pomo.state == states[3]) {
    pomo.picDom.src = './img/3.png';
  }
}

function doubleDigit(num) {
  if (num < 10) {
    return "0" + parseInt(num, 10);
  }
  return num;
}