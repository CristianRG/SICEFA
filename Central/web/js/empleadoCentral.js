let indexEmpleadoSeleccionado;
let empleados = [
    {
    "noEmpleado": 1,
    "nombre": "Homero",
    "apellidoPaterno": "Simpson",
    "apellidoMaterno": "Ramirez",
    "fecha_nacimiento": "2001-02-04",
    "curp": "LAHA010204HCSPRLI2",
    "genero": "Masculino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Suárez #13c,Berlin",
    "codigoPostal": "37250",
    "telefono": "4771636991",
    "correo_electronico": "AleHer547@hotmail.com",
    "rfc": "LAHA010204V29",
    "fechaIngreso": "2022-10-24",
    "puesto": "Administrador",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 2,
    "nombre": "Anahi",
    "apellidoPaterno": "Mojica",
    "apellidoMaterno": "Fernandez",
    "fecha_nacimiento": "1995-06-15",
    "curp": "GOLM950615MSPNZR07",
    "genero": "Femenino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Avenida Juárez #45",
    "codigoPostal": "44100",
    "telefono": "3318579245",
    "correo_electronico": "maria.gonzalez@gmail.com",
    "rfc": "GOLM9506155A1",
    "fechaIngreso": "2021-08-10",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 3,
    "nombre": "Naruto",
    "apellidoPaterno": "Martínez",
    "apellidoMaterno": "Sánchez",
    "fecha_nacimiento": "1988-11-23",
    "curp": "MASC881123HDFNRL09",
    "genero": "Masculino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Reforma #1002",
    "codigoPostal": "06000",
    "telefono": "5552187496",
    "correo_electronico": "carlos.martinez@gmail.com",
    "rfc": "MASC8811236B2",
    "fechaIngreso": "2015-04-05",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 4,
    "nombre": "Laura",
    "apellidoPaterno": "Ramírez",
    "apellidoMaterno": "Pérez",
    "fecha_nacimiento": "1990-09-18",
    "curp": "RAPL900918MDFMRL08",
    "genero": "Femenino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Calle Hidalgo #25",
    "codigoPostal": "50050",
    "telefono": "7223658120",
    "correo_electronico": "laura.ramirez@hotmail.com",
    "rfc": "RAPL900918V40",
    "fechaIngreso": "2018-06-20",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 5,
    "nombre": "José",
    "apellidoPaterno": "García",
    "apellidoMaterno": "Martínez",
    "fecha_nacimiento": "1985-04-30",
    "curp": "GAMJ850430HDFRCR03",
    "genero": "Masculino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Colonia Centenario #70",
    "codigoPostal": "58030",
    "telefono": "4437896541",
    "correo_electronico": "jose.garcia@gmail.com",
    "rfc": "GAMJ8504305B3",
    "fechaIngreso": "2010-02-15",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 6,
    "nombre": "Ana",
    "apellidoPaterno": "Rodríguez",
    "apellidoMaterno": "López",
    "fecha_nacimiento": "1998-07-12",
    "curp": "ROLA980712MDFDNP02",
    "genero": "Femenino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Zaragoza #150",
    "codigoPostal": "37000",
    "telefono": "4771234567",
    "correo_electronico": "ana.rodriguez@example.com",
    "rfc": "ROLA9807125A0",
    "fechaIngreso": "2020-01-15",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 7,
    "nombre": "Pedro",
    "apellidoPaterno": "Hernández",
    "apellidoMaterno": "García",
    "fecha_nacimiento": "1992-03-20",
    "curp": "HEGP920320HDFRRC09",
    "genero": "Masculino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Paseo de los Insurgentes #123",
    "codigoPostal": "37040",
    "telefono": "4779876543",
    "correo_electronico": "pedro.hernandez@example.com",
    "rfc": "HEGP920320A1",
    "fechaIngreso": "2017-05-10",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 8,
    "nombre": "Elena",
    "apellidoPaterno": "Gómez",
    "apellidoMaterno": "López",
    "fecha_nacimiento": "1989-10-15",
    "curp": "GOEL891015MDFPNN03",
    "genero": "Femenino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Calle Reforma #456",
    "codigoPostal": "37210",
    "telefono": "4774567890",
    "correo_electronico": "elena.gomez@example.com",
    "rfc": "GOEL8910155B2",
    "fechaIngreso": "2015-11-28",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 9,
    "nombre": "Miguel",
    "apellidoPaterno": "López",
    "apellidoMaterno": "Rodríguez",
    "fecha_nacimiento": "1996-09-28",
    "curp": "LORM960928HDFGZL08",
    "genero": "Masculino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Avenida Revolución #789",
    "codigoPostal": "37230",
    "telefono": "4772345678",
    "correo_electronico": "miguel.lopez@example.com",
    "rfc": "LORM9609284A1",
    "fechaIngreso": "2020-07-03",
    "puesto": "Vendedor",
    "estatus": "Activo"
}
,
{
    "noEmpleado": 10,
    "nombre": "Isabel",
    "apellidoPaterno": "Hernández",
    "apellidoMaterno": "González",
    "fecha_nacimiento": "1994-05-10",
    "curp": "HEGI940510MDFRZB07",
    "genero": "Femenino",
    "estado": "Guanajuato",
    "ciudad": "León",
    "domicilio": "Calle Hidalgo #567",
    "codigoPostal": "37100",
    "telefono": "4773456789",
    "correo_electronico": "isabel.hernandez@example.com",
    "rfc": "HEGI9405105A0",
    "fechaIngreso": "2018-04-15",
    "puesto": "Vendedor",
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
    let     nombre,
            apellidoPaterno,
            apellidoMaterno,
            fecha_nacimiento,
            curp,
            rfc,
            genero,
            generoSelected,
            estado,
            ciudad,
            domicilio,
            codigoPostal,
            telefono,
            correo_electronico,
            sucursal,
            sucursalSelected,
            fechaIngreso,
            puesto,
            puestoSelected,
            noEmpleado;


    nombre = document.getElementById("nombreEmpleado").value;
    apellidoPaterno = document.getElementById("apellidoPaterno").value;
    apellidoMaterno = document.getElementById("apellidoMaterno").value;
    fecha_nacimiento = document.getElementById("fechaNacimiento").value;
    curp = document.getElementById("curp").value;

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
    codigoPostal = document.getElementById("codigoPostal").value;
    telefono = document.getElementById("telefono").value;
    correo_electronico = document.getElementById("email").value;
    rfc = document.getElementById("rfc").value;

    sucursal = document.getElementById("txtSucursal").value;
    sucursalSelected = "";

    for (let i = 0; i < sucursal.length; i++) {
        if (sucursal[i].checked) {
            sucursalSelected = sucursal[i].value;
            break;
        }
    }

    fechaIngreso = document.getElementById("fechaIngreso").value;

    puesto = document.getElementById("puesto").value;
    puestoSelected = "";

    for (let i = 0; i < puesto.length; i++) {
        if (puesto[i].checked) {
            puestoSelected = puesto[i].value;
            break;
        }
    }

    noEmpleado = document.getElementById("noEmp").value;
    

    ;

    let empleado = {};
    empleado.nombre = nombre;
    empleado.apellidoPaterno = apellidoPaterno;
    empleado.apellidoMaterno = apellidoMaterno;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.curp = curp;
    empleado.genero = genero;
    empleado.estado = estado;
    empleado.ciudad = ciudad;
    empleado.domicilio = domicilio;
    empleado.codigoPostal = codigoPostal;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    empleado.sucursal = sucursal;
    empleado.fechaIngreso = fechaIngreso;
    empleado.puesto = puesto;
    empleado.estatus = "Activo";
    empleado.noEmpleado = empleados.length + 1;
    empleados.push(empleado);
    clean();
    loadTabla();
}

function loadTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
                '<tr onclick="selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.noEmpleado + '</td>' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellidoPaterno + '</td>' +
                '<td>' + empleado.apellidoMaterno + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleados").innerHTML = cuerpo;

}

function selectEmpleado(index) {
    document.getElementById("nombreEmpleado").value = empleados[index].nombre;
    document.getElementById("apellidoPaterno").value = empleados[index].apellidoPaterno;
    document.getElementById("apellidoMaterno").value = empleados[index].apellidoMaterno;
    document.getElementById("fechaNacimiento").value = empleados[index].fecha_nacimiento;
    document.getElementById("curp").value = empleados[index].curp;
    document.getElementById("rfc").value = empleados[index].rfc;
    document.getElementById("genero").value = empleados[index].genero;
    document.getElementById("estado").value = empleados[index].estado;
    document.getElementById("ciudad").value = empleados[index].ciudad;
    document.getElementById("domicilio").value = empleados[index].domicilio;
    document.getElementById("codigoPostal").value = empleados[index].codigoPostal;
    document.getElementById("telefono").value = empleados[index].telefono;
    document.getElementById("email").value = empleados[index].correo_electronico;
    document.getElementById("estado").value = empleados[index].sucursal;
    document.getElementById("fechaIngreso").value = empleados[index].fechaIngreso;
    document.getElementById("puesto").value = empleados[index].puesto;
    document.getElementById("noEmp").value = empleados[index].noEmpleado;
    document.getElementById("txtSucursal").value = empleados[index].sucursal;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexEmpleadoSeleccionado = index;
}


function clean() {
    document.getElementById("nombreEmpleado").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("curp").value = "";
    document.getElementById("rfc").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("domicilio").value = "";
    document.getElementById("codigoPostal").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    // document.getElementById("estado").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("puesto").value = "";
    document.getElementById("noEmp").value = "";
    document.getElementById("txtSucursal").value = "";
    document.getElementById("nombreEmpleado").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}

function updateEmpleado() {
    let     
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fecha_nacimiento,
    curp,
    rfc,
    genero,
    generoSelected,
    estado,
    ciudad,
    domicilio,
    codigoPostal,
    telefono,
    correo_electronico,
    sucursal,
    sucursalSelected,
    fechaIngreso,
    puesto,
    puestoSelected,
    noEmpleado;
    fechaIngreso,


    nombre = document.getElementById("nombreEmpleado").value;
    apellidoPaterno = document.getElementById("apellidoPaterno").value;
    apellidoMaterno = document.getElementById("apellidoMaterno").value;
    fecha_nacimiento = document.getElementById("fechaNacimiento").value;
    curp = document.getElementById("curp").value;

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
    codigoPostal = document.getElementById("codigoPostal").value;
    telefono = document.getElementById("telefono").value;
    correo_electronico = document.getElementById("email").value;
    rfc = document.getElementById("rfc").value;

    sucursal = document.getElementById("txtSucursal").value;
    sucursalSelected = "";

    for (let i = 0; i < sucursal.length; i++) {
        if (sucursal[i].checked) {
            sucursalSelected = sucursal[i].value;
            break;
        }
    }

    fechaIngreso = document.getElementById("fechaIngreso").value;

    puesto = document.getElementById("puesto").value;
    puestoSelected = "";

    for (let i = 0; i < puesto.length; i++) {
    if (puesto[i].checked) {
        puestoSelected = puesto[i].value;
        break;
    }
    }

    noEmpleado = document.getElementById("noEmp").value;

    ;


    let empleado = {};
    empleado.nombre = nombre;
    empleado.apellidoPaterno = apellidoPaterno;
    empleado.apellidoMaterno = apellidoMaterno;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.curp = curp;
    empleado.genero = genero;
    empleado.estado = estado;
    empleado.ciudad = ciudad;
    empleado.domicilio = domicilio;
    empleado.codigoPostal = codigoPostal;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    empleado.sucursal = sucursal;
    empleado.fechaIngreso = fechaIngreso;
    empleado.puesto = puesto;
    empleado.estatus = "Activo";
    empleado.noEmpleado = noEmpleado;
    empleados[indexEmpleadoSeleccionado] = empleado;
    clean();
    loadTabla();
}

function deleteEmpleado() {
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}


document.getElementById("buscarEmpleado").addEventListener("keyup", searchEmpleado);
document.getElementById("btnBuscar").addEventListener("click", searchEmpleado);

function searchEmpleado() {
    const searchEmp = document.getElementById("buscarEmpleado").value.toLowerCase();
    const filteredEmployees = empleados.filter(empleado =>
                empleado.nombre.toLowerCase().includes(searchEmp) ||
                empleado.apellidoPaterno.toLowerCase().includes(searchEmp) ||
                empleado.apellidoMaterno.toLowerCase().includes(searchEmp) ||
                empleado.sucursal.toLowerCase().includes(searchEmp) ||
                empleado.puesto.toLowerCase().includes(searchEmp) ||
                empleado.estatus.toLowerCase().includes(searchEmp)    );

    loadTablas(filteredEmployees);
}

function loadTablas(empleadosData) {
    const tablaBody = document.getElementById("tblEmpleados");
    let cuerpo = "";

    empleadosData.forEach((empleado, index) => {
        const registro = `
            <tr onclick="selectEmpleado(${index});">
                <td>${empleado.noEmpleado}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellidoPaterno}</td>
                <td>${empleado.apellidoMaterno}</td>
                <td>${empleado.puesto}</td>
                <td>${empleado.estatus}</td>
            </tr>`;
        cuerpo += registro;
    });

    tablaBody.innerHTML = cuerpo;
}