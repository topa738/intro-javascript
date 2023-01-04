import heroes from "./heroes.js";


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{
        const pi=heroes.find( (heroe) => heroe.id === id)
        if ( pi ) {
            resolve( pi );
        } else {
            reject( 'No se pudo encontrar el héroe' );
        }
    })
};

getHeroeByIdAsync(10).then(res=>{
    console.log(res);
}).catch(error=> console.error(error))

//l

fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.json())
    .then(data => {
        /** Procesar los datos **/
        console.log(data)
    }).catch(error=> console.error(error))
