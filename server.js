const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const mongoose = require('mongoose');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// It gives us back a function, which expect an argument, the stripe secret key
//  It gives us what the stripe library wants to give us, and then I want immediately to invoke it with the secret key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Finally, it will give us back the stripe object that we can finally use to make charges 


const app = express(); // express: library that allows us to build an API server easily
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // any of the requests coming in, process their body and convert it to JSON. Step done for us using the body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // Stand for: cross origin request. The web server is being hosted from some origin(like a port ex. 5000 in development), our application
// is hosted to 3000. When the front end makes a request to our backend, cors checks to make sure the origin is the same, 
// otherwise it denies the request, so it is a safety feature 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database connection established successfully");
});

const contactRouter = require('./routes/contact');
const collectionsRouter = require('./routes/collections');
const usersRouter = require('./routes/users');
const subscriptionsRouter = require('./routes/subscriptions');

app.use('/contact', contactRouter);
app.use('/', subscriptionsRouter);
app.use('/api/shop', collectionsRouter);
app.use('/signin', usersRouter);


if(process.env.NODE_ENV === 'production'){
    app.use(compression());
    app.use(enforce.HTTPS({trustProtoHeader: true}));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(request, response){
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}

app.get('/service-worker.js', (req, res) => {
    res.sendfile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, error => {
    if(error){
        throw error;
    }
    console.log('Server is running on the port ' + port);
});


app.post('/payment', (request, response) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if(stripeError){
            response.status(500).send({error: stripeError});
        }
        else{
            response.status(200).send({success: stripeResponse});
        }
    });
});