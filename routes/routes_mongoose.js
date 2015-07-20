var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Testimonial  = mongoose.model('Testimonial');


mongoose.connect('mongodb://admin:admin@ds043962.mongolab.com:43962/pennyworth');

router.route('/contactlist')

  .get(function (req, res) {

    Testimonial.find(function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
  })

  .post(function (req, res) {
    console.log(req.body);
    Testimonial.insert(req.body, function(err, doc) {
      res.json(doc);
    });
  });

router.route('/contactlist/:id')

  // .delete(function (req, res) {
  //   var id = req.params.id;
  //   console.log(id);
  //  Testimonial.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
  //     res.json(doc);
  //   });
  // })

  // .get(function (req, res) {
  //   var id = req.params.id;
  //   console.log(id);
  //   Testimonial.findOne({_id: mongoose.ObjectId(id)}, function (err, doc) {
  //     res.json(doc);
  //   });
  // })

  // .put(function (req, res) {
  //   var id = req.params.id;
  //   console.log(req.body.name);
  //   Testimonial.findAndModify({
  //     query: {_id: mongojs.ObjectId(id)},
  //     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
  //     new: true}, function (err, doc) {
  //       res.json(doc);
  //     }
  //   );
  // });

module.exports = router;
