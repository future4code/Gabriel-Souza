import { app } from "./app";

import {  getAllUsers } from "./endpoints/users/getAllUsers";
import { insertUserCreate } from "./endpoints/users/createUser";
import { createProduct } from "./endpoints/products/createProducts";
import {  insertRelationalPurchases } from "./endpoints/purchases/productsPurchases";
import { getAllProducts } from "./endpoints/products/getAllProducts";

app.get( "/users",  getAllUsers );
app.post("/users", insertUserCreate);

app.get("/products", getAllProducts);
app.post("/products", createProduct);

app.post("/purchases",  insertRelationalPurchases);