function changeColor (){
    var boundary = document.getElementById("boundary1").classList.add("youlose");
}


function changeBoundary (){
var boundary = document.querySelectorAll(".boundary"), i;

for (i = 0; i < boundary.length; ++i) {
  boundary[i].classList.add("youlose");
}
}