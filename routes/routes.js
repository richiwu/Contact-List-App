var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds043962.mongolab.com:43962/pennyworth', ['contactlist']);
var router = express.Router();

router.route('/contactlist')

  .get(function (req, res) {

    db.contactlist.find(function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
  })

  .post(function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
      res.json(doc);
    });
  });

router.route('/contactlist/:id')

  .delete(function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
      res.json(doc);
    });
  })

  .get(function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
      res.json(doc);
    });
  })

  .put(function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({
      query: {_id: mongojs.ObjectId(id)},
      update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
      new: true}, function (err, doc) {
        res.json(doc);
      }
    );
  });

module.exports = router;
