const e=document.querySelector(".form"),o=document.querySelector('[name="delay"]'),t=document.querySelector('[name ="step"]'),n=document.querySelector('[name ="amount"]');function l(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{t?n({position:e,delay:o}):l({position:e,delay:o})}))}e.addEventListener("submit",(function(e){e.preventDefault();const r=Number(n.value);let u=Number(o.value);Number(t.value);for(let e=1;e<=r;e+=1)l(e,u).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.df1e19db.js.map
