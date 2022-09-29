const display = document.querySelector(".display")
const valor = document.querySelectorAll(".valor")
const operador = document.querySelector(".operador")
const suma = document.getElementById("plus")
const resta = document.getElementById("min")
const multi = document.getElementById("multi")
const division = document.getElementById("divi")
const igual = document.getElementById("equal")
const borrar = document.getElementById("AC")
for(let i=0;i<=9;i++){
    document.getElementById("num"+i).addEventListener("click",presion)
}
function presion(e){
    display.innerText=display.innerText+e.target.innerText
}
igual.addEventListener("click",()=>{
    if(display.innerText===""){
        alert("Debe ingresar un valor")
    }else{
        switch (operador.innerText) {
            case "+" :
                display.innerText=(parseInt(valor[0].value)  +  parseInt(display.innerText))
                break;
            case "-":
                display.innerText=(parseInt(valor[0].value)  -  parseInt(display.innerText))
                break;
            case "*":
                display.innerText=(parseInt(valor[0].value)  *  parseInt(display.innerText))
                break;
            case "/":
                if(parseInt(display.innerText)===0){
                    alert("NO se puede divir sobre 0")
                }else{
                    display.innerText= (parseInt(valor[0].value)  /  parseInt(display.innerText)).toFixed(8)
                }
                break;
            default:
                alert("debe elegir un operador")
                break;
        }
    }
    
})
function limpiar(){
    valor[0].value = display.innerText
    display.innerText = ""
}
suma.addEventListener("click",()=>{
    operador.innerText = "+"
    limpiar();
})
resta.addEventListener("click",()=>{
    operador.innerText = "-"
    limpiar();
})
multi.addEventListener("click",()=>{
    operador.innerText = "*"
    limpiar();
})
division.addEventListener("click",()=>{
    operador.innerText = "/"
    limpiar();
})
borrar.addEventListener("click",()=>{
    valor[0].value = "";
    // valor[0].value ="";
    display.innerText = "";
    operador.innerText ="."
})