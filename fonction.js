
var score = 0;
var compteur = 1;

function afficherscore() {
	score = score + compteur;
	document.getElementById('score').innerHTML = score;
  
};
 function incrementer() {
  if (score >= 40*compteur*compteur) {
    compteur = compteur*2;
    console.log("incrementer Multiplcateur : " + compteur);
  }
    else {
     alert("Continue de cliquer mon pote !!!");
   }
   document.getElementById('compteur').innerHTML = "Multiplcateur x" + compteur;
   document.getElementById('score').innerHTML = score;

 }

