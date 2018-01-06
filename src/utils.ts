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

export function getKeysInRange(obj: any, from: number, to: number) {
  return Object.keys(obj).slice(from, to)
}

export function getValuesInRange(obj: any, from: number, to: number) {
  return Object.values(obj).slice(from, to)
}

export function isBooleanType(obj: any) {
  return typeof obj === 'boolean'
}
