
const email = document.querySelector("input");
const btn   = document.querySelector("button");
const head  = document.getElementById("title");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
function check() {

     let val = email.value;
     
     if(val.match(mailformat)) {
          head.style.color = "#12ff00";
          head.innerHTML = "Valid Email!";
     } else {
          head.style.color = "#E50000";
          head.innerHTML = "inValid Email!";
     }

}

btn.addEventListener("click", check);