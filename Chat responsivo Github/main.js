const chat = document.querySelector(".messages");
const inputText = document.querySelector("#newMessage");
const send = document.querySelector("#send");
const iniHr = document.querySelector("#last-seen");
const linkedin = document.querySelector("#seta");


let date = new Date();
let hr = date.getHours();
if (hr < 10) hr = "0" + hr;
let min = date.getMinutes();
if (min < 10) min = "0" + min;
let flag = 0;
let randomMessage = "Eai maninho";

const todasConexoes = () => {
    linkedin.addEventListener("click", function(){ 
        if (document.getElementById("conexoes").style.visibility === "hidden")
        document.getElementById("conexoes").style.visibility = "visible"
        else
        
        document.getElementById("conexoes").style.visibility = "hidden" });
  };

const Hour = () => {
  setInterval(() => {
    let date = new Date();
    hr = date.getHours();
    if (hr < 10) hr = "0" + hr;
    min = date.getMinutes();
    if (min < 10) min = "0" + min;
  }, 500);
};

const dateTime = () => {
  iniHr.innerHTML = `Hoje ${hr}:${min} ` ;
};

const firstMessage = setInterval(
  (first = () => {
    mensagemInicial(randomMessage);
    limparTempo(firstMessage);
  }),
  2000
);

const mensagemSec = () => {
  secondMsg = setInterval(
    (first = () => {
      switch (flag) {
        case 0:
          randomMessage = "Tive uma ideia incrível para um projeto! 😍";
          break;
        case 1:
          randomMessage =
            "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?";
          break;
        case 2:
          randomMessage = "Então a gente começa amanhã!";
          break;
        case 3:
          randomMessage = "#BoraCodar! 💜🚀";
          break;
      }
      flag++;
      mensagemInicial(randomMessage);
      rolarScroll();
      limparTempo(secondMsg);
    }),
    2000
  );
};

const mensagemInicial = (message) => {
  chat.innerHTML += ` <!-- RECEIVE -->  
    <div class="message"> 
    <div class="top"> Caynã - ${hr}:${min}</div> 
    <div class="body">
    <span >${message}</span> 
    </div>
    </div> `;
};

const minhaMensagem = (text) => {
  return ` <!-- SENT -->  
    <div class="message you"> 
    <div class="top"> Você - ${hr}:${min}</div> 
    <div class="body"> 
    <span >${text}</span> 
    </div> 
    </div> `;
};

const mensagemEnviada = () => {
  send.addEventListener("click", (e) => {
    e.preventDefault();
    let x = inputText.value;
    if (inputText.value != "" && x.length <= 95) {
      chat.innerHTML += minhaMensagem(inputText.value);
      rolarScroll();
      clearminhaMensagem();
      mensagemSec();
    }
  });
};

const limparTempo = (id) => {
  clearInterval(id);
};

const clearminhaMensagem = () => {
  inputText.value = "";
};

const rolarScroll = () => {
  const messages = document.querySelector(".messages");
  messages.lastElementChild.scrollIntoView();
};

//EXECUTE
Hour();
dateTime();
mensagemEnviada();
todasConexoes();
cvs1();