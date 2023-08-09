let user = JSON.parse(localStorage.getItem('user'));

let clientes = {
    Clientes: [
        {
            idCliente: 1,
            nombre: "Miguel",
            apellidoPaterno: "López",
            apellidoMaterno: "Gaeta",
            genero: "M",
            fechaNacimiento: "12/09/2001",
            rfc: "bdiwbiude131816",
            curp: "HIEDUDENDEO56",
            domicilio: "Calle 123, Colonia Reforma",
            codigoPostal: "32145",
            ciudad: "León",
            estado: "Guanajuato",
            telefono: 4771234567,
            foto: "",
            FechaIngreso: "02/07/2018",
            correo: "MiguelLG@gmail.com",
            status: 'ELIMINADO'
        },
        {
            idCliente: 2,
                nombre: "Esmeralda",
                apellidoPaterno: "García",
                apellidoMaterno: "Rodríguez",
                genero: "F",
                fechaNacimiento: "15/05/1990",
                rfc: "GARO900515XXX",
                curp: "GARX900515MDFRLD04",
                domicilio: "Calle 123, Colonia Centro",
                codigoPostal: "06010",
                ciudad: "Ciudad de México",
                estado: "Ciudad de México",
                telefono: 5512345678,
                foto: "",
                FechaIngreso: "12/05/2016",
                correo: "EsmeraldaGR@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 3,
                nombre: "Marta",
                apellidoPaterno: "López",
                apellidoMaterno: "Ramírez",
                genero: "F",
                fechaNacimiento: "10/12/1985",
                rfc: "LORO851210XXX",
                curp: "LORX851210MDFMRE09",
                domicilio: "Avenida Juárez #456, Colonia Reforma",
                codigoPostal: "31000",
                ciudad: "Chihuahua",
                estado: "Chihuahua",
                telefono: 61498765432,
                foto: "",
                FechaIngreso: "15/11/2006",
                correo: "MartaLR@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 4,
                nombre: "Sofia",
                apellidoPaterno: "Mendoza",
                apellidoMaterno: "Martínez",
                genero: "F",
                fechaNacimiento: "20/04/1992",
                rfc: "MEMA920420XXX",
                curp: "MEMX920420MDFNZL03",
                domicilio: "Calle 7, Colonia Del Valle",
                codigoPostal: "03100",
                ciudad: "Ciudad de México",
                estado: "Ciudad de México",
                telefono: 5587654321,
                foto: "",
                FechaIngreso: "10/03/2016",
                correo: "SofiaMM@gmail.com",
            status: 'ACTUAL'
        },
        {
                idCliente: 5,
                nombre: "Carlos",
                apellidoPaterno: "Torres",
                apellidoMaterno: "Gómez",
                genero: "M",
                fechaNacimiento: "05/07/1988",
                rfc: "TOGE880705XXX",
                curp: "TOGX880705MDFRRM08",
                domicilio: "Calle Rosas #789, Colonia San Miguel",
                codigoPostal: "45040",
                ciudad: "Zapopan",
                estado: "Jalisco",
                telefono: 3354321098,
                foto: "",
                FechaIngreso: "12/01/2006",
                correo: "CarlosTG@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 6,
                nombre: "Isabella",
                apellidoPaterno: "Hernández",
                apellidoMaterno: "González",
                genero: "F",
                fechaNacimiento: "12/11/1993",
                rfc: "HEGO931112XXX",
                curp: "HEXG931112MDFNZN05",
                domicilio: "Avenida Primavera #23, Colonia Las Flores",
                codigoPostal: "52100",
                ciudad: "Metepec",
                estado: "Estado de México",
                telefono: 72265437890,
                foto: "",
                FechaIngreso: "19/09/2021",
                correo: "IsabellaHG@gmail.com",
            status: 'ELIMINADO'
        },
        {
            idCliente: 7,
                nombre: "Alejandro",
                apellidoPaterno: "Rodríguez",
                apellidoMaterno: "Sánchez",
                genero: "M",
                fechaNacimiento: "30/09/1987",
                rfc: "ROSE870930XXX",
                curp: "ROSX870930MDFNCH02",
                domicilio: "Calle 5 de Mayo, Colonia Centro",
                codigoPostal: "62000",
                ciudad: "Cuernavaca",
                estado: "Morelos",
                telefono: "77778904321",
                foto: "",
                FechaIngreso: "28/09/2022",
                correo: "AlejandroRS@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 8,
                nombre: "Valentina",
                apellidoPaterno: "Vargas",
                apellidoMaterno: "Rivera",
                genero: "F",
                fechaNacimiento: "08/03/1995",
                rfc: "VARV950308XXX",
                curp: "VARV950308XXX",
                domicilio: "Avenida Independencia #456, Colonia Libertad",
                codigoPostal: "80000",
                ciudad: "Culiacán",
                estado: "Sinaloa",
                telefono: 66756789012,
                foto: "",
                FechaIngreso: "30/02/2018",
                correo: "ValentinaVR@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 9,
                nombre: "Diego",
                apellidoPaterno: "Silva",
                apellidoMaterno: "Paredes",
                genero: "M",
                fechaNacimiento: "25/01/1991",
                rfc: "SIPA910125XXX",
                curp: "SIPX910125MDFRDL06",
                domicilio: "Calle Allende, Colonia San Antonio",
                codigoPostal: "55000",
                ciudad: "Tultitlán",
                estado: "Estado de México",
                telefono: 554321876,
                foto: "",
                FechaIngreso: "29/07/2019",
                correo: "DiegoSP@gmail.com",
            status: 'ACTUAL'
        },
        {
            idCliente: 10,
                nombre: "Mariana",
                apellidoPaterno: "Reyes",
                apellidoMaterno: "Jiménez",
                genero: "F",
                fechaNacimiento: "17/08/1989",
                rfc: "REJX890817XXX",
                curp: "REJX890817MDFMSL07",
                domicilio: "Avenida Reforma #789, Colonia Juárez",
                codigoPostal: "37000",
                ciudad: "León",
                estado: "Guanajuato",
                telefono: 47754321098,
                foto: "",
                FechaIngreso: "05/04/2015",
                correo: "MarianaRJ@gmail.com",
            status: 'ACTUAL'
        }
    ]
};

let buttonPedido = document.getElementById('pedido').addEventListener('click', () => {
    setTimeout(function () {
        consultarPedido();
    }, 100);
});

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

function agregarCliente() {
    document.getElementById('consulta').style.display = 'none';
    document.getElementById('registrar').style.display = 'grid';
    document.getElementById('cliente').value = user.user.id_user;
}

let total = 0;

function agregarListaCliente() {
    let genero = document.getElementById('genero').value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = 40;
    total += cantidad * precio;

    let tabla = '';
    tabla += `<tr>
                    <th scope="row">${genero}</th>
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

    let id_compra = clientes.Clientes[clientes.Clientes.length - 1].id_compra + 1;
    let fecha = getDate();
    let cliente = {
    id_pedido: clientes.Clientes.length,
    id_compra: id_compra,
    fecha: fecha,
    sucursal: user.user.sucursal,
    nombre_empleado: user.user.name,
    codigo_postal: user.user.cp,
    ciudad: 'León',
    estado: 'Guanajuato',
    total: 400,
    status: 'PENDIENTE'
    };

    clientes.Clientes.push(cliente);
    consultarPedido();
}

function consultarPedido() {
    document.getElementById('consulta').style.display = 'block';
    document.getElementById('registrar').style.display = 'none';
    let status = document.getElementById('switchPendientes');
    status.addEventListener('change', () => {
        consultarPedido();
    });
    let consulta = document.getElementById('contenido-tabla');
    let tabla = '';
    for (i = 0; i < clientes['Pedidos'].length; ++i) {
        if (status.checked) {
            if (clientes.Clientes[i].status == 'PENDIENTE') {
                tabla += `<tr>
                        <th scope="row">${clientes.Clientes[i].id_compra}</th>
                        <td>${clientes.Clientes[i].fecha}</td>
                        <td>${clientes.Clientes[i].sucursal}</td>
                        <td>${clientes.Clientes[i].nombre_empleado}</td>
                        <td>${clientes.Clientes[i].codigo_postal}</td>
                        <td>${clientes.Clientes[i].ciudad}</td>
                        <td>${clientes.Clientes[i].estado}</td>
                        <td>${clientes.Clientes[i].total}</td>
                        <td>${clientes.Clientes[i].status}</td>
                    </tr>`;
            }
        } else if (!status.checked) {
            if (!(clientes.Clientes[i].status == 'PENDIENTE')) {
                tabla += `<tr>
                        <th scope="row">${clientes.Clientes[i].id_compra}</th>
                        <td>${clientes.Clientes[i].fecha}</td>
                        <td>${clientes.Clientes[i].sucursal}</td>
                        <td>${clientes.Clientes[i].nombre_empleado}</td>
                        <td>${clientes.Clientes[i].codigo_postal}</td>
                        <td>${clientes.Clientes[i].ciudad}</td>
                        <td>${clientes.Clientes[i].estado}</td>
                        <td>${clientes.Clientes[i].total}</td>
                        <td>${clientes.Clientes[i].status}</td>
                    </tr>`;
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
    let resultado = clientes.Clientes.filter(object => {
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