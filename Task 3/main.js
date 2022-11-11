function Fabonanci(){
    let b= document.getElementById('number').value
    let num1=0;
    let num2=1;
    let sum=0;

    if (sum<b)
    return 1;
    else{
        console.log(num1);
        sum = num1+num2;
        num1=num2;
        num2=sum;
        return Fabonanci();
    }
}