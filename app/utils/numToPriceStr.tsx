export default function numToPriceStr(num: number): string {
    const numStr = num.toString();
    const numsArr = [numStr.slice(0, -2), numStr.slice(-2)];

    return `${numsArr[0]},${numsArr[1]}`;
}