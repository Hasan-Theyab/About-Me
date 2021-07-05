'use strict';
let username=prompt("What is your name ?");
console.log(username)

let feeling = confirm("how are you ?")
console.log(feeling)

if(feeling === true)
{
    alert("Ok good to know you're ok");
}
else
{
    alert("Get well soon")
}

alert("Welcome " +username)
alert("I want to play a game with you")

let major = confirm("Do you study programming ?")
if(major === true)
    {
        alert("correct answer")
    }
    else
    {
        alert("incorrect answer")
    }
let course=prompt("What kind of programming do you study ?  HTMLor JS")
if(course ==  "html" || "js")
{
    alert("OK")
}
else
{
    alert("invalid course")
}

let car=confirm("Do cars fly?")
if(car === true)
{
    alert("incorrect")
}
else
{
    alert("correct")
}

alert("Thank you for playing " +username)