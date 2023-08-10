document.addEventListener("DOMContentLoaded", function () {
const tableRows = document.querySelectorAll("#myTable tbody tr");

tableRows.forEach((row, index) => {
    row.addEventListener("click", function () {
        // Elimina la clase "selected-row" de todas las filas
        tableRows.forEach(row => row.classList.remove("table-info"));

        // Agrega la clase "selected-row" a la fila seleccionada
        row.classList.add("table-info");

        
    });
});
});

document.addEventListener("DOMContentLoaded", function() {
        const botonMostrarActivas = document.getElementById("botonMostrarActivas");
        const botonMostrarInactivas = document.getElementById("botonMostrarInactivas");
        const tablaActivas = document.getElementById("tablaSucursales");
        const tablaInactivas = document.getElementById("tablaSucursales2");
        const contenedorFormulario = document.getElementById("formulario");
        const botonMostrarTabla = document.getElementById("botonMostrarTabla");

        botonMostrarActivas.addEventListener("click", function() {
            tablaActivas.style.display = "block";
            tablaInactivas.style.display = "none";
            contenedorFormulario.style.display = "none"; // Ocultar el formulario
            botonMostrarTabla.style.display = "none"; // Ocultar el botón
        });

        botonMostrarInactivas.addEventListener("click", function() {
            tablaActivas.style.display = "none";
            tablaInactivas.style.display = "block";
            contenedorFormulario.style.display = "none"; // Ocultar el formulario
            botonMostrarTabla.style.display = "none"; // Ocultar el botón
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    const contenedorFormulario = document.getElementById("formulario");
    const contenedorTabla = document.getElementById("tablaSucursales");
    const botonMostrarTabla = document.getElementById("botonMostrarTabla");
    const tablaInactivas = document.getElementById("tablaSucursales2");


    contenedorFormulario.style.display = "none"; // Ocultar el formulario
    botonMostrarTabla.style.display = "none"; // Ocultar el botón

    // Función para mostrar el formulario y ocultar la tabla
    function mostrarFormulario() {
        contenedorFormulario.style.display = "block"; // Mostrar el formulario
        contenedorTabla.style.display = "none"; // Ocultar la tabla
        botonMostrarTabla.style.display = "block"; // Mostrar el botón
        tablaInactivas.style.display = "none";
    }

    // Función para mostrar la tabla y ocultar el formulario
    function mostrarTabla() {
        contenedorFormulario.style.display = "none"; // Ocultar el formulario
        contenedorTabla.style.display = "block"; // Mostrar la tabla
        botonMostrarTabla.style.display = "none"; // Ocultar el botón
    }

    // Asignar los eventos a los botones
    const botonMostrarFormulario = document.getElementById("botonMostrarFormulario");
    botonMostrarFormulario.addEventListener("click", mostrarFormulario);
    botonMostrarTabla.addEventListener("click", mostrarTabla);
});

const data = [
            {
                nombreSucursal: "Central",
                idSucursal: 1,
                nombreTitular: "Alejandro",
                apellidoPaternoTitular: "Torres",
                apellidoMaternoTitular: "Peréz",
                curpTitular: "TOPA930518HMCLRR04",
                rfcTitular: "TOPA930518AB1",
                estado: "Guanajuato",
                ciudad: "León",
                domicilio: "",
                codigoPostal: "",
                telefonoSucursal: "(477) 123-4567"
            },
            {
                nombreSucursal: "Plaza Mayor",
                idSucursal: 2,
                nombreTitular: "Gabriela",
                apellidoPaternoTitular: "Vargas",
                apellidoMaternoTitular: "Ruiz",
                curpTitular: "VARC980423MMCLZB06",
                rfcTitular: "VARC980423VZ2",
                estado: "Guanajuato",
                ciudad: "León",
                domicilio: "",
                codigoPostal: "",
                telefonoSucursal: "(477) 234-5678"
            },
            {
                nombreSucursal: "Centro Max",
                idSucursal: 3,
                nombreTitular: "Rodrigo",
                apellidoPaternoTitular: "Ramos",
                apellidoMaternoTitular: "García",
                curpTitular: "RAGR920722HMCMSD09",
                rfcTitular: "RAGR920722LH9",
                estado: "Guanajuato",
                ciudad: "León",
                domicilio: "",
                codigoPostal: "",
                telefonoSucursal: "(477) 234-5678"
            },
            {
                nombreSucursal: "Centro",
                idSucursal: 4,
                nombreTitular: "Valentina",
                apellidoPaternoTitular: "Jimenéz",
                apellidoMaternoTitular: "González",
                curpTitular: "JIGV010311MMCGNZ05",
                rfcTitular: "JIGV010311RM3",
                estado: "Guanajuato",
                ciudad: "León",
                domicilio: "",
                codigoPostal: "37000",
                telefonoSucursal: "(477) 456-7890"
            },
            {
                nombreSucursal: "Sunset Mall",
                idSucursal: 5,
                nombreTitular: "Luis",
                apellidoPaternoTitular: "Martínez",
                apellidoMaternoTitular: "Sánchez",
                curpTitular: "MASL880210HMCZNS07",
                rfcTitular: "MASL880210XZ3",
                estado: "Sonora",
                ciudad: "Hermosillo",
                domicilio: "Calle Occidental #321",
                codigoPostal: "83000",
                telefonoSucursal: "(662) 777-8888"
            },
            {
                nombreSucursal: "Centro Comercial",
                idSucursal: 6,
                nombreTitular: "Laura",
                apellidoPaternoTitular: "López",
                apellidoMaternoTitular: "García",
                curpTitular: "LOGL950515MMCRRC09",
                rfcTitular: "LOGL950515TQ7",
                estado: "Querétaro",
                ciudad: "Querétaro",
                domicilio: "Avenida Principal #555",
                codigoPostal: "76000",
                telefonoSucursal: "(442) 666-9999"
            },
            {
                nombreSucursal: "Plaza del Sol",
                idSucursal: 7,
                nombreTitular: "Fernando",
                apellidoPaternoTitular: "Rodríguez",
                apellidoMaternoTitular: "Pérez",
                curpTitular: "ROPF910728HMCNRR02",
                rfcTitular: "ROPF910728KN2",
                estado: "Jalisco",
                ciudad: "Guadalajara",
                domicilio: "Calle Sur #987",
                codigoPostal: "44100",
                telefonoSucursal: "(333) 888-1111"
            },
            {
                nombreSucursal: "Mall Central",
                idSucursal: 8,
                nombreTitular: "Isabel",
                apellidoPaternoTitular: "Gómez",
                apellidoMaternoTitular: "Hernández",
                curpTitular: "GOHI920403MMCGZL08",
                rfcTitular: "GOHI920403ZT8",
                estado: "Ciudad de México",
                ciudad: "Ciudad de México",
                domicilio: "Avenida Reforma #1234",
                codigoPostal: "06000",
                telefonoSucursal: "(55) 999-7777"
            },
            {
                nombreSucursal: "Paseo 2000",
                idSucursal: 9,
                nombreTitular: "Carlos",
                apellidoPaternoTitular: "López",
                apellidoMaternoTitular: "Hernández",
                curpTitular: "LOCH850609HMCRRN01",
                rfcTitular: "LOCH850609NE9",
                estado: "Baja California",
                ciudad: "Tijuana",
                domicilio: "Calle Principal #987",
                codigoPostal: "22000",
                telefonoSucursal: "(664) 222-3333"
            },
            {
                nombreSucursal: "Gran Plaza",
                idSucursal: 10,
                nombreTitular: "María",
                apellidoPaternoTitular: "Gutiérrez",
                apellidoMaternoTitular: "Rodríguez",
                curpTitular: "MAGR900702MMCRDR08",
                rfcTitular: "MAGR900702KL1",
                estado: "Michoacán",
                ciudad: "Morelia",
                domicilio: "Avenida Central #654",
                codigoPostal: "58000",
                telefonoSucursal: "(443) 444-5555"
            }
        ];



        function mostrarFormulario1(index) {
            const formularioContainer = document.getElementById("formularioContainer");
        // Obtén la información correspondiente de la fila seleccionada
        const registro = data[index];

        // Genera el contenido del formulario con los valores de la fila seleccionada
        const contenidoFormulario = `
            <table>
                <thead>
                    <tr>
                        <th colspan="2">Datos Titular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Nombre titular:<br>
                            <input type="text" id="nombreTitularEditar" value="${registro.nombreTitular}">
                        </td>
                        <td>
                            Apellido paterno titular:<br>
                            <input type="text" id="apellidoPaternoTitularEditar" value="${registro.apellidoPaternoTitular}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Apellido materno titular:<br>
                            <input type="text" id="apellidoMaternoTitularEditar" value="${registro.apellidoMaternoTitular}">
                        </td>
                        <td>
                            Titular CURP:<br>
                            <input type="text" id="curpTitularEditar" value="${registro.curpTitular}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Titular RFC:<br>
                            <input type="text" id="rfcTitularEditar" value="${registro.rfcTitular}">
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="mi-tabla">
                <thead>
                    <tr>
                        <th colspan="2">Datos Sucursal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Nombre de la sucursal:<br>
                            <input type="text" id="nombreSucursalEditar" value="${registro.nombreSucursal}">
                        </td>
                        <td>
                            Id sucursal:<br>
                            <input type="text" id="idSucursalEditar" value="${registro.idSucursal}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Estado:<br>
                            <input type="text" id="estadoEditar" value="${registro.estado}">
                        </td>
                        <td>
                            Ciudad:<br>
                            <input type="text" id="ciudadEditar" value="${registro.ciudad}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Domicilio:<br>
                            <input type="text" id="domicilioEditar" value="${registro.domicilio}">
                        </td>
                        <td>
                            Codigo Postal:<br>
                            <input type="text" id="codigoPostalEditar" value="${registro.codigoPostal}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Telefono sucursal:<br>
                           <input type="text" id="telefonoSucursalEditar" value="${registro.telefonoSucursal}">
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" id="botonMostrarTabla" class="custom-button" onclick="actualizarFilaEnTabla()">Modificar</button>
        `;

        // Inserta el contenido del formulario en el contenedor
        formularioContainer.innerHTML = contenidoFormulario;
        }  



function loadTabla() {
    let cuerpo = "";
    data.forEach(function (registro, index) {
        let row =
            `<tr onclick="mostrarFormulario1(${index})">
                <td>${registro.nombreSucursal}</td>
                <td>${registro.idSucursal}</td>
                <td>${registro.estado}</td>
                <td>${registro.ciudad}</td>
                <td>${registro.domicilio}</td>
                <td>${registro.codigoPostal}</td>
                <td>${registro.telefonoSucursal}</td>
                <td>${registro.nombreTitular}</td>
                <td>${registro.apellidoPaternoTitular}</td>
                <td>${registro.apellidoMaternoTitular}</td>
                <td>${registro.curpTitular}</td>
                <td>${registro.rfcTitular}</td>
                <td><button class="btn-eliminar" onclick="moveRow(this)">Eliminar</button></td>
            </tr>`;
        cuerpo += row; // Corregido aquí
    });
    console.log(cuerpo);
    document.getElementById("tableBody1").innerHTML = cuerpo; // Usar "tableBody1" en lugar de "tblEmpleados"

    // Opcionalmente, puedes mover el código para limpiar el formulario aquí
//    limpiarFormulario();
}

   document.addEventListener("DOMContentLoaded", function () {
    // ...

    const agregarBtn = document.getElementById("botonMostrarTabla");
    agregarBtn.addEventListener("click", agregarRegistroATabla);
}); 

let lastId= 11;
     
function agregarRegistroATabla(registro) {
    const tableBody = document.getElementById("tableBody1");
    
    const nombreSucursal = document.getElementById('nombreSucursalAgregar').value;
    const idSucursal = parseInt(document.getElementById('idSucursalAgregar').value);
    const nombreTitular = document.getElementById('nombreTitularAgregar').value;
    const apellidoPaternoTitular = document.getElementById('apellidoPaternoTitularAgregar').value;
    const apellidoMaternoTitular = document.getElementById('apellidoMaternoTitularAgregar').value;
    const curpTitular = document.getElementById('curpTitularAgregar').value;
    const rfcTitular = document.getElementById('rfcTitularAgregar').value;
    const estado = document.getElementById('estadoAgregar').value;
    const ciudad = document.getElementById('ciudadAgregar').value;
    const domicilio = document.getElementById('domicilioAgregar').value;
    const codigoPostal = document.getElementById('codigoPostalAgregar').value;
    const telefonoSucursal = document.getElementById('telefonoSucursalAgregar').value;
    function generateNewId() {
    return lastId++;
    }   
    
    // Crear un objeto de registro con los valores obtenidos
const nuevoRegistro = {
    nombreSucursal:nombreSucursal,
    idSucursal: generateNewId(),
    nombreTitular:nombreTitular ,
    apellidoPaternoTitular:apellidoPaternoTitular ,
    apellidoMaternoTitular:curpTitular ,
    curpTitular:rfcTitular ,
    rfcTitular:rfcTitular ,
    estado: estado ,
    ciudad: ciudad ,
    domicilio:domicilio ,
    codigoPostal:codigoPostal ,
    telefonoSucursal: telefonoSucursal
};
    data.push(nuevoRegistro);
    loadTabla(); 
    
    // Limpiar el formulario después de agregar el registro
//    limpiarFormulario();
}

// Obtén una referencia al elemento input
const miInput = document.getElementById("idSucursal");

// Deshabilitar el input
miInput.disabled = true;

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", buscarEnTabla);
});

function buscarEnTabla() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const tableRows = document.querySelectorAll("#tableBody1 tr");

    tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton2");
    searchButton.addEventListener("click", buscarEnTabla2);
});
function buscarEnTabla2() {
    const searchInput = document.getElementById("searchInput2").value.toLowerCase();
    const tableRows = document.querySelectorAll("#tableBody2 tr");

    tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function actualizarFilaEnTabla() {
    // Obtener los valores de los campos del formulario de edición
    var nombreTitular = document.getElementById("nombreTitularEditar").value;
    var apellidoPaternoTitular = document.getElementById("apellidoPaternoTitularEditar").value;
    var apellidoMaternoTitular = document.getElementById("apellidoMaternoTitularEditar").value;
    var curpTitular = document.getElementById("curpTitularEditar").value;
    var rfcTitular = document.getElementById("rfcTitularEditar").value;
    // ... (obtener otros campos) ...
    var nombreSucursal = document.getElementById("nombreSucursalEditar").value;
    var idSucursal = document.getElementById("idSucursalEditar").value;
    var estado = document.getElementById("estadoEditar").value;
    var ciudad = document.getElementById("ciudadEditar").value;
    var domicilio = document.getElementById("domicilioEditar").value;
    var codigoPostal = document.getElementById("codigoPostalEditar").value;
    var telefonoSucursal = document.getElementById("telefonoSucursalEditar").value;
    
    // Aquí debes buscar y actualizar la fila correspondiente en la tabla de edición
    // Puedes utilizar métodos para encontrar la fila, como querySelector, parentNode, etc.
    // Supongamos que la fila que deseas actualizar tiene un atributo 'data-id' con el valor del idSucursal
    var fila = document.querySelector("[data-id='" + idSucursal + "']");
    if (fila) {
        // Actualizar las celdas de la fila con los nuevos valores
        fila.cells[0].textContent = nombreSucursal;
        fila.cells[1].textContent = idSucursal;
        // ... (actualizar otras celdas) ...
        fila.cells[7].textContent = nombreTitular;
        fila.cells[8].textContent = apellidoPaternoTitular;
        fila.cells[9].textContent = apellidoMaternoTitular;
        fila.cells[10].textContent = curpTitular;
        fila.cells[11].textContent = rfcTitular;
        
        // Limpiar los campos del formulario de edición
        document.getElementById("nombreTitularEditar").value = "";
        document.getElementById("apellidoPaternoTitularEditar").value = "";
        document.getElementById("apellidoMaternoTitularEditar").value = "";
        document.getElementById("curpTitularEditar").value = "";
        document.getElementById("rfcTitularEditar").value = "";
        // ... (limpiar otros campos) ...
        document.getElementById("nombreSucursalEditar").value = "";
        document.getElementById("idSucursalEditar").value = "";
        document.getElementById("estadoEditar").value = "";
        document.getElementById("ciudadEditar").value = "";
        document.getElementById("domicilioEditar").value = "";
        document.getElementById("codigoPostalEditar").value = "";
        document.getElementById("telefonoSucursalEditar").value = "";
    } else {
        alert("No se encontró la fila a actualizar.");
    }
}


function moveRow(button) {
            const row = button.parentNode.parentNode;
            const table1 = document.getElementById('myTable');
            const table2 = document.getElementById('myTable2');

            // Remove row from table1
            table1.querySelector('tbody').removeChild(row);

            // Add row to table2
            table2.querySelector('tbody').appendChild(row);
        }