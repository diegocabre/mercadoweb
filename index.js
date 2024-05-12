const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const path = require("path");

// Configura Handlebars como motor de plantillas
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");

// Middleware (Bootstrap, jQuery, etc.)
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

// Middleware (jQuery)
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));

// Middleware (Static Files)
app.use(express.static(path.join(__dirname, "public")));

// Ruta raíz
app.get("/", (req, res) => {
  const productos = [
    "banana",
    "cebollas",
    "lechuga",
    "papas",
    "pimenton",
    "tomate",
  ];
  res.render("dashboard", { productos: productos });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
