import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgOUg5LjAxTTE1IDE1SDE1LjAxTTE2IDhMOCAxNk03LjMzMzc3IDMuODE4N0M4LjEzNzYgMy43NTQ1NSA4LjkwMDcxIDMuNDM4NDYgOS41MTQ0NyAyLjkxNTQyQzEwLjk0NjcgMS42OTQ4NiAxMy4wNTMzIDEuNjk0ODYgMTQuNDg1NSAyLjkxNTQyQzE1LjA5OTMgMy40Mzg0NiAxNS44NjI0IDMuNzU0NTUgMTYuNjY2MiAzLjgxODdDMTguNTQyMSAzLjk2ODM5IDIwLjAzMTYgNS40NTc5NCAyMC4xODEzIDcuMzMzNzdDMjAuMjQ1NSA4LjEzNzYgMjAuNTYxNSA4LjkwMDcxIDIxLjA4NDYgOS41MTQ0N0MyMi4zMDUxIDEwLjk0NjcgMjIuMzA1MSAxMy4wNTMzIDIxLjA4NDYgMTQuNDg1NUMyMC41NjE1IDE1LjA5OTMgMjAuMjQ1NSAxNS44NjI0IDIwLjE4MTMgMTYuNjY2MkMyMC4wMzE2IDE4LjU0MjEgMTguNTQyMSAyMC4wMzE2IDE2LjY2NjIgMjAuMTgxM0MxNS44NjI0IDIwLjI0NTUgMTUuMDk5MyAyMC41NjE1IDE0LjQ4NTUgMjEuMDg0NkMxMy4wNTMzIDIyLjMwNTEgMTAuOTQ2NyAyMi4zMDUxIDkuNTE0NDcgMjEuMDg0NkM4LjkwMDcxIDIwLjU2MTUgOC4xMzc2IDIwLjI0NTUgNy4zMzM3NyAyMC4xODEzQzUuNDU3OTQgMjAuMDMxNiAzLjk2ODM5IDE4LjU0MjEgMy44MTg3IDE2LjY2NjJDMy43NTQ1NSAxNS44NjI0IDMuNDM4NDYgMTUuMDk5MyAyLjkxNTQyIDE0LjQ4NTVDMS42OTQ4NiAxMy4wNTMzIDEuNjk0ODYgMTAuOTQ2NyAyLjkxNTQyIDkuNTE0NDdDMy40Mzg0NiA4LjkwMDcxIDMuNzU0NTUgOC4xMzc2IDMuODE4NyA3LjMzMzc3QzMuOTY4MzkgNS40NTc5NCA1LjQ1Nzk0IDMuOTY4MzkgNy4zMzM3NyAzLjgxODdaTTkuNSA5QzkuNSA5LjI3NjE0IDkuMjc2MTQgOS41IDkgOS41QzguNzIzODYgOS41IDguNSA5LjI3NjE0IDguNSA5QzguNSA4LjcyMzg2IDguNzIzODYgOC41IDkgOC41QzkuMjc2MTQgOC41IDkuNSA4LjcyMzg2IDkuNSA5Wk0xNS41IDE1QzE1LjUgMTUuMjc2MSAxNS4yNzYxIDE1LjUgMTUgMTUuNUMxNC43MjM5IDE1LjUgMTQuNSAxNS4yNzYxIDE0LjUgMTVDMTQuNSAxNC43MjM5IDE0LjcyMzkgMTQuNSAxNSAxNC41QzE1LjI3NjEgMTQuNSAxNS41IDE0LjcyMzkgMTUuNSAxNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const Sale02Icon = React.forwardRef<
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
        d="M9 9H9.01M15 15H15.01M16 8L8 16M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM15.5 15C15.5 15.2761 15.2761 15.5 15 15.5C14.7239 15.5 14.5 15.2761 14.5 15C14.5 14.7239 14.7239 14.5 15 14.5C15.2761 14.5 15.5 14.7239 15.5 15Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Sale02Icon.displayName = "Sale02Icon";
