import test from 'ava';
import { create } from '..';

const list = ['foo', 'foo bar'];

test('replace single word', t => {
  const { clean } = create(list);
  t.is(
    clean('some text with foo'),
    'some text with ***'
  );
});

test('detect profanity', t => {
  const { hasProfanity, hasProfanity2, hasProfanity3 } = create(list);
  t.is(
    hasProfanity('some text with foo'),
    true
  );

  t.is(
    hasProfanity('some text with foos'),
    false
  );

  t.is(
    hasProfanity('some text with foo BAR'),
    true
  );
});

test('replace phrase', t => {
  const { clean } = create(list);
  t.is(
    clean('some text with foo bar'),
    'some text with *** ***'
  );

  t.is(
    clean('some text with FOO bar'),
    'some text with *** ***'
  );

  t.is(
    clean('some text with foos bar'),
    'some text with foos bar'
  );

  t.is(
    clean('some text with efoo bar'),
    'some text with efoo bar'
  );

  t.is(
    clean('some text with foo bars'),
    'some text with *** bars'
  );
});
