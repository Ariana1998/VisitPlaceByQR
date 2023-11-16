const lugaresCtrl = {};
const Lugar = require('../models/Lugar');

lugaresCtrl.getLugares = async (req, res) => {
    const lugares = await Lugar.find();
    res.json(lugares); 
};

lugaresCtrl.createLugar = async (req, res) => {
    const { nombre, categoriasPermitidas } = req.body;
    const newLugar = new Lugar({
        nombre: nombre,
        categoriasPermitidas: categoriasPermitidas
    });
    console.log(newLugar);
    await newLugar.save();
    res.json({message: 'Lugar creado'});
};

lugaresCtrl.getLugar = async (req, res) => {
    const lugar = await Lugar.findById(req.params.id);
    console.log(lugar);
    res.json(lugar);
};

lugaresCtrl.deleteLugar = async (req, res) => {
    await Lugar.findByIdAndDelete(req.params.id);
    res.json({message: 'Lugar Eliminado'})
};

lugaresCtrl.updateLugar = async (req, res) => {
    const { nombre, categoriasPermitidas } = req.body;
    await Lugar.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        categoriasPermitidas
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Lugar Actualizada'});
};

let datos = {
        "lugares": [
          {
            "nombre": "Laboratorio de Inteligencia Artificial",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Aula de Desarrollo de Software",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Centro de Datos",
            "categoriasPermitidas": ["Estudiante", "Personal", "Administrativo"]
          },
          {
            "nombre": "Laboratorio de Redes",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Administrativo"]
          },
          {
            "nombre": "Sala de Conferencias",
            "categoriasPermitidas": ["Investigador", "Visitante", "Personal", "Administrativo"]
          },
          {
            "nombre": "Área de Investigación en Robótica",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal", "Administrativo"]
          },
          {
            "nombre": "Sala de Reuniones para Proyectos",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Biblioteca de Ciencias de la Computación",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Visitante", "Personal", "Administrativo"]
          },
          {
            "nombre": "Laboratorio de Seguridad Informática",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Área de Desarrollo de Aplicaciones Móviles",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Sala de Simulación",
            "categoriasPermitidas": ["Estudiante", "Investigador"]
          },
          {
            "nombre": "Espacio de Innovación y Emprendimiento",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Visitante", "Personal", "Administrativo"]
          },
          {
            "nombre": "Centro de Estudios en Computación Cuántica",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Administrativo"]
          },
          {
            "nombre": "Laboratorio de Visión por Computadora",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal"]
          },
          {
            "nombre": "Sala de Proyectos de Realidad Virtual",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Administrativo"]
          },
          {
            "nombre": "Área de Desarrollo Web",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Personal", "Administrativo"]
          },
          {
            "nombre": "Centro de Investigación en Tecnologías Emergentes",
            "categoriasPermitidas": ["Estudiante", "Investigador"]
          },
          {
            "nombre": "Laboratorio de Computación Cuántica",
            "categoriasPermitidas": ["Estudiante", "Investigador"]
          },
          {
            "nombre": "Espacio de Coworking para Estudiantes",
            "categoriasPermitidas": ["Estudiante", "Personal"]
          },
          {
            "nombre": "Área de Relajación y Recreación",
            "categoriasPermitidas": ["Estudiante", "Investigador", "Visitante", "Personal", "Administrativo"]
          }
        ]
      }

 function agregarLugares(){
    datos.lugares.forEach(async lugares => {
        lugares.nombre,
        lugares.categoriasPermitidas

        const newLugar = new Lugar({
            nombre: lugares.nombre,
            categoriasPermitidas: lugares.categoriasPermitidas
        });
        console.log(newLugar);
        await newLugar.save();
    } ) 
    }

 //agregarLugares()

module.exports = lugaresCtrl;