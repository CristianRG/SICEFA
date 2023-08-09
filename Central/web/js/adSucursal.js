document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll("#myTable tbody tr");

    tableRows.forEach((row, index) => {
        row.addEventListener("click", function () {
            // Elimina la clase "selected-row" de todas las filas
            tableRows.forEach(row => row.classList.remove("table-info"));

            // Agrega la clase "selected-row" a la fila seleccionada
            row.classList.add("table-info");

            // Muestra la información del registro correspondiente
            mostrarInformacion(index);
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

    contenedorFormulario.style.display = "none"; // Ocultar el formulario
    botonMostrarTabla.style.display = "none"; // Ocultar el botón

    // Función para mostrar el formulario y ocultar la tabla
    function mostrarFormulario() {
        contenedorFormulario.style.display = "block"; // Mostrar el formulario
        contenedorTabla.style.display = "none"; // Ocultar la tabla
        botonMostrarTabla.style.display = "block"; // Mostrar el botón
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
        
        
function loadTabla() {
    let cuerpo = "";
    data.forEach(function (registro, index) {
        let row =
            `<tr onclick="mostrarInformacion(${index})">
                <td>${registro.nombreSucursal}</td>
                <td>${registro.idSucursal}</td>
                <td>${registro.nombreTitular}</td>
                <td>${registro.apellidoPaternoTitular}</td>
                <td>${registro.apellidoMaternoTitular}</td>
                <td>${registro.curpTitular}</td>
                <td>${registro.rfcTitular}</td>
                <td>${registro.telefonoSucursal}</td>
                <td><button class="btn-eliminar" onclick="moveRow(this)">Eliminar</button></td>
            </tr>`;
        cuerpo += row; // Corregido aquí
    });
    console.log(cuerpo);
    document.getElementById("tableBody1").innerHTML = cuerpo; // Usar "tableBody1" en lugar de "tblEmpleados"

    // Opcionalmente, puedes mover el código para limpiar el formulario aquí
    limpiarFormulario();
}
        function mostrarInformacion(index) {
    const item = data[index];
    const infoDiv = document.getElementById("infoDiv");

    const template = `
        <table>
            <thead>
                <tr>
                    <th colspan="2">Datos Titular</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>Nombre titular:</td>
                        <td>${item.nombreTitular}</td>
                    </tr>
                    <tr>
                        <td>Apellido paterno titular:</td>
                        <td>${item.apellidoPaternoTitular}</td>
                    </tr>
                    <tr>
                        <td>Apellido materno titular:</td>
                        <td>${item.apellidoMaternoTitular}</td>
                    </tr>
                    <tr>
                        <td>Titular CURP:</td>
                        <td>${item.curpTitular}</td>
                    </tr>
                    <tr>
                        <td>Titular RFC:</td>
                        <td>${item.rfcTitular}</td>
                    </tr>
                </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th colspan="2">Datos Sucursal</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>Id sucursal:</td>
                    <td>${item.idSucursal}</td>
                </tr>
                <tr>
                    <td>Nombre de la sucursal:</td>
                    <td>${item.nombreSucursal}</td>
                </tr>
                <tr>
                    <td>Estado:</td>
                    <td>${item.estado}</td>
                </tr>
                <tr>
                    <td>Ciudad:</td>
                    <td>${item.ciudad}</td>
                </tr>
                <tr>
                    <td>Domicilio:</td>
                    <td>${item.domicilio}</td>
                </tr>
                <tr>
                    <td>Codigo Postal:</td>
                    <td>${item.codigoPostal}</td>
                </tr>
                <tr>
                    <td>Telefono sucursal:</td>
                    <td>${item.telefonoSucursal}</td>
                </tr>
            </tbody>
        </table>
    `;

    infoDiv.innerHTML = template;

    // Llena los detalles del titular y la sucursal en el template
    const infoTables = infoDiv.querySelectorAll("table tbody");
    const detallesTitular = `
        <tr>
            <td>Nombre titular:</td>
            <td>${item.nombreTitular}</td>
        </tr>
        <tr>
            <td>Apellido paterno titular:</td>
            <td>${item.apellidoPaternoTitular}</td>
        </tr>
        <tr>
            <td>Apellido materno titular:</td>
            <td>${item.apellidoMaternoTitular}</td>
        </tr>
        <tr>
            <td>Titular CURP:</td>
            <td>${item.curpTitular}</td>
        </tr>
        <tr>
            <td>Titular RFC:</td>
            <td>${item.rfcTitular}</td>
        </tr>
    `;
    const detallesSucursal = `
        <tr>
            <td>Id sucursal:</td>
            <td>${item.idSucursal}</td>
        </tr>
        <tr>
            <td>Nombre de la sucursal:</td>
            <td>${item.nombreSucursal}</td>
        </tr>
        <tr>
            <td>Estado:</td>
            <td>${item.estado}</td>
        </tr>
        <tr>
            <td>Ciudad:</td>
            <td>${item.ciudad}</td>
        </tr>
        <tr>
            <td>Domicilio:</td>
            <td>${item.domicilio}</td>
        </tr>
        <tr>
            <td>Codigo Postal:</td>
            <td>${item.codigoPostal}</td>
        </tr>
        <tr>
            <td>Telefono sucursal:</td>
            <td>${item.telefonoSucursal}</td>
        </tr>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar" onclick="moveRow(this)">Eliminar</button>
    `;

    infoTables[0].innerHTML = detallesTitular;
    infoTables[1].innerHTML = detallesSucursal;
}
        

   document.addEventListener("DOMContentLoaded", function () {
    // ...

    const agregarBtn = document.getElementById("botonMostrarTabla");
    agregarBtn.addEventListener("click", agregarRegistroATabla);
});     
        
function agregarRegistroATabla(registro) {
    const tableBody = document.getElementById("tableBody1");
    
    const nombreSucursal = document.getElementById('nombreSucursal').value;
    const idSucursal = parseInt(document.getElementById('idSucursal').value);
    const nombreTitular = document.getElementById('nombreTitular').value;
    const apellidoPaternoTitular = document.getElementById('apellidoPaternoTitular').value;
    const apellidoMaternoTitular = document.getElementById('apellidoMaternoTitular').value;
    const curpTitular = document.getElementById('curpTitular').value;
    const rfcTitular = document.getElementById('rfcTitular').value;
    const estado = document.getElementById('estado').value;
    const ciudad = document.getElementById('ciudad').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const telefonoSucursal = document.getElementById('telefonoSucursal').value;
    
    // Crear un objeto de registro con los valores obtenidos
const nuevoRegistro = {
    nombreSucursal:nombreSucursal,
    idSucursal:idSucursal ,
    nombreTitular:nombreTitular ,
    apellidoPaternoTitular:apellidoPaternoTitular ,
    apellidoMaternoTitular:curpTitular ,
    curpTitular:rfcTitular ,
    rfcTitular:rfcTitular ,
    estado:estado ,
    ciudad:ciudad ,
    domicilio:domicilio ,
    codigoPostal:codigoPostal ,
    telefonoSucursal: telefonoSucursal
};
    data.push(nuevoRegistro);
    loadTabla();
   // tableBody.innerHTML +=
   // `<tr onclick="mostrarInformacion(${data.length-1})">
    //    <td>${registro.nombreSucursal}</td>
    //    <td>${registro.idSucursal}</td>
     //   <td>${registro.nombreTitular}</td>
     //   <td>${registro.apellidoPaternoTitular}</td>
     //   <td>${registro.apellidoMaternoTitular}</td>
     //   <td>${registro.curpTitular}</td>
     //   <td>${registro.rfcTitular}</td>
     //   <td>${registro.telefonoSucursal}</td>
    //</tr>
    //`;  
    
    // Limpiar el formulario después de agregar el registro
    limpiarFormulario();
}


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

function moveRow(button) {
            const row = button.parentNode.parentNode;
            const table1 = document.getElementById('myTable');
            const table2 = document.getElementById('myTable2');

            // Remove row from table1
            table1.querySelector('tbody').removeChild(row);

            // Add row to table2
            table2.querySelector('tbody').appendChild(row);
        }