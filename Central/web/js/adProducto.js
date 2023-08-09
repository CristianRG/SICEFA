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