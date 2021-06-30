let tiklama = true;
let index = 0;
let arr = [];
let tiklamaCounter = 0;

function yazdirma(){
  tiklama = true;
  arr.push(Math.floor(Math.random() * 4));
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      setTimeout(function(){
        document.querySelector('#red').style.opacity= '1';
        setTimeout(function(){
          document.querySelector('#red').style.opacity= '0.5';
        },1000);
      },i * 1200);
    }

    else if(arr[i] === 1){
      setTimeout(function(){
        document.querySelector('#yellow').style.opacity = '1';
        setTimeout(function(){
          document.querySelector('#yellow').style.opacity = '0.5';
        },1000);
      },i * 1200);
    }

    else if(arr[i] === 2){
      setTimeout(function(){
        document.querySelector('#blue').style.opacity= '1';
        setTimeout(function(){
          document.querySelector('#blue').style.opacity= '0.5';
        },1000);
      },i * 1200);
    }

    else if(arr[i] === 3){
      setTimeout(function(){
        document.querySelector('#green').style.opacity = '1';
        setTimeout(function(){
          document.querySelector('#green').style.opacity = '0.5';
        },1000);
      },i * 1200);
    }
  }

  setTimeout(function(){
    tiklama = false;
    index = 0;
    tiklamaCounter = 0;
  },arr.length * 1200);

  
}

function timer(){
  setTimeout(function(){
  tiklama = true;
  document.getElementById("timerContainer").style.display = "block";
  document.getElementById("timer").innerHTML = "3";
  },0);

  setTimeout(function(){
    document.getElementById("timer").innerHTML = "2";
  },1000);

  setTimeout(function(){
    document.getElementById("timer").innerHTML = "1";
  },2000);

  setTimeout(function(){
    document.getElementById("timer").innerHTML = "0";
  },3000);

  setTimeout(function(){
    document.getElementById("timerContainer").style.display = "none";
  },3500);
}

document.getElementById("myBtn").addEventListener("click", clickmyBtn);
function clickmyBtn() {
  document.getElementById("level").innerHTML = (arr.length + 1) + ". Seviye";
  yazdirma();
  document.getElementById("myBtn").style.display = "none";
}

document.getElementById("green").addEventListener("click", colorClickGreen);
function colorClickGreen() {
  clickCounter();
  if(tiklama){
    return;
  }
  tiklamaCounter++;
  document.querySelector('#green').style.opacity = '1';
  setTimeout(function(){
    document.querySelector('#green').style.opacity = '0.5';
  },1000);

  if(arr[index] === 3){
    devam();
  }
  else{
      kaybettin();
  }
}

document.getElementById("red").addEventListener("click", colorClickRed);
function colorClickRed() {
  clickCounter();
  if(tiklama){
    return;
  }
  tiklamaCounter++;
  document.querySelector('#red').style.opacity = '1';
  setTimeout(function(){
    document.querySelector('#red').style.opacity = '0.5';
  },1000);
  if(arr[index] === 0){
    devam();
  }
  else{
      kaybettin();
  }
}

document.getElementById("yellow").addEventListener("click", colorClickYellow);
function colorClickYellow() {
  clickCounter();
  if(tiklama){
    return;
  }
  tiklamaCounter++;
  document.querySelector('#yellow').style.opacity = '1';
  setTimeout(function(){
    document.querySelector('#yellow').style.opacity = '0.5';
  },1000);
  if(arr[index] === 1){
      devam();
  }
  else{
      kaybettin();
  }
}

document.getElementById("blue").addEventListener("click", colorClickBlue);
function colorClickBlue() {
  clickCounter();
  if(tiklama){
    return;
  }
  tiklamaCounter++;
  document.querySelector('#blue').style.opacity = '1';
  setTimeout(function(){
    document.querySelector('#blue').style.opacity = '0.5';
  },1000);
  if(arr[index] === 2){
      devam();
  }
  else{
      kaybettin();
  }
}

function devam(){
  index++;
  if(index === arr.length){
    setTimeout(function(){
      timer();
    },1000);

    setTimeout(function(){
      clickmyBtn();
    },4000);
  }
}

function kaybettin(){
  setTimeout(function(){
      alert(`Kaybettin!
Ulaştığın Seviye: ${arr.length}`);
      index = 0;
      arr = [];
      document.getElementById("level").innerHTML = (arr.length+1) + ". Seviye";
      document.getElementById("myBtn").style.display = "block";
  },1000);
}

function clickCounter(){
  if(tiklamaCounter === arr.length){
    tiklama = true;
  }
}