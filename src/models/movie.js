import { readJsonFile } from '../utils/index.js'

const movies = readJsonFile('movies.json')

export class MovieModel {
  // obtain all or a movies
  static async get(qry) {
    if (qry.id) return movies.find((movie) => movie.id === +qry.id)
    return movies
  }

  // create a new movie
  static async create() {
    return 'create a new movie'
  }

  // update a movie
  static async update() {
    return 'update a movie'
  }

  // delete a movie
  static async delete() {
    return 'delete a movie'
  }
}
