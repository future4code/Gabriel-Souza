import express from "express";

import { createPostsController } from "../../controllers/createPostsController/createPostsController";

export const postRoutes = express.Router();

postRoutes.post("/create", createPostsController);