import { app } from "./app";
import { getAllUsers } from "./endpoints/Users";

app.get("/users", getAllUsers)