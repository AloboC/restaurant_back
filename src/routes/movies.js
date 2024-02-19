import { Router } from 'express'
import { MovieModel } from '../models/movie.js'

export const moviesRouter = Router()

//  obtain all movies
moviesRouter.get('/movies?:id', async (req, res) => {
  const movies = await MovieModel.get(req.query)
  res.json(movies)
})

// create a new movie
moviesRouter.post('/movies', async (req, res) => {
  res.send('create a new movie')
})

// update a movie
moviesRouter.put('/movies/:id', async (req, res) => {
  res.send('update a movie')
})

// delete a movie
moviesRouter.delete('/movies/:id', async (req, res) => {
  res.send('delete a movie')
})
