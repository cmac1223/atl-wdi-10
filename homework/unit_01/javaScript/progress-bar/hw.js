// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Everytime countdown value updates,
    // The numeric display needs to update
    var counterTimer = document.getElementById('numeric-display');
    counterTimer.innerHTML = timerValue
  },
  drawProgressBars: function(timerValue){

    var progressBarsGuage = document.getElementsByClassName('progress-bar')[0];
    progressBarsGuage.style.width = (100 - timerValue) + '%';
    // Your Code Here
  },
  drawLitFuses: function(timerValue){
    progressLitFuse = document.getElementsByClassName('unburnt')[0];
    //for(var i = 0; i > timerValue; i--){
    progressLitFuse.style.width = (timerValue) +'%';

    //}
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
