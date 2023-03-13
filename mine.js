class Pesona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Luis Mata","@luismata"],
    ["Angel Mata","@angelmata"],
    ["Samantha Cordero","@cordero"],
    ["fibi bufe","@fib"]
];

const personas = [];

for(let i = 0; i<data.length; i++){
    personas[i]= new Pesona(data[i][0],data[i][1]);
}

const obtenerPersona =(id,cb)=>{
    if(personas[id]== undefined){
        cb('No se encontro a la persona')
    }else{
        cb(null,personas[id])
    }
}
obtenerPersona(0,(err,persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona.nombre);
        console.log(persona.instagram);
    }
});