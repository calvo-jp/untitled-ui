import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgOS4wMDAwMlYxN005LjUgOS4wMDAwMlYxN00xNC41IDkuMDAwMDJWMTdNMTkgOS4wMDAwMlYxN00zIDE4LjZMMyAxOS40QzMgMTkuOTYwMSAzIDIwLjI0MDEgMy4xMDg5OSAyMC40NTRDMy4yMDQ4NyAyMC42NDIyIDMuMzU3ODUgMjAuNzk1MiAzLjU0NjAxIDIwLjg5MUMzLjc1OTkyIDIxIDQuMDM5OTUgMjEgNC42IDIxSDE5LjRDMTkuOTYwMSAyMSAyMC4yNDAxIDIxIDIwLjQ1NCAyMC44OTFDMjAuNjQyMiAyMC43OTUyIDIwLjc5NTEgMjAuNjQyMiAyMC44OTEgMjAuNDU0QzIxIDIwLjI0MDEgMjEgMTkuOTYwMSAyMSAxOS40VjE4LjZDMjEgMTguMDQgMjEgMTcuNzU5OSAyMC44OTEgMTcuNTQ2QzIwLjc5NTEgMTcuMzU3OSAyMC42NDIyIDE3LjIwNDkgMjAuNDU0IDE3LjEwOUMyMC4yNDAxIDE3IDE5Ljk2MDEgMTcgMTkuNCAxN0g0LjZDNC4wMzk5NSAxNyAzLjc1OTkyIDE3IDMuNTQ2MDEgMTcuMTA5QzMuMzU3ODUgMTcuMjA0OSAzLjIwNDg3IDE3LjM1NzkgMy4xMDg5OSAxNy41NDZDMyAxNy43NTk5IDMgMTguMDQgMyAxOC42Wk0xMS42NTI5IDMuMDc3MTVMNC4yNTI5MSA0LjcyMTZDMy44MDU4NSA0LjgyMDk0IDMuNTgyMzIgNC44NzA2MiAzLjQxNTQ2IDQuOTkwODJDMy4yNjgyOSA1LjA5Njg1IDMuMTUyNzMgNS4yNDA5MiAzLjA4MTE1IDUuNDA3NTlDMyA1LjU5NjU0IDMgNS44MjU1MyAzIDYuMjgzNDlMMyA3LjQwMDAyQzMgNy45NjAwNyAzIDguMjQwMSAzLjEwODk5IDguNDU0MDFDMy4yMDQ4NyA4LjY0MjE3IDMuMzU3ODUgOC43OTUxNSAzLjU0NjAxIDguODkxMDNDMy43NTk5MiA5LjAwMDAyIDQuMDM5OTUgOS4wMDAwMiA0LjYgOS4wMDAwMkgxOS40QzE5Ljk2MDEgOS4wMDAwMiAyMC4yNDAxIDkuMDAwMDIgMjAuNDU0IDguODkxMDNDMjAuNjQyMiA4Ljc5NTE1IDIwLjc5NTEgOC42NDIxNyAyMC44OTEgOC40NTQwMUMyMSA4LjI0MDEgMjEgNy45NjAwNyAyMSA3LjQwMDAyVjYuMjgzNUMyMSA1LjgyNTUzIDIxIDUuNTk2NTUgMjAuOTE4OCA1LjQwNzU5QzIwLjg0NzMgNS4yNDA5MiAyMC43MzE3IDUuMDk2ODUgMjAuNTg0NSA0Ljk5MDgyQzIwLjQxNzcgNC44NzA2MiAyMC4xOTQyIDQuODIwOTQgMTkuNzQ3MSA0LjcyMTZMMTIuMzQ3MSAzLjA3NzE1QzEyLjIxNzYgMy4wNDgzNyAxMi4xNTI4IDMuMDMzOTggMTIuMDg3NCAzLjAyODI0QzEyLjAyOTIgMy4wMjMxNCAxMS45NzA4IDMuMDIzMTQgMTEuOTEyNiAzLjAyODI0QzExLjg0NzIgMy4wMzM5OCAxMS43ODI0IDMuMDQ4MzcgMTEuNjUyOSAzLjA3NzE1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const BankIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BankIcon.displayName = 'BankIcon';
