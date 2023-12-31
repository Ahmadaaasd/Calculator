let checkbox = document.querySelector("input[name = checkbox]");
checkbox.addEventListener('change', function(){
  if(this.checked){
    document.getElementById("body").style.backgroundColor = 'hsl(0, 0%, 90%)';
    document.getElementById("TH").style.color = 'black';
    document.getElementById("calc").style.color = 'black';
    document.getElementById("head").style.backgroundColor = 'hsl(0, 0%, 90%)';
    document.getElementById("num").style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.getElementById("footer").style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById("B7").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B8").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B9").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bplus").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bdiv").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bmins").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bdot").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bmulti").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B1").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B2").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B3").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B4").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B5").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B6").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("B0").style.backgroundColor = 'hsl(0, 1%, 90%)';
    document.getElementById("Bdel").style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.getElementById("Breset").style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.getElementById("Bequal").style.backgroundColor = 'hsl(25, 98%, 40%)';

    document.getElementById("num").style.color = 'black';
    document.getElementById("B7").style.color = 'black';
    document.getElementById("B8").style.color = 'black';
    document.getElementById("B9").style.color = 'black';
    document.getElementById("Bplus").style.color = 'black';
    document.getElementById("Bdiv").style.color = 'black';
    document.getElementById("Bmins").style.color = 'black';
    document.getElementById("Bdot").style.color = 'black';
    document.getElementById("Bmulti").style.color = 'black';
    document.getElementById("B1").style.color = 'black';
    document.getElementById("B2").style.color = 'black';
    document.getElementById("B3").style.color = 'black';
    document.getElementById("B4").style.color = 'black';
    document.getElementById("B5").style.color = 'black';
    document.getElementById("B6").style.color = 'black';
    document.getElementById("B0").style.color = 'black';
    document.getElementById("Bdel").style.color = 'white';
    document.getElementById("Breset").style.color = 'white';
    document.getElementById("Bequal").style.color = 'white';
    document.getElementById("check").style.background = 'hsl(0, 5%, 81%)';
  }
  else{
      document.getElementById("body").style.backgroundColor = 'hsl(222, 26%, 31%)';
      document.getElementById("TH").style.color = 'rgb(207, 207, 207)';
      document.getElementById("calc").style.color = 'white';
      document.getElementById("head").style.backgroundColor = 'hsl(222, 26%, 31%)';
      document.getElementById("num").style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementById("footer").style.backgroundColor = 'hsl(223, 31%, 20%)';
      document.getElementById("B7").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B8").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B9").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bplus").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bdiv").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bmins").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bdot").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bmulti").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B1").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B2").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B3").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B4").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B5").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B6").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("B0").style.backgroundColor = 'hsl(0, 1%, 85%)';
      document.getElementById("Bdel").style.backgroundColor = ' hsl(222, 26%, 45%)';
      document.getElementById("Breset").style.backgroundColor = ' hsl(222, 26%, 45%)';
      document.getElementById("Bequal").style.backgroundColor = 'hsl(6, 63%, 50%)';

      document.getElementById("num").style.color = 'white';
      document.getElementById("B7").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B8").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B9").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bplus").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bdiv").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bmins").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bdot").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bmulti").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B1").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B2").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B3").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B4").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B5").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B6").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("B0").style.color = 'hsl(221, 14%, 31%)';
      document.getElementById("Bdel").style.color = 'white';
      document.getElementById("Breset").style.color = 'white';
      document.getElementById("Bequal").style.color = 'white';
      document.getElementById("check").style.background = 'hsl(223, 31%, 20%)';
  }
  
});
