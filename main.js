const display = document.querySelector(".display")
const valor = document.querySelectorAll(".valor")
const operador = document.querySelector(".operador")
const suma = document.getElementById("plus")
const resta = document.getElementById("min")
const multi = document.getElementById("multi")
const division = document.getElementById("divi")
const igual = document.getElementById("equal")

igual.addEventListener("click",()=>{
    switch (operador.innerText) {
        case "+" :
            display.innerText=(parseInt(valor[0].value)  +  parseInt(valor[1].value))
            break;
        case "-":
            display.innerText=(parseInt(valor[0].value)  -  parseInt(valor[1].value))
            break;
        case "*":
            display.innerText=(parseInt(valor[0].value)  *  parseInt(valor[1].value))
            break;
        case "/":
            if(parseInt(valor[1].value)===0){
                alert("NO se puede divir sobre 0")
            }else{
                display.innerText= (parseInt(valor[0].value)  /  parseInt(valor[1].value)).toFixed(8)
            }
            break;
        default:
            console.log("debe elegir un operador")
            break;
    }
})
suma.addEventListener("click",()=>{
    operador.innerText = "+"
})
resta.addEventListener("click",()=>{
    operador.innerText = "-"
})
multi.addEventListener("click",()=>{
    operador.innerText = "*"
})
division.addEventListener("click",()=>{
    operador.innerText = "/"
})