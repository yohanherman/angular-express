const express = require('express');
const cors = require('cors')
const employeeRoutes = require('./routes/employeeRoutes');

// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerDocument = require('./docs/swagger.json');

const connectDB = require('./models/connexion');
connectDB();
const app = express();


// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'Employee API',
//             version: '1.0.0',
//         }
//     },
//     apis: ['./']
// }

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:4200',
    Credentials: true, 
    allowedHeaders: 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
}
app.use(cors(corsOptions))

app.use('/api', employeeRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server  is listening  at port ${PORT}`)
})

module.exports = app;