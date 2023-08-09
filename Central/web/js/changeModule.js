async function chargeSucursalModule(){
    let content = fetch('./sucursal.html');
    document.getElementById('content').innerHTML = await content.text();
}

async function chargeProductModule(){
    let content = fetch('./productos.html');
    document.getElementById('content').innerHTML = await content.text();
}

async function chargeOrderModule(){
    let content = await fetch('./pedido.html');
    document.getElementById('content').innerHTML = await content.text();
}
