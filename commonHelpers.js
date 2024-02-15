import{S as c,i as u}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=new c(".gallery a",{scrollZoom:!1}),l=document.querySelector(".form"),m=document.querySelector(".gallery"),i=document.querySelector(".loader");l.addEventListener("submit",g);function d(t){const o="https://pixabay.com/api/?",s=new URLSearchParams({key:"42172991-e7a3268a8ccb87dfba8d5efbc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=o+s;return fetch(n).then(e=>e.json())}function g(t){t.preventDefault();const o=document.querySelector('input[type="text"]').value.trim();o!==""&&(i.style.display="inline-block",d(o).then(s=>{s.hits.length===0?(u.show({messageAlign:"center",message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",position:"center",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",displayMode:"replace",close:!1,closeOnEscape:!0,pauseOnHover:!1,buttons:[['<button type="button" style="background-color: transparent;"></button>',function(n,e){n.hide({transitionOut:"fadeOut"},e)}]]}),l.reset()):(m.innerHTML=p(s.hits),f.refresh())}).catch(s=>console.error("Error fetching data:",s)).finally(()=>{i.style.display="none"}))}function p(t){return t.map(y).join("")}function y(t){return`<li class="gallery-card">
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
