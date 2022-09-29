const display = document.querySelector(".display")
const valor = document.querySelectorAll(".valor")
const operador = document.querySelector(".operador")
const suma = document.getElementById("plus")
const resta = document.getElementById("min")
const multi = document.getElementById("multi")
const division = document.getElementById("divi")
const igual = document.getElementById("equal")
const borrar = document.getElementById("AC")
igual.addEventListener("click",()=>{
    switch (operador.innerText) {
        case "+" :
            display.innerText=(parseInt(valor[1].value)  +  parseInt(valor[0].value))
            break;
        case "-":
            display.innerText=(parseInt(valor[1].value)  -  parseInt(valor[0].value))
            break;
        case "*":
            display.innerText=(parseInt(valor[1].value)  *  parseInt(valor[0].value))
            break;
        case "/":
            if(parseInt(valor[1].value)===0){
                alert("NO se puede divir sobre 0")
            }else{
                display.innerText= (parseInt(valor[1].value)  /  parseInt(valor[0].value)).toFixed(8)
            }
            break;
        default:
            console.log("debe elegir un operador")
            break;
    }
})
function limpiar(){
    valor[1].value = valor[0].value
    valor[0].value=""
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
    valor[1].value = "";
    valor[0].value ="";
    display.innerText = ""
})