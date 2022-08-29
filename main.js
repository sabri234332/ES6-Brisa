
const saludar = (nombre) => `Hola , ${nombre}`;

//ejemplo
console.log(saludar('Alejandro'));


const multiplicar = (a,b) => { return a*b};

//ejemplo
console.log(multiplicar(3,15)); 


const crearAlumno = (nombre, apellido, edad, materias) => ({nombre, apellido, edad, materias});

//ejemplo
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))


const devolverFlecha = (día, mes, año) => `Hola , ${día}/${mes}/${año}`;

//ejemplo
console.log(devolverFlecha('10','09','2022'));