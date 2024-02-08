import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDdMMTEuODg0NSA0Ljc2ODkyQzExLjU2MzQgNC4xMjY4IDExLjQwMjkgMy44MDU3MyAxMS4xNjM0IDMuNTcxMTZDMTAuOTUxNiAzLjM2MzczIDEwLjY5NjMgMy4yMDU5NyAxMC40MTYxIDMuMTA5MzFDMTAuMDk5MiAzIDkuNzQwMjEgMyA5LjAyMjI5IDNINS4yQzQuMDc5OSAzIDMuNTE5ODQgMyAzLjA5MjAyIDMuMjE3OTlDMi43MTU2OSAzLjQwOTczIDIuNDA5NzMgMy43MTU2OSAyLjIxNzk5IDQuMDkyMDJDMiA0LjUxOTg0IDIgNS4wNzk5IDIgNi4yVjdNMiA3SDE3LjJDMTguODgwMiA3IDE5LjcyMDIgNyAyMC4zNjIgNy4zMjY5OEMyMC45MjY1IDcuNjE0NiAyMS4zODU0IDguMDczNTQgMjEuNjczIDguNjM4MDNDMjIgOS4yNzk3NiAyMiAxMC4xMTk4IDIyIDExLjhWMTYuMkMyMiAxNy44ODAyIDIyIDE4LjcyMDIgMjEuNjczIDE5LjM2MkMyMS4zODU0IDE5LjkyNjUgMjAuOTI2NSAyMC4zODU0IDIwLjM2MiAyMC42NzNDMTkuNzIwMiAyMSAxOC44ODAyIDIxIDE3LjIgMjFINi44QzUuMTE5ODQgMjEgNC4yNzk3NiAyMSAzLjYzODAzIDIwLjY3M0MzLjA3MzU0IDIwLjM4NTQgMi42MTQ2IDE5LjkyNjUgMi4zMjY5OCAxOS4zNjJDMiAxOC43MjAyIDIgMTcuODgwMiAyIDE2LjJWN1pNOSAxNEwxMiAxN00xMiAxN0wxNSAxNE0xMiAxN1YxMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const FolderDownloadIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM9 14L12 17M12 17L15 14M12 17V11"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

FolderDownloadIcon.displayName = 'FolderDownloadIcon';
