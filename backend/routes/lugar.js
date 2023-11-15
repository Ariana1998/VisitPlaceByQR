const { Router } = require('express');
const router = Router();
const {getLugares, createLugar, getLugar, updateLugar, deleteLugar} = require('../controllers/lugares.controller');

/**
 * @swagger
 * tags: 
 *   name: Lugar
 *   description: Encargado de gestionar los lugares y generar el codigo QR
 * /place:
 *   get:
 *     summary: Se encarga de traer los lugares previamente creados.
 *     tags: [Lugar]
 *     responses:
 *       200:
 *         description: Devuelve una lista con los lugares previamente creadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lugares'
 *   post:
 *     summary: Crea un nuevo lugar
 *     tags: [Lugar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lugares'
 *     responses:
 *       200:
 *         description: Mensaje que indica que se creo un lugar existosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lugares'
 *       500:
 *         description: Some server error
 * 
 * /place/{id}:
 *   get:
 *     summary: Trae el lugar por ID
 *     tags: [Lugar]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Trae un lugar por medio del ID
 *     responses:
 *       200:
 *         description: Devuelve el lugar en base a su ID
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lugares'
 *       404:
 *         description: El lugar no fue encontrado
 *   put:
 *    summary: Actualiza el lugar por ID
 *    tags: [Lugar]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: El lugar es actualizado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Lugares'
 *    responses:
 *      200:
 *        description: Devuelve un mensaje notificando de que el lugar se actualizo
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lugares'
 *      404:
 *        description: El lugar no se encontro
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Elimina el lugar por medio del ID
 *     tags: [Lugar]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Elimina el lugar en base al ID
 *
 *     responses:
 *       200:
 *         description: Devuelve un mensaje si el lugar es eliminado
 *       404:
 *         description: Lugar no encontrado
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Lugares:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - imageQrUrl
 *         - categoriasPermitidas
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del lugar
 *         nombre:
 *           type: string
 *           description: Nombre del lugar
 *         imageQrUrl:
 *           type: qr
 *           description: Codigo QR del lugar
 *         categoriasPermitidas:
 *           type: Categorias
 *           description: Categorias Permitidas en el lugar
 *       example:
 *         id: d5fE_asz
 *         nombre: Laboratorio 102
 *         imageQrUrl: imageQr
 *         categoriasPermitidas: estudiante
 */

router.route('/')
    .get(getLugares)
    .post(createLugar)
    
router.route('/:id')    
    .get(getLugar)
    .put(updateLugar)
    .delete(deleteLugar)
    
module.exports = router;