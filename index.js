let nombre="Facundo Topa"
let numero=3*Math.random()
console.log("numero random",numero,"Nombre",nombre)


const celular= {
    key: '0203'
    ,
    marca:'samsung'
        ,
    color:'uzul',
        precio:'9000',
    anio_creacion:'2020'

}
console.log(celular)
console.log(celular.key)
celular.key=true
celular.anio_creacion=2017
console.log(delete celular.marca);
console.log(Object.keys(celular));

const arreglo=[1,2,3,4]

let arreglo2=arreglo
arreglo2.push(5)
console.log(arreglo2)
const arreglo3 = arreglo2.map(x => x * 5);

const person = {
    name: 'Pepe',
    age: 26,
    hobbies: ['chess', 'running', 'basket']
}
const nombre=person.name
const edad = person.age
const hobbies= person.hobbies

console.log(person)