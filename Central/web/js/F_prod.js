
        let productoRegistrado = null;
        let productoActivo = false;
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
            alert();
            if (productoActivo) {
                // Mostrar la pantalla emergente de confirmación
                const confirmacionEliminar = document.getElementById('confirmacionEliminar');
                confirmacionEliminar.style.display = 'block';
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



const productos = [
  {
    "Nombre Sucursal": "Central",
    "Id sucursal": 1,
    "Nombre titular": "Alejandro",
    "Apellido paterno titular": "Torres",
    "Apellido materno titular": "Peréz",
    "Titular CURP": "TOPA930518HMCLRR04",
    "Titular RFC": "TOPA930518AB1",
    "Telefono sucursal": "(477) 123-4567"
  },
  {
    "Nombre Sucursal": "Plaza Mayor",
    "Id sucursal": 2,
    "Nombre titular": "Gabriela",
    "Apellido paterno titular": "Vargas",
    "Apellido materno titular": "Ruiz",
    "Titular CURP": "VARC980423MMCLZB06",
    "Titular RFC": "VARC980423VZ2",
    "Telefono sucursal": "(477) 234-5678"
  },
  {
    "Nombre Sucursal": "Centro Max",
    "Id sucursal": 3,
    "Nombre titular": "Rodrigo",
    "Apellido paterno titular": "Ramos",
    "Apellido materno titular": "García",
    "Titular CURP": "RAGR920722HMCMSD09",
    "Titular RFC": "RAGR920722LH9",
    "Telefono sucursal": "(477) 234-5678"
  },
  {
    "Nombre Sucursal": "Centro",
    "Id sucursal": 4,
    "Nombre titular": "Valentina",
    "Apellido paterno titular": "Jiménez",
    "Apellido materno titular": "González",
    "Titular CURP": "JIGV010311MMCGNZ05",
    "Titular RFC": "JIGV010311RM3",
    "Telefono sucursal": "(477) 456-7890"
  }
];

function consultarProducto() {
  
  let obtenerTabla = document.getElementById('productos');
  let contenido = "";
  consol.log(obtenerTabla, productos);
  for (let i = 0; i < productos.length; i++) {
    contenido += `<tr>
                    <td>${productos[i]["Nombre Sucursal"]}</td>
                    <td>${productos[i]["Id sucursal"]}</td>
                    <td>${productos[i]["Nombre titular"]}</td>
                    <td>${productos[i]["Apellido paterno titular"]}</td>
                    <td>${productos[i]["Apellido materno titular"]}</td>
                    <td>${productos[i]["Titular CURP"]}</td>
                    <td>${productos[i]["Titular RFC"]}</td>
                    <td>${productos[i]["Telefono sucursal"]}</td>
                  </tr>`;
  }

  // Aquí puedes hacer algo con la variable 'contenido', como agregarla a la tabla en tu HTML.
}
consultarProducto();