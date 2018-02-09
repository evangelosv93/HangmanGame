// _________________________________________________________________
// JS pseudo code thought process-
// -Set up all variables
// ---------
// -
// -make array of keys that are in word/ not in word
// -make array of words with each letter ocuppying a space in array for use in function later
// ---------
// Set up function to get user input (keystrokes)(getelementbyid??)
// -function to +1 mistake in mistake counter when typing in wrong letters
// -make guess word have default .000001 opacity and when letter guessed correct goes back to 1
//make a for loop for array that is set
// _____________________________________________
var keys = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var wordOne = ["c","o","d","i","n","g"];

document.write(wordOne);

document.getElementById("guessWord").innerHTML = wordOne;


for (i = 0; i < wordOne.length; i++) {
    text +=  () + "<br>";
