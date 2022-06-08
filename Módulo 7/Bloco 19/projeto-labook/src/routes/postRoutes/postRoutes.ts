import express from "express";

import { searchPostController } from "../../controllers/postsControllers/searchPostController";
import { createPostsController } from "../../controllers/postsControllers/createPostsController";

export const postRoutes = express.Router();

postRoutes.get("/:id", searchPostController);
postRoutes.post("/create", createPostsController);