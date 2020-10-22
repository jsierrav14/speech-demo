inputForm.onsubmit = function (event) {
    event.preventDefault();
  
    speak();
  
    // inputTxt.blur();
  }
  
  pitch.onchange = function () {
    pitchValue.textContent = pitch.value;
  }
  
  rate.onchange = function () {
    rateValue.textContent = rate.value;
  }
  
  rateSize.onchange = function () {
  
    console.log(`font-size:${rateSize.value}`)
    let text = document.getElementsByTagName('p')
  
    for (let p of text) {
      p.style.fontSize = rateSize.value + "px"
    }
  }
  
  colorSelect.onchange = function () {
    let text = document.getElementsByTagName('p')
  
    switch (colorSelect.value) {
      case 'red':
  
  
        for (let p of text) {
          p.style.fontSize = rateSize.value + "px"
          p.style.backgroundColor = "red"
          p.style.color = "white"
        }
        break;
        case 'yellow':
  
    
          for (let p of text) {
            p.style.fontSize = rateSize.value + "px"
            p.style.backgroundColor = "yellow"
            p.style.color = "black"
          }
          break;
         case 'green':
      
            for (let p of text) {
              p.style.fontSize = rateSize.value + "px"
              p.style.backgroundColor = "green"
              p.style.color = "white"
            }
  
        break;
  
      default:
        break;
    }
  
  
  }
  voiceSelect.onchange = function () {
    speak();
  }
  