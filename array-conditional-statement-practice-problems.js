//-----> Clean a given email string.
/*
    * Remove spaces
    * Convert to lowercase
*/
// let userInput = ' ABC@GMAIL.COM ';
// let cleanEmail = userInput.trim().toLowerCase();

// console.log(cleanEmail);



//-----> Format an 11-digit phone number to international format.
/*
    * Input example: "01712345678"
    * Output format: "+880-171-234-5678"
*/
let userInput = '1734678998';
let part1 = userInput.slice(0,3);
let part2 = userInput.slice(3,6);
let part3 = userInput.slice(6);
let formatedVersion = '880'+'-'+part1+"-"+part2+"-"+part3;

console.log(formatedVersion);
