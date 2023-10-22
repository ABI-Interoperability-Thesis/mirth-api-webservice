require('dotenv').config()
const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')
const app = express()
const port = process.env.PORT || 3000
const runtime_env = process.env.RUNTIME_ENV || 'Not specified'

app.use(express.json())
// Configure cors to accept traffic from all origins
const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

// Landing Page for the webservice
app.get('/', (req,res)=>res.send(`Mirth API Webservice Microservice | ${runtime_env}. Visit /api-docs for all route documentation.`))

//Routing /api/channels requests to the channels router
const apiRoutes = require('./routes/channels')
app.use('/api/channels', apiRoutes)

//Routing to Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Catch unrouted requests to 404
app.use((req, res, next) => {
    const error = new Error('Route not Found')
    error.status = 404
    next(error)
  })

app.listen(port, ()=>{
    console.log(`Mirth API webservice listening in port ${port}`)
})