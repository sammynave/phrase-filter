const benchmark = require('./benchmark');
const { censor } = require('..')

module.exports = benchmark('censor', function CreateCensorExps(suite) {
  suite.add('censor("some text here", "text here")', () => {
    censor('"some text here', 'text here');
  });
});
