let microphone = document.getElementById("microphone");
let output = document.getElementById("output");
let searchform = document.getElementById("search-form")
let searchinput = document.getElementById("search-input")
let outer = document.getElementById("outer");
let daymode = document.getElementById("day-mode");
let nightmode = document.getElementById("night-mode");

const recognition = new webkitSpeechRecognition || new SpeechRecognition;
console.log(recognition)

microphone.addEventListener("click",function(){
   recognition.start();
})
recognition.onaudiostart = function(){
  audio.play();
  microphone.classList.add("istart");
  outer.classList.add("outer");
  output.innerHTML = "Speak now ....."

}
const audio = new Audio();
audio.src = "beep.mp3";

recognition.onaudioend = function(){
  microphone.classList.remove("istart");
  outer.classList.remove("outer");
  recognition.stop();
}

recognition.onresult = function(event){
   let text = event.results[0][0].transcript;
   read(text);
}
function read(textrecive){
   let text = textrecive;
   var speech = new SpeechSynthesisUtterance();
   question.innerHTML = '"' + text + '"';

   if(text.includes("search")){
      let str = text.replace("search","");
      searchinput.value = str;
      speech.text = "Showing Result"+str;
      output.innerHTML = "Searching Via Google";
      setTimeout(() => {
         searchform.submit();
         searchinput.value = "";
         output.innerHTML = "Click The Microphone";
      }, 800);
   }else if(text.includes("hello")){
      speech.text = "Hi Sir, i am Cortana, how are you?";
      textShow();
   }else if(text.includes("how are you")){
      speech.text = "i am fine";
      textShow();
   }else if(text.includes("Assalamu Alaikum")){
      speech.text = "Waalaikum Assalam";
      textShow();
   }else if(text.includes("bye")){
      speech.text = "okey see you again";
      textShow();
   }else if(text.includes("your name")|| text.includes("who are you")){
      speech.text = "My name is Cortana, and i am your parsonal assistant";
      textShow();
   }else if(text.includes("about yourself")){
      speech.text = "My name is Cortana, and i am a parsonal assistant. I have 1000 tb ssd, 10 tb ram and 100 genaretion 50 core processor";
      textShow();
   }else if(text.includes("your boss")){
      speech.text = "My Boss's Name Is Bishal Rahman, he is 20 years old. And He Is a Computer Engineer. he read in Diploma in engineering ";
      textShow();
   }else if(text.includes("you love")){
      speech.text = "no! I already have many friends";
      textShow();
   }else if(text.includes("your girlfriend")){
      speech.text = "My girlfriend name is Putul";
      textShow();
   }else if(text.includes("your boyfriend")){
      speech.text = "My boyfriend is Bishal Sir";
      textShow();
   }else if(text.includes("Cortana")){
      speech.text = "Yes Sir, I am Here. How Can I Help You?";
      textShow();
   }else if(text.includes("thanks") || text.includes("thank you")){
      speech.text = "ok sir welcome";
      textShow();
   }else if(text.includes("bad") || text.includes("not good") || text.includes("sick") || text.includes("not fine")){
      speech.text = "Ohh, what happened to you?";
      textShow();
   }else if(text.includes("fine") || text.includes("good")){
      speech.text = "glad to hear that";
      textShow();
   }else if(text.includes("date of birth")){
      speech.text = "i was born on the 19th july in  2022";
      textShow();
   }else if(text.includes("today")){
      let time = new Date;
      speech.text = time;
      textShow();
   }else if(text.includes("open Google") || text.includes("open browser")){
      window.open('https://www.google.com/', "google" , "feature");
   }else if(text.includes("sing a song")){
      const audio = new Audio();
      audio.src = "song.mp3";
      audio.play();
      output.innerHTML = "Enjoy The Song";
   }else{
      speech.text = "this word is not in my database";
      textShow();
   }
   window.speechSynthesis.speak(speech);
   
   function textShow(){
       output.innerHTML = speech.text;
      }
}