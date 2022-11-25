const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      cors = require('cors'),
      app = express();
      
const port = process.env.PORT || 4000;

const posts = require('./routes/api/posts');

require ('./mongooseCon');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api/posts',posts);
    app.listen(port, function(error){
        if(error){
            throw err;
        }
        console.log(`Reserch ${port}`);
        console.log(`http://localhost: ${port}`)
     
    })

    
    

    