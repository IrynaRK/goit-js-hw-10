import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as S}from"./assets/vendor-BbbuE1sJ.js";const c=document.getElementById("datetime-picker"),t=document.querySelector("button[data-start]");let m,d;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=e[0],d<=new Date?(S.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):(m=d.getTime(),t.disabled=!1)}};f(c,T);t.addEventListener("click",()=>{t.disabled=!0,c.disabled=!0;const e=setInterval(()=>{const u=new Date().getTime(),r=m-u,{days:i,hours:l,minutes:a,seconds:s}=n(r);r<0?(clearInterval(e),document.querySelector("[data-days]").innerText="00",document.querySelector("[data-hours]").innerText="00",document.querySelector("[data-minutes]").innerText="00",document.querySelector("[data-seconds]").innerText="00",document.querySelector("timer").innerHTML="Таймер завершено!",c.disabled=!1,t.disabled=!0):(document.querySelector("[data-days]").innerText=o(i),document.querySelector("[data-hours]").innerText=o(l),document.querySelector("[data-minutes]").innerText=o(a),document.querySelector("[data-seconds]").innerText=o(s))},1e3)});t.disabled=!0;function n(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:y,seconds:h}}function o(e){return String(e).padStart(2,"0")}console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));
//# sourceMappingURL=1-timer.js.map
