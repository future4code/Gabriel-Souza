import { app } from "./app";
import { getAllUsers } from "./endpoints/UsersQuery";
import { getUsersType } from "./endpoints/UsersParams";
import { orderUsers } from "./endpoints/OrderUsers";
import { limitPages } from "./endpoints/PaginationPages";
import { getUsers } from "./endpoints/SelectAllUsers"

app.get("/users/:page", getUsers)
// app.get("/users/:type", getUsersType)
// app.get("/users", orderUsers)
// app.get("/users/pages", limitPages)