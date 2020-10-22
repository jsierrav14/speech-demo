function speak(){

    console.log(inputTxt)
    let txt=""
      for(let p of inputTxt){
           txt+=p.innerHTML
      }
      if (synth.speaking) {
          console.error('speechSynthesis.speaking');
          return;
      }
      if (txt!== '') {
      var utterThis = new SpeechSynthesisUtterance(txt);
      utterThis.onend = function (event) {
          console.log('SpeechSynthesisUtterance.onend');
      }
      utterThis.onerror = function (event) {
          console.error('SpeechSynthesisUtterance.onerror');
      }
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for(i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }
      utterThis.pitch = pitch.value;
      utterThis.rate = rate.value;
      synth.speak(utterThis);
    }
  }