const { producto } = require("../bd/conexion");
class Producto {
    constructor(data) {
        this.id = data.id;
        this.cantidad = data.cantidad;
        this.nombre = data.nombre;
        this.precio = data.precio;
    }
    set id(id) {
        this._id = id;
    }
    set nombre(nombre) {
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (regexNombre.test(nombre)) {
            this._nombre = nombre;
        }
    } ks

    set precio(precio) {
        this._precio = precio;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }

    get getProducto() {
        const conid = {
            id: this.id,
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad,
        }
        const sinid = {
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad,
        }
        if(this._id == undefined){
            return sinid;
        }
        else{
            return conid;
        }
        
    }
}

module.exports = Producto;