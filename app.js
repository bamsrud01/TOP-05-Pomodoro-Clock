$(document).ready(() => {

  //  Default times in seconds
  let workTime = 1500;
  let breakTime = 300;
  let isRunning = false;

  $('.time').on('click', '.subtract', function() {
    let $time = $(this).parent().find('h3').children();
    let newTime = $time.text() - 1;
    $time.text(newTime);
  });

  $('.time').on('click', '.add', function() {
    let $time = $(this).parent().find('h3').children();
    let newTime = parseInt($time.text()) + 1;
    $time.text(newTime);
  });

});

//  Function to add time to clock
function addTime(clock, time) {

}
