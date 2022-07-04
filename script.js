// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword() {
    
    numberlength();
    criteriaselection();
    generateprocess();


    function numberlength() {
      var passwordnumber = window.prompt("Please choose your length of characters. Note: At least 8 and no more than 128.");
      console.log(passwordnumber);

      if (passwordnumber < 8 || passwordnumber > 128) {
      alert("You must choose a length of at least 8 characters and no more than 128 characters. Please try again.")
      numberlength();
    }
    }

    function criteriaselection() {
      var lowercase = window.confirm("Would you like to include lowercase characters?");
      console.log(lowercase);

      var uppercase = window.confirm("Would you like to include uppercase characters?");
      console.log(uppercase);

      var numeric = window.confirm("Would you like to include numeric characters?");
      console.log(numeric);
    
      var special = window.confirm("Would you like to include special characters?");
      console.log(special);

      if (!numeric && !lowercase && !uppercase && !special) {
        alert("You must choose at least one character type. Please try again.");
        criteriaselection();
    }
    }
    
    function generateprocess() {



  }

  const NUMBER = [0,1,2,3,4,5,6,7,8,9]
  
  const UPPERCASE = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]

  const LOWERCASE = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

  const SPECIAL = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\","^","`","{","|","}","~"]