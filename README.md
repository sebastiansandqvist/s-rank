# s-rank
## Work in progress

[![NPM version](https://img.shields.io/npm/v/s-rank.svg)](https://www.npmjs.com/package/s-rank) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-rank.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-rank.svg)](https://travis-ci.org/sebastiansandqvist/s-rank) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-rank/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-rank/coverage) [![NPM license](https://img.shields.io/npm/l/s-rank.svg)](https://www.npmjs.com/package/s-rank)

## About
This function returns a rank given an item's upvotes (`Number`) and posting date as a timestamp (`Number`). Downvote functionality is not supported.

The starting epoch date can be configured by setting `rank.epoch`. It should be a timestamp (`Number`).

The time to optimize for can be configured by setting `rank.baseTime`. By default, it is 1 week.

To get something like Reddit's "hot" sorting, sort in descending order by rank.

## Usage
```javascript
var rank = require('s-rank');

var now = Date.now();
var yesterday = Date.now() - (24 * 60 * 60 * 1000);

rank(100, now) > rank(75, now); // true
rank(100, now) > rank(100, yesterday); // true
```

## License (ISC)
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.