const express = require("express");
const indexRouter = require('./Router/index')
const app = express();
const cors= require('cors');
const swaggerDocs = require("./swagger"); 
const port = 8080;

app.use(cors())
app.use(express.json());
app.use("/api",indexRouter);
swaggerDocs(app);
app.use("/",indexRouter);
app.listen(port, () => {
    console.log("Example app listening at http://localhost:" + port);
});