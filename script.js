// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Function to generate password through random selection
function generatePassword() {
    
  const NUMBER = [0,1,2,3,4,5,6,7,8,9];
  const UPPERCASE = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const SPECIAL = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","`","{","|","}","~"]
  password = []
    
  var passwordnumber = window.prompt("Please choose your length of characters. Note: At least 8 and no more than 128.");
  
  if (passwordnumber < 8 || passwordnumber > 128) {
    alert("You must choose a length of at least 8 characters and no more than 128 characters. Please try again.");
    return;
  }
        
  var lowercase = window.confirm("Would you like to include lowercase characters?");
  var uppercase = window.confirm("Would you like to include uppercase characters?");
  var numeric = window.confirm("Would you like to include numeric characters?");
  var special = window.confirm("Would you like to include special characters?");
     

  if (!numeric && !lowercase && !uppercase && !special) {
    alert("You must choose at least one character type. Please try again.");
    return;
    }
  
  for (var i=0;;) {
    if (numeric) {
      var randomnumber = Math.floor (Math.random()*NUMBER.length);
      password.push(NUMBER[randomnumber]);
      i++;
      if (i==passwordnumber) {
        break;
      }
    }

    if (uppercase) {
      var randomupper = Math.floor (Math.random()*UPPERCASE.length);
      password.push(UPPERCASE[randomupper]);
      i++;
      if (i==passwordnumber) {
        break;
      }
    }
    
    if (lowercase) {
      var randomlower = Math.floor (Math.random()*LOWERCASE.length);
      password.push(LOWERCASE[randomlower]);
      i++;
      if (i==passwordnumber) {
        break;
      }
    }
  
    if (special) {
      var randomspecial = Math.floor (Math.random()*SPECIAL.length);
      password.push(SPECIAL[randomspecial]);
      i++;
      if (i==passwordnumber) {
        break;
      }
    }  
  }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
}

  