async function getModuleOrder(){
    let module = await fetch('./pedido.html');
    document.getElementById('content').innerHTML = await module.text();
}

