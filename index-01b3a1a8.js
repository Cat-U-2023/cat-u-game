(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function E(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=E(e);fetch(e.href,t)}})();const a=document.querySelector("audio"),d=document.querySelector(".menu img"),B=document.getElementById("health"),L=document.getElementById("hunger"),S=document.getElementById("fun"),w=document.getElementById("clean"),O=document.getElementById("close-button"),b=document.getElementById("window-notice");let u=0;document.querySelector(".food").addEventListener("click",P);document.querySelector(".game").addEventListener("click",N);document.querySelector(".clean").addEventListener("click",U);d.addEventListener("click",q);a.volume=.2;function q(){u===0?(u=1,a.play(),d.src="img/img-bottons/Musica-On.png"):(u=0,a.pause(),d.src="img/img-bottons/Musica-Off.png")}O.addEventListener("click",C);function C(){b.style.display="none"}let n=100,r=100,c=100;function P(){return n=100,n}function N(){return r=100,r}function U(){return c=100,c}let l;const f=2e3,g=3e3,y=5e3,A=(f+g+y)/3;function p(){return n--,L.style.width=n+"%",n}setInterval(p,f);function h(){return r--,S.style.width=r+"%",r}setInterval(h,g);function v(){return c--,w.style.width=c+"%",c}setInterval(v,y);const o=document.querySelector(".cat");function M(){n<=70&&(o.src="img/img-status-cat/Cat-U-Hambriento.png"),r<=50&&(o.src="img/img-status-cat/Cat-U-Enfadado.png"),c<=40?o.src="img/img-status-cat/Cat-U-Sucio.png":n>70&&r>50&&c>40&&(o.src="img/img-status-cat/Cat-U-Normal.png")}function I(){l=(p()+h()+v())/3,l--,B.style.width=l+"%",M()}setInterval(I,A);I();
