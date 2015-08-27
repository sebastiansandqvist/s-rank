// ----- dependencies
// ---------------------------------------
require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

var expect = require('chai').expect;
var rank = require('../index.js');


// ----- constants
// ---------------------------------------
var now = Date.now();
var yesterday = now - (24 * 60 * 60 * 1000);
var lastWeek = now - (7 * 24 * 60 * 60 * 1000)

// ----- tests
// ---------------------------------------
describe('it', function() {

	it('ranks 1 vote the same as 0 votes', function() {
		expect(rank(1, now)).to.equal(rank(0, now));
	});

	it('ranks higher voted items above lower', function() {
		expect(rank(2, now)).to.be.above(rank(1, now));
		expect(rank(100, now)).to.be.above(rank(99, now));
	});

	it('ranks newer items above older', function() {
		expect(rank(100, now)).to.be.above(rank(100, yesterday));
		expect(rank(10, now)).to.be.above(rank(11, yesterday));
	});

	it('ranks highly upvoted items above newer', function() {
		expect(rank(1000, lastWeek)).to.be.above(rank(10, now));
		expect(rank(100, lastWeek)).to.be.above(rank(10, now));
		expect(rank(28, lastWeek)).to.be.above(rank(10, now)); // minimum, 27 will be below
	});

});