import { app } from "./server";

import { productRoutes } from "./routes/productsRoutes/productRoute";
import { purchaseRoutes } from "./routes/purchaseRoutes/purchaseRoute";


app.use("/products", productRoutes);
app.use("/purchase", purchaseRoutes);