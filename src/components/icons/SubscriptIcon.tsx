import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgNUwxMyAxNU0xMyA1TDMgMTVNMjEgMTkuMDAwMUgxN0MxNyAxNy41MDAxIDE3LjQ0IDE3LjAwMDEgMTguNSAxNi41MDAxQzE5LjU2IDE2LjAwMDEgMjEgMTUuMzMwMSAyMSAxNC4wMDAxQzIxIDEzLjUzMDEgMjAuODMgMTMuMDcwMSAyMC41MiAxMi43MTAxQzIwLjE5OTkgMTIuMzQ3NiAxOS43NjQ5IDEyLjEwNjEgMTkuMjg3OSAxMi4wMjZDMTguODExIDExLjk0NTkgMTguMzIxIDEyLjAzMjEgMTcuOSAxMi4yNzAxQzE3LjQ4IDEyLjUxMDEgMTcuMTYgMTIuODkwMSAxNyAxMy4zNDAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const SubscriptIcon = React.forwardRef<
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
        d="M3 5L13 15M13 5L3 15M21 19.0001H17C17 17.5001 17.44 17.0001 18.5 16.5001C19.56 16.0001 21 15.3301 21 14.0001C21 13.5301 20.83 13.0701 20.52 12.7101C20.1999 12.3476 19.7649 12.1061 19.2879 12.026C18.811 11.9459 18.321 12.0321 17.9 12.2701C17.48 12.5101 17.16 12.8901 17 13.3401"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SubscriptIcon.displayName = "SubscriptIcon";
