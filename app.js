//  Default times in seconds
let workTime = 1500;
let breakTime = 300;
let isRunning = false;
let timer;
let working = true;

//  jQuery event handlers
$(document).ready(() => {

  //  Handle subtract time button
  $('.time').on('click', '.subtract', function() {
    let $time = $(this).parent().find('h3').children();
    changeTime($time, -1);
  });

  //  Handle add time button
  $('.time').on('click', '.add', function() {
    let $time = $(this).parent().find('h3').children();
    changeTime($time, 1);
  });

  //  Start and stop clock
  $('#buttons').on('click', '#play-pause', function() {
    if (!isRunning) {
      isRunning = true;
      $('#play-pause').text('Pause');
      //  Start clock
      startTimer();
    } else {
      isRunning = false;
      $('#play-pause').text('Resume');
      clearInterval(timer);
    }
  });

  //  Reset clock
  $('#buttons').on('click', '#reset', function() {
    clearInterval(timer);
    isRunning = false;
    workTime = $('#work-time').text() * 60;
    breakTime = $('#break-time').text() * 60;
    $('#play-pause').text('Start');
    setUpClock();
  });

  setUpClock();

});

//  Set up initial times
function setUpClock() {
  displayTime(workTime);
  $('#break-time').text(breakTime / 60);
}

//  Function to change work or rest time
function changeTime($time, timeChange) {
  if (!isRunning && ($time.text() >= 1 || timeChange >= 1)) {
    let newTime = parseInt($time.text()) + timeChange;
    $time.text(newTime);
    workTime = $('#work-time').text() * 60;
    breakTime = $('#break-time').text() * 60;
    $('#clock-minutes').text($('#work-time').text());
  }
}

//  Function to toggle between work time and break time
function toggle() {
  working = !working;
  workTime = $('#work-time').text() * 60;
  breakTime = $('#break-time').text() * 60;
}

//  Function to display time
function displayTime(time) {
  $('#clock-minutes').text(Math.floor(time / 60));
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  $('#clock-seconds').text(seconds);
  if (!working) {
    $('.working').removeClass('working');
    $('body').addClass('resting');
    $('#status').text('BREAK');
  } else {
    $('.resting').removeClass('resting');
    $('body').addClass('working');
    $('#status').text('WORK');
  }
}

//  Function to start timer
function startTimer() {
  timer = setInterval(function() {
    //  Do countdown
    if (working) {
      workTime --;
      displayTime(workTime);
      console.log('work', workTime);
      if (workTime == 0) {
        toggle();
      }
    } else {
      breakTime--;
      displayTime(breakTime);
      console.log('break', breakTime);
      if (breakTime == 0) {
        toggle();
      }
    }
  }, 1000);
}
