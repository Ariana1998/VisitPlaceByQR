const categoriasCtrl = {};
const Categoria = require('../models/Categoria');

categoriasCtrl.getCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias); 
};

categoriasCtrl.createCategoria = async (req, res) => {
    const { nombre } = req.body;
    const newCategoria = new Categoria({
        nombre: nombre
    });
    console.log(newCategoria);
    await newCategoria.save();
    res.json({message: 'Categoria creada'});
};

categoriasCtrl.getCategoria = async (req, res) => {
    const categoria = await Categoria.findById(req.params.id);
    console.log(categoria);
    res.json(categoria);
};

categoriasCtrl.deleteCategoria = async (req, res) => {
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({message: 'Categoria Eliminada'})
};

categoriasCtrl.updateCategoria = async (req, res) => {
    const { nombre } = req.body;
    await Categoria.findOneAndUpdate({_id: req.params.id}, {
        nombre
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Categoria Actualizada'});
};

module.exports = categoriasCtrl;