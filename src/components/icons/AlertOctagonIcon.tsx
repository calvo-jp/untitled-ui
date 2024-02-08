import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDhWMTJNMTIgMTZIMTIuMDFNMiA4LjUyMjc0VjE1LjQ3NzNDMiAxNS43MjE4IDIgMTUuODQ0MSAyLjAyNzYzIDE1Ljk1OTJDMi4wNTIxMyAxNi4wNjEzIDIuMDkyNTMgMTYuMTU4OCAyLjE0NzM2IDE2LjI0ODNDMi4yMDkyIDE2LjM0OTIgMi4yOTU2OCAxNi40MzU3IDIuNDY4NjMgMTYuNjA4Nkw3LjM5MTM3IDIxLjUzMTRDNy41NjQzMiAyMS43MDQzIDcuNjUwOCAyMS43OTA4IDcuNzUxNzIgMjEuODUyNkM3Ljg0MTE5IDIxLjkwNzUgNy45Mzg3MyAyMS45NDc5IDguMDQwNzcgMjEuOTcyNEM4LjE1NTg2IDIyIDguMjc4MTUgMjIgOC41MjI3NCAyMkgxNS40NzczQzE1LjcyMTggMjIgMTUuODQ0MSAyMiAxNS45NTkyIDIxLjk3MjRDMTYuMDYxMyAyMS45NDc5IDE2LjE1ODggMjEuOTA3NSAxNi4yNDgzIDIxLjg1MjZDMTYuMzQ5MiAyMS43OTA4IDE2LjQzNTcgMjEuNzA0MyAxNi42MDg2IDIxLjUzMTRMMjEuNTMxNCAxNi42MDg2QzIxLjcwNDMgMTYuNDM1NyAyMS43OTA4IDE2LjM0OTIgMjEuODUyNiAxNi4yNDgzQzIxLjkwNzUgMTYuMTU4OCAyMS45NDc5IDE2LjA2MTMgMjEuOTcyNCAxNS45NTkyQzIyIDE1Ljg0NDEgMjIgMTUuNzIxOCAyMiAxNS40NzczVjguNTIyNzRDMjIgOC4yNzgxNSAyMiA4LjE1NTg2IDIxLjk3MjQgOC4wNDA3N0MyMS45NDc5IDcuOTM4NzMgMjEuOTA3NSA3Ljg0MTE5IDIxLjg1MjYgNy43NTE3MkMyMS43OTA4IDcuNjUwOCAyMS43MDQzIDcuNTY0MzIgMjEuNTMxNCA3LjM5MTM3TDE2LjYwODYgMi40Njg2M0MxNi40MzU3IDIuMjk1NjggMTYuMzQ5MiAyLjIwOTIgMTYuMjQ4MyAyLjE0NzM2QzE2LjE1ODggMi4wOTI1MyAxNi4wNjEzIDIuMDUyMTMgMTUuOTU5MiAyLjAyNzYzQzE1Ljg0NDEgMiAxNS43MjE4IDIgMTUuNDc3MyAySDguNTIyNzRDOC4yNzgxNSAyIDguMTU1ODYgMiA4LjA0MDc3IDIuMDI3NjNDNy45Mzg3MyAyLjA1MjEzIDcuODQxMTkgMi4wOTI1MyA3Ljc1MTcyIDIuMTQ3MzZDNy42NTA4IDIuMjA5MiA3LjU2NDMyIDIuMjk1NjggNy4zOTEzNyAyLjQ2ODYzTDIuNDY4NjMgNy4zOTEzN0MyLjI5NTY4IDcuNTY0MzIgMi4yMDkyIDcuNjUwOCAyLjE0NzM2IDcuNzUxNzJDMi4wOTI1MyA3Ljg0MTE5IDIuMDUyMTMgNy45Mzg3MyAyLjAyNzYzIDguMDQwNzdDMiA4LjE1NTg2IDIgOC4yNzgxNSAyIDguNTIyNzRaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const AlertOctagonIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M12 8V12M12 16H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AlertOctagonIcon.displayName = 'AlertOctagonIcon';
