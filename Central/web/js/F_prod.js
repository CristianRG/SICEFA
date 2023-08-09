        let indiceProductoActivo= null;
        let productoRegistrado = null;
        let productoActivo = true;
function registrarProducto() {
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const nombreGenerico = document.getElementById('nombreGenerico').value;
            const formaFarmaceutica = document.getElementById('formaFarmaceutica').value;
            const unidadMedida = document.getElementById('unidadMedida').value;
            const presentacion = document.getElementById('presentacion').value;
            const principalIndicacion = document.getElementById('principalIndicacion').value;
            const contraindicaciones = document.getElementById('contraindicaciones').value;
            const concentracion = document.getElementById('concentracion').value;
            const unidadesEnvase = document.getElementById('unidadesEnvase').value;
            const precioUnitario = document.getElementById('precioUnitario').value;
            const foto = document.getElementById('foto').value;
            const rutaFoto = document.getElementById('rutaFoto').value;
            const codigoBarras = document.getElementById('codigoBarras').value;
            const estatus = document.getElementById('estatus').value;

            // Crear una tabla con la información del producto
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <td>Nombre:</td>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <td>Nombre Genérico:</td>
                    <td>${nombreGenerico}</td>
                </tr>
                <tr>
                    <td>Forma Farmacéutica:</td>
                    <td>${formaFarmaceutica}</td>
                </tr>
                <tr>
                    <td>Unidad de Medida:</td>
                    <td>${unidadMedida}</td>
                </tr>
                <tr>
                    <td>Presentación:</td>
                    <td>${presentacion}</td>
                </tr>
                <tr>
                    <td>Principal Indicación:</td>
                    <td>${principalIndicacion}</td>
                </tr>
                <tr>
                    <td>Contraindicaciones:</td>
                    <td>${contraindicaciones}</td>
                </tr>
                <tr>
                    <td>Concentración:</td>
                    <td>${concentracion}</td>
                </tr>
                <tr>
                    <td>Unidades en Envase:</td>
                    <td>${unidadesEnvase}</td>
                </tr>
                <tr>
                    <td>Precio Unitario:</td>
                    <td>${precioUnitario}</td>
                </tr>
                <tr>
                    <td>Foto:</td>
                    <td>${foto}</td>
                </tr>
                <tr>
                    <td>Ruta de la Foto:</td>
                    <td>${rutaFoto}</td>
                </tr>
                <tr>
                    <td>Código de Barras:</td>
                    <td>${codigoBarras}</td>
                </tr>
                <tr>
                    <td>Estatus:</td>
                    <td>${estatus}</td>
                </tr>
            `;

            // Agregar la tabla al div de registroProducto
            const registroProductoDiv = document.getElementById('registroProducto');
            registroProductoDiv.appendChild(table);
            
        }
        
        
        /////////
          function mostrarTablaProducto() {
        if (productoRegistrado) {
            // Crear la tabla con la información del producto
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.nombre}</td>
                </tr>
              <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.nombreGenerico}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.formaFarmaceutica}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.unidadMedida}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.principalIndicacion}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.contraindicaciones}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.concentracion}</td>
                </tr><tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.unidadesEnvase}</td>
                </tr>
                   <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.precioUnitario}</td>
                </tr>
                   <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.foto}</td>
                </tr>
                   <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.rutaFoto}</td>
                </tr>
                  <tr>
                    <td>Nombre:</td>
                    <td>${productoRegistrado.codigoBarras}</td>
                </tr>

                <tr>
                    <td>Estado:</td>
                    <td>${productoRegistrado.estado}</td>
                </tr>
            `;

            // Agregar la tabla al div de registroProducto
            const registroProductoDiv = document.getElementById('registroProducto');
            registroProductoDiv.innerHTML = ''; // Limpiar el div antes de agregar la tabla
            registroProductoDiv.appendChild(table);
        }
    }
         function guardarProducto() {
            if (productoActivo) {
                // Actualizar la información del producto en la variable productoRegistrado
                // ...

                // Mostrar la tabla actualizada del producto
                mostrarTablaProducto();
            }
        }

    function eliminarProducto() {
    if (productoActivo) {
        // Mostrar la pantalla emergente de confirmación
        const confirmacionEliminar = document.getElementById('confirmacionEliminar');
        confirmacionEliminar.style.display = 'block';
    } else {
        if (indiceProductoActivo >= 0) {
            // Cambiar el estado del producto a "inactivo"
            productos[indiceProductoActivo].estatus = 'inactivo';
            
            // Mostrar la tabla con el producto inactivo
            mostrarTablaProducto();
        }
        }
    }


        function eliminarProductoConfirmado() {
    productoRegistrado.estado = 'inactivo'; // Cambiar el estado del producto a "inactivo"
    const confirmacionEliminar = document.getElementById('confirmacionEliminar');
    confirmacionEliminar.style.display = 'none'; // Ocultar la pantalla emergente
    mostrarTablaProducto(); // Actualizar la tabla mostrando el producto inactivo
}


        function cerrarConfirmacionEliminar() {
            const confirmacionEliminar = document.getElementById('confirmacionEliminar');
            confirmacionEliminar.style.display = 'none'; // Ocultar la pantalla emergente
        }

        function editarProducto() {
            if (productoActivo) {
                // Permitir editar los campos del formulario con la información del producto
                // ...
            }
        }
 // Función para manejar el evento de clic en la fila
        function handleRowClick(event) {
            const clickedRow = event.target.closest('tr');
            if (clickedRow && clickedRow.parentElement.tagName === 'TBODY') {
                const tableRows = clickedRow.parentElement.querySelectorAll('tr');
                tableRows.forEach(row => row.classList.remove('table-info'));
                clickedRow.classList.add('table-info');

                // Obtener el id del div correspondiente al hacer clic en la fila
                const divId = 'producto' + clickedRow.rowIndex;

                // Mostrar solo el div correspondiente y ocultar los demás
                const allDivs = document.querySelectorAll('.producto');
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
                        <td>${item.nombreGenerico}</td>
                    </tr>
                    <tr>
                        <td>Apellido paterno titular:</td>
                        <td>${item.formaFarmaceutica}</td>
                    </tr>
                    <tr>
                        <td>Apellido materno titular:</td>
                        <td>${item.medida}</td>
                    </tr>
                    <tr>
                        <td>Titular CURP:</td>
                        <td>${item.precentacion}</td>
                    </tr>
                    <tr>
                        <td>Titular RFC:</td>
                        <td>${item.concentracion}</td>
                    </tr>
    <tr>
                        <td>Titular RFC:</td>
                        <td>${item.unidadesEnvase}</td>
                    </tr>
    <tr>
                        <td>Titular RFC:</td>
                        <td>${item.precio}</td>
                    </tr>
                </tbody>
       
          
        </table>
    `;

    infoDiv.innerHTML = template;


const productos = [
  {
    "Nombre": "Pain Relief plus",
    "Nombre generico": "Analgesinol",
    "Forma farmaceutica": "Tabletas",
    "Medida": "500 mg",
    "Presentación": "Caja de 20 tabletas",
    "Concentración": "250 mg por tableta",
    "Unidades en envase": "20 tabletas",
    "Precio": "$12.99"
},

 {
    "Nombre": "AllerGuard Syrup",
    "Nombre generico": "Antihistaminol",
    "Forma farmaceutica": "Jarabe",
    "Medida": "120 ml",
    "Presentación": "Botella de 120 ml",
    "Concentración": "5 mg por 5 ml",
    "Unidades en envase": "1 botella",
    "Precio": "$8.49"
},

  {
    "Nombre": "VitaC Boost",
    "Nombre generico": "Vitamina C",
    "Forma farmaceutica": "Cápsulas",
    "Medida": "1000 mg",
    "Presentación": "Frasco de 60 cápsulas",
    "Concentración": "500 mg por cápsula",
    "Unidades en envase": "60 cápsulas",
    "Precio": "$15.75"
},

  {
    "Nombre": "SleepEase Tablets",
    "Nombre generico": "Somniol",
    "Forma farmaceutica": "Tabletas",
    "Medida": "5 mg",
    "Presentación": "Caja de 30 tabletas",
    "Concentración": "5 mg por tableta",
    "Unidades en envase": "30 tabletas",
    "Precio": "$9.99"
},
{
    "Nombre": "DigestiPro Capsules",
    "Nombre generico": "Digestinol",
    "Forma farmaceutica": "Cápsulas",
    "Medida": "300 mg",
    "Presentación": "Frasco de 90 cápsulas",
    "Concentración": "150 mg por cápsula",
    "Unidades en envase": "90 cápsulas",
    "Precio": "$18.50"
},

{
    "Nombre": "ImmunoGuard Plus",
    "Nombre generico": "Inmunol",
    "Forma farmaceutica": "Tabletas",
    "Medida": "750 mg",
    "Presentación": "Caja de 60 tabletas",
    "Concentración": "250 mg por tableta",
    "Unidades en envase": "60 tabletas",
    "Precio": "$22.99"
},
{
    "Nombre": "RelaxiCalm Drops",
    "Nombre generico": "Calmex",
    "Forma farmaceutica": "Gotas",
    "Medida": "10 ml",
    "Presentación": "Frasco de 10 ml",
    "Concentración": "5 mg por ml",
    "Unidades en envase": "1 frasco",
    "Precio": "$11.25"
},
{
    "Nombre": "SkinCare Cream",
    "Nombre generico": "Dermatol",
    "Forma farmaceutica": "Crema",
    "Medida": "30 g",
    "Presentación": "Tubo de 30 g",
    "Concentración": "1%",
    "Unidades en envase": "1 tubo",
    "Precio": "$14.75"
},

{
    "Nombre": "JointFlex Gel",
    "Nombre generico": "Flexijoint",
    "Forma farmaceutica": "Gel",
    "Medida": "50 g",
    "Presentación": "Tubo de 50 g",
    "Concentración": "2%",
    "Unidades en envase": "1 tubo",
    "Precio": "$16.99"
},
{
    "Nombre": "EyeClear Drops",
    "Nombre generico": "VisiClear",
    "Forma farmaceutica": "Gotas",
    "Medida": "15 ml",
    "Presentación": "Frasco de 15 ml",
    "Concentración": "2 mg por ml",
    "Unidades en envase": "1 frasco",
    "Precio": "$9.95"
},

];

function consultarProducto() {
  let obtenerTabla = document.getElementById('productos');
  let contenido = "";

  let productos = [
    {
      "Nombre": "Pain Relief plus",
      "Nombre generico": "Analgesinol",
      "Forma farmaceutica": "Tabletas",
      "Medida": "500 mg",
      "Presentación": "Caja de 20 tabletas",
      "Concentración": "250 mg por tableta",
      "Unidades en envase": "20 tabletas",
      "Precio": "$12.99"
    },
    // ... (otros productos)
  ];

  for (let i = 0; i < productos.length; i++) {
    contenido += `<tr>
                    <td>${productos[i]["Nombre"]}</td>
                    <td>${productos[i]["Nombre generico"]}</td>
                    <td>${productos[i]["Forma farmaceutica"]}</td>
                    <td>${productos[i]["Medida"]}</td>
                    <td>${productos[i]["Presentación"]}</td>
                    <td>${productos[i]["Concentración"]}</td>
                    <td>${productos[i]["Unidades en envase"]}</td>
                    <td>${productos[i]["Precio"]}</td>
                  </tr>`;
  }

  obtenerTabla.innerHTML = contenido; // Agregar contenido a la tabla en el HTML.
}

consultarProducto();
