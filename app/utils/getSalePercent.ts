export default function getSalePercent (originalPrice: number, currentPrice: number): string {
    const diff = Math.abs(originalPrice - currentPrice);
    const percent = Math.floor((diff / originalPrice) * 100);
    return percent.toString().split(',')[0];
}