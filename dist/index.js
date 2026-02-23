import express from "express";
import { pets } from "./pets.ts";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "vanakam da mapla"
    });
});
app.get("/pet", (req, res) => {
    res.json(pets);
});
app.get("/", (req, res) => {
    res.send("Hello");
});
app.listen(3000, () => {
    console.log(`listening on port http://localhost:3000`);
});
