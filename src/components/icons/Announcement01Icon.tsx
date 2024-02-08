import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDcuOTk5OTJWMTEuOTk5OU0xMC4yNSA1LjQ5OTkxSDYuOEM1LjExOTg0IDUuNDk5OTEgNC4yNzk3NiA1LjQ5OTkxIDMuNjM4MDMgNS44MjY4OUMzLjA3MzU0IDYuMTE0NTEgMi42MTQ2IDYuNTczNDUgMi4zMjY5OCA3LjEzNzk0QzIgNy43Nzk2OCAyIDguNjE5NzYgMiAxMC4yOTk5TDIgMTEuNDk5OUMyIDEyLjQzMTggMiAxMi44OTc3IDIuMTUyMjQgMTMuMjY1M0MyLjM1NTIzIDEzLjc1NTMgMi43NDQ1OCAxNC4xNDQ3IDMuMjM0NjMgMTQuMzQ3N0MzLjYwMjE4IDE0LjQ5OTkgNC4wNjgxMiAxNC40OTk5IDUgMTQuNDk5OVYxOC43NDk5QzUgMTguOTgyMSA1IDE5LjA5ODIgNS4wMDk2MyAxOS4xOTU5QzUuMTAzMTYgMjAuMTQ1NSA1Ljg1NDQxIDIwLjg5NjggNi44MDM5NyAyMC45OTAzQzYuOTAxNzUgMjAuOTk5OSA3LjAxNzgzIDIwLjk5OTkgNy4yNSAyMC45OTk5QzcuNDgyMTcgMjAuOTk5OSA3LjU5ODI2IDIwLjk5OTkgNy42OTYwNCAyMC45OTAzQzguNjQ1NTkgMjAuODk2OCA5LjM5Njg1IDIwLjE0NTUgOS40OTAzNyAxOS4xOTU5QzkuNSAxOS4wOTgyIDkuNSAxOC45ODIxIDkuNSAxOC43NDk5VjE0LjQ5OTlIMTAuMjVDMTIuMDE2NCAxNC40OTk5IDE0LjE3NzIgMTUuNDQ2OCAxNS44NDQzIDE2LjM1NTZDMTYuODE2OCAxNi44ODU3IDE3LjMwMzEgMTcuMTUwOCAxNy42MjE2IDE3LjExMThDMTcuOTE2OSAxNy4wNzU2IDE4LjE0MDIgMTYuOTQzIDE4LjMxMzMgMTYuNzAxQzE4LjUgMTYuNDQwMSAxOC41IDE1LjkxNzkgMTguNSAxNC44NzM2VjUuMTI2MkMxOC41IDQuMDgxOTEgMTguNSAzLjU1OTc2IDE4LjMxMzMgMy4yOTg4QzE4LjE0MDIgMy4wNTY4MSAxNy45MTY5IDIuOTI0MjEgMTcuNjIxNiAyLjg4ODA0QzE3LjMwMzEgMi44NDkwMyAxNi44MTY4IDMuMTE0MTEgMTUuODQ0MyAzLjY0NDI3QzE0LjE3NzIgNC41NTMwMiAxMi4wMTY0IDUuNDk5OTEgMTAuMjUgNS40OTk5MVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const Announcement01Icon = React.forwardRef<
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
        d="M22 7.99992V11.9999M10.25 5.49991H6.8C5.11984 5.49991 4.27976 5.49991 3.63803 5.82689C3.07354 6.11451 2.6146 6.57345 2.32698 7.13794C2 7.77968 2 8.61976 2 10.2999L2 11.4999C2 12.4318 2 12.8977 2.15224 13.2653C2.35523 13.7553 2.74458 14.1447 3.23463 14.3477C3.60218 14.4999 4.06812 14.4999 5 14.4999V18.7499C5 18.9821 5 19.0982 5.00963 19.1959C5.10316 20.1455 5.85441 20.8968 6.80397 20.9903C6.90175 20.9999 7.01783 20.9999 7.25 20.9999C7.48217 20.9999 7.59826 20.9999 7.69604 20.9903C8.64559 20.8968 9.39685 20.1455 9.49037 19.1959C9.5 19.0982 9.5 18.9821 9.5 18.7499V14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Announcement01Icon.displayName = "Announcement01Icon";
