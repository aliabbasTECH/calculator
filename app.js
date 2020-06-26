

function getnumber(num){
    var result = document.getElementById("result")

    result.value +=num;

    
}

function clearbtn(){
    var result=document.getElementById("result");
    result.value=""
    result2.value=""
}

function getresult(){
    var result=document.getElementById("result");
    result2.value = eval(result.value)


}