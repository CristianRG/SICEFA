let pedido = {
    id_pedido:1,
    id_compra:1001,
    fecha:'2023-08-05',
    sucursal:'Plaza mayor',
    nombre_empleado:'Juan Pérez',
    codigo_postal:28001,
    ciudad:'León',
    estado:'Guanajuato',
    total:250.50,
    status:'PENDIENTE'
}

let pedidos = {
    Pedidos:[]
}

pedidos.Pedidos.push(pedido);

function consultarPedido(){
    console.log('hs')
    let tabla = document.getElementById('contenido-tabla');
    let contenido = '';
    for(i= 0; i<pedidos['Pedidos'].length ; ++i){
        contenido += `<tr>
                        <th scope="row">${pedidos.Pedidos[i].id_compra}</th>
                        <td>${pedidos.Pedidos[i].fecha}</td>
                        <td>${pedidos.Pedidos[i].sucursal}</td>
                        <td>${pedidos.Pedidos[i].nombre_empleado}</td>
                        <td>${pedidos.Pedidos[i].codigo_postal}</td>
                        <td>${pedidos.Pedidos[i].ciudad}</td>
                        <td>${pedidos.Pedidos[i].estado}</td>
                        <td>${pedidos.Pedidos[i].total}</td>
                        <td>${pedidos.Pedidos[i].status}</td>
                    </tr>`
    }
    tabla.innerHTML = contenido;
}