const express = require('express');
const cors = require('cors');
const router = require('./src/routes/index');
const middlewares = require('./src/midlewares/middlewareError');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(middlewares);
require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));

// const express = require('express');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
