let count=0;
function pageload(){
    document.getElementById('count').innerHTML = count;
}

function increment(){
    count++;
    document.getElementById('count').innerHTML = count;
}
function decrement(){
    count--;
    document.getElementById('count').innerHTML = count;
}
function reset(){
    count=0;
    document.getElementById('count').innerHTML = count;
}
