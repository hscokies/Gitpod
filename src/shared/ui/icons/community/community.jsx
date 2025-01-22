export const Community = ({...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#community-fill)"
      fillRule="evenodd"
      d="M0 11.79C0 5.279 5.482 0 11.992 0 18.495 0 23.78 5.486 23.78 11.996c0 6.51-5.28 11.992-11.79 11.992L0 24V11.79Zm5.83-3.656a7.31 7.31 0 0 1 6.277-3.57h.007a7.308 7.308 0 1 1-3.005 13.97L4.36 19.608l1.323-4.253a7.31 7.31 0 0 1 .148-7.22Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="community-fill"
        x1={3.418}
        x2={21.088}
        y1={3.45}
        y2={22.499}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAD33"/>
        <stop offset={1} stopColor="#FF8A00"/>
      </linearGradient>
    </defs>
  </svg>
)
