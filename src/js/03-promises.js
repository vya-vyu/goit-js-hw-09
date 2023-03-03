import { Notify } from "notiflix";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => { 
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  
  const data = {};
  formData.forEach((value, key) => {
    data[key] = Number(value);
  });
  let delay = data.delay;
  console.log(data);
  for (let i = 0; i < data.amount; i += 1) { 
    
    showPromise(createPromise(i + 1, delay))
   
    delay += data.step;
  }

})

function showPromise(promise) { 
 promise
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(` Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(` Rejected promise ${position} in ${delay}ms`)
  });
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        console.log(position)
        resolve({position,delay})
    
      } else {
        // Reject
        console.log(position)
        reject({position,delay})
        
      }
    },delay)
  })
  return promise
}


