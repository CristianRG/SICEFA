let indexClienteSeleccionado;
let clientes = [
  {
    "idCliente": 1,
    "nombre": "Miguel",
    "apellidoPaterno": "López",
    "apellidoMaterno": "Gaeta",
    "genero": "M",
    "fechaNacimiento": "12/09/2001",
    "rfc": "bdiwbiude131816",
    "curp": "HIEDUDENDEO56",
    "domicilio": "Calle 123, Colonia Reforma",
    "codigoPostal": "32145",
    "ciudad": "León",
    "estado": "Guanajuato",
    "telefono": 4771234567,
    "foto": "",
    "FechaIngreso": "02/07/2018",
    "correo": "MiguelLG@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 2,
    "nombre": "Esmeralda",
    "apellidoPaterno": "García",
    "apellidoMaterno": "Rodríguez",
    "genero": "F",
    "fechaNacimiento": "15/05/1990",
    "rfc": "GARO900515XXX",
    "curp": "GARX900515MDFRLD04",
    "domicilio": "Calle 123, Colonia Centro",
    "codigoPostal": "06010",
    "ciudad": "Ciudad de México",
    "estado": "Ciudad de México",
    "telefono": 5512345678,
    "foto": "",
    "FechaIngreso": "12/05/2016",
    "correo": "EsmeraldaGR@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 3,
    "nombre": "Marta",
    "apellidoPaterno": "López",
    "apellidoMaterno": "Ramírez",
    "genero": "F",
    "fechaNacimiento": "10/12/1985",
    "rfc": "LORO851210XXX",
    "curp": "LORX851210MDFMRE09",
    "domicilio": "Avenida Juárez #456, Colonia Reforma",
    "codigoPostal": "31000",
    "ciudad": "Chihuahua",
    "estado": "Chihuahua",
    "telefono": 61498765432,
    "foto": "",
    "FechaIngreso": "15/11/2006",
    "correo": "MartaLR@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 4,
    "nombre": "Sofia",
    "apellidoPaterno": "Mendoza",
    "apellidoMaterno": "Martínez",
    "genero": "F",
    "fechaNacimiento": "20/04/1992",
    "rfc": "MEMA920420XXX",
    "curp": "MEMX920420MDFNZL03",
    "domicilio": "Calle 7, Colonia Del Valle",
    "codigoPostal": "03100",
    "ciudad": "Ciudad de México",
    "estado": "Ciudad de México",
    "telefono": 5587654321,
    "foto": "",
    "FechaIngreso": "10/03/2016",
    "correo": "SofiaMM@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 5,
    "nombre": "Carlos",
    "apellidoPaterno": "Torres",
    "apellidoMaterno": "Gómez",
    "genero": "M",
    "fechaNacimiento": "05/07/1988",
    "rfc": "TOGE880705XXX",
    "curp": "TOGX880705MDFRRM08",
    "domicilio": "Calle Rosas #789, Colonia San Miguel",
    "codigoPostal": "45040",
    "ciudad": "Zapopan",
    "estado": "Jalisco",
    "telefono": 3354321098,
    "foto": "",
    "FechaIngreso": "12/01/2006",
    "correo": "CarlosTG@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 6,
    "nombre": "Isabella",
    "apellidoPaterno": "Hernández",
    "apellidoMaterno": "González",
    "genero": "F",
    "fechaNacimiento": "12/11/1993",
    "rfc": "HEGO931112XXX",
    "curp": "HEXG931112MDFNZN05",
    "domicilio": "Avenida Primavera #23, Colonia Las Flores",
    "codigoPostal": "52100",
    "ciudad": "Metepec",
    "estado": "Estado de México",
    "telefono": 72265437890,
    "foto": "",
    "FechaIngreso": "19/09/2021",
    "correo": "IsabellaHG@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 7,
    "nombre": "Alejandro",
    "apellidoPaterno": "Rodríguez",
    "apellidoMaterno": "Sánchez",
    "genero": "M",
    "fechaNacimiento": "30/09/1987",
    "rfc": "ROSE870930XXX",
    "curp": "ROSX870930MDFNCH02",
    "domicilio": "Calle 5 de Mayo, Colonia Centro",
    "codigoPostal": "62000",
    "ciudad": "Cuernavaca",
    "estado": "Morelos",
    "telefono": "77778904321",
    "foto": "",
    "FechaIngreso": "28/09/2022",
    "correo": "AlejandroRS@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 8,
    "nombre": "Valentina",
    "apellidoPaterno": "Vargas",
    "apellidoMaterno": "Rivera",
    "genero": "F",
    "fechaNacimiento": "08/03/1995",
    "rfc": "VARV950308XXX",
    "curp": "VARV950308XXX",
    "domicilio": "Avenida Independencia #456, Colonia Libertad",
    "codigoPostal": "80000",
    "ciudad": "Culiacán",
    "estado": "Sinaloa",
    "telefono": 66756789012,
    "foto": "",
    "FechaIngreso": "30/02/2018",
    "correo": "ValentinaVR@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 9,
    "nombre": "Diego",
    "apellidoPaterno": "Silva",
    "apellidoMaterno": "Paredes",
    "genero": "M",
    "fechaNacimiento": "25/01/1991",
    "rfc": "SIPA910125XXX",
    "curp": "SIPX910125MDFRDL06",
    "domicilio": "Calle Allende, Colonia San Antonio",
    "codigoPostal": "55000",
    "ciudad": "Tultitlán",
    "estado": "Estado de México",
    "telefono": 554321876,
    "foto": "",
    "FechaIngreso": "29/07/2019",
    "correo": "DiegoSP@gmail.com",
    "estatus": "Activo"
  },
  {
    "idCliente": 10,
    "nombre": "Mariana",
    "apellidoPaterno": "Reyes",
    "apellidoMaterno": "Jiménez",
    "genero": "F",
    "fechaNacimiento": "17/08/1989",
    "rfc": "REJX890817XXX",
    "curp": "REJX890817MDFMSL07",
    "domicilio": "Avenida Reforma #789, Colonia Juárez",
    "codigoPostal": "37000",
    "ciudad": "León",
    "estado": "Guanajuato",
    "telefono": 47754321098,
    "foto": "",
    "FechaIngreso": "05/04/2015",
    "correo": "MarianaRJ@gmail.com",
    "estatus": "Activo"
  }
];


// // Función para manejar el evento de clic en la fila
// function handleRowClick(event) {
//     const clickedRow = event.target.closest('tr');
//     if (clickedRow && clickedRow.parentElement.tagName === 'TBODY') {
//         const tableRows = clickedRow.parentElement.querySelectorAll('tr');
//         tableRows.forEach(row => row.classList.remove('table-info'));
//         clickedRow.classList.add('table-info');

//         // Obtener el id del div correspondiente al hacer clic en la fila
//         const divId = 'sucursal' + clickedRow.rowIndex;

//         // Mostrar solo el div correspondiente y ocultar los demás
//         const allDivs = document.querySelectorAll('.sucursal');
//         allDivs.forEach(div => {
//             if (div.id === divId) {
//                 div.style.display = 'block';
//             } else {
//                 div.style.display = 'none';
//             }
//         });
//     }
// }

//     // Vincular el evento de clic al cuerpo de la tabla
//     const tableBody = document.querySelector('tbody');
//     tableBody.addEventListener('click', handleRowClick);

    document.getElementById('fotoInput').addEventListener('change', function(event) {
        const preview = document.getElementById('fotoPreview');
        const file = event.target.files[0];
        if (file) {
            preview.style.display = 'block';
            preview.src = URL.createObjectURL(file);
        } else {
            preview.style.display = 'none';
            preview.src = '#';
        }
    });
    

// fetch("empleado/dataEmpleados.json")
//         .then(response => {
//             return response.json();
//         })
//         .then(function (jsondata) {
//             empleados = jsondata;
//             console.log(empleados);
//             loadTabla();
//         }
//         );

function addEmpleado() {
    
    let         
                idCliente,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                generoSelected,
                genero,
                fechaNacimiento,
                rfc,
                curp,
                domicilio,
                codigoPostal,
                ciudad,
                estado,
                telefono,
                FechaIngreso,
                correo;
    
    
    
    nombre = document.getElementById("nombre").value;
    apellidoPaterno = document.getElementById("apellidoPaterno").value;
     apellidoMaterno = document.getElementById("apellidoMaterno").value;
     fechaNacimiento = document.getElementById("fechaNacimiento").value;
     curp = document.getElementById("curp").value;
     rfc = document.getElementById("rfc").value;
     
     genero = document.getElementById("genero").value;
    generoSelected = "";

    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            generoSelected = genero[i].value;
            break;
        }
    }
     
     estado = document.getElementById("estado").value;
     ciudad = document.getElementById("ciudad").value;
     domicilio = document.getElementById("domicilio").value;
     codigo_postal = document.getElementById("codigoPostal").value;
     telefono = document.getElementById("telefono").value;
     correo = document.getElementById("email").value;
     FechaIngreso = document.getElementById("fechaIngreso").value;
     puesto = document.getElementById("puesto").value;
     idCliente = empleados.length + 1;

    

    
    // sucursal = document.getElementById("txtSucursal").value;
    // sucursalSelected = "";

    // for (let i = 0; i < sucursal.length; i++) {
    //     if (sucursal[i].checked) {
    //         sucursalSelected = sucursal[i].value;
    //         break;
    //     }
    // }

    

    let cliente = {};
    cliente.nombre = nombre;
    cliente.apellidoPaterno = apellidoPaterno;
    cliente.apellidoMaterno = apellidoMaterno;
    cliente.genero = genero;
    cliente.fechaNacimiento = fechaNacimiento;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.domicilio = domicilio;
    cliente.codigoPostal = codigoPostal;
    cliente.ciudad = ciudad;
    cliente.estado = estado;
    cliente.telefono = telefono;
    cliente.correo = correo;
    // empleado.sucursal = sucursal;
    cliente.fechaIngreso = fechaIngreso;
    cliente.estatus = "Activo";
    cliente.idCliente = clientes.length + 1;
    clientes.push(cliente);
    clean();
    loadTabla();
}

function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let registro =
                '<tr onclick="selectEmpleado(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.noEmpleado + '</td>' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellidoPaterno + '</td>' +
                '<td>' + cliente.apellidoMaterno + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.correo + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;

}

function selectEmpleado(index) {
    document.getElementById("nombreCliente").value = clientes[index].nombre;
    document.getElementById("apellidoPaterno").value = clientes[index].apellidoPaterno;
    document.getElementById("apellidoPaterno").value = clientes[index].apellidoPaterno;
    document.getElementById("genero").value = clientes[index].genero;
    document.getElementById("fechaNacimiento").value = clientes[index].fechaNacimiento;
    document.getElementById("curp").value = clientes[index].curp;
    document.getElementById("rfc").value = clientes[index].rfc;
    document.getElementById("estado").value = clientes[index].estado;
    document.getElementById("ciudad").value = clientes[index].ciudad;
    document.getElementById("domicilio").value = clientes[index].domicilo;
    document.getElementById("codigoPostal").value = clientes[index].codigoPostal;
    document.getElementById("telefono").value = clientes[index].telefono;
    document.getElementById("Correo").value = clientes[index].correo_electronico;
    // document.getElementById("estado").value = empleados[index].sucursal;
    document.getElementById("fechaIngreso").value = clientes[index].fechaIngreso;
    document.getElementById("idCliente").value = clientes[index].idCliente;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}


function clean() {
    document.getElementById("nombreCliente").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("curp").value = "";
    document.getElementById("rfc").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("domicilio").value = "";
    document.getElementById("codigoPostal").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("Correo").value = "";
    // document.getElementById("estado").value = empleados[index].sucursal;
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("idCliente").value = "";
    
    //document.getElementById("nombreEmpleado").focus();
    // document.getElementById("btnUpdate").classList.add("disabled");
    // document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

function updateEmpleado() {
    let         
                
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                generoSelected,
                genero,
                fechaNacimiento,
                rfc,
                curp,
                domicilio,
                codigoPostal,
                ciudad,
                estado,
                telefono,
                idCliente,
                foto,
                FechaIngreso,
                correo;


    nombre = document.getElementById("nombreCliente").value;
    apellidoPaterno = document.getElementById("apellidoPaterno").value;
    apellidoMaterno = document.getElementById("apellidoMaterno").value;
    for (let i = 0; i < genero.length; i++) {
    if (genero[i].checked) {
        generoSelected = genero[i].value;
        break;
    }
    }
    fechaNacimiento = document.getElementById("fechaNacimiento").value;
    curp = document.getElementById("curp").value;

    genero = document.getElementById("genero").value;
    generoSelected = "";

    

    estado = document.getElementById("estado").value;
    ciudad = document.getElementById("ciudad").value;
    domicilio = document.getElementById("domicilio").value;
    codigoPostal = document.getElementById("codigo_postal").value;
    telefono = document.getElementById("telefono").value;
    correo_electronico = document.getElementById("email").value;
    rfc = document.getElementById("rfc").value;

    // sucursal = document.getElementById("txtSucursal").value;
    // sucursalSelected = "";

    // for (let i = 0; i < sucursal.length; i++) {
    //     if (sucursal[i].checked) {
    //         sucursalSelected = sucursal[i].value;
    //         break;
    //     }
    // }

    fechaIngreso = document.getElementById("fechaIngreso").value;

    puesto = document.getElementById("puesto").value;
    puestoSelected = "";

    for (let i = 0; i < puesto.length; i++) {
    if (puesto[i].checked) {
        puestoSelected = puesto[i].value;
        break;
    }
    }

    idCliente = document.getElementById("idCliente").value;

    ;


    let cliente = {};
    cliente.nombre = nombre;
    cliente.apellidoPaterno = apellidoPaterno;
    cliente.apellidoMaterno = apellidoMaterno;
    cliente.fechaNacimiento = fechaNacimiento;
    cliente.curp = curp;
    cliente.genero = genero;
    cliente.estado = estado;
    cliente.ciudad = ciudad;
    cliente.domicilo = domicilio;
    cliente.codigoPostal = codigoPostal;
    cliente.telefono = telefono;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    // empleado.sucursal = sucursal;
    cliente.fechaIngreso = fechaIngreso;
    cliente.puesto = puesto;
    cliente.estatus = "Activo";
    cliente.codigo = idCliente;
    empleados[indexClienteSeleccionado] = cliente;
    clean();
    loadTabla();
}

function deleteEmpleado() {
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}


document.getElementById("buscarCliente").addEventListener("keyup", searchCliente);
document.getElementById("btnBuscar").addEventListener("click", searchCliente);

function searchCliente() {
    const searchClien = document.getElementById("buscarCliente").value.toLowerCase();
    const filteredEmployees = clientes.filter(cliente =>
                cliente.nombre.toLowerCase().includes(searchClien) ||
                cliente.apellidoPaterno.toLowerCase().includes(searchClien) ||
                cliente.apellidoMaterno.toLowerCase().includes(searchClien) ||
                // empleado.sucursal.toLowerCase().includes(searchEmp) ||
                cliente.genero.toLowerCase().includes(searchClien) ||
                cliente.correo.toLowerCase().includes(searchClien)    );

    loadTablas(filteredEmployees);
}

function loadTablas(empleadosData) {
    const tablaBody = document.getElementById("tblClientes");
    let cuerpo = "";

    empleadosData.forEach((cliente, index) => {
        const registro = `
            <tr onclick="selectEmpleado(${index});">
                <td>${cliente.idCliente}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellidoPaterno}</td>
                <td>${cliente.apellidoMaterno}</td>
                <td>${cliente.genero}</td>
                <td>${cliente.correo}</td>
            </tr>`;
        cuerpo += registro;
    });

    tablaBody.innerHTML = cuerpo;
}

