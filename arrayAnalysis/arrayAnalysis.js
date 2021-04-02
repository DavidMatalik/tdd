export default function analyze(arr) {
  const totalResult = arr.reduce((acc, cV) => (acc += cV))
  const avgResult = totalResult / arr.length
  return {
    average: avgResult,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}
