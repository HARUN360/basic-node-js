// option 1 : direct set on the HTML element
// {/* <button onclick="console.log(65);">click me</button> */} html theke agoto dekhar jonno nia asa

// option 2: onclick function atau amra use korbo prai
// <button onclick="makeRed()">Make Red</button>--- html theke agoto
function makeRed(){
    document.body.style.backgroundColor= 'red';
}
// option 3: onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;/**js bitore onclick korle function call korte hobenah, call korle permanent color hoa jabe */
 function makeBlue(){
  document.body.style.backgroundColor = 'blue';
 } 

//  option 4: onclick and function ak satei
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){/**functName (makePurple) na dileu hobe */
   document.body.style.backgroundColor = 'purple'
}


//  option 5:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
   document.body.style.backgroundColor = 'pink';
}

// option 5 : another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
 document.body.style.backgroundColor = 'green';
});

// option 5: atai sobsomoi use korbo:
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
  });