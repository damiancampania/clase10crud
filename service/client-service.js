// antes esto de abajo estaba aca y se paso a client controlers
/*const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  return linea;
};

const table = document.querySelector("[data-table]");*/

//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE


const listaClientes = () =>  fetch("http://localhost:3000/perfil").then ((respuesta) =>   respuesta.json());

const crearCliente = (nombre, email) => { return fetch ("http://localhost:3000/perfil",{method: "POST", headers:{ "content-type":"application/json"},body: JSON.stringify({nombre, email, id: uuid.v4()})
});


};

const eliminarCliente = (id) => { return fetch (`http://localhost:3000/perfil/${id}`, {method: "DELETE" })

}

const detalleCliente =(id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>   respuesta.json());
}

const actualizarCliente =( nombre,email,id) =>{
  return fetch (`http://localhost:3000/perfil/${id}`, {method: "PUT", headers:{ "content-type":"application/json"},body: JSON.stringify({nombre, email})
}).then (respuesta => console.log(respuesta) )
.catch((err)=>console.log(err))
};

  export const clientService = { ///esto se agrego despues de pasar todo a client controller
    listaClientes,
    crearCliente,
    eliminarCliente, 
    detalleCliente,
    actualizarCliente,
    //no hace falta poner llaves solo coma para mandar la funcion a otro
  }
 ///todo lo de arriba reemplaza al if con response 400 automaticamente se llama api fecth
 



 /*   antes de escribir fech api  /////////// const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil");

    http.send();

    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;*/

//////////////esto de aca abajo tambien se paso a client clontrolers
/*
listaClientes()  .then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
    });
  }).catch((error) => alert("Ocurrió un error"));

// console.log(data);

nbmnb*/