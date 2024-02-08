import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTAuNUwxMSAxMi41TDE1LjUgOE0xOSAyMVY3LjhDMTkgNi4xMTk4NCAxOSA1LjI3OTc2IDE4LjY3MyA0LjYzODAzQzE4LjM4NTQgNC4wNzM1NCAxNy45MjY1IDMuNjE0NiAxNy4zNjIgMy4zMjY5OEMxNi43MjAyIDMgMTUuODgwMiAzIDE0LjIgM0g5LjhDOC4xMTk4NCAzIDcuMjc5NzYgMyA2LjYzODAzIDMuMzI2OThDNi4wNzM1NCAzLjYxNDYgNS42MTQ2IDQuMDczNTQgNS4zMjY5OCA0LjYzODAzQzUgNS4yNzk3NiA1IDYuMTE5ODQgNSA3LjhWMjFMMTIgMTdMMTkgMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const BookmarkCheckIcon = React.forwardRef<
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
        d="M9 10.5L11 12.5L15.5 8M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BookmarkCheckIcon.displayName = "BookmarkCheckIcon";
