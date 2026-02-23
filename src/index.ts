import express from "express";
import type {Express, Request, Response} from "express";
import {pets} from "./pets.ts";


const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.json({
      message : "vanakam da mapla"
    })
})



app.get("/pet", (req: Request, res:Response)=>{

  res.json(pets);
})

app.get("/",(req: Request,res: Response)=>{
    res.send("Hello");


})

app.listen(3000, ():void => {
  console.log(`listening on port http://localhost:3000`);
})