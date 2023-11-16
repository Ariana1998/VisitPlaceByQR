const registrosVisitanteCtrl = {};
const RegistroVisitante = require('../models/RegistroVisitante');

function hipermedia(registro){
    registro.visitante = process.env.HOSTNAME + "/visitante/" + registro.visitante;
    registro.lugar = process.env.HOSTNAME + "/lugar/" + registro.lugar;
}


registrosVisitanteCtrl.getRegistrosVisitantes = async (req, res) => {
    const registrosVisitantes = await RegistroVisitante.find();
    registrosVisitantes.forEach(registro =>{
        hipermedia(registro);
    })
    res.json(registrosVisitantes); 
};

registrosVisitanteCtrl.createRegistroVisitante = async (req, res) => {
    const { visitante, lugar} = req.query; 
    const newRegistroVisitante = new RegistroVisitante({
        visitante: visitante,
        lugar: lugar
    });
    console.log(newRegistroVisitante);
    await newRegistroVisitante.save();
    res.json({message: 'Registro Visitante creado'});
};


registrosVisitanteCtrl.getRegistroVisitante = async (req, res) => {
    const registroVisitante = await RegistroVisitante.findById(req.params.id);
    hipermedia(registroVisitante)
    res.json(registroVisitante);
};

registrosVisitanteCtrl.deleteRegistroVisitante = async (req, res) => {
    await RegistroVisitante.findByIdAndDelete(req.params.id);
    res.json({message: 'Registro Visitante Eliminado'})
};

registrosVisitanteCtrl.updateRegistroVisitante = async (req, res) => {  
    await RegistroVisitante.findOneAndUpdate({_id: req.params.id}, {
        salida: true,
        fechaSalida: Date.now()
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Registro Visitante Actualizado'});
};

registrosVisitanteCtrl.consultaPorVisitante = async (req, res) => {
    const registros = await RegistroVisitante.find({visitante: req.params.id});
    registros.forEach(registro =>{
        hipermedia(registro);
    })
    res.json(registros)
};

registrosVisitanteCtrl.consultaPorLugar = async (req, res) => {
    const registros = await RegistroVisitante.find({lugar: req.params.id})
    registros.forEach(registro =>{
        hipermedia(registro);
    })
    res.json(registros)
};

let datos = {
    "registrosVisitante": [
      {
        "visitante": "Juan Pérez",
        "lugar": "Laboratorio de Inteligencia Artificial",
        "fechaEntrada": "2023-11-13T09:00:00",
        "fechaSalida": "2023-11-13T12:00:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "María García",
        "lugar": "Aula de Desarrollo de Software",
        "fechaEntrada": "2023-11-13T10:30:00",
        "fechaSalida": "2023-11-13T14:00:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Carlos López",
        "lugar": "Centro de Datos",
        "fechaEntrada": "2023-11-13T11:45:00",
        "fechaSalida": "2023-11-13T13:30:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Laura Rodríguez",
        "lugar": "Laboratorio de Redes",
        "fechaEntrada": "2023-11-13T13:15:00",
        "fechaSalida": "2023-11-13T16:45:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Daniel Martínez",
        "lugar": "Sala de Conferencias",
        "fechaEntrada": "2023-11-13T14:30:00",
        "fechaSalida": "2023-11-13T17:00:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Ana Torres",
        "lugar": "Área de Investigación en Robótica",
        "fechaEntrada": "2023-11-13T09:30:00",
        "fechaSalida": "2023-11-13T12:45:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Pedro Sánchez",
        "lugar": "Sala de Reuniones para Proyectos",
        "fechaEntrada": "2023-11-13T10:00:00",
        "fechaSalida": "2023-11-13T13:00:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Sara Jiménez",
        "lugar": "Biblioteca de Ciencias de la Computación",
        "fechaEntrada": "2023-11-13T11:00:00",
        "fechaSalida": "2023-11-13T14:30:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Alejandro Ruiz",
        "lugar": "Laboratorio de Seguridad Informática",
        "fechaEntrada": "2023-11-13T14:00:00",
        "fechaSalida": "2023-11-13T17:30:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Carmen Castro",
        "lugar": "Área de Desarrollo de Aplicaciones Móviles",
        "fechaEntrada": "2023-11-13T13:45:00",
        "fechaSalida": "2023-11-13T16:15:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Héctor Gómez",
        "lugar": "Sala de Simulación",
        "fechaEntrada": "2023-11-13T09:15:00",
        "fechaSalida": "2023-11-13T12:30:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Isabel Díaz",
        "lugar": "Espacio de Innovación y Emprendimiento",
        "fechaEntrada": "2023-11-13T10:45:00",
        "fechaSalida": "2023-11-13T14:45:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Javier Herrera",
        "lugar": "Centro de Estudios en Computación Cuántica",
        "fechaEntrada": "2023-11-13T11:30:00",
        "fechaSalida": "2023-11-13T15:30:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Marta Núñez",
        "lugar": "Laboratorio de Visión por Computadora",
        "fechaEntrada": "2023-11-13T13:00:00",
        "fechaSalida": "2023-11-13T16:30:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Raúl Ortega",
        "lugar": "Sala de Proyectos de Realidad Virtual",
        "fechaEntrada": "2023-11-13T14:45:00",
        "fechaSalida": "2023-11-13T17:45:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Elena Moreno",
        "lugar": "Área de Desarrollo Web",
        "fechaEntrada": "2023-11-13T09:45:00",
        "fechaSalida": "2023-11-13T12:45:00",
        "entrada": true,
        "salida": false
      },
      {
        "visitante": "Antonio Vargas",
        "lugar": "Centro de Investigación en Tecnologías Emergentes",
        "fechaEntrada": "2023-11-13T10:15:00",
        "fechaSalida": "2023-11-13T14:15:00",
        "entrada": true,
        "salida": true
      },
      {
        "visitante": "Luisa Ramos",
        "lugar": "Laboratorio de Computación Cuántica",
        "fechaEntrada": "2023-11-13T11:15:00",
        "fechaSalida": "2023-11-13T15:15:00",
        "entrada": true,
        "salida": false
      },
      {
       "visitante": "Silvia Gallego", 
       "lugar": "Sala de Reuniones para Proyectos",
       "fechaEntrada": "2023-11-13T12:15:00",
       "fechaSalida": "2023-11-13T15:20:00",
       "entrada": true,
       "salida": false
      }, 
      {
       "visitante": "Roberto Medina",
       "lugar" : "Área de Relajación y Recreación",
       "fechaEntrada": "2023-11-14T11:10:00",
       "fechaSalida": "2023-11-14T11:30:00",
       "entrada": true,
       "salida": false
      }
    ]
  }

  function agregarRegistrosVisitante(){
    datos.registrosVisitante.forEach(async registro => {
        registro.visitante,
        registro.lugar,
        registro.fechaEntrada,
        registro.fechaSalida,
        registro.entrada,
        registro.salida
      
        const newRegistroVisitante = new RegistroVisitante({
            visitante: registro.visitante,
            lugar: registro.lugar
        });
        console.log(newRegistroVisitante);
        await newRegistroVisitante.save();

    })

  }

//agregarRegistrosVisitante()
  

module.exports = registrosVisitanteCtrl;



