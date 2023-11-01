function handleCalculate(){
    var ya=document.getElementById("ya").value;
    var ma=document.getElementById("ma").value;

    var age=ma-ya;
    alert(age);
    handleClear();
}
function handleClear(){
    document.getElementById("ya").value="";
    document.getElementById("ma").value="";
}