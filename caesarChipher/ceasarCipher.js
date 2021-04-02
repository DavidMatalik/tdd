export default function ceasar(text, shift) {
  shift = adjustShiftNumber(shift)
  let encrypted = ''
  for (let i = 0; i < text.length; i++) {
    encrypted = encrypted + createResultLetter(text, i, shift)
  }
  return encrypted
}

function adjustShiftNumber(shiftNumber) {
  return shiftNumber % 26
}

function createResultLetter(string, index, shiftNumber) {
  const curCharCode = string.charCodeAt(index)
  // For all punctuation characters don't shift
  if (
    !(curCharCode > 64 && curCharCode < 91) &&
    !(curCharCode > 96 && curCharCode < 123)
  ) {
    return String.fromCharCode(curCharCode)
  }
  // For all a-z and A-Z characters shift
  const newCharCode = curCharCode + shiftNumber
  const wrappedCharCode = wrapCharCodeAroundAlphabet(
    curCharCode,
    newCharCode,
    shiftNumber
  )
  return String.fromCharCode(wrappedCharCode)
}

function wrapCharCodeAroundAlphabet(curCharCode, calcCharCode) {
  // For a-z and charcode bigger then the code of z
  if (curCharCode > 64 && curCharCode < 91 && calcCharCode > 90) {
    return calcCharCode - 26
  }
  // For A-Z and calculated charcode bigger then the code of Z
  if (curCharCode > 96 && curCharCode < 123 && calcCharCode > 122) {
    return calcCharCode - 26
  }
  // For a-z and A-Z and calculated charcode isn't bigger than the charcode of z or Z
  return calcCharCode
}
