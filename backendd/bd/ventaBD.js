const ventasBD = require("./conexion").venta;
const Venta=require("../modelos/VentaModelo");
const admin = require("firebase-admin");
const proyecto=admin.firestore();

function validarDatos(venta){
    var valido=false;
   if(venta.id_cliente!=undefined && venta.id_producto!=undefined && venta.cantidad!=undefined){
     valido=true;
   }
   return valido;
}

async function actualizarEstadoVenta(id, estado) {
    const ventaRef = proyecto.collection("venta").doc(id);
    await ventaRef.update({ estado });
}

async function mostrarVentas() {
    const ventas = await ventasBD.get();
    ventasValidos=[];
    ventas.forEach(venta => {
        const venta1= new Venta({id:venta.id,...venta.data()});
        if(validarDatos(venta1.getVenta)){
            ventasValidos.push(venta1.getVenta);
        }
    });
    return ventasValidos;
}

async function buscarPorID(id) {
    const venta=await ventasBD.doc(id).get();
    const venta1=new Venta({id:venta.id,...venta.data()});
    var ventaValido;
    if(validarDatos(venta1.getVenta)){
        ventaValido=venta1.getVenta;
    }
    return ventaValido
}

async function nuevaVenta(data) {
    data.fechayhora=new Date();
    data.estado="Realizado";
    const venta1= new Venta(data);
    var ventaValido = false;
    if(validarDatos(venta1.getVenta)){
        await ventasBD.doc().set(venta1.getVenta);
        ventaValido= true;
    }
    return ventaValido;
}

async function cancelarVenta(id) {
    var ventaValido = await buscarPorID(id);
    ventaCancelada=false;
    if(ventaValido){
        await actualizarEstadoVenta(id, "Cancelado");
        ventaCancelada=true;
    }
    return ventaCancelada;
}

module.exports={
    mostrarVentas,
    nuevaVenta,
    buscarPorID,
    cancelarVenta
}