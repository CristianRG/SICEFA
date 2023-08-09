let indexEmpleadoSeleccionado;
let empleados = [{
    "codigo": 1,
    "nombre": "Alejandro", 
    "apellidos": "Lapida Hernández", 
    "fecha_nacimiento": "2001-02-04",
    "curp": "LAHA010204HCSPRLI2", 
    "genero": "Masculino",
    "direccion": "Suárez #13c,Berlin. León", 
    "telefono": "4771636991", 
    "correo_electronico": "AleHer547@hotmail.com", 
    "rfc": "LAHA010204V29",
    "sucursal": "Centro Max",
    "fecha": "2022-10-24",
    "puesto": "Administrador",
    "estatus": "Activo"
},
{
    "codigo": 2,
    "nombre": "Damian", 
    "apellidos": "Rojas Villareal", 
    "fecha_nacimiento": "1992-05-14",
    "curp": "ROVD920514HGTJLM51", 
    "genero": "Masculino",
    "direccion": "Narvarte #03,Centro. León", 
    "telefono": "4775589319", 
    "correo_electronico": "VillarealDARO@gmail.com", 
    "rfc": "ROVD920514187",
    "sucursal": "Futurama Monterrey",
    "fecha": "2018-08-03",
    "puesto": "Administrador",
    "estatus": "Activo"
},
{
    "codigo": 3,
    "nombre": "Erika", 
    "apellidos": "Yepéz Molina", 
    "fecha_nacimiento": "1989-06-03",
    "curp": "YEME890603MDFPLR15", 
    "genero": "Femenino",
    "direccion": "Lluvia #235,Cervantes. León", 
    "telefono": "4763821678", 
    "correo_electronico": "E1989YM@gmail.com", 
    "rfc": "YEME890603FCA",
    "sucursal": "Plaza Mayor",
    "fecha": "2020-05-01",
    "puesto": "Administrador",
    "estatus": "Activo"
},
{
    "codigo": 4,
    "nombre": "Fernanda", 
    "apellidos": "Juárez Rosas", 
    "fecha_nacimiento": "2003-08-23",
    "curp": "JURF030823MGTRSRH0", 
    "genero": "Femenino",
    "direccion": "Aldama #415,Centro. León", 
    "telefono": "4773870624", 
    "correo_electronico": "fer2003JuRo@gmail.com", 
    "rfc": "JURF030823F80",
    "sucursal": "Centro",
    "fecha": "2023-08-23",
    "puesto": "Administrador",
    "estatus": "Activo"
},
{
    "codigo": 5,
    "nombre": "José Gustavo", 
    "apellidos": "Dominguez Solis", 
    "fecha_nacimiento": "1995-03-10",
    "curp": "DOSG950310HGTMLS60", 
    "genero": "Masculino",
    "direccion": "Coral #23b,Flores. León", 
    "telefono": "4772800604", 
    "correo_electronico": "GusG4D1098@gmail.com", 
    "rfc": "DOSG950310458",
    "sucursal": "Futurama Monterrey",
    "fecha": "2022-04-20",
    "puesto": "Vendedor",
    "estatus": "Activo"
},
{
    "codigo": 6,
    "nombre": "Josue Alejandro", 
    "apellidos": "Nuñez Padilla", 
    "fecha_nacimiento": "1986-07-25",
    "curp": "NUPJ860725HSPXDS77", 
    "genero": "Masculino",
    "direccion": "Salinas #106,Tulipanes. León", 
    "telefono": "4774713211", 
    "correo_electronico": "JA12546@gmail.com", 
    "rfc": "NUPJ860725895",
    "sucursal": "Centro",
    "fecha": "2019-08-24",
    "puesto": "Vendedor",
    "estatus": "Activo"
},
{
    "codigo": 7,
    "nombre": "Maria del Rosario", 
    "apellidos": "Beltran Aranda", 
    "fecha_nacimiento": "2000-11-09",
    "curp": "BEAM001109MGTLRRQ2", 
    "genero": "Femenino",
    "direccion": "Silvestre #196, Rios. León", 
    "telefono": "4773357100", 
    "correo_electronico": "Mara198@outlook.com", 
    "rfc": "BEAM001109LKA",
    "sucursal": "Centro",
    "fecha": "2018-12-05",
    "puesto": "Vendedor",
    "estatus": "Activo"
},
{
    "codigo": 8,
    "nombre": "Miriam Lucia", 
    "apellidos": "Mejia Cortéz", 
    "fecha_nacimiento": "2003-01-15",
    "curp": "MECM030115MGTJRRW5", 
    "genero": "Femenino",
    "direccion": "Diamante #11d, Colonias. León", 
    "telefono": "4774261003", 
    "correo_electronico": "MejiaLucia12@outlook.com", 
    "rfc": "MECM0301156T7",
    "sucursal": "Centro Max",
    "fecha": "2022-01-02",
    "puesto": "Vendedor",
    "estatus": "Activo"
},
{
    "codigo": 9,
    "nombre": "Tadeo Ismael", 
    "apellidos": "López Castro", 
    "fecha_nacimiento": "1999-04-30",
    "curp": "LECT990430HGTOSD25", 
    "genero": "Masculino",
    "direccion": "Perla #232, Cuevas. León", 
    "telefono": "4772261277", 
    "correo_electronico": "Tadeoasdfg@hotmail.com", 
    "rfc": "LOCT990430QP1",
    "sucursal": "Centro Max",
    "fecha": "2021-11-04",
    "puesto": "Vendedor",
    "estatus": "Activo"
},
{
    "codigo": 10,
    "nombre": "Victoria", 
    "apellidos": "Fuentes Durán", 
    "fecha_nacimiento": "1992-07-07",
    "curp": "FUDV920707MGTNRC93", 
    "genero": "Femenino",
    "direccion": "El rubi #100, Centro. León", 
    "telefono": "4779514428", 
    "correo_electronico": "FuentesVic@gmail.com", 
    "rfc": "FUDV920707UP0",
    "sucursal": "Plaza Mayor",
    "fecha": "2020-07-13",
    "puesto": "Vendedor",
    "estatus": "Activo"
}];

// Función para manejar el evento de clic en la fila
function handleRowClick(event) {
    const clickedRow = event.target.closest('tr');
    if (clickedRow && clickedRow.parentElement.tagName === 'TBODY') {
        const tableRows = clickedRow.parentElement.querySelectorAll('tr');
        tableRows.forEach(row => row.classList.remove('table-info'));
        clickedRow.classList.add('table-info');

        // Obtener el id del div correspondiente al hacer clic en la fila
        const divId = 'sucursal' + clickedRow.rowIndex;

        // Mostrar solo el div correspondiente y ocultar los demás
        const allDivs = document.querySelectorAll('.sucursal');
        allDivs.forEach(div => {
            if (div.id === divId) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    }
}

    // Vincular el evento de clic al cuerpo de la tabla
    const tableBody = document.querySelector('tbody');
    tableBody.addEventListener('click', handleRowClick);

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
            domicilo,
            codigoPostal,
            telefono,
            correo_electronico,
            sucursal,
            // sucursalSelected,
            fechaIngreso,
            puesto,
            puestoSelected,
            salario,
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
    domicilo = document.getElementById("domicilio").value;
    codigoPostal = document.getElementById("codigoPostal").value;
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

    noEmpleado = document.getElementById("noEmp").value;
    salario = document.getElementById("salario").value;
    

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
    empleado.domicilo = domicilo;
    empleado.codigoPostal = codigoPostal;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    // empleado.sucursal = sucursal;
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
                '<tr onclick="moduloLogin1.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.codigo + '</td>' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellidoPaterno + '</td>' +
                '<td>' + empleado.apellidoMaterno + '</td>' +
                '<td>' + empleado.sucursal + '</td>' +
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
    document.getElementById("apellidoPaterno").value = empleados[index].apellidoPaterno;
    document.getElementById("fechaNacimiento").value = empleados[index].fecha_nacimiento;
    document.getElementById("curp").value = empleados[index].curp;
    document.getElementById("rfc").value = empleados[index].rfc;
    document.getElementById("genero").value = empleados[index].genero;
    document.getElementById("estado").value = empleados[index].estado;
    document.getElementById("ciudad").value = empleados[index].ciudad;
    document.getElementById("domicilo").value = empleados[index].domicilo;
    document.getElementById("telefono").value = empleados[index].telefono;
    document.getElementById("email").value = empleados[index].correo_electronico;
    // document.getElementById("estado").value = empleados[index].sucursal;
    document.getElementById("fechaIngreso").value = empleados[index].fechaIngreso;
    document.getElementById("puesto").value = empleados[index].puesto;
    document.getElementById("noEmp").value = empleados[index].noEmpleado;
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
    document.getElementById("domicilo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    // document.getElementById("estado").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("puesto").value = "";
    document.getElementById("noEmp").value = "";
    document.getElementById("nombreEmpleado").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}

function updateEmpleado() {
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
    domicilo,
    codigoPostal,
    telefono,
    correo_electronico,
    // sucursal,
    // sucursalSelected,
    fecha,
    puesto,
    puestoSelected,
    salario,
    noEmpleado;
    foto,
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
    domicilo = document.getElementById("domicilio").value;
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

    noEmpleado = document.getElementById("noEmp").value;
    salario = document.getElementById("salario").value;


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
    empleado.domicilo = domicilo;
    empleado.codigoPostal = codigoPostal;
    empleado.telefono = telefono;
    empleado.correo_electronico = correo_electronico;
    empleado.rfc = rfc;
    // empleado.sucursal = sucursal;
    empleado.fechaIngreso = fechaIngreso;
    empleado.puesto = puesto;
    empleado.estatus = "Activo";
    empleado.codigo = codigo;
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
                // empleado.sucursal.toLowerCase().includes(searchEmp) ||
                empleado.puesto.toLowerCase().includes(searchEmp) ||
                empleado.estatus.toLowerCase().includes(searchEmp)
    );

    loadTablas(filteredEmployees);
}

function loadTablas(empleadosData) {
    const tablaBody = document.getElementById("tblEmpleados");
    let cuerpo = "";

    empleadosData.forEach((empleado, index) => {
        const registro = `
            <tr onclick="moduloLogin1.selectEmpleado(${index});">
                <td>${empleado.codigo}</td>
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




