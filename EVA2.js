use UsuariosNetflix

db.createCollection("Usuarios")

db.Usuarios.insertMany([
    
    { nombre: "Diego Muñoz", 
    email: "diego.m@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 2, costo: 10990, meses_inactivo: 0 } },

    { nombre: "Diego Muñoz", 
    email: "diego.ingles@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Notebook" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 1, costo: 5490, meses_inactivo: 0 } },

    { nombre: "Diego Muñoz", 
    email: "diego.inactivo@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 0, costo: 8320, meses_inactivo: 4 } },

    { nombre: "Valentina Rojas", 
    email: "vale.r@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 1, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Matías Silva", 
    email: "matias.s@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Notebook" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 14 } },

    { nombre: "Francisca Soto", email: "fran.s@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium", "Miembro Extra"], pantallas_activas: 4, costo: 13480, meses_inactivo: 0 } },

    { nombre: "Sebastián Contreras", 
    email: "seba.c@netflix.cl", configuracion: { idioma: "Español", dispositivo_principal: "Tablet" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 2, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Camila Fuentes", 
    email: "cami.f@netflix.cl", configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 3, costo: 10990, meses_inactivo: 0 } },

    { nombre: "Alejandro Reyes", 
    email: "ale.r@netflix.cl", configuracion: { idioma: "Inglés", dispositivo_principal: "Console" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 13 } },

    { nombre: "Javiera Morales", 
    email: "javi.m@netflix.cl", configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 2, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Nicolás Vergara", 
    email: "nico.v@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 1, costo: 10990, meses_inactivo: 0 } },

    { nombre: "Catalina Araya", 
    email: "cata.a@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Notebook" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 2 } },

    { nombre: "Gonzalo Castro", 
    email: "gonza.c@netflix.cl", 
    configuracion: { idioma: "Portugués", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 0, costo: 8320, meses_inactivo: 12 } },

    { nombre: "Constanza Espinoza", 
    email: "conny.e@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Tablet" }, 
    suscripcion: { planes: ["Premium", "Miembro Extra"], pantallas_activas: 3, costo: 13480, meses_inactivo: 0 } },

    { nombre: "Joaquín Valenzuela", 
    email: "joaco.v@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 1, costo: 5490, meses_inactivo: 0 } },

    { nombre: "Fernanda Tapia", 
    email: "fer.t@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 0, costo: 8320, meses_inactivo: 8 } },

    { nombre: "Cristóbal Carrasco", 
    email: "cris.c@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Console" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 4, costo: 10990, meses_inactivo: 0 } },

    { nombre: "Ignacio Sepúlveda", 
    email: "nacho.s@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 15 } },

    { nombre: "María Sanhueza", 
    email: "cote.s@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar", "Miembro Extra"], pantallas_activas: 2, costo: 10810, meses_inactivo: 0 } },

    { nombre: "Felipe Henríquez", 
    email: "felipe.h@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Notebook" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 0, costo: 10990, meses_inactivo: 7 } },

    { nombre: "Bárbara Muñoz", 
    email: "barbi.m@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 1, costo: 5490, meses_inactivo: 0 } },

    { nombre: "Andrés Gutiérrez", 
    email: "andres.g@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Tablet" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 2, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Carolina Alvarez", 
    email: "caro.a@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium"], pantallas_activas: 3, costo: 10990, meses_inactivo: 0 } },

    { nombre: "Rodrigo Bravo", 
    email: "rodrigo.b@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 16 } },

    { nombre: "Daniela Pinto", 
    email: "dani.p@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Notebook" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 2, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Manuel Saavedra", 
    email: "manuel.s@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Premium", "Miembro Extra"], pantallas_activas: 4, costo: 13480, meses_inactivo: 0 } },

    { nombre: "Paulina Godoy", 
    email: "pau.g@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 1, costo: 5490, meses_inactivo: 0 } },

    { nombre: "Gabriel Cáceres", 
    email: "gabo.c@netflix.cl", 
    configuracion: { idioma: "Inglés", dispositivo_principal: "Console" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 2, costo: 8320, meses_inactivo: 0 } },

    { nombre: "Natalia Ortiz", 
    email: "naty.o@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smartphone" }, 
    suscripcion: { planes: ["Estándar"], pantallas_activas: 0, costo: 8320, meses_inactivo: 3 } },

    { nombre: "Aníbal Pinto", 
    email: "anibal.p@netflix.cl", 
    configuracion: { idioma: "Español", dispositivo_principal: "Smart TV" }, 
    suscripcion: { planes: ["Básico"], pantallas_activas: 0, costo: 5490, meses_inactivo: 12 } }

]);

// Bloque 1:
// Escribe las sentencias para este primer set de modificaciones. Todas aplican dos condiciones de filtrado según exige la pauta: 

// •	2. Modificar atributo simple: Modifica el nombre a "Diego Muñoz El Original" únicamente para el usuario llamado "Diego Muñoz" que use el idioma "Inglés". 
db.Usuarios.updateMany({"configuracion.idioma": "Inglés", nombre: "Diego Muñoz"}, {$set: {"nombre": "Diego Muñoz El Original"}})
// db.Usuarios.find(
//     {"nombre":/Diego Muñoz/},
//     {nombre:1, email:1, _id:0, configuracion:1}
// )

// •	3. Modificar subatributo: Cambia el configuracion.dispositivo_principal a "Apple TV" para quienes tengan el plan "Premium" y registren exactamente 3 pantallas_activas.
db.Usuarios.updateMany({"suscripcion.planes":"Premium", "suscripcion.pantallas_activas":3},{$set:{"configuracion.dispositivo_principal": "Apple TV"}})
// db.Usuarios.find(
//     {"suscripcion.planes":"Premium", "suscripcion.pantallas_activas":3},
//     {"configuracion.dispositivo_principal":1}
// )

// •	4. Renombrar atributo simple: Renombra el campo email a correo para cuentas con idioma "Español" y que lleven acumulados más de 6 meses_inactivo (usa $gt: 6). 
db.Usuarios.updateMany({"configuracion.idioma": "Español", "suscripcion.meses_inactivo": { $gt: 6 } },{$rename: {"email": "correo"}})
// db.Usuarios.find(
//     {"configuracion.idioma": "Español", "suscripcion.meses_inactivo": { $gt: 6 }},
//     {}
// )

// •	5. Renombrar atributo de una subestructura: Renombra configuracion.dispositivo_principal a configuracion.pantalla_hogar para cuentas con el plan "Básico" y que tengan 0 pantallas_activas. 
db.Usuarios.updateMany({"suscripcion.planes":"Básico", "suscripcion.pantallas_activas": 0},{$rename:{"configuracion.dispositivo_principal": "configuracion.pantalla_hogar"}})
// db.Usuarios.find(
//     {"suscripcion.planes":"Básico", "suscripcion.pantallas_activas": 0},
//     {}
// )

// •	6. Eliminar un atributo simple: Elimina el campo email (con $unset) para usuarios con idioma "Portugués" y exactamente 12 meses_inactivo. 
db.Usuarios.updateMany({"configuracion.idioma": "Portugués", "suscripcion.meses_inactivo": 12},{$unset: {"email":""}})
// db.Usuarios.find(
//     {"configuracion.idioma": "Portugués", "suscripcion.meses_inactivo": 12}
// )

// •	7. Eliminar un atributo de una subestructura: Elimina el subatributo configuracion.idioma para usuarios con plan "Estándar" y que tengan 2 pantallas_activas. 
db.Usuarios.updateMany({"suscripcion.planes": "Estándar", "suscripcion.pantallas_activas": 2},{$unset: {"configuracion.idioma":""}})
// db.Usuarios.find(
//     {"suscripcion.planes": "Estándar", "suscripcion.pantallas_activas": 2},
//     {"configuracion.idioma": 1}
// )

// •	8. Eliminar documentos (Limpieza de bajas): Elimina de la base de datos a los usuarios del plan "Básico" que lleven 12 o más meses_inactivo (usa $gte: 12). Nota: Esto borrará exactamente 5 documentos reales que cumplen ambas condiciones. 
db.Usuarios.deleteMany({"suscripcion.planes": "Básico", "suscripcion.meses_inactivo": {$gte:12}})
// db.Usuarios.find(
//     {"suscripcion.planes": "Básico", "suscripcion.meses_inactivo": {$gte:12}},
//      {}
//     )

// Bloque 2: Operaciones con Arreglos (Arrays)
// 9. Agregar elementos a un array: Agrega el elemento "Pase Familiar" al arreglo suscripcion.planes (con $addToSet) solo para los usuarios que tengan actualmente el plan "Estándar" y registren 2 pantallas_activas. 
db.Usuarios.updateMany({$and:[{'suscripcion.planes':'Estándar'},{'suscripcion.pantallas_activas':2}]},{$addToSet:{'suscripcion.planes':'Pase Familiar'}})

// 10. Quitar elementos a un array: Quita el elemento "Miembro Extra" del arreglo suscripcion.planes (con $pull) para los usuarios que tengan 2 pantallas_activas y un suscripcion.costo de 10810. 
db.Usuarios.updateMany({$and:[{'suscripcion.costo':10810},{'suscripcion.pantallas_activas':2}]},{$pull:{'suscripcion.planes':'Miembro Extra'}})

// Bloque 3: Consultas Avanzadas y Agregaciones (Listar datos)
// 11. Sentencias de búsqueda y reportería:
// •	a. Una sentencia que busque usuarios usando $regex en el nombre que contenga "Soto", aplicando options: 'i'
db.Usuarios.find({nombre:{$regex:'Soto',$options:'i'}})

// •	b. Una sentencia de agregación que use $sum para obtener el costo total de todas las suscripciones de la plataforma.
db.Usuarios.aggregate(
    {$unwind:'$suscripcion.costo'},
    {$group:{_id:"", total:{$sum:'$suscripcion.costo'}}}
)

// •	c. Una sentencia que use $avg para obtener el promedio de pantallas asignadas a los usuarios.
db.Usuarios.aggregate(
    {$unwind:'$suscripcion.pantallas_activas'},
    {$group:{_id:"", total:{$avg:'$suscripcion.pantallas_activas'}}}
)

// •	d. Una sentencia que combine la agregación anterior usando $round para redondear el promedio anterior a 0 decimales.
db.Usuarios.aggregate(
    {$unwind:'$suscripcion.pantallas_activas'},
    {$group:{_id:"", total:{$avg:'$suscripcion.pantallas_activas'}}},
    {$project:{total_redondeado:{$round:['$total', 0]}}}
)

// •	e. Una sentencia que use $concat para mostrar en una sola cadena: "Usuario: [nombre] - Correo: [email]".
db.Usuarios.aggregate(
    {$project:{Cadena_unica:{$concat:['$nombre','$email']}}}
)

// •	f. Una sentencia de agrupación ($group) por configuracion.idioma que cuente cuántos usuarios hay por idioma usando { $sum: 1 }.
db.Usuarios.aggregate(
    {$unwind:'$configuracion.idioma'},
    {$group: {_id:'$configuracion.idioma', cantidad:{$sum:1}}}
)

// •	g. Una rutina que implemente .forEach() para listar en la consola de la terminal los nombres de los usuarios en mayúsculas.
db.Usuarios.aggregate(
    {$project:{_id:0, Nombre:{$toUpper: '$nombre'}}}
).forEach(doc => printjson(doc))

// •	h. Una sentencia que use $in para listar los usuarios cuyo configuracion.dispositivo_principal sea "Smartphone" o "Tablet".
db.Usuarios.find({'configuracion.dispositivo_principal':{$in:["Smartphone", "Tablet"]}})

// •	i. Una sentencia que use $all para buscar los usuarios que tengan exactamente los planes ["Premium", "Miembro Extra"].
db.Usuarios.find({'suscripcion.planes':{$all:["Premium", "Miembro Extra"]}})

// •	j. Una sentencia que use $slice para proyectar los documentos mostrando el primer plan del array de planes.
db.Usuarios.find({},{_id:0, primer_plan:{'suscripcion.planes':{$slice:[0,1]}}})

// •	k. Una sentencia de agregación que use $unwind para descomponer el array suscripcion.planes.
db.Usuarios.aggregate(
    {$unwind:'$suscripcion.planes'},
    {$group:{_id:'$suscripcion.planes', cantidad_planes:{$sum:1}}}
)