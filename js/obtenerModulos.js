async function getModuleOrder(){
    let module = await fetch('./pedido.html');
    document.getElementById('content').innerHTML = await module.text();
}
async function getModuleCliente(){
    let module = await fetch('./cliente.html');
    document.getElementById('content').innerHTML = await module.text();
}
