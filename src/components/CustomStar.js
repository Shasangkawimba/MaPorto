export default function CustomStar({ width = 24, height = 24, fill = "#000", className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 122.88 122.88" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ enableBackground: 'new 0 0 122.88 122.88' }}
    >
      <g>
        <path 
          fill={fill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
        />
      </g>
    </svg>
  );
}
