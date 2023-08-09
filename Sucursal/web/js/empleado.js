    // Asignar eventos de clic a los botones de Consultar y Agregar
    document.getElementById('btnConsultar').addEventListener('click', mostrarConsultar);
    document.getElementById('btnAgregar').addEventListener('click', mostrarAgregar);

    // Función para mostrar la tabla de empleados
    function mostrarConsultar() {
        // Ocultar el formulario de agregar (si está visible)
        document.getElementById('formularioAgregar').style.display = 'none';

        // Mostrar la tabla de empleados (si no está visible)
        document.getElementById('tablaEmpleados').style.display = 'block';
    }

    // Función para mostrar el formulario para agregar un empleado
    function mostrarAgregar() {
        // Ocultar la tabla de empleados (si está visible)
        document.getElementById('tablaEmpleados').style.display = 'none';

        // Mostrar el formulario de agregar (si no está visible)
        document.getElementById('formularioAgregar').style.display = 'block';
    }

