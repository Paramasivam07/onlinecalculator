function add()
{
    let a1=Number( document.getElementById('number1').value);
    let a2=Number( document.getElementById('number2').value );
    let add1=Number(a1+a2);
    document.getElementById('number3').value=add1;
}

function sub()
{
    let s1=Number( document.getElementById('number1').value);
    let s2=Number( document.getElementById('number2').value);
    let sub1=Number(s1-s2);
    document.getElementById('number3').value=sub1;
}
function mul()
{
    let m1=Number( document.getElementById('number1').value);
    let m2=Number( document.getElementById('number2').value);
    let mul1=Number(m1*m2);
    document.getElementById('number3').value=mul1;
}

function div()
{
    let d1=Number( document.getElementById('number1').value);
    let d2=Number( document.getElementById('number2').value);
    let div1=Number(d1/d2);
    document.getElementById('number3').value=div1;
}

function reset()
{
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    document.getElementById('number3').value="";
}