export default function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);

  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}