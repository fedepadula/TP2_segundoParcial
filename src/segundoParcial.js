setTimeout(function(){ console.log("Mensaje"); }, 7000);

const aPagos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'}, 
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'}, 
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'}, 
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
]

aPagos.forEach(element => {
    console.log("cliente: " + element.cliente + "\timporte:" + element.importe)
});

aPagos.sort(function (a, b) {return a.cliente - b.cliente})

console.log(aPagos.filter((a) => a.cliente.startsWith('R')))

console.log(aPagos.map(x => ({id : x.id, importe : (x.importe * 1.3), cliente : x.cliente })))

import fs from 'fs'

const datos = fs.readFileSync( './datos.txt', 'utf-8' )

console.log(datos)

fs.appendFileSync( './datos.txt' , "primer dato" )