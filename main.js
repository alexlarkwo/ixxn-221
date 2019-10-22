let randomNumber = Math.random()*100
let count = 0;
let guess = 1;

function difference(a, b) {
  return Math.abs(a - b);
}

function guessNumber(){

count = count +1;
console.log(count)

document.getElementById('showClicks').innerHTML = `${count}`

let myNumber = document.getElementById('number').value;

if (difference(randomNumber , myNumber) == 0){
  document.getElementById('howClose').innerHTML = `<h4> Correct Guess </h4>`
  }

if (difference(randomNumber, myNumber) > 50){
  document.getElementById('howClose').innerHTML = `<h4> Freezing </h4>`
  }

if (difference(randomNumber, myNumber) > 20 && difference(randomNumber, myNumber) < 49){
  document.getElementById('howClose').innerHTML = `<h4> Cold </h4>`
  }

  if (difference(randomNumber, myNumber) > 10 && difference(randomNumber, myNumber) < 19){
    document.getElementById('howClose').innerHTML = `<h4> Warm </h4>`
}

if (difference(randomNumber, myNumber) > 1 && difference(randomNumber, myNumber) < 9){
  document.getElementById('howClose').innerHTML = `<h4> HOT </h4>`
}
}


function resetNumber(){
count = 0
randomNumber = Math.floor(Math.random()*100)


if (randomNumber){

   console.log(randomNumber)

   randomNumber = randomNumber

 }
 document.getElementById('showClicks').innerHTML = `<p> ${count} </p>`;
}
