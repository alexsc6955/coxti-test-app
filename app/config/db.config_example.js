module.exports = {
	HOST: "db_host",
	USER: "db_user",
	PASSWORD: "db_password",
	DB: "db_name",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
