// Variables para almacenar la información del producto registrado
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


