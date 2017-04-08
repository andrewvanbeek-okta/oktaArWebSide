import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

var bodyParser = Meteor.npmRequire('body-parser' );

// Define our middleware using the Picker.middleware() method.
Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded( { extended: false } ) );

 Picker.route('/users', function(params, req, res, next) {
  	console.log(req.body)
  	console.log(params)
});