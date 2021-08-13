function getQueryVariable(variable) {
let queryDict = [];
location.search
.substring(1)
.split('&')
.forEach((item) =>{
let param = item.split('=');
queryDict[param[0]] = param[1];
});

return(queryDict[variable]);

}

function readAllParams() {

   var result = true;


   var un = getQueryVariable('username');

   if (un!="michael") 
   {
     result = false; 
 }
    
  var sn = getQueryVariable('surename');

   if (sn!= "Firsov") 
   {
       result = false;
   }
    
  var em = getQueryVariable('eMail');
   
   if (em!= "mail") 
   {
       result = false;
   }

   var ph = getQueryVariable ('phone');
    if (ph!= "89779576947") {
        result = false;
    }
    
  var gn = getQueryVariable('gender');
   if (gn!= "male") 
   {
       result = false;
   }

   if (result == true) {
    alert ("данные верны")
   }
  else {
      alert ("данные не верны, переделайте.")

      document.location.href = 'index.html' 
  }
    }
