import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDExLjVWMTQuNkMyMiAxNi44NDAyIDIyIDE3Ljk2MDMgMjEuNTY0IDE4LjgxNkMyMS4xODA1IDE5LjU2ODYgMjAuNTY4NiAyMC4xODA1IDE5LjgxNiAyMC41NjRDMTguOTYwMyAyMSAxNy44NDAyIDIxIDE1LjYgMjFIOC40QzYuMTU5NzkgMjEgNS4wMzk2OSAyMSA0LjE4NDA0IDIwLjU2NEMzLjQzMTM5IDIwLjE4MDUgMi44MTk0NyAxOS41Njg2IDIuNDM1OTcgMTguODE2QzIgMTcuOTYwMyAyIDE2Ljg0MDIgMiAxNC42VjkuNEMyIDcuMTU5NzkgMiA2LjAzOTY5IDIuNDM1OTcgNS4xODQwNEMyLjgxOTQ3IDQuNDMxMzkgMy40MzEzOSAzLjgxOTQ3IDQuMTg0MDQgMy40MzU5N0M1LjAzOTY5IDMgNi4xNTk3OSAzIDguNCAzSDEyLjVNMTkgOFYyTTE2IDVIMjJNMTYgMTJDMTYgMTQuMjA5MSAxNC4yMDkxIDE2IDEyIDE2QzkuNzkwODYgMTYgOCAxNC4yMDkxIDggMTJDOCA5Ljc5MDg2IDkuNzkwODYgOCAxMiA4QzE0LjIwOTEgOCAxNiA5Ljc5MDg2IDE2IDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const CameraPlusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M22 11.5V14.6C22 16.8402 22 17.9603 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C18.9603 21 17.8402 21 15.6 21H8.4C6.15979 21 5.03969 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4C2 7.15979 2 6.03969 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03969 3 6.15979 3 8.4 3H12.5M19 8V2M16 5H22M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CameraPlusIcon.displayName = 'CameraPlusIcon';
