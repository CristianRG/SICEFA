let indexProductosSeleccionado;
const productos = [
    {
        "nombreProducto": "Pain Relief plus",
        "nombreGenerico": "Analgesinol",
        "formaFarmaceutica": "Tabletas",
        "medida": "500 mg",
        "presentación": "Caja de 20 tabletas",
        "concentración": "250 mg por tableta",
        "unidadesEnvase": "20 tabletas",
        "precio": "$12.99",
        "estatus": "Activo"
    },

    {
        "nombreProducto": "AllerGuard Syrup",
        "nombreGenerico": "Antihistaminol",
        "formaFarmaceutica": "Jarabe",
        "medida": "120 ml",
        "presentación": "Botella de 120 ml",
        "concentración": "5 mg por 5 ml",
        "unidadesEnvase": "1 botella",
        "precio": "$8.49",
        "estatus": "Activo"
    },

    {
        "nombreProducto": "VitaC Boost",
        "nombreGenerico": "Vitamina C",
        "formaFarmaceutica": "Cápsulas",
        "medida": "1000 mg",
        "presentación": "Frasco de 60 cápsulas",
        "concentración": "500 mg por cápsula",
        "unidadesEnvase": "60 cápsulas",
        "precio": "$15.75",
        "estatus": "Activo"
    },

    {

        "nombreProducto": "SleepEase Tablets",
        "nombreGenerico": "Somniol",
        "formaFarmaceutica": "Tabletas",
        "medida": "5 mg",
        "presentación": "Caja de 30 tabletas",
        "Concentración": "5 mg por tableta",
        "unidadesEnvase": "30 tabletas",
        "precio": "$9.99",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "DigestiPro Capsules",
        "nombreGenerico": "Digestinol",
        "formaFarmaceutica": "Cápsulas",
        "medida": "300 mg",
        "presentación": "Frasco de 90 cápsulas",
        "concentración": "150 mg por cápsula",
        "unidadesEnvase": "90 cápsulas",
        "precio": "$18.50",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "ImmunoGuard Plus",
        "nombreGenerico": "Inmunol",
        "formaFarmaceutica": "Tabletas",
        "medida": "750 mg",
        "presentación": "Caja de 60 tabletas",
        "concentración": "250 mg por tableta",
        "unidadesEnvase": "60 tabletas",
        "precio": "$22.99",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "RelaxiCalm Drops",
        "nombreGenerico": "Calmex",
        "formaFarmaceutica": "Gotas",
        "medida": "10 ml",
        "presentación": "Frasco de 10 ml",
        "concentración": "5 mg por ml",
        "unidadesEnvase": "1 frasco",
        "precio": "$11.25",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "SkinCare Cream",
        "nombreGenerico": "Dermatol",
        "formaFarmaceutica": "Crema",
        "medida": "30 g",
        "presentación": "Tubo de 30 g",
        "concentración": "1%",
        "unidadesEnvase": "1 tubo",
        "precio": "$14.75",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "JointFlex Gel",
        "nombreGenerico": "Flexijoint",
        "formaFarmaceutica": "Gel",
        "medida": "50 g",
        "presentación": "Tubo de 50 g",
        "concentración": "2%",
        "unidadesEnvase": "1 tubo",
        "precio": "$16.99",
        "estatus": "Activo"
    },
    {
        "nombreProducto": "EyeClear Drops",
        "nombreGenerico": "VisiClear",
        "formaFarmaceutica": "Gotas",
        "medida": "15 ml",
        "presentación": "Frasco de 15 ml",
        "concentración": "2 mg por ml",
        "unidadesEnvase": "1 frasco",
        "precio": "$9.95",
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

//document.getElementById('fotoInput').addEventListener('change', function (event) {
//    const preview = document.getElementById('fotoPreview');
//    const file = event.target.files[0];
//    if (file) {
//        preview.style.display = 'block';
//        preview.src = URL.createObjectURL(file);
//    } else {
//        preview.style.display = 'none';
//        preview.src = '#';
//    }
//});

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
function addProducto() {
    let     nombreProducto,
            nombreGenerico,
            formaFarmaceutica,
            medida,
            presentación,
            concentración,
            unidadesEnvase,
            precio,
            estatus;

    nombreProducto = document.getElementById("nombreProducto").value;
    nombreGenerico = document.getElementById("nombreGenerico").value;
    formaFarmaceutica = document.getElementById("formaFarmaceutica").value;
    medida = document.getElementById("medida").value;
    presentación = document.getElementById("presentación");
    concentración = document.getElementById("concentración");
    unidadesEnvase = document.getElementById("unidadesEnvase").value;
    precio = document.getElementById("precio").value;

    estatus = document.getElementById("estatus").value;
    estatusSelected = "";
/////////////////
//    for (let i = 0; i < estatus.length; i++) {
//        if (estatus[i].checked) {
//            estatusSelected = estatus[i].value;
//            break;
//        }
//    }
//    
    
    // sucursal = document.getElementById("txtSucursal").value;
    // sucursalSelected = "";

    // for (let i = 0; i < sucursal.length; i++) {
    //     if (sucursal[i].checked) {
    //         sucursalSelected = sucursal[i].value;
    //         break;
    //     }
    // }
    ;

    let producto = {};
    producto.nombreProducto = nombreProducto;
    producto.nombreGenerico = nombreGenerico;
    producto.formaFarmaceutica = formaFarmaceutica;
    producto.medida = medida;
    producto.presentación = presentación;
    producto.concentración = concentración;
    producto.unidadesEnvase = unidadesEnvase;
    producto.precio = precio;
  
    producto.estatus = "Activo";
    productos.push(producto);
    clean();
    loadTabla();
}

function loadTabla() {
    let cuerpo = "";
    productos.forEach(function (producto) {
        let registro =
                '<tr onclick="selectProducto(' + productos.indexOf(producto) + ');">' +
                '<td>' + producto.nombreProducto + '</td>' +
                '<td>' + producto.nombreGenerico + '</td>' +
                '<td>' + producto.formaFarmaceutica + '</td>' +
                '<td>' + producto.medida + '</td>' +
                '<td>' + producto.presentación + '</td>' +
                '<td>' + producto.concentración + '</td>' +
                '<td>' + producto.unidadesEnvase + '</td>' +
                '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;

}

function selectProducto(index) {
    document.getElementById("nombreProducto").value = productos[index].nombreProducto;
    document.getElementById("nombreGenerico").value = productos[index].nombreGenerico;
    document.getElementById("formaFarmaceutica").value = productos[index].formaFarmaceutica;
    document.getElementById("medida").value = productos[index].medida;
    document.getElementById("presentación"); 
    document.getElementById("concentración");
    document.getElementById("unidadesEnvase").value = productos[index].unidadesEnvase;
    document.getElementById("precio").value = productos[index].precio;
    document.getElementById("estatus").value = productos[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductosSeleccionado = index;
}


function clean() {
    document.getElementById("nombreProducto").value = "";
    document.getElementById("nombreGenerico").value = "";
    document.getElementById("medida").value = "";
    document.getElementById("formaFarmaceutica").value = "";
    document.getElementById("presentacion").value = "";
    document.getElementById("concentracion").value = "";
    document.getElementById("unidadesEnvase").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("estatus").value = "";
    document.getElementById("nombreProducto").focus();
    // document.getElementById("btnUpdate").classList.add("disabled");
    // document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductosSeleccionado = 0;
}

function updateProducto() {
    let
            nombreProducto,
            nombreGenerico,
            formaFarmaceutica,
            medida,
            presentación,
            concentración,
            unidadesEnvase,
            precio,
            estatus;


    nombreProducto = document.getElementById("nombreGenerico").value;
    formaFarmaceutica = document.getElementById("formaFarmaceutica").value;
    medida = document.getElementById("medida").value;
    presentación = document.getElementById("presentación");
    concentración = document.getElementById("concentración");

    estado = document.getElementById("unidadesEnvase").value;
    ciudad = document.getElementById("precio").value;

    estatus = document.getElementById("estatus").value;
    estatusSelected = "";

    for (let i = 0; i < estatus.length; i++) {
        if (estatus[i].checked) {
            estatusSelected = estatus[i].value;
            break;
        }
    }



    // sucursal = document.getElementById("txtSucursal").value;
    // sucursalSelected = "";

    // for (let i = 0; i < sucursal.length; i++) {
    //     if (sucursal[i].checked) {
    //         sucursalSelected = sucursal[i].value;
    //         break;
    //     }
    // }


    ;


    let producto = {};
    producto.nombreProducto = nombreProducto;
    producto.nombreGenerico = nombreGenerico;
    producto.formaFarmaceutica = formaFarmaceutica;
    producto.medida = medida;
    producto.presentación = presentación;
    producto.concentración = concentración;
    producto.unidadesEnvase = unidadesEnvase;
    producto.precio = precio;
    // empleado.sucursal = sucursal;
    producto.estatus = "Activo";
    productos[indexProductosSeleccionado] = producto;
    productos.push(producto);
    clean();
    loadTabla();
}

function deleteProducto() {
    productos[indexProductosSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

document.getElementById("buscarProducto").addEventListener("keyup", searchProducto);
document.getElementById("btnBuscar").addEventListener("click", searchProducto);

function searchProducto() {
    const searchProd = document.getElementById("buscarProducto").value.toLowerCase();
    const filteredProducto = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchProd) ||
                producto.nombreGenerico.toLowerCase().includes(searchProd) ||
                producto.formaFarmaceutica.toLowerCase().includes(searchProd) ||
                // empleado.sucursal.toLowerCase().includes(searchEmp) ||
                producto.presentación.toLowerCase().includes(searchProd) ||
                producto.estatus.toLowerCase().includes(searchProd));

    loadTablas(filteredProducto);
}

function loadTablas(productosData) {
    const tablaBody = document.getElementById("tblProductos");
    let cuerpo = "";

    productosData.forEach((producto, index) => {
        const registro = `
            <tr onclick="selectproducto(${index});">
                <td>${producto.nombreProducto}</td>
                <td>${producto.nombreGenerico}</td>
                <td>${producto.formaFarmaceutica}</td>
                <td>${producto.medida}</td>
                <td>${producto.presentación}</td>
                <td>${producto.estatus}</td>
            </tr>`;
        cuerpo += registro;
    });

    tablaBody.innerHTML = cuerpo;
}
