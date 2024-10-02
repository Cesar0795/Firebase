const { venta } = require("../bd/conexion");
class Venta {
    constructor(data) {
        this.id = data.id;
        this.id_cliente = data.id_cliente;
        this.id_producto = data.id_producto;
        this.fechayhora = data.fechayhora;
        this.cantidad = data.cantidad;
        this.estado = data.estado
    }
    set id(id) {
        this._id = id;
    }
    set id_cliente(id_cliente) {
        this._id_cliente = id_cliente;
    } 

    set id_producto(id_producto) {
        this._id_producto = id_producto;
    }

    set fechayhora(fechayhora) {
        this._fechayhora = fechayhora;
    }
    
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    set estado(estado) {
        this._estado = estado;
    }
    
    get id() {
        return this._id;
    }
    get id_cliente() {
        return this._id_cliente;
    }
    get id_producto() {
        return this._id_producto;
    }
    get fechayhora() {
        return this._fechayhora;
    }
    get cantidad() {
        return this._cantidad;
    }

    get estado() {
        return this._estado;
    }

    get getVenta() {
        const conid = {
            id: this.id,
            id_cliente: this.id_cliente,
            id_producto: this.id_producto,
            fechayhora: this.fechayhora,
            cantidad: this.cantidad,
            estado: this.estado
        }
        const sinid = {
            id_cliente: this.id_cliente,
            id_producto: this.id_producto,
            fechayhora: this.fechayhora,
            cantidad: this.cantidad,
            estado: this.estado
        }
        if(this._id == undefined){
            return sinid;
        }
        else{
            return conid;
        }
        
    }
}

module.exports = Venta;