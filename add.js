function clock(params) {
  let fullDate = new Date();
  let hour = fullDate.getHours();
  let  mins = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if( hour < 10 ){
    hour = '0' + hour;
  }
  if (mins < 10) {
   mins = '0' + mins;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }



  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = ':' + mins;
  document.getElementById('seconds').innerHTML = ':' + seconds;

  
}
setInterval(clock, 100);