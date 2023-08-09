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
                correo: "MiguelLG@gmail.com"
        
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
                correo: "EsmeraldaGR@gmail.com"
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
                correo: "MartaLR@gmail.com"            },
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
                correo: "SofiaMM@gmail.com"            },
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
                correo: "CarlosTG@gmail.com"
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
                correo: "IsabellaHG@gmail.com"
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
                correo: "AlejandroRS@gmail.com"
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
                correo: "ValentinaVR@gmail.com"            
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
                correo: "DiegoSP@gmail.com"            
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
                correo: "MarianaRJ@gmail.com"            
            }
        ];

        function mostrarInformacion(index) {
    const item = data[index];
    const infoDiv = document.getElementById("infoDiv");

    const template = `
        <table>
            <thead>
                <tr>
                    <th colspan="2">Datos Cliente</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>ID cliente:</td>
                        <td>${item.idCliente}</td>
                    </tr>
                    <tr>
                        <td>Nombre cliente:</td>
                        <td>${item.nombre}</td>
                    </tr>
                    <tr>
                        <td>Apellido paterno:</td>
                        <td>${item.apellidoPaterno}</td>
                    </tr>
                    <tr>
                        <td>Apellido materno:</td>
                        <td>${item.apellidoMaterno}</td>
                    </tr>
                    <tr>
                        <td>Genero:</td>
                        <td>${item.genero}</td>
                    </tr>
                    <tr>
                        <td>Fecha de nacimiento:</td>
                        <td>${item.fechaNacimiento}</td>
                    </tr>
                    <tr>
                        <td>CURP:</td>
                        <td>${item.curp}</td>
                    </tr>
                    <tr>
                        <td>Titular RFC:</td>
                        <td>${item.rfc}</td>
                    </tr>
                </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th colspan="2">Datos de contacto</th>
                </tr>
            </thead>
                <tbody>
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
                    <td>${item.telefono}</td>
                </tr>
            </tbody>
        </table>
            
        <table>
            <thead>
                <tr>
                    <th colspan="2">Datos adicionales</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>Fecha de ingreso:</td>
                    <td>${item.FechaIngreso}</td>
                </tr>
                <tr>
                    <td>Correo:</td>
                    <td>${item.correo}</td>
                </tr>
            </tbody>
        </table>
    `;

    infoDiv.innerHTML = template;

    // Llena los detalles del titular y la sucursal en el template
    const infoTables = infoDiv.querySelectorAll("table tbody");
    const detallesCliente = `
        <tr>
            <td>Nombre:</td>
            <td>${item.nombre}</td>
        </tr>
        <tr>
            <td>Apellido paterno:</td>
            <td>${item.apellidoPaterno}</td>
        </tr>
        <tr>
            <td>Apellido materno:</td>
            <td>${item.apellidoMaterno}</td>
        </tr>
        <tr>
            <td>Genero:</td>
            <td>${item.genero}</td>
        </tr>
        <tr>
            <td>Fecha de nacimiento:</td>
            <td>${item.fechaNacimiento}</td>
        </tr>
        <tr>
            <td>CURP:</td>
            <td>${item.curp}</td>
        </tr>
        <tr>
            <td>Titular RFC:</td>
            <td>${item.rfc}</td>
        </tr>
    `;
    const detallesContacto = `
        
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
                    <td>${item.telefono}</td>
                </tr>
                <button class="btn-editar">Editar</button>
                <button class="btn-eliminar">Eliminar</button>
    `;
    const detallesAdicional=`

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
                    <td>${item.telefono}</td>
                </tr>
    `;

    infoTables[0].innerHTML = detallesCliente;
    infoTables[1].innerHTML = detallesContacto;
    infoTables[2].innerHTML = detallesAdicional;
}
        
        
        
        
function agregarRegistroATabla(registro) {
    const tableBody = document.getElementById("tableBody1");
    
    const newRow = document.createElement("tr");
    newRow.addEventListener("click", function () {
        // Tu código para manejar el clic en la fila aquí
    });

    newRow.innerHTML = `
        <td>${registro.nombreSucursal}</td>
        <td>${registro.idSucursal}</td>
        <td>${registro.nombreTitular}</td>
        <td>${registro.apellidoPaternoTitular}</td>
        <td>${registro.apellidoMaternoTitular}</td>
        <td>${registro.curpTitular}</td>
        <td>${registro.rfcTitular}</td>
        <td>${registro.telefonoSucursal}</td>
    `;

    tableBody.appendChild(newRow);


    // Limpiar el formulario después de agregar el registro
    limpiarFormulario();
}