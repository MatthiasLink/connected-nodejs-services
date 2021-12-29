const express = require("express");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
    res.send("serviceB");
});

app.listen(PORT, () => {
    console.log(`Service a is listening on port ${PORT}`)
})