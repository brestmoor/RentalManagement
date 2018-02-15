export function arrayToSpaceSeparated(words: string[]) {
  return words.map(word => toSpaceSeparated(word))
}

export function toSpaceSeparated(word: string) {
  let words = word.split('_');
  if (words[0]) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1, words[0].length)
  }
  return words.join(" ")
}

export function getKeysExceptId(obj: any) {
  return Object.keys(obj).filter(key => key !== 'id');
}

export function getValuesExceptId(obj: any) {
  return Object.keys(obj).filter(key => key !== 'id').map(key => obj[key]);
}

export function isBooleanType(obj: any) {
  return typeof obj === 'boolean'
}
