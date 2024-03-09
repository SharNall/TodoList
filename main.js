let elements = document.querySelector(".tasks");
let data = document.querySelector("input");
let clk =document.querySelector("button");

clk.onclick = bringData;
let arrayData=[]

function bringData(){
    let text = data.value;
    text == "" ? alert("input is Invalid"):(arrayData.push(text),showHTML()) ;
    data.value="";
}
function showHTML(){
    let res="";
for(let i = 0 ; i < arrayData.length ; i++){
    res += `<div class = "row">
        <input type="checkbox"></input>
        <li>${arrayData[i]}</li>
    </div>`;
    
    
}
elements.innerHTML=res;
}
