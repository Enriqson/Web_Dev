Array.from(document.querySelectorAll(".drum")).map(func);

function func(button){

  button.addEventListener("click",()=>{
    makeSound(button.innerHTML);
    buttonAnimation(button.innerHTML);
  });

  document.addEventListener("keydown",(event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}

function makeSound(key){
  var audio;
  if(key=="w") audio= new Audio("sounds/crash.mp3");
  else if(key=="a") audio= new Audio("sounds/kick-bass.mp3");
  else if(key=="s") audio= new Audio("sounds/snare.mp3");
  else if(key=="d") audio= new Audio("sounds/tom-1.mp3");
  else if(key=="j") audio= new Audio("sounds/tom-2.mp3");
  else if(key=="k") audio= new Audio("sounds/tom-3.mp3");
  else if(key=="l")audio= new Audio("sounds/tom-4.mp3");
  else return;
  audio.play();
}


function buttonAnimation(currentKey){
  var activeKey=document.querySelector("."+currentKey)

  activeKey.classList.add("pressed");

  setTimeout(()=>activeKey.classList.remove("pressed"),100);

}
