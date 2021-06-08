const express = require("express");
const cors =  require("cors");

const app = express();

const corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
//db.sequelize.sync();

// on dev
///*
db.sequelize.sync({ force: true }).then(() => {
  console.log("Base de datos sincronizada.");
});
//*/

app.get("/", (req, res) => {
	res.json({ message: "Hola, Coxti" });
});

require("./app/routes/user.routes")(app);

const port = process.env.POST || 8080;
app.listen(port, () => {
	console.log(`Server running on http://127.0.0.1:${port}`);
});
