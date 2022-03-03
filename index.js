const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
// const errorHandler = require('./helpers/errorHandler');
// const authJwt = require('./helpers/jwt');
require('dotenv/config');
require('./db/config')


app.use(cors());
app.options('*', cors())

//middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use(authJwt());
// app.use((err, req, res, next)=> {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).json({
//             message: 'User is not authorized'
//         })
//     }
// });

//Routes

const userRoutes = require('./routes/user');

const categoriesRoutes = require('./routes/category');
const productRoutes = require('./routes/products');

// api routers
app.use('/api/v1/users', userRoutes);

app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/products', productRoutes);




// port
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})