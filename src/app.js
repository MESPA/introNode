import express from 'express'
import config from './config'
import turnosRoutes from './routes/Turnos.routes'


const app = express()
//setting
app.set('port' , config.port)

//middlerares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(turnosRoutes)



export default app