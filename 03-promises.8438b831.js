!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name ="step"]'),t=document.querySelector('[name ="amount"]');function c(e,n){var o=Math.random()>.3;return new Promise((function(t,c){o?t({position:e,delay:n}):c({position:e,delay:n})}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var a=Number(t.value),r=Number(n.value),u=(Number(o.value),1);u<=a;u+=1)c(u,r).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.8438b831.js.map
