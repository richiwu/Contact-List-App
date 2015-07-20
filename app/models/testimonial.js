var mongoose = require('mongoose');

//schema for testimonials
var testimonialSchema = mongoose.Schema ({
	testimonial:  {
		testimonialInput : String
	}
});

module.exports = mongoose.model('Testimonial', testimonialSchema);