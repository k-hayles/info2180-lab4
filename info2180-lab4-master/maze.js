var startValue = 0;
var gameStatus = true;

window.onload = function () {
    document.getElementById("boundary1").onmouseover = start;
    
    var bound = document.querySelectorAll(".boundary"); 
    for (var i = 0; i <bound.length; i++)
        
        {
            bound[i].onmouseover=function()
            {
                
                for (var j=0; j<bound.length; j++)
                    {
                        bound[j].className= "boundary youlose";
                    }
            }
        }
    }

   