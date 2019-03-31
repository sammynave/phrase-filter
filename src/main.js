const desc = (a, b) => b.length - a.length;

export function detect({ text, detected}, phrase) {
  return {
    text,
    detected: detected ? detected : match(phrase).test(text)
  }
};

export function match(phrase) {
  return new RegExp(`\\b${phrase}\\b`, 'gi');
};

export function censor(text, phrase) {
  const asterisks = phrase.replace(/\w/gi, '*');
  return text.replace(match(phrase), asterisks);
};

export function create(list) {
  const sortedList = list.sort(desc);
  return {
    clean(text) {
      return sortedList.reduce(censor, text);
    },

    hasProfanity(text) {
      const { detected } = sortedList.reduce(detect, { text, detected: false });
      return detected;
    }
  }
};
