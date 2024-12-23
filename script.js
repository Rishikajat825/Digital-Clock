const clockElement = document.querySelector(".box");
const body = document.querySelector("body");
const themeBtn = document.querySelector("button");
    function updateClock(){
    const now = new Date();
    clockElement.innerHTML = now.toLocaleTimeString();
    }
    setInterval(updateClock , 1000);
    updateClock();

    // themeBtn.addEventListener("click" , themeChange()){
    //     themeBtn.style.backgroundColor = "white";
    //     themeBtn.style.borderRadius = "30px";
    //     themeBtn.style.color = "black";
    //     themeBtn.style.fontFamily = "sans-Serif";
    //     themeBtn.style.fontSize = "30px";
    //     themeBtn.innerText = "Change Theme";
    // }
    // themeChange(){
       
    // }