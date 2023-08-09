const users = {
    'admin': {
        id_user: '10293',
        name: 'Maria',
        password: 'admin',
        rol: 'ADMS',
        puesto: 'Gerente'
    },
    'user1': {
        id_user: '22323',
        name: 'Mario',
        password: 'user1',
        rol: 'EMP',
        puesto: 'Atencion clientes'
    }
}

function validarUsuario() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username in users) {
        if (password == users[username].password) {
            let user = {
                'user': {
                    id_user :users[username].id_user,
                    username: username,
                    password: password,
                    name: users[username].name,
                    rol: users[username].rol,
                    puesto: users[username].puesto,
                    sucursal: 'Centro Max',
                    cp: '2800'
                }
            }
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './sistem.html'
        }
        else {
            alert("Contraseña incorrecta");
        }
    }else{
        alert ("El usuario no existe");
    }

    informacionUsuario();
}

function informacionUsuario() {
    let user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('perfil-username').innerHTML = user.user.name;
}

// function permisosUsuario(){

//     let user = JSON.parse(localStorage.getItem('user'));

//     let permisosNavbar = '';
//     if(user.user.rol == 'ADMS'){
//         permisosNavbar = `<li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Sucursales</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Productos</a>
//                             </li>`;
//     }else if(user.user.rol == 'EMP'){
//         permisosNavbar = `<li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Empleados</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Clientes</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Ventas</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Pedidos</a>
//                             </li>`;
//     }
//     let navbar = document.getElementById('navbar-elements');
//     let usernavbar = document.getElementById('perfil-username');
//     navbar.innerHTML = permisosNavbar;
//     usernavbar.innerHTML = user.user.username;
//     Swal.fire(`¡Bienvenido ${user.user.username}!`);
// }

function logOut(){
    localStorage.removeItem('user');
    window.location.href = './index.html';
}