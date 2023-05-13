import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");






const obtenerInformacion = async() =>{ // antes no iba el async que es la funcion que espera la resolucion y lo devuelve en un await
const url = new URL(window.location)
const id = url.searchParams.get("id");

if (id ==null){
    window.location.href = "../screens/error.html"
}


const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
try { //esto reemplaza al mensaje que tira then cuando sale todo correcto
const perfil = await clientService.detalleCliente(id);// el then ya lo maneja adentro el await
////////clientService.detalleCliente(id).then ((perfil) => {  antes del asyn se escribia esto con el then para que devuelva la respuesta
if (perfil.nombre !== undefined){ //esto es para que si hay un error no lo escriba en el input
nombre.value = perfil.nombre; //antes esto iba afuera del if y el if no existia ni el else tampoco
email.value = perfil.email;
} else {
    throw new Error();
}
} catch (error) { // y aqui cuando sale error
    console.log ("catch error", error);
}

//})
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location)
const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    
    clientService.actualizarCliente (nombre, email, id).then( () => {
       window.location.href = "/screens/edicion_concluida.html";
    }).catch (err => console.log (err))
    });
    