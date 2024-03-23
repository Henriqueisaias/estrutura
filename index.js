const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const conn = require("./db/coon.js");

const task = require("./model/task.js");
const taskRoute = require('./routes/taks_route.js')

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


app.use('/tasks', taskRoute)
// função que analisa reqs de post
app.use(express.urlencoded({ extended: true }));
// função que transcreve json para objeto automaticamente
app.use(express.json());

app.use(express.static("public"));

// corpo

conn.sync().then(()=>{
    app.listen(4000)
}).catch((err) => console.log(err))


