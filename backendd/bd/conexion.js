const admin = require("firebase-admin");
const keys = require("../keys.json");
admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const proyecto=admin.firestore();

const usuarios=proyecto.collection("miejemploBD");

const producto=proyecto.collection("productos");

const venta=proyecto.collection("venta");

module.exports={usuarios, producto, venta};