
const change = document.getElementById("binarny");
const change1 = document.getElementById("octal");
const change2 = document.getElementById("dec");
const change3 = document.getElementById("hex");
var toFix = document.getElementById("a");


function stringToCharCode(a) {

       

    const lengthOfWords = a.length ;

    var toBinary = [];
  for(let i=0; i<lengthOfWords; i++) {
        let myvar = a.charCodeAt(i);
         

     toBinary.push(myvar);
        
        

  };

  console.log(toBinary)

  var trueBinary = []
  var trueDecimal = []
  var trueOctal = []
  var trueHEX = []
  //dwójkowy
 for(let i=0; i<toBinary.length; i++) {

    trueBinary.push(toBinary[i].toString(2)); 

 };
//osemkowy

for(let i=0; i<toBinary.length; i++) {

    trueOctal.push(toBinary[i].toString(8)); 

 };
 //dziesiętny

for(let i=0; i<toBinary.length; i++) {

    trueDecimal.push(toBinary[i].toString(10)); 

 };
 //szestnastkowy

for(let i=0; i<toBinary.length; i++) {

    trueHEX.push(toBinary[i].toString(16)); 

 };
 change1.innerHTML = trueOctal.join(' ');
 change2.innerHTML = trueDecimal.join(' ');
 change3.innerHTML = trueHEX.join(' ');
 change.innerHTML = trueBinary.join(' ');

};

//transltor binary to text
function run() {

    let answer = String(document.getElementById("toTranslate").value);


    stringToCharCode(answer)

}
function toTranslateBinaryRun() {

let len = String(document.getElementById("toTranslateBinaryIn").value);

let trueLen = len.replace(/ /g,'');

  var numbersToDecimal = [];
  var decimaltoWords = [];


 numbersToDecimal = trueLen.match(/.{1,7}/g);

 for(let i=0; i<numbersToDecimal.length; i++) {

    if(numbersToDecimal[i]=="100000" || numbersToDecimal[i]=="1000001" ){

    continue;


    }
 else {
  
    console.log(numbersToDecimal[i]);
    numbersToDecimal[i] = parseInt(numbersToDecimal[i], 2);                                 
    decimaltoWords.push(String.fromCharCode(numbersToDecimal[i]));

 };


 };
 
 
 const change4 = document.getElementById("toTranslateBinaryOut").innerHTML = decimaltoWords.join('');
console.log(numbersToDecimal);
console.log(decimaltoWords);

 


};


