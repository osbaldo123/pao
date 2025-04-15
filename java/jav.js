function sumar() {
    let a = parseFloat(document.getElementById("suma1").value);
    let b = parseFloat(document.getElementById("suma2").value);
    document.getElementById("resultadoSuma").innerText = "Resultado: " + (a + b);
}

function restar() {
    let a = parseFloat(document.getElementById("resta1").value);
    let b = parseFloat(document.getElementById("resta2").value);
    document.getElementById("resultadoResta").innerText = "Resultado: " + (a - b);
}

function multiplicar() {
    let a = parseFloat(document.getElementById("multi1").value);
    let b = parseFloat(document.getElementById("multi2").value);
    document.getElementById("resultadoMulti").innerText = "Resultado: " + (a * b);
}

function dividir() {
    let a = parseFloat(document.getElementById("div1").value);
    let b = parseFloat(document.getElementById("div2").value);
    if (b === 0) {
        document.getElementById("resultadoDiv").innerText = "Resultado: No se puede dividir entre cero";
    } else {
        document.getElementById("resultadoDiv").innerText = "Resultado: " + (a / b);
    }
}
