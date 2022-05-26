import express from 'express'
import { CreateMovieControllers } from '../controller/CreateMovieControllers'

export const movieRouter = express.Router()

const createMovieControllers = new CreateMovieControllers()

movieRouter.post("/create", createMovieControllers.create)
