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