const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let r=null;function n(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{r=setInterval(n,1e3)})),e.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.b0efe5a4.js.map
