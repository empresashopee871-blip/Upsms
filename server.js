const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

let data = JSON.parse(fs.readFileSync("data.json"));

app.use(express.static(__dirname));

app.get("/next-number", (req, res) => {
    if (data.numeros.length === 0) return res.json({ fim: true });

    const numero = data.numeros.shift();
    fs.writeFileSync("data.json", JSON.stringify(data));

    res.json({ numero });
});

app.get("/next-insta", (req, res) => {
    if (data.instagram.length === 0) return res.json({ fim: true });

    const user = data.instagram.shift();
    fs.writeFileSync("data.json", JSON.stringify(data));

    res.json({ user });
});

app.get("/next-facebook", (req, res) => {
    if (data.facebook.length === 0) return res.json({ fim: true });

    const link = data.facebook.shift();
    fs.writeFileSync("data.json", JSON.stringify(data));

    res.json({ link });
});

app.listen(3000, () => console.log("Rodando servidor global..."));
