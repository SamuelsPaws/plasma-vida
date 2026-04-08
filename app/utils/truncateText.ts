export default function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  const truncated = text.slice(0, maxLength)
  const noMidWord = truncated.slice(0, truncated.lastIndexOf(" "))
  const lastChar = noMidWord.charAt(noMidWord.length - 1)
  const stripPunct = lastChar === '.' || lastChar === ',' ? noMidWord.slice(0, noMidWord.length - 1) : noMidWord 

  return stripPunct + "...";
}