import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMjAuMDg3Mkg4LjYxMDI5QzguOTUwNjMgMjAuMDg3MiA5LjI4ODg4IDIwLjEyNzcgOS42MTg4MSAyMC4yMDg3TDEyLjM3NjkgMjAuODc4OUMxMi45NzUzIDIxLjAyNDcgMTMuNTk4OCAyMS4wMzg5IDE0LjIwMzUgMjAuOTIxNEwxNy4yNTMgMjAuMzI4MUMxOC4wNTg1IDIwLjE3MTIgMTguNzk5NiAxOS43ODU1IDE5LjM4MDMgMTkuMjIwNUwyMS41Mzc5IDE3LjEyMTdDMjIuMTU0IDE2LjUyMzQgMjIuMTU0IDE1LjU1MjQgMjEuNTM3OSAxNC45NTMxQzIwLjk4MzIgMTQuNDEzNSAyMC4xMDQ3IDE0LjM1MjcgMTkuNDc3MSAxNC44MTAzTDE2Ljk2MjYgMTYuNjQ0OUMxNi42MDI1IDE2LjkwODEgMTYuMTY0MyAxNy4wNDk4IDE1LjcxMzcgMTcuMDQ5OEgxMy4yODU1TDE0LjgzMTEgMTcuMDQ5OEMxNS43MDIyIDE3LjA0OTggMTYuNDA3OSAxNi4zNjMzIDE2LjQwNzkgMTUuNTE1OVYxNS4yMDkyQzE2LjQwNzkgMTQuNTA1NSAxNS45MTU2IDEzLjg5MiAxNS4yMTQxIDEzLjcyMTlMMTIuODI4NiAxMy4xNDE4QzEyLjQ0MDQgMTMuMDQ3NiAxMi4wNDI4IDEzIDExLjY0MzEgMTNDMTAuNjc4MyAxMyA4LjkzMTg5IDEzLjc5ODggOC45MzE4OSAxMy43OTg4TDYgMTUuMDI0OU0yIDE0LjZMMiAyMC40QzIgMjAuOTYwMSAyIDIxLjI0MDEgMi4xMDg5OSAyMS40NTRDMi4yMDQ4NyAyMS42NDIyIDIuMzU3ODUgMjEuNzk1MSAyLjU0NjAxIDIxLjg5MUMyLjc1OTkyIDIyIDMuMDM5OTUgMjIgMy42IDIySDQuNEM0Ljk2MDA1IDIyIDUuMjQwMDggMjIgNS40NTM5OSAyMS44OTFDNS42NDIxNSAyMS43OTUyIDUuNzk1MTMgMjEuNjQyMiA1Ljg5MTAxIDIxLjQ1NEM2IDIxLjI0MDEgNiAyMC45NjAxIDYgMjAuNFYxNC42QzYgMTQuMDQgNiAxMy43NTk5IDUuODkxMDEgMTMuNTQ2QzUuNzk1MTMgMTMuMzU3OSA1LjY0MjE1IDEzLjIwNDkgNS40NTM5OSAxMy4xMDlDNS4yNDAwOCAxMyA0Ljk2MDA1IDEzIDQuNCAxM0gzLjZDMy4wMzk5NSAxMyAyLjc1OTkyIDEzIDIuNTQ2MDEgMTMuMTA5QzIuMzU3ODUgMTMuMjA0OSAyLjIwNDg3IDEzLjM1NzkgMi4xMDg5OSAxMy41NDZDMiAxMy43NTk5IDIgMTQuMDQgMiAxNC42Wk0xNy4xOTE0IDMuNTkyMjdDMTYuNTk0NiAyLjM0MzQxIDE1LjIxODYgMS42ODE4IDEzLjg4MDQgMi4zMjAzOUMxMi41NDIzIDIuOTU4OTggMTEuOTcyMiA0LjQ3MzQgMTIuNTMyNSA1LjgwMjg0QzEyLjg3ODcgNi42MjQ0OCAxMy44NzA3IDguMjIwMDIgMTQuNTc4MSA5LjMxOTA1QzE0LjgzOTQgOS43MjUxMyAxNC45NzAxIDkuOTI4MTcgMTUuMTYxIDEwLjA0NjlDMTUuMzI0NyAxMC4xNDg4IDE1LjUyOTcgMTAuMjAzNyAxNS43MjI0IDEwLjE5NzRDMTUuOTQ3MSAxMC4xODk5IDE2LjE2MTggMTAuMDc5NCAxNi41OTExIDkuODU4NDVDMTcuNzUzMiA5LjI2MDMzIDE5LjQxMDEgOC4zNzQ1NyAyMC4xMjA4IDcuODM2MTRDMjEuMjcwNyA2Ljk2NDk0IDIxLjU1NTYgNS4zNjM1OSAyMC42OTQ3IDQuMTQ2MjZDMTkuODMzNyAyLjkyODkyIDE4LjMzMjcgMi44MDkxNCAxNy4xOTE0IDMuNTkyMjdaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const HeartHandIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2087L12.3769 20.8789C12.9753 21.0247 13.5988 21.0389 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7855 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4135 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2092C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1418C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7952 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.04 6 13.7599 5.89101 13.546C5.79513 13.3579 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13H3.6C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3579 2.10899 13.546C2 13.7599 2 14.04 2 14.6ZM17.1914 3.59227C16.5946 2.34341 15.2186 1.6818 13.8804 2.32039C12.5423 2.95898 11.9722 4.4734 12.5325 5.80284C12.8787 6.62448 13.8707 8.22002 14.5781 9.31905C14.8394 9.72513 14.9701 9.92817 15.161 10.0469C15.3247 10.1488 15.5297 10.2037 15.7224 10.1974C15.9471 10.1899 16.1618 10.0794 16.5911 9.85845C17.7532 9.26033 19.4101 8.37457 20.1208 7.83614C21.2707 6.96494 21.5556 5.36359 20.6947 4.14626C19.8337 2.92892 18.3327 2.80914 17.1914 3.59227Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

HeartHandIcon.displayName = 'HeartHandIcon';
