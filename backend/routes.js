'use strict'
const api = require('./handlers/api')
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')

var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});


module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))

  // get a single video
  app.get('/api/videos/:videoId', function (req, res) {
    res.send(req.params)
  })
  // get list of videos
  app.get('/api/videos', function(req, res) {
    var stream = minioClient.listObjects(process.env.MINIO_BUCKET,'', true);
    var videos  = []; 
    stream.on('data', function(obj) { videos.push(obj) } );
    stream.on('error', function(err) { res.error(err) } );
    stream.on('end', function() { res.send(videos); } );
    // stream.on('close', function() { res.close(); });
  })

}


