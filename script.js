function calculate(){
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var n = document.getElementById("n").value;
   var result = document.getElementById("result");
result.innerHTML="The interest is " + p*r*n/100 + " dollars."
}

function compound(){
   var p2 = document.getElementById("p").value;
   var r2 = document.getElementById("r").value;
   var n2 = document.getElementById("n2").value;
   var t = document.getElementById("t").value;
   var rate = r2/100 
   var z = rate/t 
   var x = 1+z;
   var nt = n2*t;
   var interest = p2* Math.pow(x, nt);
   document.getElementById("result2").innerHTML = "In " + n2 + " years, you will have " + interest + " dollars.";

}
/*
The formula for compound interest is P (1 + r/n)^(nt), 
where P is the initial principal balance, r is the 
interest rate, n is the number of times interest is
 compounded per time period and t is the number of
  time periods. */
  