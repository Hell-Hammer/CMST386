function converter(){
var ttype, temp, newtemp;
ttype = window.prompt("Is your temperature fahrenheit or celcius (f or c)?","f");

if(ttype == "f")
{
  temp = parseFloat(window.prompt("Enter temperature","0"));
  if (isNaN(temp)) {
      alert("Please enter a number.");
  }
  else newtemp = (temp - 32) * (5 / 9);
  alert(temp + " f is equal to " + +newtemp.toFixed(2) +" c.\n Enjoy");
}
else if(ttype == "c")
{
  temp = parseFloat(window.prompt("Enter temperature","0"));
  if (isNaN(temp)) {
      alert("Please enter a number.");
  }
  else newtemp = temp * 1.8 + 32;
  alert(temp + " c is equal to " + +newtemp.toFixed(2) +" f.\n Enjoy");
}
else alert("Invalid entry. Please enter 'f' or 'c'.");

}
