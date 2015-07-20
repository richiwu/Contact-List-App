var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema for testimonials
var testimonialSchema = new mongoose.Schema ({
		testimonialInput : String,
});

mongoose.model('Testimonial', testimonialSchema);