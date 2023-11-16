const administradoresCtrl = {};
const Administrador = require('../models/Administrador');
administradoresCtrl.getAdministradores = async (req, res) => {
    const administradores = await Administrador.find();
    res.json(administradores);
}
administradoresCtrl.createAdministrador = async (req, res) => {
    const { nombre, email,password } = req.body; 
    const newAdministrador = new Administrador({nombre, email, password});
    console.log(newAdministrador);
    await newAdministrador.save();
    res.json({message: 'Administrador Creado'});
}

administradoresCtrl.login = async (req, res) =>{
    const {email, password} = req.body;
    var administrador = await Administrador.findOne({email: email}).exec();
    if(!administrador){return res.status(400).send({message: "El nombre de usuario no existe", goIn: 0});}
    administrador.comparePassword(password, (error, match)=>{
        if(!match){
            return res.status(400).send({ message: "La contrasena es invalida", goIn: 0 });
        }else{res.send({ message: "La combinacion de nombre de usuario y contrasena es correcto!", goIn: 1 });}
    });
}

let datos = {
    "administradores": [
      {
        "nombre": "José Rodríguez",
        "email": "jose.rodriguez@gmail.com",
        "password": "AdminPass1!"
      },
      {
        "nombre": "María González",
        "email": "maria.gonzalez@gmail.com",
        "password": "AdminPass2!"
      },
      {
        "nombre": "Carlos Martínez",
        "email": "carlos.martinez@gmail.com",
        "password": "AdminPass3!"
      },
      {
        "nombre": "Laura Sánchez",
        "email": "laura.sanchez@gmail.com",
        "password": "AdminPass4!"
      },
      {
        "nombre": "Daniel López",
        "email": "daniel.lopez@gmail.com",
        "password": "AdminPass5!"
      },
      {
        "nombre": "Ana Pérez",
        "email": "ana.perez@gmail.com",
        "password": "AdminPass6!"
      },
      {
        "nombre": "Pedro Ramírez",
        "email": "pedro.ramirez@gmail.com",
        "password": "AdminPass7!"
      },
      {
        "nombre": "Sara Jiménez",
        "email": "sara.jimenez@gmail.com",
        "password": "AdminPass8!"
      },
      {
        "nombre": "Alejandro Ruiz",
        "email": "alejandro.ruiz@gmail.com",
        "password": "AdminPass9!"
      },
      {
        "nombre": "Carmen Castro",
        "email": "carmen.castro@gmail.com",
        "password": "AdminPass10!"
      },
      {
        "nombre": "Héctor Gómez",
        "email": "hector.gomez@gmail.com",
        "password": "AdminPass11!"
      },
      {
        "nombre": "Isabel Díaz",
        "email": "isabel.diaz@gmail.com",
        "password": "AdminPass12!"
      },
      {
        "nombre": "Javier Herrera",
        "email": "javier.herrera@gmail.com",
        "password": "AdminPass13!"
      },
      {
        "nombre": "Marta Núñez",
        "email": "marta.nunez@gmail.com",
        "password": "AdminPass14!"
      },
      {
        "nombre": "Raúl Ortega",
        "email": "raul.ortega@gmail.com",
        "password": "AdminPass15!"
      },
      {
        "nombre": "Elena Moreno",
        "email": "elena.moreno@gmail.com",
        "password": "AdminPass16!"
      },
      {
        "nombre": "Antonio Vargas",
        "email": "antonio.vargas@gmail.com",
        "password": "AdminPass17!"
      },
      {
        "nombre": "Luisa Ramos",
        "email": "luisa.ramos@gmail.com",
        "password": "AdminPass18!"
      },
      {
        "nombre": "Roberto Medina",
        "email": "roberto.medina@gmail.com",
        "password": "AdminPass19!"
      },
      {
        "nombre": "Silvia Gallego",
        "email": "silvia.gallego@gmail.com",
        "password": "AdminPass20!"
      }
    ]
  }
  
 function agregarAdministradores(){
    datos.administradores.forEach( async admin=> {
        admin.nombre
        admin.email
        
        const newAdministrador = new Administrador({
            nombre: admin.nombre,
            email: admin.email,
            password: admin.password
        });
        console.log(newAdministrador);
        await newAdministrador.save();
    } )
    
}
//agregarAdministradores()

module.exports = administradoresCtrl;
