/*
 *
 *
 *
 *   1 ask user first name
 *   2 ask user last name
 *   3 ask user favourite color
 *   4 write user password combo
 */

//  1 ask user first name

var firstName = prompt("What's your first name?");
console.log(firstName);

//  2 ask user last name

var lastName = prompt("What's your last name?");
console.log(lastName);

//  3 ask user favourite color

var favColor = prompt("What's your favourite color?");
console.log(favColor);

//  4 write user password combo

document.getElementById("password").innerHTML =
	firstName + lastName + favColor + 21;
