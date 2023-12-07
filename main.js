


let productos = [
    { id:"ks01", nombre: "indumentaria", precio: 5300},
    { id:"ks02", nombre: "calzado", precio: 5300},
    { id:"ks03", nombre: "accesorios", precio: 5300},
    { id:"kh01", nombre: "almohadones", precio: 5300},
    { id:"kh02", nombre: "cortinas", precio: 5300},
    { id:"kh03", nombre: "organizadores", precio: 5300},
    { id:"bc01", nombre: "Tarjetas", precio: 5300},
    { id:"bc02", nombre: "kits", precio: 5300},
    { id:"bc03", nombre: "Centros", precio: 5300},
    { id:"bb01", nombre: "bolsas tnt", precio: 5300},
    { id:"bb02", nombre: "bolsas lienzo", precio: 5300},
    { id:"bb03", nombre: "carteleria", precio: 5300},
]
for (const producto of productos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML=`
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>Precio: ${producto.precio}</b>
    `

    document.body.appendChild(contenedor)
}

let lista;
if (localStorage.getItem("productos")) {
    lista = JSON.parse(localStorage.getItem("productos"));
} else {
    lista = productos;
}

function filtrarProductos() {
    const body = document.querySelector("body");
    body.innerHTML = "";
    const input = document.getElementById("filtarP").value;
    const palabraClave = input.trim().toUpperCase();
    const resultado = lista.filter(producto => producto.nombre.toUpperCase().includes(palabraClave));

    if (resultado.length > 0) {
        const container = document.createElement("div");

        resultado.forEach((producto) => {
            const card = document.createElement("div");

            const nombre = document.createElement("h2");
            nombre.textContent = producto.nombre;

            card.appendChild(nombre);
            container.appendChild(card);
        });
        body.appendChild(container);
    }
}