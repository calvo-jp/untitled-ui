import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljk5OTUgMTNMMTAuOTk5NSA2LjAwMDA0TTIwLjk5OTUgMjFINy45OTk1NU0xMC45MzY4IDIwLjA2MjhMMTkuNjA1NCAxMS4zOTQxQzIwLjc5MzUgMTAuMjA2MSAyMS4zODc1IDkuNjEyMDcgMjEuNjEwMSA4LjkyNzA5QzIxLjgwNTggOC4zMjQ1NiAyMS44MDU4IDcuNjc1NTEgMjEuNjEwMSA3LjA3Mjk4QzIxLjM4NzUgNi4zODggMjAuNzkzNSA1Ljc5Mzk3IDE5LjYwNTQgNC42MDU5MkwxOS4zOTM3IDQuMzk0MTVDMTguMjA1NiAzLjIwNjEgMTcuNjExNiAyLjYxMjA3IDE2LjkyNjYgMi4zODk1MUMxNi4zMjQxIDIuMTkzNzMgMTUuNjc1IDIuMTkzNzMgMTUuMDcyNSAyLjM4OTUxQzE0LjM4NzUgMi42MTIwNyAxMy43OTM1IDMuMjA2MSAxMi42MDU0IDQuMzk0MTVMNC4zOTM2NiAxMi42MDU5QzMuMjA1NjEgMTMuNzk0IDIuNjExNTggMTQuMzg4IDIuMzg5MDIgMTUuMDczQzIuMTkzMjQgMTUuNjc1NSAyLjE5MzI0IDE2LjMyNDYgMi4zODkwMiAxNi45MjcxQzIuNjExNTggMTcuNjEyMSAzLjIwNTYxIDE4LjIwNjEgNC4zOTM2NiAxOS4zOTQxTDUuMDYyMjkgMjAuMDYyOEM1LjQwODE5IDIwLjQwODcgNS41ODExNCAyMC41ODE2IDUuNzgyOTggMjAuNzA1M0M1Ljk2MTkyIDIwLjgxNSA2LjE1NzAxIDIwLjg5NTggNi4zNjEwOCAyMC45NDQ4QzYuNTkxMjYgMjEgNi44MzU4NSAyMSA3LjMyNTAzIDIxSDguNjc0MDZDOS4xNjMyNCAyMSA5LjQwNzg0IDIxIDkuNjM4MDEgMjAuOTQ0OEM5Ljg0MjA4IDIwLjg5NTggMTAuMDM3MiAyMC44MTUgMTAuMjE2MSAyMC43MDUzQzEwLjQxOCAyMC41ODE2IDEwLjU5MDkgMjAuNDA4NyAxMC45MzY4IDIwLjA2MjhaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const EraserIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M17.9995 13L10.9995 6.00004M20.9995 21H7.99955M10.9368 20.0628L19.6054 11.3941C20.7935 10.2061 21.3875 9.61207 21.6101 8.92709C21.8058 8.32456 21.8058 7.67551 21.6101 7.07298C21.3875 6.388 20.7935 5.79397 19.6054 4.60592L19.3937 4.39415C18.2056 3.2061 17.6116 2.61207 16.9266 2.38951C16.3241 2.19373 15.675 2.19373 15.0725 2.38951C14.3875 2.61207 13.7935 3.2061 12.6054 4.39415L4.39366 12.6059C3.20561 13.794 2.61158 14.388 2.38902 15.073C2.19324 15.6755 2.19324 16.3246 2.38902 16.9271C2.61158 17.6121 3.20561 18.2061 4.39366 19.3941L5.06229 20.0628C5.40819 20.4087 5.58114 20.5816 5.78298 20.7053C5.96192 20.815 6.15701 20.8958 6.36108 20.9448C6.59126 21 6.83585 21 7.32503 21H8.67406C9.16324 21 9.40784 21 9.63801 20.9448C9.84208 20.8958 10.0372 20.815 10.2161 20.7053C10.418 20.5816 10.5909 20.4087 10.9368 20.0628Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

EraserIcon.displayName = 'EraserIcon';
