export default function truncateMidText(str: string, chars: number): string {
    const truncated = str.slice(0, chars)
    return truncated + '...'
}