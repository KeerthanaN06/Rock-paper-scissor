const score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loss:0,
  Tie:0
};
document.querySelector('.stone-cls').addEventListener('click',()=>{
playerMove('Stone');
})
document.querySelector('.paper-cls').addEventListener('click',()=>{
playerMove('Paper');
})
document.querySelector('.Scissor-cls').addEventListener('click',()=>{
playerMove('Scissor');
})
document.body.addEventListener('keydown',(event)=>{
if(event.key=='r' || event.key==='R'){
playerMove('Stone');
}
else if(event.key==='p'||event.key==='P'){
playerMove('Paper');
}
else if(event.key==='s' || event.key==='S'){
playerMove('Scissor');
}
})
document.querySelector('.res').innerHTML=` 
      Wins:${score.wins}
      losses:${score.loss}
      Ties:${score.Tie}`;

      
      let isautoplay=false;
      let interval;
      function autoplay(){
        
          if(isautoplay===false)
          { 
            interval=setInterval(()=>{
            let compmove=compMove();
            playerMove(compmove);
            },1000);
            isautoplay=true;
            let auto=document.querySelector('.auto-butt').innerHTML='AutoPlayingOn';
            auto.classList.add('is-on');

          }
          else{
            clearInterval(interval);
            isautoplay=false;
            let auto=document.querySelector('.auto-butt').innerHTML='Autoplay';
            auto.classList.remove('is-on');
          }

} 
function playerMove(move){
let result='';
let comp=compMove();
if(move==='Stone'){
  if(comp === 'Stone'){
   result='Match tie';
  }
  else if(comp==='Paper'){
   result='You lose';
  } 
  else if(comp==='Scissor'){
   result='You win';
  }
}
else if(move==='Paper'){
  if(comp === 'Stone'){
 result='You win';
 }
  else if(comp==='Paper'){
   result='Match tie';
 }    
 else if(comp==='Scissor'){
   result='You lose';
  }
}
else if(move==='Scissor'){
  if(comp === 'Stone'){
    result='You lose';
  }
  else if(comp==='Paper'){
    result='You win';
  }
  else if(comp==='Scissor'){
     result='Match tie';
  }
}

if(result==='You win')
{
  score.wins++;
}
else if(result==='You lose')
{
  score.loss++;
}
else if(result==='Match tie')
{
  score.Tie++;
}
document.querySelector('.move').innerHTML=`You<img src="${move}.png" class="move-img2"><img src="${comp}.png" class="move-img2">Computer`;
document.querySelector('.curr').innerHTML=result;
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.res').innerHTML=` 
      Wins:${score.wins}
      losses:${score.loss}
      Ties:${score.Tie}`;
     } 

   
function compMove(){
let random=Math.random();
let comp='';
if(random >=0 && random <1/3)
{
comp='Stone';
}
else if(random>=1/3 && random<2/3)
{
comp='Paper';
}
else if(random>=2/3 && random<1)
{
comp='Scissor';
}
return comp;
}