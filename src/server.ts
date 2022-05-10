import cors from "cors";
import express from "express";
import { routes } from "./route";

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes)

server.listen(process.env.PORT || 3333, () => {
  console.log("Server is running on port 3333");
})