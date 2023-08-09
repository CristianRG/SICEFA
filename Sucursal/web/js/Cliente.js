//cliente sisefa

var cliente=[];
function crearCliente() {
    let cliente1 = {
        "idCliente": 1,
        "nombre": "Miguel",
        "apellidoPaterno": "Lopez",
        "apellidoMaterno": "Gaeta",
        "genero": "M",
        "fechaNacimiento": "12/09/2001",
        "rfc": "bdiwbiude131816",
        "curp": "HIEDUDENDEO56",
        "domicilio": "Calle 123, Colonia Reforma",
        "codigoPostal": "32145",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": 4771234567,
        "foto": "",
        "adicional":{
            "FechaIngreso": "02/07/2018",
            "correo": "MiguelLG@gmail.com"
        }
    };
    
    let cliente2 = {
        "idCliente": 2,
        "nombre": "Esmeralda",
        "apellidoPaterno": "García",
        "apellidoMaterno": "Rodríguez",
        "genero": "F",
        "fechaNacimiento": "15/05/1990",
        "rfc": "GARO900515XXX",
        "curp": "GARX900515MDFRLD04",
        "domicilio": "Calle 123, Colonia Centro",
        "codigoPostal": "06010",
        "ciudad": "Ciudad de México",
        "estado": "Ciudad de México",
        "telefono": 5512345678,
        "foto": "",
        "adicional":{
            "FechaIngreso": "12/05/2016",
            "correo": "EsmeraldaGR@gmail.com"
        }
    };
    
    let cliente3 = {
        "idCliente": 3,
        "nombre": "Marta",
        "apellidoPaterno": "López",
        "apellidoMaterno": "Ramírez",
        "genero": "F",
        "fechaNacimiento": "10/12/1985",
        "rfc": "LORO851210XXX",
        "curp": "LORX851210MDFMRE09",
        "domicilio": "Avenida Juárez #456, Colonia Reforma",
        "codigoPostal": "31000",
        "ciudad": "Chihuahua",
        "estado": "Chihuahua",
        "telefono": 61498765432,
        "foto": "",
        "adicional":{
            "FechaIngreso": "15/11/2006",
            "correo": "MartaLR@gmail.com"
        }
    };
    
    let cliente4 = {
        "idCliente": 4,
        "nombre": "Sofia",
        "apellidoPaterno": "Mendoza",
        "apellidoMaterno": "Martínez",
        "genero": "F",
        "fechaNacimiento": "20/04/1992",
        "rfc": "MEMA920420XXX",
        "curp": "MEMX920420MDFNZL03",
        "domicilio": "Calle 7, Colonia Del Valle",
        "codigoPostal": "03100",
        "ciudad": "Ciudad de México",
        "estado": "Ciudad de México",
        "telefono": 5587654321,
        "foto": "",
        "adicional":{
            "FechaIngreso": "10/03/2016",
            "correo": "SofiaMM@gmail.com"
        }
    };
    
    let cliente5 = {
        "idCliente": 5,
        "nombre": "Carlos",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "Gómez",
        "genero": "M",
        "fechaNacimiento": "05/07/1988",
        "rfc": "TOGE880705XXX",
        "curp": "TOGX880705MDFRRM08",
        "domicilio": "Calle Rosas #789, Colonia San Miguel",
        "codigoPostal": "45040",
        "ciudad": "Zapopan",
        "estado": "Jalisco",
        "telefono": 3354321098,
        "foto": "",
        "adicional":{
            "FechaIngreso": "12/01/2006",
            "correo": "CarlosTG@gmail.com"
        }
    };
    
    let cliente6 = {
        "idCliente": 6,
        "nombre": "Isabella",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "González",
        "genero": "F",
        "fechaNacimiento": "12/11/1993",
        "rfc": "HEGO931112XXX",
        "curp": "HEXG931112MDFNZN05",
        "domicilio": "Avenida Primavera #23, Colonia Las Flores",
        "codigoPostal": "52100",
        "ciudad": "Metepec",
        "estado": "Estado de México",
        "telefono": 72265437890,
        "foto": "",
        "adicional":{
            "FechaIngreso": "19/09/2021",
            "correo": "IsabellaHG@gmail.com"
        }
    };
    
    let cliente7 = {
        "idCliente": 7,
        "nombre": "Alejandro",
        "apellidoPaterno": "Rodríguez",
        "apellidoMaterno": "Sánchez",
        "genero": "M",
        "fechaNacimiento": "30/09/1987",
        "rfc": "ROSE870930XXX",
        "curp": "ROSX870930MDFNCH02",
        "domicilio": "Calle 5 de Mayo, Colonia Centro",
        "codigoPostal": "62000",
        "ciudad": "Cuernavaca",
        "estado": "Morelos",
        "telefono": 77778904321,
        "foto": "",
        "adicional":{
            "FechaIngreso": "28/09/2022",
            "correo": "AlejandroRS@gmail.com"
        }
    };
    
    let cliente8 = {
        "idCliente": 8,
        "nombre": "Valentina",
        "apellidoPaterno": "Vargas",
        "apellidoMaterno": "Rivera",
        "genero": "F",
        "fechaNacimiento": "08/03/1995",
        "rfc": "VARV950308XXX",
        "curp": "VARV950308XXX",
        "domicilio": "Avenida Independencia #456, Colonia Libertad",
        "codigoPostal": "80000",
        "ciudad": "Culiacán",
        "estado": "Sinaloa",
        "telefono": 66756789012,
        "foto": "",
        "adicional":{
            "FechaIngreso": "30/02/2018",
            "correo": "ValentinaVR@gmail.com"
        }
    };
    
    let cliente9 = {
        "idCliente": 9,
        "nombre": "Diego",
        "apellidoPaterno": "Silva",
        "apellidoMaterno": "Paredes",
        "genero": "M",
        "fechaNacimiento": "25/01/1991",
        "rfc": "SIPA910125XXX",
        "curp": "SIPX910125MDFRDL06",
        "domicilio": "Calle Allende, Colonia San Antonio",
        "codigoPostal": "55000",
        "ciudad": "Tultitlán",
        "estado": "Estado de México",
        "telefono": 554321876,
        "foto": "",
        "adicional":{
            "FechaIngreso":"29/07/2019",
            "correo": "@gmail.com"
        }
    };
    
    let cliente10 = {
        "idCliente": 2310,
        "nombre": "Mariana ",
        "apellidoPaterno": "Reyes ",
        "apellidoMaterno": "Jiménez ",
        "genero": "F",
        "fechaNacimiento": "17/08/1989",
        "rfc": "REJX890817XXX",
        "curp": "REJX890817MDFMSL07",
        "domicilio": "Avenida Reforma #789, Colonia Juárez",
        "codigoPostal": "37000",
        "ciudad": "León",
        "estado": "Guanajuato",
        "telefono": 47754321098,
        "foto": "",
        "adicional":{
            "fechaIngreso": "05/04/2015",
            "correo": "MarianaRJ@gmail.com"
        }
    };
    
    
    cliente[0] = cliente1;
    cliente[1] = cliente2;
    cliente[2] = cliente3;
    cliente[3] = cliente4;
    cliente[4] = cliente5;
    cliente[5] = cliente6;
    cliente[6] = cliente7;
    cliente[7] = cliente8;
    cliente[8] = cliente9;
    cliente[9] = cliente10;
    
}


function consultarCliente() {
    let datosTabla = "";
    
    for (let i = 0; i < cliente.length; i++) {
       
        datosTabla += "<tr>";
        datosTabla += "<td>" + cliente[i].idCliente + "</td>";
        datosTabla += "<td>" + cliente[i].nombre + "</td>";
        datosTabla += "<td>" + cliente[i].apellidoPaterno + "</td>";
        datosTabla += "<td>" + cliente[i].apellidoMaterno + "</td>";
        datosTabla += "<td>" + cliente[i].adicional.fechaIngreso + "</td>";
        datosTabla += "<td>" + cliente[i].adicional.correo + "</td>";
        datosTabla += "<td>" + cliente[i].rfc + "</td>";
        datosTabla += "<td>" + cliente[i].curp + "</td>";
        datosTabla += "<td>" + cliente[i].telefono + "</td>";
        datosTabla += "</tr>";
    }
    
    document.getElementById("Tabla_Cliente").innerHTML = datosTabla;
    
}

function buscarCliente(){
    
}

function GuardarCliente(){
    
}

function ModificarCliente(){
    
}

function EliminarCliente(){
    
}

