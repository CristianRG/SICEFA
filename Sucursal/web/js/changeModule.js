async function chargeEmployeeModule(){
    let content = fetch('../empleado.html');
    document.getElementById('content').innerHTML = (await content).text;
}

async function chargeClientModule(){
    let content = fetch('../cliente.html');
    document.getElementById('content').innerHTML = (await content).text;
}

async function chargeProductModule(){
    let content = fetch('../productos.html');
    document.getElementById('content').innerHTML = (await content).text;
}

async function chargeSaleModule(){
    let content = fetch('../venta.html');
    document.getElementById('content').innerHTML = (await content).text;
}

async function chargeOrderModule(){
    let content = fetch('../pedido.html');
    document.getElementById('content').innerHTML = (await content).text;
}