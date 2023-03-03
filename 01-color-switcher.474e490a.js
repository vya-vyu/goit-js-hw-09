const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let n=null;function r(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{n=setInterval(r,1e3)}),{once:!0}),t.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.474e490a.js.map
