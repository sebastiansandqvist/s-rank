'use strict';

function rank(votes, timestamp) {

	var order = Math.log(Math.max(votes, 1)); // 0 votes -> 1 vote
	var delta = timestamp - rank.epoch;

	return order + (delta / rank.baseTime);

}

rank.epoch = new Date(1970, 1, 1).getTime();
rank.baseTime = 12 * 60 * 60 * 1000; // 12 hours

module.exports = rank;