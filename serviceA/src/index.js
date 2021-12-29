const express = require("express");
const axios = require('axios');

const PORT = 8080;
const app = express();

app.get("/", async (req, res) => {
    const { data: serviceB } = await axios.get('http://service-b:8080/', { responseType: "text" });
    res.send("serviceA + " + serviceB);
});

app.listen(PORT, () => {
    console.log(`Service a is listening on port ${PORT}`)
});