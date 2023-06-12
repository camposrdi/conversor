function convertirColones() {
    let colon = 8.76;
    let resultado = 0;
    let dolares;

    dolares = parseFloat(document.getElementById("dolares").value);

    resultado = dolares * colon;

    document.getElementById("resulColon").innerText = resultado;
}

