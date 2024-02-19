import { Router } from 'express'

export const moviesRouter = Router()

//  obtain all movies
moviesRouter.get('/movies', (req, res) => {
  res.send('obtain all movies')
})

// create a new movie
moviesRouter.post('/movies', (req, res) => {
  res.send('create a new movie')
})

// update a movie
moviesRouter.put('/movies/:id', (req, res) => {
  res.send('update a movie')
})

// delete a movie
moviesRouter.delete('/movies/:id', (req, res) => {
  res.send('delete a movie')
})
