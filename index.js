function rank(votes, timestamp) {
  var order = Math.log(Math.max(votes, 1)); // 0 votes -> 1 vote
  var delta = timestamp - rank.epoch;
  return order + (delta / rank.baseTime);
}

rank.epoch = new Date(1970, 0, 1).getTime();
rank.baseTime = 7 * 24 * 60 * 60 * 1000; // 1 week

module.exports = rank;
