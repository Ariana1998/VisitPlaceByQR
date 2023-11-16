const { Router } = require('express');
const router = Router();
const {getCategorias, createCategoria, getCategoria, updateCategoria, deleteCategoria} = require('../controllers/categorias.controller');

/**
 * @swagger
 * tags:
 *   name: Categoria
 *   description: Gestor de las Categorias
 * /categorias:
 *   get:
 *     summary: Devuelve una lista de todas las categorias
 *     tags: [Categoria]
 *     responses:
 *       200:
 *         description: Devuelve una lista de todas las Categorias en formato JSON
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *   post:
 *     summary: Crea una nueva Categoria
 *     tags: [Categoria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Regresa un mensaje indicando que se guardo correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Categoria Guardada'}
 *       500:
 *         description: Some server error
 * 
 * /categorias/{id}:
 *   get:
 *     summary: Obtener categoria por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoria
 *     responses:
 *       200:
 *         description: Devuelve la categoria correspondiente al ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoria no encontrada
 *   put:
 *    summary: Modificar la categoria
 *    tags: [Categoria]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID de la categoria
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categoria'
 *    responses:
 *      200:
 *        description: Devuelve un mensaje si la categoria fue modificada correctamente.
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Categoria Actualizada'}
 *      404:
 *        description: Categoria no encontrada
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Categoria
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoria
 *
 *     responses:
 *       200:
 *         description: Devuelve un mensaje si la categoria pudo ser eliminada
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Categoria Eliminada'}
 *       404:
 *         description: Categoria no encontrada
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado de la Categoria
 *         nombre:
 *           type: String
 *           description: El nombre de la Categoria
 *       example:
 *         id: 6528b29c21f19d729c600b03
 *         nombre: Estudiante
 */

router.route('/')
    .get(getCategorias)
    .post(createCategoria)
    
router.route('/:id')    
    .get(getCategoria)
    .put(updateCategoria)
    .delete(deleteCategoria)
    
module.exports = router;