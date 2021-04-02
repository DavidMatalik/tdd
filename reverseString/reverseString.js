export default function reverseString(text) {
  let reversedString = []
  for (let i = 0; i < text.length; i++) {
    reversedString = text[i] + reversedString
  }
  return reversedString
}
