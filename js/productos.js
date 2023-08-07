const productosHardware = [
    {imagen: "🖥", art: "a1", item: "Cpu HP" , precio: 100000, categoria: "Hard Cpu" },
    {imagen: "🖥", art: "a2", item: "Cpu DELL" , precio: 110000, categoria: "Hard Cpu" },
    {imagen: "🖥", art: "a3", item: "Cpu Acer" , precio: 120000, categoria: "Hard Cpu" },
    {imagen: "💻", art: "b1", item: "Laptop Lenovo" , precio: 150000, categoria: "Hard portatil" },
    {imagen: "💻", art: "b2", item: "Laptop Acer" , precio: 160000, categoria: "Hard portatil" },
    {imagen: "💻", art: "b3", item: "Laptop HP" , precio: 170000, categoria: "Hard portatil" },
    {imagen: "🖨", art: "c1", item: "Impresora HP" , precio: 75000, categoria: "perifericos" },
    {imagen: "🖨", art: "c2", item: "Impresora Brother" , precio: 60000, categoria: "perifericos" },
    {imagen: "⌨️", art: "d1", item: "Teclado Gamer" , precio: 15000, categoria: "perifericos" }, 
    {imagen: "⌨️", art: "d2", item: "Teclado Genius" , precio: 10000, categoria: "perifericos" }, 
    {imagen: "⌨️", art: "d3", item: "Teclado Verbatim" , precio: 5000, categoria: "perifericos" }, 
    {imagen: "🖱️", art: "e1", item: "Mouse Gamer" , precio: 7500, categoria: "perifericos" },
    {imagen: "🖱️", art: "e2", item: "Mouse Genius" , precio: 5000, categoria: "perifericos" },
    {imagen: "🖱️", art: "e3", item: "Mouse Mickey" , precio: 15000, categoria: "perifericos" }
]

function guardarCarrtEnLocalStorage() { 
    if (carrito.length > 0) {
        localStorage.setItem("MiCarrito", JSON.stringify(carrito))
    } 
}

function recuperarCarritoDeLocalStorage() {
    if (localStorage.getItem("MiCarrito")) {
        return JSON.parse(localStorage.getItem("MiCarrito"))        
    } else {
        return []
    }
}

const carrito = recuperarCarritoDeLocalStorage()