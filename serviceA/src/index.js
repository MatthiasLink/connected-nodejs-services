const express = require("express");
const axios = require('axios');

const PORT = 8080;
const app = express();

const serviceBHost = process.env.SERVICE_B_SERVICE_SERVICE_HOST || "service-b";
const serviceBPort = process.env.SERVICE_B_SERVICE_SERVICE_PORT || "8080";

app.get("/", async (req, res) => {
    console.log(JSON.stringify(process.env));
    try {
        const { data: serviceB } = await axios.get(`http://${serviceBHost}:${serviceBPort}/`, { responseType: "text" });
        res.send("serviceA + " + serviceB);
    } catch (e) {
        console.log(e);
        res.send("serviceB not reached");
    }
});

app.listen(PORT, () => {
    console.log(`Service a is listening on port ${PORT}`)
});