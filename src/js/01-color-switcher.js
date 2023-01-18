function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const buttonStart = document.querySelector("button[data-start]");
  const buttonStop = document.querySelector("button[data-stop]")
  const bodyEl = document.querySelector("body");

  let timerId = null;



  buttonStart.addEventListener('click', onButtonStartClick);

  function onButtonStartClick() {
     timerId = setInterval(()=> {
       bodyEl.style.backgroundColor = getRandomHexColor() 
    }, 1000);

    buttonStart.disabled = true;
  };
  buttonStop.addEventListener('click', () =>{
    clearInterval(timerId);
    buttonStart.disabled = false;

  } )

 

    

  