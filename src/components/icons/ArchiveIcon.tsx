import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNy45OTY2QzMuODM1OTkgNy45OTIzNiAzLjcxNjkgNy45ODI4NyAzLjYwOTgyIDcuOTYxNTdDMi44MTY0NCA3LjgwMzc2IDIuMTk2MjQgNy4xODM1NiAyLjAzODQzIDYuMzkwMThDMiA2LjE5Njk4IDIgNS45NjQ2NiAyIDUuNUMyIDUuMDM1MzQgMiA0LjgwMzAyIDIuMDM4NDMgNC42MDk4MkMyLjE5NjI0IDMuODE2NDQgMi44MTY0NCAzLjE5NjI0IDMuNjA5ODIgMy4wMzg0M0MzLjgwMzAyIDMgNC4wMzUzNCAzIDQuNSAzSDE5LjVDMTkuOTY0NyAzIDIwLjE5NyAzIDIwLjM5MDIgMy4wMzg0M0MyMS4xODM2IDMuMTk2MjQgMjEuODAzOCAzLjgxNjQ0IDIxLjk2MTYgNC42MDk4MkMyMiA0LjgwMzAyIDIyIDUuMDM1MzQgMjIgNS41QzIyIDUuOTY0NjYgMjIgNi4xOTY5OCAyMS45NjE2IDYuMzkwMThDMjEuODAzOCA3LjE4MzU2IDIxLjE4MzYgNy44MDM3NiAyMC4zOTAyIDcuOTYxNTdDMjAuMjgzMSA3Ljk4Mjg3IDIwLjE2NCA3Ljk5MjM2IDIwIDcuOTk2Nk0xMCAxM0gxNE00IDhIMjBWMTYuMkMyMCAxNy44ODAyIDIwIDE4LjcyMDIgMTkuNjczIDE5LjM2MkMxOS4zODU0IDE5LjkyNjUgMTguOTI2NSAyMC4zODU0IDE4LjM2MiAyMC42NzNDMTcuNzIwMiAyMSAxNi44ODAyIDIxIDE1LjIgMjFIOC44QzcuMTE5ODQgMjEgNi4yNzk3NiAyMSA1LjYzODAzIDIwLjY3M0M1LjA3MzU0IDIwLjM4NTQgNC42MTQ2IDE5LjkyNjUgNC4zMjY5OCAxOS4zNjJDNCAxOC43MjAyIDQgMTcuODgwMiA0IDE2LjJWOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const ArchiveIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArchiveIcon.displayName = 'ArchiveIcon';
