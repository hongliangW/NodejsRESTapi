import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; //allowing to send an object or data through HTTP post
import routes from './src/routes/restRoutes';

const app = express();
const PORT = 8000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useMongoClient: true
});

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => res.send(`Node and Express server is running on port ${PORT}`));

app.listen(PORT, () =>
  console.log( `Your server is running on port ${PORT}`)
);
