function compute()
{   //getting input value into the function
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
  
// Validation of positive number for "principal" input
    if (p <= 0){window.alert("Enter a positive number")
document.getElementById("principal").focus();}
   else {         
//calcuation of interest
    var interest = p * r * y / 100;

//adding the current year with the year input
    var yearNow = new Date().getFullYear();
    var yearsFromNow = (+yearNow) + (+y);
//display result from calculation
   document.getElementById("result").innerHTML = "<br>" + "If you deposit " + p + "," + "<br>" + "at an interest rate " + r + "%." + "<br>" + "You will receive an amount of " + interest + "," + "<br>" + "in the year " + yearsFromNow;
}  
}

function slider()
{ //display the value from slider
    var sv = document.getElementById("rate").value;
document.getElementById("slider_value").innerHTML = sv + "%";}
