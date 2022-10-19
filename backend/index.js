import app from './server.js'
import mongodb from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()
import MoviesDAO from './dao/moviesDAO.js'
async function main(){
    
    const port = process.env.PORT || 8000
    const client = new mongodb.MongoClient(
    process.env.DB_URI
    )
    try{
        await client.connect().then(console.log('connected to Atlas'))
        await MoviesDAO.injectDB(client).then(console.log("connected to movies DB"))
        app.listen(port, ()=>{
            console.log('sever is running on port:' +port)
        })
    }catch(e){
        console.error(e)
        process.exit(1)
    }
}
main().catch(console.error)