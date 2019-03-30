export function match(phrase) {
  return new RegExp(`\\b${phrase}\\b`, 'gi');
};

export function censor(text, phrase) {
  const asterisks = phrase.replace(/\w/gi, '*');
  return text.replace(match(phrase), asterisks);
};

const desc = (a, b) => b.length - a.length;

export function create(list) {
  const sortedList = list.sort(desc);
  return function(text) {
    return sortedList.reduce(censor, text);
  }
}
