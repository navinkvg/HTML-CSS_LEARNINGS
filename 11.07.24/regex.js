
function checkPasswordStrength(password){
    if(password.length<6)
    {
       return "Weak";
    }
    else{
       let hasletter=/[a-zA-Z]/.test(password);
       let hasdigit=/[0-9]/.test(password);
       if(hasletter&&hasdigit)
       {
          return "Strong";
       }
       else{
          return "Medium";
       }
    }
 
 }
 
 console.log(checkPasswordStrength("abcedgfgfh34322AADFD"));