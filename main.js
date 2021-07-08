//Calculate

    //Display the result, which is M.
//     document.getElementById("totalResult").style.display = "block";
//     document.getElementById("finalResult").innerHTML = result;


var k = document.getElementById("k").value;
var T = document.getElementById("T").value;
var b = document.getElementById("b").value;

function calculate() {
    num1 = document.getElementById("k").value;
    num2 = document.getElementById("T").value;
    num3 = document.getElementById("b").value;

    result = document.getElementById("result").innerHTML = (num1 * Math.pow(num2,num3)).toFixed(4);
    // totalResult = result.toFixed(4);
}

  function clearValues() {
      document.getElementById('k').value='';
      document.getElementById('T').value='';
      document.getElementById('b').value='';
      document.getElementById("totalResult").getElementsByTagName("span")[0].innerHTML="";
  }


