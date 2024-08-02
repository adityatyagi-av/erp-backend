import http from "http"
import app from "./app.js";
import { query } from "./utils/connectDB.js";


const server=http.createServer(app)

server.listen(3000,()=>{
    console.log("server is running on port 3000");
    query(SELECT (),1);
})