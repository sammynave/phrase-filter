const benchmark = require('./benchmark');
const { create } = require('..');

module.exports = benchmark('create', function CreateExps(suite) {
  suite.add('create(["a", "list", "of", "banned phrases"])', () => {
    create(['a', 'list', 'of', 'banned phrases']);
  });

  suite.add('call clean create(["a", "list", "of", "banned phrases"])', () => {
    const { clean } = create(['a', 'list', 'of', 'banned phrases']);
    clean('some text with a list of banned phrases');
  });

  suite.add('call hasPhrase create(["a", "list", "of", "banned phrases"])', () => {
    const { hasPhrase } = create(['a', 'list', 'of', 'banned phrases']);
    hasPhrase('some text with a list of banned phrases');
  });
});
