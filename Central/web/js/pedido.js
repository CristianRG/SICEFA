let user = JSON.parse(localStorage.getItem('user'));
console.log(user)

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
            total: 142.65,
            status: 'PENDIENTE',
            productos: [
                {
                    "Nombre": "Pain Relief plus",
                    "Nombre generico": "Analgesinol",
                    "Forma farmaceutica": "Tabletas",
                    "Medida": "500 mg",
                    "Presentación": "Caja de 20 tabletas",
                    "Concentración": "250 mg por tableta",
                    "Unidades en envase": "20 tabletas",
                    "Precio": 12.99
                },
                {
                    "Nombre": "AllerGuard Syrup",
                    "Nombre generico": "Antihistaminol",
                    "Forma farmaceutica": "Jarabe",
                    "Medida": "120 ml",
                    "Presentación": "Botella de 120 ml",
                    "Concentración": "5 mg por 5 ml",
                    "Unidades en envase": "1 botella",
                    "Precio": 8.49
                },
                {
                    "Nombre": "VitaC Boost",
                    "Nombre generico": "Vitamina C",
                    "Forma farmaceutica": "Cápsulas",
                    "Medida": "1000 mg",
                    "Presentación": "Frasco de 60 cápsulas",
                    "Concentración": "500 mg por cápsula",
                    "Unidades en envase": "60 cápsulas",
                    "Precio": 15.75
                },
                {
                    "Nombre": "SleepEase Tablets",
                    "Nombre generico": "Somniol",
                    "Forma farmaceutica": "Tabletas",
                    "Medida": "5 mg",
                    "Presentación": "Caja de 30 tabletas",
                    "Concentración": "5 mg por tableta",
                    "Unidades en envase": "30 tabletas",
                    "Precio": 9.99
                },
                {
                    "Nombre": "DigestiPro Capsules",
                    "Nombre generico": "Digestinol",
                    "Forma farmaceutica": "Cápsulas",
                    "Medida": "300 mg",
                    "Presentación": "Frasco de 90 cápsulas",
                    "Concentración": "150 mg por cápsula",
                    "Unidades en envase": "90 cápsulas",
                    "Precio": 18.50
                },
                {
                    "Nombre": "ImmunoGuard Plus",
                    "Nombre generico": "Inmunol",
                    "Forma farmaceutica": "Tabletas",
                    "Medida": "750 mg",
                    "Presentación": "Caja de 60 tabletas",
                    "Concentración": "250 mg por tableta",
                    "Unidades en envase": "60 tabletas",
                    "Precio": 22.99
                },
                {
                    "Nombre": "RelaxiCalm Drops",
                    "Nombre generico": "Calmex",
                    "Forma farmaceutica": "Gotas",
                    "Medida": "10 ml",
                    "Presentación": "Frasco de 10 ml",
                    "Concentración": "5 mg por ml",
                    "Unidades en envase": "1 frasco",
                    "Precio": 11.25
                },
                {
                    "Nombre": "SkinCare Cream",
                    "Nombre generico": "Dermatol",
                    "Forma farmaceutica": "Crema",
                    "Medida": "30 g",
                    "Presentación": "Tubo de 30 g",
                    "Concentración": "1%",
                    "Unidades en envase": "1 tubo",
                    "Precio": 14.75
                },
                {
                    "Nombre": "JointFlex Gel",
                    "Nombre generico": "Flexijoint",
                    "Forma farmaceutica": "Gel",
                    "Medida": "50 g",
                    "Presentación": "Tubo de 50 g",
                    "Concentración": "2%",
                    "Unidades en envase": "1 tubo",
                    "Precio": 16.99
                },
                {
                    "Nombre": "EyeClear Drops",
                    "Nombre generico": "VisiClear",
                    "Forma farmaceutica": "Gotas",
                    "Medida": "15 ml",
                    "Presentación": "Frasco de 15 ml",
                    "Concentración": "2 mg por ml",
                    "Unidades en envase": "1 frasco",
                    "Precio": 9.95
                }
            ]
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
            status: 'ATENDIDO',
            productos: []
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
            status: 'PENDIENTE',
            productos: []
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
            status: 'ATENDIDO',
            productos: []
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
            status: 'PENDIENTE',
            productos: []
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
            status: 'PENDIENTE',
            productos: []
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
            status: 'ATENDIDO',
            productos: []
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
            status: 'PENDIENTE',
            productos: []
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
            status: 'ATENDIDO',
            productos: []
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
            status: 'ATENDIDO',
            productos: []
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

function detallePedido(index) {
    document.getElementById('detalle-pedido').style.display = 'block';
    let contenidoTabla = '';
    for (let i = 0; i < pedidos.Pedidos[index].productos.length; i++) {
        contenidoTabla += `<tr>
                            <td>${pedidos.Pedidos[index].productos[i].Nombre}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Nombre generico']}</td>
                            <td>${pedidos.Pedidos[index].productos[i]["Forma farmaceutica"]}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Medida']}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Presentación']}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Concentración']}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Unidades en envase']}</td>
                            <td>${pedidos.Pedidos[index].productos[i]['Precio']}</td>
                        </tr>`
    }
    document.getElementById('contenido-detalle').innerHTML = contenidoTabla;
    document.getElementById('detalle-pedido').innerHTML += `<button type="button" class="btn btn-danger" onclick='closeWindow()'>Danger</button>`
}

function closeWindow() {
    document.getElementById("detalle-pedido").style.display = 'none'
}

function atenderPedido(index) {
    pedidos.Pedidos[index].status = 'ATENDIDO';
    consultarPedido();
    selectItem(index);
}

function eliminarPedido(index) {
    Swal.fire({
        title: '¿Estas seguro de eliminar estepedido?',
        text: "No podras revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            pedidos.Pedidos[index].status = 'ELIMINADO';
            Swal.fire(
                '¡Eliminado!',
                'El registro del pedido ha sido eliminado',
                'success'
            )
            consultarPedido();
            document.getElementById('consulta-edicion').innerHTML = '';
        }
    })
}

function selectItem(index) {
    let item = pedidos.Pedidos[index];
    let contenido = `
    <div class="datos-generales">
        <h5>Información del pedido</h5>
        <p><strong>Sucursal:</strong> ${item.sucursal}</p>
        <p><strong>Codigo postal:</strong> ${item.codigo_postal}</p>
        <p><strong>Empleado:</strong> ${item.nombre_empleado}</p>
        <p><strong>Ciudad:</strong> ${item.ciudad}</p>
        <p><strong>Estado:</strong> ${item.estado}</p>
        <p><strong>Estatus:</strong> ${item.status}</p>
    </div>
    <div class="productos">
        <button onclick="detallePedido(${index})" class="btn btn-info">Detalle pedido</button>
        <button type="button" class="btn btn-success" onclick='atenderPedido(${index})'>ATENDER</button>
        <button type="button" class="btn btn-warning" onclick='eliminarPedido(${index})'>Eliminar</button>
        <h5>Total</h5>
        <p>Total: $${item.total}</p>
    </div>`

    document.getElementById('consulta-edicion').innerHTML = contenido;
}

function consultarPedido() {
    document.getElementById('consulta').style.display = 'block';
    document.getElementById('detalle-pedido').style.display = 'none';
    let status = document.getElementById('switchPendientes');
    status.addEventListener('change', ()=>{
        document.getElementById('consulta-edicion').innerHTML = '';
        consultarPedido();
    })
    let consulta = document.getElementById('contenido-tabla');
    let tabla = '';
    for (i = 0; i < pedidos['Pedidos'].length; ++i) {
        if(status.checked){
            if(pedidos.Pedidos[i].status == 'PENDIENTE'){
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
        }else if(!status.checked){
            if(!(pedidos.Pedidos[i].status=='PENDIENTE')){
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

    document.querySelectorAll('tbody tr').forEach((e, index) => {
        e.addEventListener('click', () => {
            let element = document.querySelectorAll('tbody tr');
            element.forEach((item) => {
                item.classList.remove('table-info');
            })
            e.classList.add('table-info');
            selectItem(index);
        })
    })
}

