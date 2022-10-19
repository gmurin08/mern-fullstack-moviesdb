import express from 'express';
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express()

app.use(cors())
app.use(express.json())

//movies route
app.use('/api/v1/movies', movies)


//wildcard route to 404 anything not defined
app.use('*', (req,res)=>{
    res.status(404).json({error:'not found'})
})

export default app