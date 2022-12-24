function updateTime() {

     const date = new Date();
     let hr  = date.getHours();
     let min = date.getMinutes();
     let sec = date.getSeconds();
     let ap = 'AM';

     let time = document.querySelector("#time");

     if(hr <10) hr = "0"+hr;
     if(min <10) min = "0"+min;

     time.textContent = hr+":"+min+":"+sec+" "+ap;
 }

 setInterval(updateTime, 1000);