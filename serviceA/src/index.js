const express = require("express");
const axios = require('axios');

const PORT = 8080;
const app = express();

const serviceBHost = process.env.SERVICE_B_SERVICE_SERVICE_HOST || "localhost";
const serviceBPort = process.env.SERVICE_B_SERVICE_SERVICE_PORT || "8081";

let internal = 0;

app.get("/", async (req, res) => {
    try {
        const { data: serviceB } = await axios.get(`http://${serviceBHost}:${serviceBPort}/`, { responseType: "text" });
        res.send(`serviceA ${internal++} + ${serviceB}`);
        console.log(internal);
    } catch (e) {
        console.log(e);
        res.send("serviceB not reached");
    }
});




app.listen(PORT, () => {
    console.log(`Service a is listening on port ${PORT}`)
});