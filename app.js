//  Default times in seconds
let workTime = 1500;
let breakTime = 300;
let isRunning = false;

//  jQuery event handlers
$(document).ready(() => {

  //  Set up initial times
  function setUpClock() {
    $('#work-time').text(workTime / 60);
    $('#break-time').text(breakTime / 60);
  }

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
    console.log('clicked');
    if (!isRunning) {
      console.log(workTime);
      console.log(breakTime);
      // isRunning = true;
      //  Start clock
    } else {

    }
  });

  setUpClock();

});

//  Function to change work or rest time
function changeTime($time, timeChange) {
  if (!isRunning && ($time.text() >= 1 || timeChange >= 1)) {
    let newTime = parseInt($time.text()) + timeChange;
    $time.text(newTime);
    workTime = $('#work-time').text() * 60;
    breakTime = $('#break-time').text() * 60;
    console.log('Inside', workTime);
    console.log('Inside', breakTime);
  }
}
