let user = JSON.parse(localStorage.getItem('user'));

let pedidos = {
    Pedidos: [
        {
            id_pedido: 1,
            id_compra: 1001,
            fecha: '2023-08-05',
            sucursal: 'Plaza mayor',
            nombre_empleado: 'Juan Pérez',
            codigo_postal: 28001,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 250.50,
            status: 'PENDIENTE'
        },
        {
            id_pedido: 2,
            id_compra: 1002,
            fecha: '2023-08-06',
            sucursal: 'Centro Max',
            nombre_empleado: 'Ana García',
            codigo_postal: 28000,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 150.25,
            status: 'ATENDIDO'
        },
        {
            id_pedido: 3,
            id_compra: 1003,
            fecha: '2023-08-06',
            sucursal: 'Plaza mayor',
            nombre_empleado: 'Luis Rodríguez',
            codigo_postal: 28001,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 350.75,
            status: 'PENDIENTE'
        },
        {
            id_pedido: 4,
            id_compra: 1004,
            fecha: '2023-08-07',
            sucursal: 'Plaza mayor',
            nombre_empleado: 'Elena Martínez',
            codigo_postal: 28001,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 120.00,
            status: 'ATENDIDO'
        },
        {
            id_pedido: 5,
            id_compra: 1005,
            fecha: '2023-08-08',
            sucursal: 'Centro Max',
            nombre_empleado: 'Carlos López',
            codigo_postal: 28000,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 420.30,
            status: 'PENDIENTE'
        },
        {
            id_pedido: 6,
            id_compra: 1006,
            fecha: '2023-08-08',
            sucursal: 'Plaza mayor',
            nombre_empleado: 'Sofía Ramírez',
            codigo_postal: 28001,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 280.10,
            status: 'PENDIENTE'
        },
        {
            id_pedido: 7,
            id_compra: 1007,
            fecha: '2023-08-09',
            sucursal: 'Centro Max',
            nombre_empleado: 'Miguel Torres',
            codigo_postal: 28000,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 90.50,
            status: 'ATENDIDO'
        },
        {
            id_pedido: 8,
            id_compra: 1008,
            fecha: '2023-08-10',
            sucursal: 'Plaza mayor',
            nombre_empleado: 'Fernanda García',
            codigo_postal: 28001,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 600.20,
            status: 'PENDIENTE'
        },
        {
            id_pedido: 9,
            id_compra: 1009,
            fecha: '2023-08-10',
            sucursal: 'Centro Max',
            nombre_empleado: 'Diego Pérez',
            codigo_postal: 28000,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 180.75,
            status: 'ATENDIDO'
        },
        {
            id_pedido: 10,
            id_compra: 1010,
            fecha: '2023-08-07',
            sucursal: 'Centro Max',
            nombre_empleado: 'María López',
            codigo_postal: 28000,
            ciudad: 'León',
            estado: 'Guanajuato',
            total: 175.50,
            status: 'ATENDIDO'
        }
    ]
}

let buttonPedido = document.getElementById('pedido').addEventListener('click', () => {
    setTimeout(function () {
        consultarPedido();
    }, 100)
})

function getDate() {
    // Obtiene la fecha actual
    const currentDate = new Date();

    // Obtiene el día, mes y año de la fecha actual
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const year = currentDate.getFullYear();

    // Formatea el día, mes y año para que tengan dos dígitos si es necesario
    const formattedDay = (day < 10 ? '0' : '') + day;
    const formattedMonth = (month < 10 ? '0' : '') + month;
    const formattedYear = year; // Obtiene los últimos dos dígitos del año

    // Crea la cadena de fecha en el formato dd-mm-yy
    const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;

    return formattedDate; // Imprime la fecha en formato dd-mm-yy

}

function agregarPedido() {
    document.getElementById('consulta').style.display = 'none';
    document.getElementById('registrar').style.display = 'grid';
    document.getElementById('empleado').value = user.user.id_user;
}

let total = 0;

function agregarListaPedido() {
    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = 40;
    total += cantidad * precio;

    let tabla = '';
    tabla += `<tr>
                    <th scope="row">${producto}</th>
                    <td>${cantidad}</td>
                    <td>${precio}</td>
                    <td>${total}</td>
                </tr>`;
    document.getElementById('contenido-pedido').innerHTML += tabla;
    document.getElementById('total-pedido').innerHTML = `Total  $${total}`
}

function finalizarPedido() {

    document.getElementById('contenido-pedido').innerHTML = '';
    document.getElementById('total-pedido').innerHTML = `Total  $0`

    let id_compra = pedidos.Pedidos[pedidos.Pedidos.length - 1].id_compra + 1;
    let fecha = getDate();
    let pedido = {
    id_pedido: pedidos.Pedidos.length,
    id_compra: id_compra,
    fecha: fecha,
    sucursal: user.user.sucursal,
    nombre_empleado: user.user.name,
    codigo_postal: user.user.cp,
    ciudad: 'León',
    estado: 'Guanajuato',
    total: 400,
    status: 'PENDIENTE'
    }

    pedidos.Pedidos.push(pedido);
    consultarPedido();
}

function consultarPedido() {
    document.getElementById('consulta').style.display = 'block';
    document.getElementById('registrar').style.display = 'none';
    let status = document.getElementById('switchPendientes');
    status.addEventListener('change', () => {
        consultarPedido();
    })
    let consulta = document.getElementById('contenido-tabla');
    let tabla = '';
    for (i = 0; i < pedidos['Pedidos'].length; ++i) {
        if (status.checked) {
            if (pedidos.Pedidos[i].status == 'PENDIENTE') {
                tabla += `<tr>
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
        } else if (!status.checked) {
            if (!(pedidos.Pedidos[i].status == 'PENDIENTE')) {
                tabla += `<tr>
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
        }
    }
    consulta.innerHTML = tabla;
}

document.getElementById('search').addEventListener('keyup', () => {
    const value = document.getElementById("search").value;
    if(document.getElementById('content-modulo')){
        if(value.length == 0){
            consultarPedido();
        }else{
            buscarPedido();
        }
    }
})

function buscarPedido() {
    if(document.getElementById('content-modulo')){
        const value = document.getElementById("search").value;
    let resultado = pedidos.Pedidos.filter(object => {
        let id_compra = object.id_pedido;
        let fecha = object.fecha;
        let sucursal = object.sucursal.toLowerCase();
        let nombre_empleado = object.nombre_empleado.toLowerCase();
        let codigo_postal = object.codigo_postal;
        let ciudad = object.ciudad.toLowerCase();
        let estado = object.estado.toLowerCase();
        let status = object.status.toLowerCase();

        return fecha.includes(value) || sucursal.includes(value) || nombre_empleado.includes(value) || ciudad.includes(value) || estado.includes(value) || status.includes(value);
    });
    let consulta = document.getElementById('contenido-tabla');
    let tabla = '';
    resultado.forEach(element => {
        tabla += `<tr>
                        <th scope="row">${element.id_compra}</th>
                        <td>${element.fecha}</td>
                        <td>${element.sucursal}</td>
                        <td>${element.nombre_empleado}</td>
                        <td>${element.codigo_postal}</td>
                        <td>${element.codigo_postal}</td>
                        <td>${element.estado}</td>
                        <td>${element.total}</td>
                        <td>${element.status}</td>
                    </tr>`
    });
    consulta.innerHTML= tabla;
    }
    else{
        
    }
}