const { Router } = require('express');
const router = Router();
const {createAdministrador, login} = require('../controllers/administradores.controller');
/**
 * @swagger
 * tags:
 *   name: Administradores
 *   description: Encargado de manejar los permisos en la API
 * /administradores:
 *   post:
 *     summary: Crea un nuevo administrador
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Administrador'
 *     responses:
 *       200:
 *         description: Manda un mensaje donde avisa que se creo el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Administrador'
 *       500:
 *         description: Some server error
 * /administradores/login:
 *   post:
 *     summary: Iniciar Sesión
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example: {"email":"Ariana@gmail.com", "password":"skajdñsdlkjdfñkldjaklsñdjs"}
 *     responses:
 *       200:
 *         description: Manda Si inicio sesión o no
 *         content:
 *           application/json:
 *             schema:
 *               example: {"message": "Inicio de sesion correcto"}
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Administrador:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del Administrador
 *         nombre:
 *           type: string
 *           description: Nombre del Administrador
 *         email:
 *           type: string
 *           description: Correo del Administrador
 *         password:
 *           type: string
 *           description: Contraseña del Administrador
 *       example:
 *         id: d5fE_asz
 *         nombre: Ariana Espinoza
 *         email: Ariana@gmail.com
 *         password: skajdñsdlkjdfñkldjaklsñdjs
 */
router.route('/')
    .post(createAdministrador)

router.route('/login')
    .post(login)
    
module.exports = router;
