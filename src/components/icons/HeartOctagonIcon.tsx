import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzkxMzcgMi40Njg2M0M3LjU2NDMyIDIuMjk1NjggNy42NTA4IDIuMjA5MiA3Ljc1MTcyIDIuMTQ3MzZDNy44NDExOSAyLjA5MjUzIDcuOTM4NzMgMi4wNTIxMyA4LjA0MDc3IDIuMDI3NjNDOC4xNTU4NiAyIDguMjc4MTUgMiA4LjUyMjc0IDJIMTUuNDc3M0MxNS43MjE4IDIgMTUuODQ0MSAyIDE1Ljk1OTIgMi4wMjc2M0MxNi4wNjEzIDIuMDUyMTMgMTYuMTU4OCAyLjA5MjUzIDE2LjI0ODMgMi4xNDczNkMxNi4zNDkyIDIuMjA5MiAxNi40MzU3IDIuMjk1NjggMTYuNjA4NiAyLjQ2ODYzTDIxLjUzMTQgNy4zOTEzN0MyMS43MDQzIDcuNTY0MzIgMjEuNzkwOCA3LjY1MDggMjEuODUyNiA3Ljc1MTcyQzIxLjkwNzUgNy44NDExOSAyMS45NDc5IDcuOTM4NzMgMjEuOTcyNCA4LjA0MDc3QzIyIDguMTU1ODYgMjIgOC4yNzgxNSAyMiA4LjUyMjc0VjE1LjQ3NzNDMjIgMTUuNzIxOCAyMiAxNS44NDQxIDIxLjk3MjQgMTUuOTU5MkMyMS45NDc5IDE2LjA2MTMgMjEuOTA3NSAxNi4xNTg4IDIxLjg1MjYgMTYuMjQ4M0MyMS43OTA4IDE2LjM0OTIgMjEuNzA0MyAxNi40MzU3IDIxLjUzMTQgMTYuNjA4NkwxNi42MDg2IDIxLjUzMTRDMTYuNDM1NyAyMS43MDQzIDE2LjM0OTIgMjEuNzkwOCAxNi4yNDgzIDIxLjg1MjZDMTYuMTU4OCAyMS45MDc1IDE2LjA2MTMgMjEuOTQ3OSAxNS45NTkyIDIxLjk3MjRDMTUuODQ0MSAyMiAxNS43MjE4IDIyIDE1LjQ3NzMgMjJIOC41MjI3NEM4LjI3ODE1IDIyIDguMTU1ODYgMjIgOC4wNDA3NyAyMS45NzI0QzcuOTM4NzMgMjEuOTQ3OSA3Ljg0MTE5IDIxLjkwNzUgNy43NTE3MiAyMS44NTI2QzcuNjUwOCAyMS43OTA4IDcuNTY0MzIgMjEuNzA0MyA3LjM5MTM3IDIxLjUzMTRMMi40Njg2MyAxNi42MDg2QzIuMjk1NjggMTYuNDM1NyAyLjIwOTIgMTYuMzQ5MiAyLjE0NzM2IDE2LjI0ODNDMi4wOTI1MyAxNi4xNTg4IDIuMDUyMTMgMTYuMDYxMyAyLjAyNzYzIDE1Ljk1OTJDMiAxNS44NDQxIDIgMTUuNzIxOCAyIDE1LjQ3NzNWOC41MjI3NEMyIDguMjc4MTUgMiA4LjE1NTg2IDIuMDI3NjMgOC4wNDA3N0MyLjA1MjEzIDcuOTM4NzMgMi4wOTI1MyA3Ljg0MTE5IDIuMTQ3MzYgNy43NTE3MkMyLjIwOTIgNy42NTA4IDIuMjk1NjggNy41NjQzMiAyLjQ2ODYzIDcuMzkxMzdMNy4zOTEzNyAyLjQ2ODYzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS45OTY2IDkuMDY3OTFDMTAuOTk2OSA3Ljg5OTIgOS4zMjk4NyA3LjU4NDgyIDguMDc3MzUgOC42NTUwMUM2LjgyNDgyIDkuNzI1MTkgNi42NDg0OCAxMS41MTQ1IDcuNjMyMSAxMi43ODAyQzguMjYyMTEgMTMuNTkwOSA5Ljg3NTU4IDE1LjA5NDIgMTAuOTU0MiAxNi4wNzA0QzExLjMxMjcgMTYuMzk0NyAxMS40OTE5IDE2LjU1NjkgMTEuNzA2NiAxNi42MjJDMTEuODkxMSAxNi42Nzc5IDEyLjEwMiAxNi42Nzc5IDEyLjI4NjYgMTYuNjIyQzEyLjUwMTIgMTYuNTU2OSAxMi42ODA1IDE2LjM5NDcgMTMuMDM4OSAxNi4wNzA0QzE0LjExNzYgMTUuMDk0MiAxNS43MzEgMTMuNTkwOSAxNi4zNjExIDEyLjc4MDJDMTcuMzQ0NyAxMS41MTQ1IDE3LjE4OTkgOS43MTM5MyAxNS45MTU4IDguNjU1MDFDMTQuNjQxNyA3LjU5NjA4IDEyLjk5NjMgNy44OTkyIDExLjk5NjYgOS4wNjc5MVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const HeartOctagonIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M7.39137 2.46863C7.56432 2.29568 7.6508 2.2092 7.75172 2.14736C7.84119 2.09253 7.93873 2.05213 8.04077 2.02763C8.15586 2 8.27815 2 8.52274 2H15.4773C15.7218 2 15.8441 2 15.9592 2.02763C16.0613 2.05213 16.1588 2.09253 16.2483 2.14736C16.3492 2.2092 16.4357 2.29568 16.6086 2.46863L21.5314 7.39137C21.7043 7.56432 21.7908 7.6508 21.8526 7.75172C21.9075 7.84119 21.9479 7.93873 21.9724 8.04077C22 8.15586 22 8.27815 22 8.52274V15.4773C22 15.7218 22 15.8441 21.9724 15.9592C21.9479 16.0613 21.9075 16.1588 21.8526 16.2483C21.7908 16.3492 21.7043 16.4357 21.5314 16.6086L16.6086 21.5314C16.4357 21.7043 16.3492 21.7908 16.2483 21.8526C16.1588 21.9075 16.0613 21.9479 15.9592 21.9724C15.8441 22 15.7218 22 15.4773 22H8.52274C8.27815 22 8.15586 22 8.04077 21.9724C7.93873 21.9479 7.84119 21.9075 7.75172 21.8526C7.6508 21.7908 7.56432 21.7043 7.39137 21.5314L2.46863 16.6086C2.29568 16.4357 2.2092 16.3492 2.14736 16.2483C2.09253 16.1588 2.05213 16.0613 2.02763 15.9592C2 15.8441 2 15.7218 2 15.4773V8.52274C2 8.27815 2 8.15586 2.02763 8.04077C2.05213 7.93873 2.09253 7.84119 2.14736 7.75172C2.2092 7.6508 2.29568 7.56432 2.46863 7.39137L7.39137 2.46863Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9966 9.06791C10.9969 7.8992 9.32987 7.58482 8.07735 8.65501C6.82482 9.72519 6.64848 11.5145 7.6321 12.7802C8.26211 13.5909 9.87558 15.0942 10.9542 16.0704C11.3127 16.3947 11.4919 16.5569 11.7066 16.622C11.8911 16.6779 12.102 16.6779 12.2866 16.622C12.5012 16.5569 12.6805 16.3947 13.0389 16.0704C14.1176 15.0942 15.731 13.5909 16.3611 12.7802C17.3447 11.5145 17.1899 9.71393 15.9158 8.65501C14.6417 7.59608 12.9963 7.8992 11.9966 9.06791Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HeartOctagonIcon.displayName = "HeartOctagonIcon";
