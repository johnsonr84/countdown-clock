// // non-functionioning fucking date selector
// // ======================================
// function validateDate (date) {
//   var msg = '';
//   if (date != null) {
//       if (isNaN(date)) {
//         msg = 'The input is not a valid date';
//       } else {
//         msg = (number %2 == 0) ? 'Even Number' : 'Odd Number';
//       }
//       } else {
//         msg = 'You cancelled the action'
//     }
//     document.getElementById('result').textContent = msg;
// }
//
// var Custom Prompt = new function() {
//
//   this.dialogInputEl = document.getElementById('dialogInputEl');
//
//   this.show = function(msg, callback) {
//     var dlg = document.getElementById('dialogCont');
//     dlg.style.top = '30%';
//     dlg.style.opacity = 1;
//     var dlgMessage = dlg.querySelector('#dlgMessage');
//     dlgMessage.textContent = msg;
//     dialogInputEl.focus();
//     dialogInputEl.value '';
//     this.callback = callback;
//     document.getElementById('freezeLayer').style.display = '';
//   };
//
//   this.okay = function () {
//     this.callback(dialogInputEl.value);
//     this.close();
//   }
//   this.cancel = function () {
//     this.callback(null);
//     this.close();
//   }
//   this.close = function () {
//     var dlg = document.getElementById('dialogCont');
//     dlg.style.top = '-30%';
//     dlg.style.opacity = 0;
//     document.getElementById('freeze-layer').style.display = 'none';
//   }
// }

// Countdown Clock Stuffies
// ==============================================

// function updateTimer(deadline){
//   var time = deadline - new Date();
//   return {
//     'days': Math.floor( time/(1000*60*60*24) ),
//     'hours': Math.floor( (time/(1000*60*60)) % 24 ),
//     'minutes': Math.floor( (time/1000/60) % 60 ),
//     'seconds': Math.floor( (time/1000) % 60 ),
//     'total' : time
//   };
// }
//
// function animateClock(span){
//   span.className = "turn";
//   setTimeout(function(){
//     span.className = "";
//   },700);
// }
//
// function startTimer(id, deadline){
//   var timerInterval = setInterval(function(){
//     var clock = document.getElementById(id);
//     var timer = updateTimer(deadline);
//
//     clock.innerHTML = '<span>' + timer.days + '</span>'
//                     + '<span>' + timer.hours + '</span>'
//                     + '<span>' + timer.minutes + '</span>'
//                     + '<span>' + timer.seconds + '</span>';
//
//     //animations
//     var spans = clock.getElementsByTagName("span");
//     animateClock(spans[3]);
//     if(timer.seconds == 59) animateClock(spans[2]);
//     if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
//     if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);
//
//     //check for end of timer
//     if(timer.total < 1){
//       clearInterval(timerInterval);
//       clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
//     }
//
//   }, 1000);
// }
//
// window.onload = function(){
//   var deadline = new Date("May 22, 2017 17:00:00");
//   startTimer("clock", deadline);
// };
