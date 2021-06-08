const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");

// Crear un usuario
exports.create = async (req, res) => {

	// Parametros obligatorios
	if (! req.body.document_number) {
		res.status(400).send({
			message: "El numero de documento es obligatorio"
		});
		return;
	}
	if (! req.body.email) {
		res.status(400).send({
			message: "El correo electronico es obligatorio"
		});
		return;
	}
	if (! req.body.password) {
		res.status(400).send({
			message: "La contraseña es obligatoria"
		});
		return;
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	req.body.password = await bcrypt.hash(req.body.password, salt);

	const user = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		document_number: req.body.document_number,
		phone_number: req.body.phone_number,
		email: req.body.email,
		password: req.body.password
	};

	User.create(user)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Ha ocurrido un error."
			});
		});
};

// Listar usuarios
exports.findAll = (req, res) => {
	const email = req.query.email;
	var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

	User.findAll({ where: condition })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Qué pena, algo salió mal."
			});
		});
};

// Encontrar un usuario
exports.findOne = (req, res) => {

};

// Actualizar datos de usuario
exports.update = (req, res) => {

};

// Borrar un usuario
exports.delete = (req, res) => {

};

// Borrar todos los usuarios
exports.deleteAll = (req, res) => {

};