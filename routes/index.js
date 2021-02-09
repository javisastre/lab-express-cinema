const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) =>{

    Movie.find()
    .then((allMovies) => { 
        const data = {allMovies: allMovies}
        res.render('movies', data)
    })
    .catch((error) => console.log(error))
   
})

router.get('/movie/:movieId', (req, res, next) =>{

 const movieId = req.params.movieId;
   Movie.findById(movieId)
   .then((oneMovie) => {
        const data = {
            oneMovie: oneMovie
        };
       res.render('chosenMovie', data)   
   })
   .catch((err)=> console.log(err));
})

module.exports = router;
