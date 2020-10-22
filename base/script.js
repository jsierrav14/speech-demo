var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelectorAll('p');
var voiceSelect = document.querySelector('select');
var colorSelect = document.querySelector('#selectColor');


var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateSize = document.querySelector('#rateSize');
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
    if (aname < bname) return -1;
    else if (aname == bname) return 0;
    else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for (i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {

  console.log(inputTxt)
  let txt = ""
  for (let p of inputTxt) {
    txt += p.innerHTML
  }
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (txt !== '') {
    var utterThis = new SpeechSynthesisUtterance(txt);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

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
