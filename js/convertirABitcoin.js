let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const price = document.getElementById("valorBTN")
let numeroBTN;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    price.innerHTML = stockObject.p;
    numeroBTN = parseFloat(stockObject.p);
    //console.log(numeroBTN)
    //console.log(stockObject.p);
}

function convertirBTN() {
    let bitcoin = numeroBTN; 
    let dolares;
    let resultado = 0;

    console.log(bitcoin)
    dolares = parseFloat(document.getElementById("dolares"). value);

    resultado = dolares / bitcoin; 

    document.getElementById("resultBTN").innerText = resultado;

}
