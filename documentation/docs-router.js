var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page */

router.get('/', function (req, res, next) {
  res.redirect('/backend/main.html');
});

router.get('/backend/main.html', function (req, res, next) {
  res.sendFile('main.html', {
    root: path.join(__dirname, './')
  })
});

/* GET spec.yaml */
router.get('/backend/spec.yaml', function (req, res, next) {
  res.sendFile('swagger.yaml', {
    root: path.join(__dirname, '../other/api')
  })
});

/* GET swaggerui */
router.get('/backend/swaggerui', function (req, res) {
  res.redirect("../docs");
});

/* GET source code zip */
router.get('/backend/app.zip', function (req, res, next) {
  res.redirect("https://github.com/davidesiciliano/Hypermedia-PretiSicilianoSofisti/archive/master.zip");
})

module.exports = router;