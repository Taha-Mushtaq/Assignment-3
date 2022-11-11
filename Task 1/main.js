function check(){
    var x = document.getElementById("num").value;
    if(x<0)
    result.innerHTML="Negative";
    else if(x>0)
    result.innerHTML="Positive";
    else if (x==0)
    result.innerHTML="Zero";
}