const Display=document.getElementById("timer");
let sttime=0;
let eltime=0;
let timer=null;
let isRun=false;
const st=document.getElementById("st");
function Start(){

if(!isRun){

    sttime = Date.now() - eltime;

    timer = setInterval(update,10);

    isRun = true;

    st.textContent = "Stop";

    st.style.background = "linear-gradient(135deg,#ff5252,#ff1744)";
}
else{

    clearInterval(timer);

    eltime = Date.now() - sttime;

    isRun = false;

    st.textContent = "Start";

    st.style.background = "linear-gradient(135deg,#00c853,#64dd17)";
}
}
function Reset(){

clearInterval(timer);

sttime = 0;
eltime = 0;

timer = null;

isRun = false;

Display.textContent = "00:00:00:00";

st.textContent = "Start";

st.style.background = "linear-gradient(135deg,#00c853,#64dd17)";
}
function update(){
    const currTime=Date.now();
    eltime=currTime-sttime;

    let hour=Math.floor(eltime/(1000*60*60));
    let min=Math.floor(eltime/(1000*60)%60);
    let sec=Math.floor(eltime/(1000)%60);
    let milsec=Math.floor(eltime%1000/10);
    hour=String(hour).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    milsec=String(milsec).padStart(2,"0");
    Display.textContent=`${hour}:${min}:${sec}:${milsec}`
}