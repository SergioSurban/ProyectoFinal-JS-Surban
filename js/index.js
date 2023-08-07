const tableProductos = document.querySelector("#tablaDeProductos")
const inputBuscar = document.querySelector("#inputSearch")
const divToast = document.querySelector("div.toasti-msj")

function crearFilaHTML(producto) {
    return `<tr>
                <td class="class-table-number">${producto.art}</td>
                <td class="emoji-image">${producto.imagen}</td>
                <td>${producto.item}</td>
                <td>$ ${producto.precio}</td>
                <td><button id="${producto.art}" class="button button-outline button-big-emoji">🛒</button></td>
            </tr>`
}

function activarClickEnBotonesProductos() {
    const botones = document.querySelectorAll("button.button.button-outline.button-big-emoji")
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = productosHardware.find((prod)=> prod.art === (boton.id))
            carrito.push(producto)
            divToast.textContent = "Se cargó un producto en el carrito: " + producto.item
            divToast.className = "animacion-div"
            guardarCarrtEnLocalStorage()
        })
    })
}

function cargarProductos(array) {
    tableProductos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> tableProductos.innerHTML += crearFilaHTML(producto) )
        activarClickEnBotonesProductos()
    } else {
        divToast.textContent = "No hay productos en el carrito."
    }
}

inputBuscar.addEventListener("search", ()=> {
    if (inputBuscar.value.trim() !== "") {
        let arrayResultante = productosHardware.filter((producto)=> producto.item.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }
})

cargarProductos(productosHardware)