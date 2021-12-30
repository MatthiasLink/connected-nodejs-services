const express = require("express");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
    res.send("serviceB result");
});

app.listen(PORT, () => {
    console.log(`Service b is listening on port ${PORT}`)
});