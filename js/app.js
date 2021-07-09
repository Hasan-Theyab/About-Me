'use strict';

let score = 0;
let userName = prompt('What is your name?');
alert('Hello, ' + userName + ' welcome to our website');

function question1(){
  let favouriteColor = prompt('Is my favourite color blue?');
  favouriteColor = favouriteColor.toLowerCase();
  if (favouriteColor === 'yes' || favouriteColor === 'y') {
    alert('Good job,correct answer');
    score++;
  } else if (favouriteColor === 'no' || favouriteColor === 'n') {
    alert('Wrong answer');

  } else {
    alert('please only write yes/y or no/n');
  }
}
question1();




function question2(){
  let favouriteCar = prompt('Is my favourite car Mercedes?');

  favouriteCar = favouriteCar.toLowerCase();

  if (favouriteCar === 'y' || favouriteCar === 'yes') {
    alert('That is a wrong answer');
  } else if (favouriteCar === 'n' || favouriteCar === 'no') {
    alert('Good job, that\'s a correct answer');
    score++;
  } else {
    alert('Please only answer with y/n or yes/no');
  }
}
question2();


function question3(){
  let favouriteFruit = prompt('Is my favourite fruit banana?');

  favouriteFruit = favouriteFruit.toLowerCase();

  if (favouriteFruit === 'y' || favouriteFruit === 'yes') {
    alert('Good job, that\'s a correct answer');
    score++;
  } else if (favouriteFruit === 'n' || favouriteFruit === 'no') {
    alert('That\'s a wrong answer');

  } else {
    alert('Please only answer with y/n or yes/no');
  }
}
question3();


function question4(){
  let favouriteHobby = prompt('Is my favourite hobby drawing?');

  favouriteHobby = favouriteHobby.toLowerCase();

  if (favouriteHobby === 'y' || favouriteHobby === 'yes') {
    alert('That\'s a wrong answer');
  } else if (favouriteHobby === 'n' || favouriteHobby === 'no') {
    alert('Good job, that\'s a correct answer');
    score++;
  } else {
    alert('Please only answer with y/n or yes/no');
  }
}
question4();

function question5(){
  let favouriteDrink = prompt('Is my favourite drink coffee?');

  favouriteDrink = favouriteDrink.toLowerCase();

  if (favouriteDrink === 'y' || favouriteDrink === 'yes') {
    alert('That\'s a wrong answer');
  } else if (favouriteDrink === 'n' || favouriteDrink === 'no') {
    alert('Good job, that\'s a correct answer');
    score++;
  } else {
    alert('Please only answer with y/n or yes/no');
  }
}
question5();


alert('Welcome back ' + userName + ' now we will begin the part 2 of the questions');


function question6(){

  for (let i = 0; i < 4; i++) {
    let guessNumber = prompt('Guess a number between 1 and 10\nHint: You have 4 attempts allowed');
    while (!guessNumber) {
      guessNumber = prompt('please write anything');
    }
    if (guessNumber < 6) {
      alert('Too Low');
    } else if (guessNumber > 6) {
      alert('Too High');
    } else if (guessNumber === 6) {
      alert('Correct answer');
      score++;
      break;
    }else{
      alert('Please, only enter numbers');
    }
  }
}

question6();


alert('The correct answer is 6');


let city = ['paris', 'london', 'new york', 'madrid'];
function question7(){
  for (let j = 0; j < 6; j++) {
    let favouriteCity = prompt('What is my favourite city?\nHint: You have 6 attempts allowed');
    favouriteCity = favouriteCity.toLowerCase();
    while (!favouriteCity) {
      favouriteCity = prompt('please write anything');
    }
    if (favouriteCity === city[0] || favouriteCity === city[1] || favouriteCity === city[2] || favouriteCity === city[3]) {
      score++;
      break;
    }
  }
}
question7();

alert(city);

alert(`You have a score of ${score} /7`);













