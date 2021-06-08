module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		first_name: {
			type: Sequelize.STRING
		},
		last_name: {
			type: Sequelize.STRING
		},
		document_number: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		phone_number: {
			type: Sequelize.STRING,
			unique: true
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			isEmail: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});

	return User;
};
