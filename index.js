require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const routerV1 = require('./src/routes/routeV1');

app.use(express.json());
app.use(express.static('uploads'));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "*"
//     )
//     if (req.method === "OPTIONS") {
//       res.header(
//         "Access-Control-Allow-Methods",
//         "POST, PUT, PATCH, GET, DELETE"
//       )
//       return res.status(200).json({})
//     }
//     next()
// });

app.use(cors({ origin: "*", credentials: true }));

app.use('/api/v1/', routerV1);

app.listen(port, () => console.log(`Listening on port ${port}`));