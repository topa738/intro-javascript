import heroes from "./heroes.js";


const getHeroeById = (id) => {
    return new Promise((resolve,reject)=>{

        resolve(heroes.find( (heroe) => heroe.id === id ));

    })
};

getHeroeById(10).then(res=>{
    console.log(res);
}),error=> console.log(error);

//
fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.text())
    .then(data => {
        /** Procesar los datos **/
        console.log(data)
    }).catch(error=> console.error(error))
