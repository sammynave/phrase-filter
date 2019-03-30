const benchmark = require('./benchmark');
const { match } = require('..');

module.exports = benchmark('match', function MatchExps(suite) {
  suite.add('match("hi")', () => {
    match('hi');
  });

  suite.add('match("hi hello how are you")', () => {
    match('hi hello how are you');
  });
});
