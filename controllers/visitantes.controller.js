const visitanteCtrl = {};
const Visitante = require('../models/Visitante');

visitanteCtrl.getVisitantes = async (req, res) => {
    const visitantes = await Visitante.find();
    res.json(visitantes);
}

visitanteCtrl.getVisitante = async (req, res) => {
    const visitante = await Visitante.findById(req.params.id);
    console.log(visitante);
    res.json(visitante);
}

visitanteCtrl.createVisitante = async (req, res) => {
    const { nombre, email,password, categoria } = req.body;
    const newVisitante = new Visitante({nombre, email, password, categoria});
    console.log(newVisitante);
    await newVisitante.save();
    res.json({message: 'Visitante Creado'});
}


visitanteCtrl.deleteVisitante = async (req, res) => {
    await Visitante.findByIdAndDelete(req.params.id);
    res.json({message: 'Visitante Eliminado'})
}

visitanteCtrl.login = async (req, res) =>{
    const {email, password} = req.body;
    var visitante = await Visitante.findOne({email: email}).exec();
    if(!visitante){return res.status(400).send({message: "The username does not exist", goIn: 0});}
    visitante.comparePassword(password, (error, match)=>{
        if(!match){
            return res.status(400).send({ message: "The password is invalid", goIn: 0 });
        }else{res.send({ message: "The username and password combination is correct!", goIn: 1 });}
    });
}

let datos = {
        "visitantes": [
          {
            "nombre": "Juan Pérez",
            "email": "juan.perez@gmail.com",
            "password": "Passw0rd!",
            "categoria": "Estudiante"
          },
          {
            "nombre": "María García",
            "email": "maria.garcia@gmail.com",
            "password": "SecurePass123",
            "categoria": "Investigador"
          },
          {
            "nombre": "Carlos López",
            "email": "carlos.lopez@gmail.com",
            "password": "StrongPassword456",
            "categoria": "Visitante"
          },
          {
            "nombre": "Laura Rodríguez",
            "email": "laura.rodriguez@gmail.com",
            "password": "SafePass789",
            "categoria": "Personal"
          },
          {
            "nombre": "Daniel Martínez",
            "email": "daniel.martinez@gmail.com",
            "password": "P@ssw0rd!",
            "categoria": "Administrativo"
          },
          {
            "nombre": "Ana Torres",
            "email": "ana.torres@gmail.com",
            "password": "Pass123word!",
            "categoria": "Estudiante"
          },
          {
            "nombre": "Pedro Sánchez",
            "email": "pedro.sanchez@gmail.com",
            "password": "SecurePass789",
            "categoria": "Investigador"
          },
          {
            "nombre": "Sara Jiménez",
            "email": "sara.jimenez@gmail.com",
            "password": "StrongPass@123",
            "categoria": "Visitante"
          },
          {
            "nombre": "Alejandro Ruiz",
            "email": "alejandro.ruiz@gmail.com",
            "password": "SafePass456",
            "categoria": "Personal"
          },
          {
            "nombre": "Carmen Castro",
            "email": "carmen.castro@gmail.com",
            "password": "SecurePass!567",
            "categoria": "Administrativo"
          },
          {
            "nombre": "Héctor Gómez",
            "email": "hector.gomez@gmail.com",
            "password": "P@ssword789",
            "categoria": "Estudiante"
          },
          {
            "nombre": "Isabel Díaz",
            "email": "isabel.diaz@gmail.com",
            "password": "StrongPass123!",
            "categoria": "Investigador"
          },
          {
            "nombre": "Javier Herrera",
            "email": "javier.herrera@gmail.com",
            "password": "SafePassword!456",
            "categoria": "Visitante"
          },
          {
            "nombre": "Marta Núñez",
            "email": "marta.nunez@gmail.com",
            "password": "SecurePass@789",
            "categoria": "Personal"
          },
          {
            "nombre": "Raúl Ortega",
            "email": "raul.ortega@gmail.com",
            "password": "P@ssword!567",
            "categoria": "Administrativo"
          },
          {
            "nombre": "Elena Moreno",
            "email": "elena.moreno@gmail.com",
            "password": "StrongPass456!",
            "categoria": "Estudiante"
          },
          {
            "nombre": "Antonio Vargas",
            "email": "antonio.vargas@gmail.com",
            "password": "SafePassword123!@",
            "categoria": "Investigador"
          },
          {
            "nombre": "Luisa Ramos",
            "email": "luisa.ramos@gmail.com",
            "password": "SecurePass567!",
            "categoria": "Visitante"
          },
          {
            "nombre": "Roberto Medina",
            "email": "roberto.medina@gmail.com",
            "password": "P@ssword789!",
            "categoria": "Personal"
          },
          {
            "nombre": "Silvia Gallego",
            "email": "silvia.gallego@gmail.com",
            "password": "StrongPass123!@",
            "categoria": "Administrativo"
          }
        ]
      }

function agregarVisitantes(){
    datos.visitantes.forEach(async visit => {
        visit.nombre,
        visit.email, 
        visit.password,
        visit.categoria

        const newVisitante = new Visitante({
            nombre: visit.nombre,
            email: visit.email,
            password: visit.password,
            categoria: visit.categoria
        });
        console.log(newVisitante);
        await newVisitante.save();
    });

}

//agregarVisitantes()

module.exports = visitanteCtrl;