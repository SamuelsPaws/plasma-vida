interface Props {
    productCategory: string;
    productName: string[];
    className: string;
}

const ProductSvg = ({ productCategory, productName, className }: Props) => {
    return (
    <svg
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice" 
        role="img"
        aria-labelledby="title desc"
        version="1.1"
        id="svg11"
        width="1200"
        height="1200"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs
            id="defs11"
        >
            <mask id="drop-cutout">
                <rect
                    width="364"
                    height="318"
                    fill="#fff"
                    id="rect1-0"
                    x="0"
                    y="0"
                />
                <path
                    fill="#000"
                    d="m 182,81 c -6,21 -19,46 -34,70 -10,16 -15,30 -14,44 1,21 16,38 37,45 19,6 37,-1 48,-15 11,-14 10,-31 2,-43 -5,-7 -12,-13 -19,-16 7,10 14,22 14,34 0,16 -11,28 -25,32 -15,4 -31,-2 -40,-15 -9,-13 -11,-27 -7,-41 5,-17 17,-35 25,-50 9,-17 13,-32 13,-45 z"
                    id="path1-5"
                />
            </mask>
        </defs>
        <rect
            width="1200"
            height="1200"
            fill="#fafafa"
            id="rect1"
            x="0"
            y="0"
        />
        <path
            d="m 0,715.72036 c 180,-75 367.9088,-23.03632 517.9088,16.96368 180,50 329.51864,21.19164 454.51864,-83.80836 C 1092.4274,548.87568 1200,411.80788 1200,440.80788 V 1200 H 0 Z"
            fill="#b29f16"
            id="path1"
        />
        <path
            d="m 0,1025 c 205,-80 436.31266,-79.8507 601.31266,-14.8507 195,77 335.94649,101.0347 600.94654,-48.96535 L 1200,1200 H 0 Z"
            fill="#b29f16"
            id="path3"
        />
        <g
            transform="translate(96,82)"
            id="g7"
        >
            <circle
                cx="112"
                cy="112"
                r="112"
                fill="#b29f16"
                id="circle3"
            />
            <circle
                cx="112"
                cy="112"
                r="80"
                fill="none"
                stroke="#faf8f1"
                strokeWidth="7"
                id="circle4"
            />
            <g
                fill="none"
                stroke="#faf8f1"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="g2"
                transform="matrix(0.78279639,0,0,0.78279639,15.837597,33.448357)"
            >
            <path
                d="M 112,158 C 99,146 59,119 59,84 59,62 74,48 94,48 c 13,0 24,7 30,18 6,-11 17,-18 30,-18 20,0 35,14 35,36 0,35 -40,62 -53,74 -8,7 -16,7 -24,0 z"
                id="path2"
            />
            </g>
        </g>
        <g
            transform="translate(95,385)"
            id="g9"
        >
            <text
                x="0"
                y="0"
                fill="#0b3a5b"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="72px"
                fontWeight="400"
                letterSpacing="-1"
                id="text7"
            >
                {productCategory}
            </text>
            {productName.map((el, index) => (
                <text
                    key={index}
                    x="0"
                    y={(104 + (index * 90)).toString()}
                    fill="#666"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="92px"
                    fontWeight="700"
                    letterSpacing="-4"
                    id="text8"
                >
                    {el}
                </text>
            ))}
        </g>
        <g
            id="g11"
            transform="matrix(0.70155887,0,0,0.70155887,635.98569,831.62371)"
        >
            <path
                fill="#7a6a0b"
                d="m 550,221 c -41,24 -66,70 -66,119 0,67 56,122 130,122 74,0 130,-55 130,-122 0,-49 -25,-95 -66,-119 l -12,-6 c 47,27 67,73 67,125 0,60 -51,110 -119,110 -68,0 -119,-50 -119,-110 0,-52 20,-98 67,-125 z"
                id="path2-9"
            />
            <path
                mask="url(#drop-cutout)"
                fill="#7a6a0b"
                d="m 182,8 c -11,27 -32,57 -58,90 -23,29 -34,55 -34,79 0,51 40,91 92,91 52,0 92,-40 92,-91 0,-24 -11,-50 -34,-79 C 214,65 193,35 182,8 Z"
                id="path3-2"
                transform="translate(432,159)"
            />
        </g>
    </svg>
    )
}

export default ProductSvg