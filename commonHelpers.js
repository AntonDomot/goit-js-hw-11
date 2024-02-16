import{i as u,S as g}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function d(t){const s="https://pixabay.com/api/?",o=new URLSearchParams({key:"42172991-e7a3268a8ccb87dfba8d5efbc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=s+o;return fetch(n).then(e=>e.json())}i.addEventListener("submit",t=>{t.preventDefault(),c.style.display="inline-block",l.innerHTML="";const s=document.querySelector('input[type="text"]').value.trim();d(s).then(o=>{o.hits.length===0?(u.show({messageAlign:"center",message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",displayMode:"replace",close:!1,closeOnEscape:!0,pauseOnHover:!1,buttons:[['<button type="button" style="background-color: transparent;"></button>',function(n,e){n.hide({transitionOut:"fadeOut"},e)}]]}),i.reset()):(l.innerHTML=f(o.hits),new g(".gallery a",{scrollZoom:!1}).refresh())}).catch(o=>console.error("Error fetching data:",o)).finally(()=>{c.style.display="none"})});function f(t){return t.map(m).join("")}function m(t){return`<li class="gallery-card">
<a href="${t.largeImageURL}" data-lightbox="image">
    <img class="gallery-image"
    src="${t.webformatURL}" alt="${t.tags}">
</a>
<div class="details">
    <p><strong>Likes:</strong> ${t.likes}</p>
    <p><strong>Views:</strong> ${t.views}</p>
    <p><strong>Comments:</strong> ${t.comments}</p>
    <p><strong>Downloads:</strong> ${t.downloads}</p>
</div>
</li>`}
//# sourceMappingURL=commonHelpers.js.map
