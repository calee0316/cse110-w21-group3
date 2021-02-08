const {update, pomo, workMinutes,workSeconds,restMinutes,restSeconds,lRestMinutes,lRestSeconds,states}= require('./index')


test('see if state changes from work to rest, correct time set after 25 min', ()=>{
  document.body.innerHTML =
  '<div>'+
  ' <h2 id = "state">Click Start To Begin</h2>'+
  ' <h2 id="time">25:00</h2>'+
  ' <button class = "button1" id="start">Start</button>'+
  ' <button class = "button1" id="stop">Stop</button>'+
  ' <h3 id="message">0 pomos completed</h3>'+
  '<img src="./img/1.png" id="pic">'+
  '</div>';

  pomo.started = true;
  pomo.state = states[1];
  pomo.init();
  jest.useFakeTimers();
  update();
  jest.advanceTimersByTime(1501000);
  expect(pomo.minutes).toBe(5);
  expect(pomo.seconds).toBe(0);
  expect(pomo.count).toBe(1);
  expect(pomo.state).toBe(states[2])
})
