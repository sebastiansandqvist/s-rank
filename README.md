# s-rank

[![NPM version](https://img.shields.io/npm/v/s-rank.svg)](https://www.npmjs.com/package/s-rank) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-rank.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-rank.svg)](https://travis-ci.org/sebastiansandqvist/s-rank) [![NPM license](https://img.shields.io/npm/l/s-rank.svg)](https://www.npmjs.com/package/s-rank)

## About
Like Reddit's "Hot" ranking algorithm or the one on Hacker News, this function returns a rank given a number of upvotes `{Number}` and an original posting timestamp `{Number}`.

*Note: s-rank does not support downvotes.*

Ranked items only change their rank when upvoted, but as new items are added and upvoted, older posts (even with many upvotes) decay logarithmically over time. Thus, sorting items by their single "rank" value and updating rank on each upvote will get you a sorted list of "hot" items.

You should configure the decay to suit your own needs. By default, it is set to decay dramatically at one week (7 * 24 * 60 * 60 * 1000 milliseconds). Change `rank.baseTime` to be any `Number` in milliseconds. (Shorter times will cause a  more rapid decay. Reddit's, for reference, is 12.5 hours).

You can also set the starting epoch to be any arbitrary date in the past. By default, it is January 1, 1970. Set `rank.epoch` to a timestamp `Number` (not a `Date` object) if you would like to configure it.

## Installation
```bash
npm install --save s-rank
```

## Usage
```javascript
var rank = require('s-rank');

var now = Date.now();
var yesterday = Date.now() - (24 * 60 * 60 * 1000);

rank(100, now) > rank(75, now); // true
rank(100, now) > rank(100, yesterday); // true
rank(100, now) > rank(101, yesterday); // true (depending on configured baseTime)
```
