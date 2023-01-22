import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name ="step"]');
const  amountEl = document.querySelector('[name ="amount"]');

formEl.addEventListener('submit', onFormBtnSubmit);

function onFormBtnSubmit(e) {
  e.preventDefault();
   const amount = Number(amountEl.value);
   let delay = Number(delayEl.value);
   let step = Number(stepEl.value);

    for (let position = 1; position <= amount; position += 1){
   
        createPromise(position, delay)

        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        delay += step;  
      }
         
    }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
      resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

      }, delay)
         
    })
  }
  
