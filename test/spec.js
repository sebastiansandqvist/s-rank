// ----- dependencies
// ---------------------------------------
require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

var expect = require('chai').expect;
var app = require('../index.js');


// ----- tests
// ---------------------------------------
describe('rank', function() {

	it('should run tests', function() {
		expect(true).to.equal(true);
	});

});