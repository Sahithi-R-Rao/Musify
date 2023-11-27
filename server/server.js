// const express = require('express')
// const bodyParser = require('body-parser')
// const connectDB = require('./connect')
// const cors = require('cors')

// const app = express()
// const users = require('./routes/users')

// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())

// app.use('/users', users)

// const start = async () => {
//     try {
//         await connectDB()
//         app.listen(5000, () => {
//             console.log('Server is up on port 5000')
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()


const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connect');
const cors = require('cors');

const app = express();
const users = require('./routes/users');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', users);

// Self-ping function to ping the server every 10 minutes
const pingInterval = 0.5 * 60 * 1000; // 10 minutes in milliseconds

const pingServer = () => {
  console.log('Pinging server...');
  const https = require('https');
  const options = {
    hostname: 'https://sahithimusify.onrender.com',
    path: '/',
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('Server is alive!');
    } else {
      console.error('Server is not responding!');
    }
  });

  req.on('error', (error) => {
    console.error('Error pinging server:', error);
  });

  req.end();
};

// Start the ping interval
setInterval(pingServer, pingInterval);

const start = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log('Server is up on port 5000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// const express = require('express');
// const bodyParser = require('body-parser');
// const connectDB = require('./connect');
// const cors = require('cors');
// const fetch = require('node-fetch'); // Import the node-fetch library

// const app = express();
// const users = require('./routes/users');

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.use('/users', users);

// // Route for receiving ping requests
// app.get('/ping', (req, res) => {
//     console.log('Received ping request');
//     res.status(200).send('Ping received');
// });

// // Set up self-ping every 30 seconds (30000 milliseconds)
// const selfPingInterval = setInterval(() => {
//     // Send a GET request to the /ping route
//     fetch('http://127.0.0.1:5000/ping')
//         .then(response => response.text())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error sending ping:', error));
// }, 30000);

// const start = async () => {
//     try {
//         await connectDB();
//         app.listen(5000, () => {
//             console.log('Server is up on port 5000');
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// start();