import test from 'ava';
import rank from '../';

const now = Date.now();
const yesterday = now - (24 * 60 * 60 * 1000);
const lastWeek = now - (7 * 24 * 60 * 60 * 1000);

test('ranks 1 vote the same as 0 votes', (t) => {
  t.is(rank(1, now), rank(0, now));
});

test('ranks higher voted items above lower', (t) => {
  t.true(rank(2, now) > rank(1, now));
  t.true(rank(100, now) > rank(99, now));
});

test('ranks newer items above older', (t) => {
  t.true(rank(0, now) > rank(0, yesterday));
  t.true(rank(1, now) > rank(1, yesterday));
  t.true(rank(100, now) > rank(100, yesterday));
  t.true(rank(1000, now) > rank(1000, yesterday));
  t.true(rank(100000, now) > rank(100000, yesterday));
});

test('ranks highly upvoted items above newer', (t) => {
  // note: dependent on rank.baseTime of two weeks
  t.true(rank(1000, lastWeek) > rank(10, now));
  t.true(rank(100, lastWeek) > rank(10, now));
  t.true(rank(28, lastWeek) > rank(10, now)); // minimum, 27 will be below
  t.true(rank(27, lastWeek) < rank(10, now));
  t.true(rank(24, lastWeek) > rank(10, yesterday));
  t.true(rank(23, lastWeek) < rank(10, yesterday));
  t.true(rank(10, now) > rank(11, yesterday));
});
